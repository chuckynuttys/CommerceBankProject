package com.example.ChangeManage.Service;

import com.example.ChangeManage.ChangeManageApplication;
import com.example.ChangeManage.Controller.UserNotFoundException;
import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Repository.ChangeRequestRepository;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ChangeRequestService
{
    private final CMUserRepository cmUserRepository;
    private final ChangeRequestRepository changeRequestRepository;

    @Transactional
    public ChangeRequest create(ChangeRequest changeRequest, String username) {
        CMUser user = cmUserRepository.findByUsername(username);
        if (user != null) {
            changeRequest.setUser(user);
            System.out.println("Post Request Successful, posting change Request");
            return changeRequestRepository.save(changeRequest);
        } else {
            throw new UserNotFoundException(String.format("User by username[%s] not found.", username));
        }
    }

    @Transactional
    public Optional<List<ChangeRequest>> getChangeRequests(boolean archivedStatus) {
        return changeRequestRepository.findByArchivedStatus(archivedStatus);
    }


}
