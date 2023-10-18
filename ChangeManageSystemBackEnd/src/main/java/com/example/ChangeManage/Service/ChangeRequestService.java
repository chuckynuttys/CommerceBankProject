package com.example.ChangeManage.Service;

import com.example.ChangeManage.ChangeManageApplication;
import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Repository.ChangeRequestRepository;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor // Injects Construcotrs
@Service // Creates it as a Object to call to.
public class ChangeRequestService
{
    private final CMUserRepository cmUserRepository;
    private final ChangeRequestRepository changeRequestRepository;



    public ChangeRequest create(ChangeRequest changeRequest, String userid) {
        CMUser cmuser = cmUserRepository.findByUserId(userid);
        changeRequest.setUser(cmuser);

        return changeRequestRepository.save(changeRequest);
    }

    public List<ChangeRequest> get(ChangeRequest changeRequest, List<ChangeRequest> changeRequests) {
        changeRequestRepository.findAll().forEach(changeRequests::add);
        return changeRequests;
    }
}
