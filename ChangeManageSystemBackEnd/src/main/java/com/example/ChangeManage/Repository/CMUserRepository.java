package com.example.ChangeManage.Repository;

import com.example.ChangeManage.domain.CMUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CMUserRepository extends JpaRepository<CMUser, Integer> {

    CMUser findByUsername(String username);

}
