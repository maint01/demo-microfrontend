package com.microfrontend.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@ComponentScan(basePackages = "com.microfrontend.demo.resources")
@Configuration
@SpringBootApplication
public class MicrofrontendApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicrofrontendApiApplication.class, args);
	}

}
