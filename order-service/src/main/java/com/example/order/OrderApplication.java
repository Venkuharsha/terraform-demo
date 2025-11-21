package com.example.order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class OrderApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }

    @GetMapping("/orders")
    public String getOrders() {
        return "[{\"id\":1,\"item\":\"Laptop\"},{\"id\":2,\"item\":\"Phone\"}]";
    }
}
