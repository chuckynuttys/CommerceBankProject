package com.example.ChangeManage.Controller;

import com.example.ChangeManage.Service.AccountService;
import com.example.ChangeManage.domain.Account;
import com.example.ChangeManage.domain.CMUser;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class AccountController {
    private final AccountService accountService;

    @PostMapping("/users/{id}/account")
    public ResponseEntity<?> createAccount(@PathVariable(value = "id") int userID,
                                           @RequestBody Account account) {
        System.out.println("userID: " + userID);
        return new ResponseEntity<>(accountService.create(userID, account), HttpStatus.CREATED);
    }


    @GetMapping("/account")
    public ResponseEntity<Account> getAccount(@RequestBody Account loginAccount) {
        System.out.println("Retrieving LoginAccount TEST");
        System.out.println(loginAccount.getUsername());
        System.out.println(loginAccount.getPassword());
        System.out.println("Validation: " + validateAccountLogin(loginAccount));
        if (validateAccountLogin(loginAccount)) {
            Account account = accountService.getAccount(loginAccount);
            return new ResponseEntity<>(account, HttpStatus.OK);
        } else {
            return ResponseEntity.status(400).body(null);
        }
    }

    @GetMapping("/account")
    public ResponseEntity<CMUser> getUser(@RequestBody Account loginAccount) {
        System.out.println("Retrieving LoginAccount User TEST");
        System.out.println(loginAccount.getUsername());
        System.out.println(loginAccount.getPassword());
        System.out.println("Validation: " + validateAccountLogin(loginAccount));
        if (validateAccountLogin(loginAccount)) {
            CMUser user = accountService.getUser(loginAccount);
        return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return ResponseEntity.status(400).body(null);
        }
    }
    public boolean validateAccountLogin(Account loginAccount) {
        System.out.println("Validation: " + accountService.validateAccountLogin(loginAccount));
        if (accountService.validateAccountLogin(loginAccount)) {
            return true;
        } else {
            throw new UserNotFoundException(String.format("username: [%s] not found", loginAccount.getUsername()));
        }
    }
}
