package com.example.ChangeManage.Repository;

import com.example.ChangeManage.domain.CMUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CMUserRepository extends JpaRepository<CMUser, Integer> {
    Optional<CMUser> findByUserId(String userId);
}
