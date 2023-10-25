package com.example.ChangeManage.Service;

import com.example.ChangeManage.ChangeManageApplication;
import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Repository.ChangeRequestRepository;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ChangeRequestService
{
    private final CMUserRepository cmUserRepository;
    private final ChangeRequestRepository changeRequestRepository;






}
