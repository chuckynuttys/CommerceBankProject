package com.example.ChangeManage.Repository;

import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChangeRequestRepository extends JpaRepository<ChangeRequest, Integer> {
    Optional<List<ChangeRequest>> findByArchivedStatus(boolean archivedStatus);



//    @Query(value = "(SELECT * FROM CHANGE_REQUEST c WHERE c.archived_Status = :archivedStatus AND c.id != :id)" +
//            "UNION" +
//            "(SELECT * FROM CHANGE_REQUEST c WHERE c.archived_Status = :archivedStatus AND c.id = :id " +
//            "AND c.state_Level = :stateLevel)", nativeQuery = true)
//    Optional<List<ChangeRequest>> findChangeRequestsWithCustomQuery(boolean archivedStatus, int id, String stateLevel);
    @Query(value = "SELECT * FROM CHANGE_REQUEST c WHERE c.archived_Status = :archivedStatus AND c.id = :id ",
            nativeQuery = true)
    Optional<List<ChangeRequest>> findChangeRequestsFromUserWithCustomQuery (boolean archivedStatus,
                                                                            int id);
    @Query(value = "SELECT * FROM CHANGE_REQUEST c where c.archived_Status = :archivedStatus AND c.change_Id = :id",
            nativeQuery = true)
    Optional<ChangeRequest> findChangeRequestByIdWithCustomQuery (boolean archivedStatus, int id);
    @Query(value = "SELECT * FROM CHANGE_REQUEST c WHERE c.archived_Status = :archivedStatus AND c.id != :id " +
            "AND c.state_Level = :stateLevel", nativeQuery = true)
    Optional<List<ChangeRequest>> findChangeRequestsNotFromUserWithCustomQuery (boolean archivedStatus,
                                                                             int id, String stateLevel);
    @Query(value = "SELECT * FROM CHANGE_REQUEST c WHERE c.archived_Status = :archivedStatus AND c.id != :id ",
            nativeQuery = true)
    Optional<List<ChangeRequest>> findAllChangeRequestsNotFromUserWithCustomQuery (boolean archivedStatus,
                                                                                int id);
}
