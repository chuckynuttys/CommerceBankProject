package com.example.ChangeManage.Service;

import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.domain.CMUser;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class CMUserService {

    private final CMUserRepository cmUserRepository;

    @Transactional
    public CMUser create(CMUser user){
        return cmUserRepository.save(user);
    }
    @Transactional
    public Optional<CMUser> getCMUserByUserId(String userId) {
        return cmUserRepository.findByUserId(userId);
    }
}
