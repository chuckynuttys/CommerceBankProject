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

    @Autowired
    ChangeRequestRepository changeRequestRepository;
    // Creating ChangeRequests
    @PostMapping("/changerequest")
    public ResponseEntity<?> save(@RequestBody ChangeRequest changeRequest, String username) {


        return new ResponseEntity<>(changeRequestService.create(changeRequest, username), HttpStatus.CREATED);
    }

    // Getting all ChangeRequests on the archived Status
    @GetMapping("/changerequests")
    public ResponseEntity<?> getChangeRequests(@RequestParam(required = true) boolean archivedStatus) {
        System.out.println("Getting Change Requests");
        Optional<List<ChangeRequest>> changeRequestList = changeRequestService.getChangeRequests(archivedStatus);
        if (changeRequestList.isPresent()) {
            System.out.println("Change requests present: ");
            System.out.println("Change request List size: " + changeRequestList.get().size());
            for (int i = 0; i < changeRequestList.get().size(); i++) {
                System.out.println("changeID:" + changeRequestList.get().get(i).getChangeId());
            }
        }

        return new ResponseEntity<>(changeRequestService.getChangeRequests(archivedStatus), HttpStatus.OK);
    }


    /*
    * // Getting all Change Requests
    * @GetMapping("/changerequests")
    * public ResponseEntity<?> getAllChangeRequests(@RequestParam(required = true) String username) {
    *   return new ResponseEntity<>(changeRequest.Service.getChangeRequests(username), HttpStatus.OK);
    * }
    * */

}
