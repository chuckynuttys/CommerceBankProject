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
    private final CMUserRepository cmUserRepository;

    @CrossOrigin
    @PostMapping("/users")
    public ResponseEntity<?> save(@RequestBody CMUser cmuser){

        System.out.println(cmuser.getFirstName());
        System.out.println(cmuser.getLastName());

        return new ResponseEntity<>(cmUserService.create(cmuser), HttpStatus.CREATED);

    }

    @CrossOrigin(origins = "htttp://localhost:3000")
    @GetMapping("/users")
    public ResponseEntity<CMUser> getUser(@RequestParam(required = true) String username) {
        username = username.replaceAll("\"", "");
        System.out.println("Get Test; username:" + username);
        Optional<CMUser> user = cmUserService.getCMUserByUserId(username);
        if (user.isEmpty()) {
            throw new UserNotFoundException(String.format("UserId[%s] not found", username));
        } else {
            System.out.println("UserID: " + user.get().getUsername());
            return new ResponseEntity(user, HttpStatus.OK);
        }
    }

}
