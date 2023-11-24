package com.example.ChangeManage.Service;

import com.example.ChangeManage.ChangeManageApplication;
import com.example.ChangeManage.Controller.UserNotFoundException;
import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Repository.ChangeRequestRepository;
import com.example.ChangeManage.Repository.ReasonTypeRepository;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import com.example.ChangeManage.domain.ReasonType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.swing.text.html.Option;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Service
public class ChangeRequestService
{
    private final CMUserRepository cmUserRepository;
    private final ChangeRequestRepository changeRequestRepository;
    private final ReasonTypeRepository reasonTypeRepository;



    @Transactional
    public ChangeRequest create(ChangeRequest changeRequest, String username) {
        CMUser user = cmUserRepository.findByUsername(username);
        if (user != null) {
            changeRequest.setUser(user);
            System.out.println("Post Request Successful, posting change Request");
            Optional<ReasonType> reasonType = reasonTypeRepository.findById(1);
            HashMap<String, Integer> map = new HashMap<>();

            if (reasonType.isPresent()) {
                map = reasonType.get().getMap();
                if (Objects.equals(changeRequest.getReason(), "Fix")) {
                    map.put("Fix", map.get("Fix") + 1);
                    changeRequest.setReasonNumber(map.get("Fix"));
                } else {
                    map.put("Enhancement", map.get("Enhancement") + 1);
                    changeRequest.setReasonNumber(map.get("Enhancement"));
                }
                reasonType.get().setMap(map);
                return changeRequestRepository.save(changeRequest);
            } else {
                throw new UserNotFoundException(String.format("ReasonType by id[%s] not found.", 1));
            }

        } else {
            throw new UserNotFoundException(String.format("User by username[%s] not found.", username));
        }
    }
    @Transactional
    public Optional<ChangeRequest> getChangeRequestById(boolean archivedStatus, int id) {
        System.out.println(id);
        return changeRequestRepository.findChangeRequestByIdWithCustomQuery(archivedStatus, id);
    }
    @Transactional
    public Optional<List<ChangeRequest>> getChangeRequestsById(boolean archivedStatus, int id, String authorizationLevel) {
        switch (authorizationLevel) {
            case "departmentUser":
                // Only show Change Requests that are Frozen not from the User and Change Requests
                // that are Open from the user
                return
                        Optional.of(Stream.of(changeRequestRepository.findChangeRequestsFromUserWithCustomQuery(
                                                archivedStatus, id),
                                        changeRequestRepository.findChangeRequestsNotFromUserWithCustomQuery(
                                                archivedStatus, id, "Frozen"))
                                .filter(Optional::isPresent)
                                .map(Optional::get)
                                .flatMap(List::stream)
                                .sorted(new IdComparator())
                                .collect(Collectors.toList()));

            case "applicationUser":
                // Only show Change Requests that are Department not from the User and Change Requests
                // that are open from the user
                return Optional.of(Stream.of(changeRequestRepository.findChangeRequestsFromUserWithCustomQuery(
                                        archivedStatus, id),
                                changeRequestRepository.findChangeRequestsNotFromUserWithCustomQuery(
                                        archivedStatus, id, "Department Approved"))
                        .filter(Optional::isPresent)
                        .map(Optional::get)
                        .flatMap(List::stream)
                        .sorted(new IdComparator())
                        .collect(Collectors.toList()));

            case "operationUser":
                // Show all change Requests except frozen ones from the User
                return Optional.of(Stream.of(changeRequestRepository.findChangeRequestsFromUserWithCustomQuery(
                                        archivedStatus, id),
                                changeRequestRepository.findAllChangeRequestsNotFromUserWithCustomQuery(
                                        archivedStatus, id))
                        .filter(Optional::isPresent)
                        .map(Optional::get)
                        .flatMap(List::stream)
                        .sorted(new IdComparator())
                        .collect(Collectors.toList()));

            default:
                // Only show Change Requests from the user that are Open
                return changeRequestRepository.findChangeRequestsFromUserWithCustomQuery(archivedStatus, id);

        }
    }
    @Transactional
    public Optional<List<ChangeRequest>> getChangeRequestsByArchivedStatus(boolean archivedStatus) {
        return changeRequestRepository.findByArchivedStatus(archivedStatus);
    }
    @Transactional
    public boolean updateChangeRequestsByStateLevelAndArchivedStatus(Integer id, String stateLevel,
                                                                     boolean archivedStatus) {
        ChangeRequest changeRequestEntity = changeRequestRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("check Id"));
        changeRequestEntity.setStateLevel(stateLevel);
        changeRequestEntity.setArchivedStatus(archivedStatus);
        changeRequestRepository.save(changeRequestEntity);
        return true;
    }
    @Transactional
    public boolean updateChangeRequestsByStateLevel(Integer id, String stateLevel) {
        ChangeRequest changeRequestEntity = changeRequestRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("check Id"));
        changeRequestEntity.setStateLevel(stateLevel);

        changeRequestRepository.save(changeRequestEntity);
        return true;
    }
    @Transactional
    public boolean updateChangeRequestImplementation(Integer id, String stateLevel, String implementationStatus,
                                                     String implementationTime, String implementationDate,
                                                     boolean archivedStatus) {
        ChangeRequest changeRequestEntity = changeRequestRepository.findById(id)
                .orElseThrow(()-> new IllegalArgumentException("Check Id"));
        changeRequestEntity.setStateLevel(stateLevel);
        changeRequestEntity.setImplementationStatus(implementationStatus);
        changeRequestEntity.setImplementationTime(implementationTime);
        changeRequestEntity.setImplementationDate(implementationDate);
        changeRequestEntity.setArchivedStatus(archivedStatus);
        changeRequestRepository.save(changeRequestEntity);
        return true;
    }

    @Transactional
    public boolean updateChangeRequest (ChangeRequest changeRequest, String username) {
        CMUser user = cmUserRepository.findByUsername(username);
        if (user != null) {
            changeRequest.setUser(user);
            changeRequestRepository.save(changeRequest);
            return true;
        } else {
            throw new UserNotFoundException(String.format("User by username[%s] not found.", username));
        }

    }


}

