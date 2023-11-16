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

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class CMUserController {

    private final CMUserService cmUserService;

    @PostMapping("/users")
    public ResponseEntity<?> save(@RequestBody CMUser cmuser){

        System.out.println(cmuser.getFirstName());
        System.out.println(cmuser.getLastName());

        return new ResponseEntity<>(cmUserService.create(cmuser), HttpStatus.CREATED);

    }

    @GetMapping("/users/{id}")
    public ResponseEntity<CMUser> getUser(@PathVariable int id) {
        Optional<CMUser> user = cmUserService.getCMUserById(id);
        if (!user.isPresent()) {
            throw new UserNotFoundException(String.format("UserId[%d] not found", id));
        }
        return new ResponseEntity(user, HttpStatus.OK);
    }

}
