package com.example.ChangeManage.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class CMUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    // Authorization level values: user, departmentUser, applicationUser, operationsUser
    private String authorizationLevel;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<ChangeRequest> changeRequests = new ArrayList<>();

}
