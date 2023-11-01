package com.example.ChangeManage.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Optional;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class ChangeRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer changeId;
    private Integer applicationId;
    private String description;
    private String reason;
    private Integer reasonNumber; // Ticket number if a fix, Service Request number if an enhancement
    private String changeType;
    private String whyDescription;
    private String whatDescription;
    private String whoIsImplementers; // Should be who is implementing the change.
    private String changeWindowStartDate;
    private String changeWindowStopDate;
    private String changeWindowStartTime;
    private String changeWindowStopTime;
    private String otherNeededDepartments;
    private String riskLevel;
    private String implementer; // Implementer should be equal to the 'whoIsImplementers' value
    private String implementationStatus;
    private String implementationDate; // Must be between changeWindow Start and Stop Date/Time
    private String implementationTime;
    private String stateLevel; // Approval State level; Open, Frozen, Application, Department, Approved, Denied, Completed
    private Boolean archivedStatus; // If it is Archived or not

    @ManyToOne
    @JoinColumn(name = "id")
    private CMUser user;

}
