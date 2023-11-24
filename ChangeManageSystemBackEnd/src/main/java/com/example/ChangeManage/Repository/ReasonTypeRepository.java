package com.example.ChangeManage.Repository;

import com.example.ChangeManage.domain.ReasonType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReasonTypeRepository extends JpaRepository<ReasonType, Integer> {
}
