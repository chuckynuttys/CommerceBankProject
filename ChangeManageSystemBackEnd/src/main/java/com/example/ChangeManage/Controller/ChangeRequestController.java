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

@CrossOrigin(origins = {"http://localhost:3000"})
@RequiredArgsConstructor
@RestController
public class ChangeRequestController{
    private final ChangeRequestService changeRequestService;

    @Autowired
    ChangeRequestRepository changeRequestRepository;
    // Creating ChangeRequests
    @PostMapping("/changerequests")
    public ResponseEntity<?> save(@RequestBody ChangeRequest changeRequest, String userid) {


        return new ResponseEntity<>(changeRequestService.create(changeRequest, userid), HttpStatus.CREATED);
    }

    // Getting all ChangeRequests
    @GetMapping("/changerequests")
    public ResponseEntity<?> get(@RequestBody ChangeRequest changeRequest) {
        try {
            List<ChangeRequest> changeRequests = new ArrayList<ChangeRequest>();

            changeRequests = changeRequestService.get(changeRequest, changeRequests);
            if (changeRequests.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(changeRequests, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
