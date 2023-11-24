package com.example.ChangeManage.Controller;

import com.example.ChangeManage.Repository.ChangeRequestRepository;
import com.example.ChangeManage.Service.ChangeRequestService;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RestController
public class ChangeRequestController{
    private final ChangeRequestService changeRequestService;


    // Creating ChangeRequests
    @PostMapping("/changerequest")
    public ResponseEntity<?> save(@RequestBody ChangeRequest changeRequest,
                                  @RequestParam(required = true) String username) {

        System.out.println("Posting Request");
        return new ResponseEntity<>(changeRequestService.create(changeRequest, username), HttpStatus.CREATED);
    }

    // Getting all ChangeRequests on the archived Status
    @GetMapping("/changerequests")
    public ResponseEntity<?> getChangeRequests(@RequestParam(required = true) boolean archivedStatus,
                                               @RequestParam(required = false) Integer id,
                                               @RequestParam(required = false) String authorizationLevel) {
        System.out.println(archivedStatus);
        System.out.println(id);
        System.out.println(authorizationLevel);
        if (id == null) {
            // Archived Status Request

            Optional<List<ChangeRequest>> changeRequestList =
                    changeRequestService.getChangeRequestsByArchivedStatus(archivedStatus);
            if (changeRequestList.isPresent()) {
                System.out.println("Change Requests present: ");
                System.out.println("Change Request List Size: " + changeRequestList.get().size());
            }
            return new ResponseEntity<>(changeRequestService.getChangeRequestsByArchivedStatus(archivedStatus),
                    HttpStatus.OK);
        } else if (authorizationLevel == null) {

            Optional<ChangeRequest> changeRequest = changeRequestService.getChangeRequestById(archivedStatus, id);
            if (changeRequest.isPresent()) {
                System.out.println("Change Request present.");
            } else {
                System.out.println("Change request not present");
            }
            return new ResponseEntity<>(changeRequestService.getChangeRequestById(archivedStatus, id), HttpStatus.OK);
        } else {

            Optional<List<ChangeRequest>> changeRequestList = changeRequestService.getChangeRequestsById(archivedStatus,
                    id, authorizationLevel);
            if (changeRequestList.isPresent()) {
                System.out.println("Change requests present: ");
                System.out.println("Change request List size: " + changeRequestList.get().size());
            }
            return new ResponseEntity<>(changeRequestService.getChangeRequestsById(archivedStatus, id, authorizationLevel), HttpStatus.OK);
        }

    }

    // Updating a specific ChangeRequest through the changeId & stateLevel
    @PatchMapping("/changerequests/{id}")
    public boolean updateStateLevelOfChangeRequest(@PathVariable Integer id,
                                                 @RequestParam(required = true) String stateLevel,
                                                   @RequestParam(required = false) String implementationStatus,
                                                   @RequestParam(required = false) String implementationTime,
                                                   @RequestParam(required = false) String implementationDate,
                                                   @RequestParam(required = false) Boolean archivedStatus) {
        System.out.println("Test2");
    if (archivedStatus != null) {
        if (implementationStatus != null) {
            return (changeRequestService.updateChangeRequestImplementation(id, stateLevel, implementationStatus,
                    implementationTime, implementationDate, archivedStatus));
        } else {
            return (changeRequestService.updateChangeRequestsByStateLevelAndArchivedStatus(id, stateLevel, archivedStatus));
        }
    } else {
        return (changeRequestService.updateChangeRequestsByStateLevel(id, stateLevel));
    }
    }

    @PutMapping("/changerequests/{id}")
    public boolean updateChangeRequest (@PathVariable Integer id,
                                        @RequestParam(required = true) String username,
                                        @RequestBody ChangeRequest changeRequest) {
        System.out.println("Test1");
        return changeRequestService.updateChangeRequest(changeRequest, username);
    }

}
