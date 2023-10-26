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
    public ResponseEntity<CMUser> getUser(@RequestParam(required = true) String userId) {
        System.out.println("Get Test; userId:" + userId);
        Optional<CMUser> user = cmUserService.getCMUserByUserId(userId);
        Optional<CMUser> user1 = cmUserRepository.findById(1);
        if (user.isEmpty()) {
            if (user1.isPresent()) {
                System.out.println("User1 Present; UserID: "  + user1.get().getUserId());
            }
            throw new UserNotFoundException(String.format("UserId[%s] not found", userId));
        } else {
            System.out.println("UserID: " + user.get().getUserId());
            return new ResponseEntity(user, HttpStatus.OK);
        }
    }

}
