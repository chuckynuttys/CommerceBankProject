package com.example.ChangeManage;

import com.example.ChangeManage.Controller.CMUserController;
import com.example.ChangeManage.Controller.ChangeRequestController;
import com.example.ChangeManage.Repository.CMUserRepository;
import com.example.ChangeManage.Repository.ChangeRequestRepository;
import com.example.ChangeManage.Service.CMUserService;
import com.example.ChangeManage.Service.ChangeRequestService;
import com.example.ChangeManage.domain.CMUser;
import com.example.ChangeManage.domain.ChangeRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

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
			CMUser newUser = new CMUser(1,"Robert","Lukenbill","RL4",
					"password","User",null);
			repo.save(newUser);
			newUser = new CMUser(2,"Amariee","Cooper","AC",
					"password","departmentUser",null);
			repo.save(newUser);
			newUser = new CMUser(3,"Grant","Starrett","GS",
					"password","applicationUser",null);
			repo.save(newUser);
			newUser = new CMUser(4,"Charles","Strain","CS",
					"password","operationUser",null);
			repo.save(newUser);
			newUser = new CMUser(5,"Brennan","McKinney","BM",
					"password","departmentUser",null);
			repo.save(newUser);
		};
	}
	@Bean
	public CommandLineRunner demoChangeRequestTest(ChangeRequestService changeRequestService) {

		return args -> {
			// non-Archived Change Requests (10; 2 per user)
			ChangeRequest newChangeRequest = new ChangeRequest(1, 1,
					"This is a sentence that is 80 characters long " +
					"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
					null, null, null, "Frozen",
					false, null);
			changeRequestService.create(newChangeRequest, "RL4");
			newChangeRequest = new ChangeRequest(2, 2,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 2, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "RL4");

			newChangeRequest = new ChangeRequest(3, 3,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 3, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "AC");
			newChangeRequest = new ChangeRequest(4, 4,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Enhancement", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "AC");

			newChangeRequest = new ChangeRequest(5, 5,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Enhancement", 2, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Grant Starrett",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "GS");
			newChangeRequest = new ChangeRequest(6, 6,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Enhancement", 3, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Grant Starrett",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "GS");

			newChangeRequest = new ChangeRequest(7, 7,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Enhancement", 4, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Charles Strain",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "CS");
			newChangeRequest = new ChangeRequest(8, 8,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 4, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Charles Strain",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "CS");

			newChangeRequest = new ChangeRequest(9, 9,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 5, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "BM");
			newChangeRequest = new ChangeRequest(10, 10,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 6, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
					null, null, null, "Open",
					false, null);
			changeRequestService.create(newChangeRequest, "BM");

			// Archived Change Request Creation (10; 2 per user)

			newChangeRequest = new ChangeRequest(11, 11,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 7, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
					"Implemented", "September 24th", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "RL4");
			newChangeRequest = new ChangeRequest(12, 12,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Robert Lukenbill",
					"Not Implemented", null, null, "Denied",
					true, null);
			changeRequestService.create(newChangeRequest, "RL4");

			newChangeRequest = new ChangeRequest(13, 13,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "AC");
			newChangeRequest = new ChangeRequest(14, 14,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Amariee Cooper",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "AC");

			newChangeRequest = new ChangeRequest(15, 15,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Grant Starrett",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "GS");
			newChangeRequest = new ChangeRequest(16, 16,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Grant Starrett",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "GS");

			newChangeRequest = new ChangeRequest(17, 17,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Charles Strain",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "CS");
			newChangeRequest = new ChangeRequest(18, 18,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Charles Strain",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "CS");

			newChangeRequest = new ChangeRequest(19, 19,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "BM");
			newChangeRequest = new ChangeRequest(20, 20,
					"This is a sentence that is 80 characters long " +
							"and includes spaces and periods...", "Fix", 1, "Emergency",
					"This is a why Description",
					"This is a what Description", "This is the backout Plan description",
					"This is the backout Minutes",
					"September 21st", "October 23rd", "5:00 PM",
					"7:00 PM", "DevOps", "Low", "Brennan McKinney",
					"Implemented", "October 1st", "3:00 PM", "Approved",
					true, null);
			changeRequestService.create(newChangeRequest, "BM");
		};
	}

}
