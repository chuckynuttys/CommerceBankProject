package com.example.ChangeManage.Service;

import com.example.ChangeManage.Repository.AccountRepository;
import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.domain.Account;
import com.example.ChangeManage.domain.CMUser;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AccountService {
    private final AccountRepository accountRepository;
    private final CMUserRepository cmUserRepository;

    @Transactional
    public Account create(Integer userID, Account account) {
        CMUser user;

        System.out.println("Username: " + account.getUsername());
        System.out.println("Password: " + account.getPassword());
        user = cmUserRepository.findById(userID).orElseThrow(()->new IllegalArgumentException("Check userID"));

        System.out.println("setUser");
        account.setUser(user);
        System.out.println("Method call");
        return accountRepository.save(account);
    }

    @Transactional
    public CMUser getUser(Account account) {
        Account newAccount;

        newAccount = accountRepository.getReferenceById(account.getUsername());
        return newAccount.getUser();

    }

    public Account getAccount(Account account) {
        Account currentAccount;

        currentAccount = accountRepository.getReferenceById((account.getUsername()));
        return currentAccount;
    }
    public boolean validateAccountLogin(Account loginAccount) {
        Optional<Account> account = accountRepository.findById(loginAccount.getUsername());

        if (!account.isPresent()) {
            return false;
        } else {
            System.out.println("Login Password: " + loginAccount.getPassword());
            System.out.println("Login UserName" + account.get().getPassword());
            return loginAccount.getPassword().equals(account.get().getPassword());
        }
    }
}
