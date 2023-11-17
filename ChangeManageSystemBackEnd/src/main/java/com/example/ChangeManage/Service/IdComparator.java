package com.example.ChangeManage.Service;

import com.example.ChangeManage.domain.ChangeRequest;

import java.util.Comparator;


public class IdComparator implements Comparator<ChangeRequest> {
    public int compare(ChangeRequest changeRequest1, ChangeRequest changeRequest2) {
        return changeRequest1.getChangeId().compareTo(changeRequest2.getChangeId());
    }
}
