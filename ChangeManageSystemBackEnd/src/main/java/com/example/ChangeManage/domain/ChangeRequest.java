package com.example.ChangeManage.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    private String reasonType;
    private String changeType;
    private String whyDescription;
    private String whatDescription;
    private String whoDescription;
    private String whenDescription;
    private String otherNeededDepartments;
    private String riskLevel;
    private String Implementer;
    private String ImplementationStatus;
    private String stateLevel;

    @ManyToOne
    @JoinColumn(name = "id")
    private CMUser user;

}
