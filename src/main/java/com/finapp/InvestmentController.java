package com.finapp;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
class InvestmentController {
    private final InvestmentRepository repository;

    InvestmentController(InvestmentRepository repository) {
    this.repository = repository;
    }

    @PostMapping("/investments")
    Investment newInvestment(@RequestBody Investment newInvestment) {
        return repository.save(newInvestment);
      }
    
}
