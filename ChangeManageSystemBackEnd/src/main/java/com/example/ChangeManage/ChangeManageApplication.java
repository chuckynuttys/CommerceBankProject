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
			ChangeRequest newChangeRequest = new ChangeRequest(1,1,"This is a description",
					"Fix",1,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Robert", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "RL4");
			newChangeRequest = new ChangeRequest(2,2,"This is a description",
					"Enhancement",1,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Robert", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "RL4");

			newChangeRequest = new ChangeRequest(3,3,"This is a description",
					"Fix",2,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Amariee", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "AC");
			newChangeRequest = new ChangeRequest(4,4,"This is a description",
					"Enhancement",2,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Amariee", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "AC");

			newChangeRequest = new ChangeRequest(5,5,"This is a description",
					"Fix",3,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Grant", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "GS");
			newChangeRequest = new ChangeRequest(6,6,"This is a description",
					"Enhancement",3,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Grant", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "GS");

			newChangeRequest = new ChangeRequest(7,7,"This is a description",
					"Fix",4,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Charles", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "CS");
			newChangeRequest = new ChangeRequest(8,8,"This is a description",
					"Fix",5,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Charles", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "CS");

			newChangeRequest = new ChangeRequest(9,9,"This is a description",
					"Enhancement",4,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "BM");
			newChangeRequest = new ChangeRequest(10,10,"This is a description",
					"Fix",6,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", false, null);
			changeRequestService.create(newChangeRequest, "BM");
			// Archived Change Request Creation (10; 2 per user)
			newChangeRequest = new ChangeRequest(11,11,"This is a description",
					"Fix",7,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "RL4");
			newChangeRequest = new ChangeRequest(12,12,"This is a description",
					"Fix",8,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "RL4");

			newChangeRequest = new ChangeRequest(13,13,"This is a description",
					"Enhancement",5,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "AC");
			newChangeRequest = new ChangeRequest(14,14,"This is a description",
					"Enhancement",6,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "AC");

			newChangeRequest = new ChangeRequest(15,15,"This is a description",
					"Fix",9,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "GS");
			newChangeRequest = new ChangeRequest(16,16,"This is a description",
					"Enhancement",7,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "GS");

			newChangeRequest = new ChangeRequest(17,17,"This is a description",
					"Fix",10,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "CS");
			newChangeRequest = new ChangeRequest(18,18,"This is a description",
					"Fix",11,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "CS");

			newChangeRequest = new ChangeRequest(19,19,"This is a description",
					"Fix",8,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "BM");
			newChangeRequest = new ChangeRequest(20,20,"This is a description",
					"Fix",9,"Emergency",
					"This is a why Description","This is a what Description",
					"Robert", "September 21st",
					"September 23rd", "10:00 AM", "10:00 PM",
					"DevOps", "High", "Brennan", "Not Implemented",
					null, null, "Unfrozen", true, null);
			changeRequestService.create(newChangeRequest, "BM");
		};
	}

}
