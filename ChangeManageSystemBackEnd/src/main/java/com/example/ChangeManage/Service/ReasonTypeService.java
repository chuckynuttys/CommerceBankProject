package com.example.ChangeManage.Service;

import com.example.ChangeManage.Repository.ReasonTypeRepository;
import com.example.ChangeManage.domain.ReasonType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ReasonTypeService {
    private final ReasonTypeRepository reasonTypeRepository;

    public ReasonType create(ReasonType reasonType) {
        return reasonTypeRepository.save(reasonType);
    }
}
