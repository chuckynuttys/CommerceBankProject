package com.example.ChangeManage;

import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Service.CMUserService;
import com.example.ChangeManage.Service.ChangeRequestService;
import com.example.ChangeManage.Service.ReasonTypeService;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import com.example.ChangeManage.domain.ReasonType;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.HashMap;
import java.util.Objects;

@SpringBootApplication
public class ChangeManageApplication {

//	private CMUserController cmUserController;
//	private ChangeRequestController changeRequestController;
	public static void main(String[] args) {
		SpringApplication.run(ChangeManageApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/users").allowedOrigins("http://localhost:3000");
			}
		};
	}

	@Bean
	public CommandLineRunner demoUserTest(CMUserRepository repo) {
		return args -> {
			for (int i = 1; i <= 10; i++) {
				CMUser user = new CMUser();
				user.setPassword("password");
				user.setChangeRequests(null);
				switch (i) {
					case 1:
						user.setFirstName("Robert");
						user.setLastName("Lukenbill");
						user.setUsername("RL4");
						user.setAuthorizationLevel("User");
						break;
					case 2:
						user.setFirstName("Amariee");
						user.setLastName("Cooper");
						user.setUsername("AC");
						user.setAuthorizationLevel("departmentUser");
						break;
					case 3:
						user.setFirstName("Grant");
						user.setLastName("Starrett");
						user.setUsername("GS");
						user.setAuthorizationLevel("applicationUser");
						break;
					case 4:
						user.setFirstName("Charles");
						user.setLastName("Strain");
						user.setUsername("CS");
						user.setAuthorizationLevel("operationUser");
						break;
					case 5:
						user.setFirstName("Brennan");
						user.setLastName("McKinney");
						user.setUsername("BM");
						user.setAuthorizationLevel("operationUser");
						break;
					case 6:
						user.setFirstName("Mark");
						user.setLastName("Reed");
						user.setUsername("MR");
						user.setAuthorizationLevel("User");
						break;
					case 7:
						user.setFirstName("John");
						user.setLastName("Doe");
						user.setUsername("JD");
						user.setAuthorizationLevel("departmentUser");
						break;
					case 8:
						user.setFirstName("Mary");
						user.setLastName("Doe");
						user.setUsername("MD");
						user.setAuthorizationLevel("applicationUser");
						break;
					case 9:
						user.setFirstName("Jane");
						user.setLastName("Sue");
						user.setUsername("JS");
						user.setAuthorizationLevel("operationUser");
						break;
					case 10:
						user.setFirstName("Arthur");
						user.setLastName("Lancelot");
						user.setUsername("AL");
						user.setAuthorizationLevel("operationUser");
						break;
				}
				repo.save(user);
			}
		};
	}
	@Bean
	public CommandLineRunner demoChangeRequestTest(ChangeRequestService changeRequestService,
												   CMUserService cmUserService,
												   ReasonTypeService reasonTypeService) {

		return args -> {
			int j = 1;
			int k = 1;
			ReasonType reasonType = new ReasonType();
			HashMap<String, Integer> map = new HashMap<>();
			map.put("Fix", 0);
			map.put("Enhancement", 0);
			reasonType.setMap(map);
			reasonTypeService.create(reasonType);
			for (int i = 1; i <= 20; i++) {
				ChangeRequest changeRequest = new ChangeRequest();
				changeRequest.setApplicationId("ABC");
				changeRequest.setDescription("This is a sentence that is 80 characters long " +
						"and includes spaces and periods...");


				if (i < 11) {
					changeRequest.setReason("Fix");
				} else {
					changeRequest.setReason("Enhancement");
				}


				changeRequest.setChangeType("Emergency");
				changeRequest.setWhyDescription("This is a sentence that is 80 characters long " +
						"and includes spaces and periods...");
				changeRequest.setWhatDescription("This is a sentence that is 80 characters long " +
						"and includes spaces and periods...");
				changeRequest.setBackOutPlan("This is a sentence that is 80 characters long " +
						"and includes spaces and periods...");
				changeRequest.setBackOutMinutes("20 Minutes");
				changeRequest.setChangeWindowStartDate("September 21st 2023");
				changeRequest.setChangeWindowStopDate("October 23rd 2023");
				changeRequest.setChangeWindowStartTime("5:00PM");
				changeRequest.setChangeWindowStopTime("7:00PM");
				changeRequest.setOtherNeededDepartments("DevOps");
				changeRequest.setRiskLevel("Low");
				changeRequest.setStateLevel("Open");
				changeRequest.setArchivedStatus(false);
				if (i == 2) {
					changeRequest.setStateLevel("Application Approved");
				}



				if (i > 10) {
					changeRequest.setImplementationStatus("Approved");
					changeRequest.setImplementationDate("October 1st, 2023");
					changeRequest.setImplementationTime("3:00PM");
					changeRequest.setArchivedStatus(true);
				}
				if (i == 1 || i == 2 || i == 11 || i == 12) {
					changeRequest.setImplementer("Robert Lukenbill");
					changeRequestService.create(changeRequest, "RL4");
				} else if (i == 3 || i == 4 || i == 13 || i == 14) {
					changeRequest.setImplementer("Amariee Cooper");
					changeRequestService.create(changeRequest, "AC");
				} else if (i == 5 || i == 6 || i == 15 || i == 16) {
					changeRequest.setImplementer("Grant Starrett");
					changeRequestService.create(changeRequest, "GS");
				} else if (i == 7 || i == 8 || i == 17 || i == 18) {
					changeRequest.setImplementer("Charles Strain");
					changeRequestService.create(changeRequest, "CS");
				} else {
					changeRequest.setImplementer("Brennan McKinney");
					changeRequestService.create(changeRequest, "BM");
				}

			}


//			// non-Archived Change Requests (10; 2 per user)
//			ChangeRequest newChangeRequest = new ChangeRequest(1, 1,
//					"This is a sentence that is 80 characters long " +
//					"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
//					null, null, null, "Frozen",
//					false, null);
//			changeRequestService.create(newChangeRequest, "RL4");
//			newChangeRequest = new ChangeRequest(2, 2,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 2, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "RL4");
//
//			newChangeRequest = new ChangeRequest(3, 3,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 3, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "AC");
//			newChangeRequest = new ChangeRequest(4, 4,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Enhancement", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "AC");
//
//			newChangeRequest = new ChangeRequest(5, 5,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Enhancement", 2, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Grant Starrett",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "GS");
//			newChangeRequest = new ChangeRequest(6, 6,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Enhancement", 3, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Grant Starrett",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "GS");
//
//			newChangeRequest = new ChangeRequest(7, 7,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Enhancement", 4, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Charles Strain",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "CS");
//			newChangeRequest = new ChangeRequest(8, 8,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 4, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Charles Strain",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "CS");
//
//			newChangeRequest = new ChangeRequest(9, 9,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 5, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "BM");
//			newChangeRequest = new ChangeRequest(10, 10,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 6, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
//					null, null, null, "Open",
//					false, null);
//			changeRequestService.create(newChangeRequest, "BM");
//
//			// Archived Change Request Creation (10; 2 per user)
//
//			newChangeRequest = new ChangeRequest(11, 11,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 7, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
//					"Implemented", "September 24th", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "RL4");
//			newChangeRequest = new ChangeRequest(12, 12,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
//					"Not Implemented", null, null, "Denied",
//					true, null);
//			changeRequestService.create(newChangeRequest, "RL4");
//
//			newChangeRequest = new ChangeRequest(13, 13,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "AC");
//			newChangeRequest = new ChangeRequest(14, 14,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "AC");
//
//			newChangeRequest = new ChangeRequest(15, 15,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Grant Starrett",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "GS");
//			newChangeRequest = new ChangeRequest(16, 16,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Grant Starrett",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "GS");
//
//			newChangeRequest = new ChangeRequest(17, 17,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Charles Strain",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "CS");
//			newChangeRequest = new ChangeRequest(18, 18,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Charles Strain",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "CS");
//
//			newChangeRequest = new ChangeRequest(19, 19,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "BM");
//			newChangeRequest = new ChangeRequest(20, 20,
//					"This is a sentence that is 80 characters long " +
//							"and includes spaces and periods...", "Fix", 1, "Emergency",
//					"This is a why Description",
//					"This is a what Description", "This is the backout Plan description",
//					"This is the backout Minutes",
//					"September 21st", "October 23rd", "5:00 PM",
//					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
//					"Implemented", "October 1st", "3:00 PM", "Approved",
//					true, null);
//			changeRequestService.create(newChangeRequest, "BM");
		};
	}

}
