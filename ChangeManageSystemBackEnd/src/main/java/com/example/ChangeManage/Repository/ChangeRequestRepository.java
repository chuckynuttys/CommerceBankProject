package com.example.ChangeManage.Repository;

import com.example.ChangeManage.domain.ChangeRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChangeRequestRepository extends JpaRepository<ChangeRequest, Integer> {
    Optional<List<ChangeRequest>> findByArchivedStatus(boolean archivedStatus);
}
