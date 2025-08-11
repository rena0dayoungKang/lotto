package com.lotto.backend;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/api/hello")
	public String hello() {
		return "Hello, Spring Boot 3"; 
	}
	
	@GetMapping("/api/health")
	public Map<String, String> health() {
		return Map.of("status", "UP");
	}
	
	@GetMapping("/api/time")
	public Map<String, String> time() {
		return Map.of("serverTime", LocalDateTime.now().toString());
	}
}
