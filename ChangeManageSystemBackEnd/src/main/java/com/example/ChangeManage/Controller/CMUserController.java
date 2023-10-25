package com.example.ChangeManage.Controller;


import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Service.CMUserService;
import com.example.ChangeManage.domain.CMUser;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
public class CMUserController {

    private final CMUserService cmUserService;

    @CrossOrigin
    @PostMapping("/users")
    public ResponseEntity<?> save(@RequestBody CMUser cmuser){

        System.out.println(cmuser.getFirstName());
        System.out.println(cmuser.getLastName());

        return new ResponseEntity<>(cmUserService.create(cmuser), HttpStatus.CREATED);

    }

    @CrossOrigin
    @GetMapping("/users?userId={userId}")
    public ResponseEntity<CMUser> getUser(@PathVariable String userId) {
        System.out.println("Get Test");
        Optional<CMUser> user = cmUserService.getCMUserByUserId(userId);
        System.out.println("Get Request Fetched; userID: " + user.get().getUserId());
        if (!user.isPresent()) {
            throw new UserNotFoundException(String.format("UserId[%s] not found", userId));
        } else {
            return new ResponseEntity(user, HttpStatus.OK);
        }
    }

}
