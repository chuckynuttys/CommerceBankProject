package com.example.ChangeManage.Controller;

import com.example.ChangeManage.Service.ChangeRequestService;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RequiredArgsConstructor
@RestController
public class ChangeRequestController{
    private final ChangeRequestService changeRequestService;

    @PostMapping("/changerequest")
    public ResponseEntity<?> save(@RequestBody ChangeRequest changeRequest) {
        String userid = "testid";
//        System.out.println(changeRequest.getChangeId());
//        System.out.println(changeRequest.getApplicationId());
//        System.out.println(changeRequest.getDescription());
//        System.out.println(changeRequest.getReason());
//        System.out.println(changeRequest.getReasonType());
//        System.out.println(changeRequest.getChangeType());
//        System.out.println(changeRequest.getWhyDescription());
//        System.out.println(changeRequest.getWhatDescription());
//        System.out.println(changeRequest.getWhoDescription());
//        System.out.println(changeRequest.getWhenDescription());
//        System.out.println(changeRequest.getOtherNeededDepartments());
//        System.out.println(changeRequest.getRiskLevel());
//        System.out.println(changeRequest.getImplementer());
//        System.out.println(changeRequest.getImplementationStatus());
//        System.out.println(changeRequest.getStateLevel());

        return new ResponseEntity<>(changeRequestService.create(changeRequest, userid), HttpStatus.CREATED);
    }
}
