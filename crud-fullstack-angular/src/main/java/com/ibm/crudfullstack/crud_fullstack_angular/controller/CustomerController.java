package com.ibm.crudfullstack.crud_fullstack_angular.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.crudfullstack.crud_fullstack_angular.entity.Customer;
import com.ibm.crudfullstack.crud_fullstack_angular.service.CustomerService;

@RestController
@RequestMapping("api/customers")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/save")
    public ResponseEntity<?> createCustomer(@RequestBody Customer customer) {
        Customer savedCustomer;
        try {
            savedCustomer = customerService.saveCustomer(customer);
        } catch (Exception e) {
            return new ResponseEntity<>("Error saving customer", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    @GetMapping("/listar")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<?> getCustomerById(@PathVariable Long id) {
        Customer validate;
        try {
            validate = customerService.getCustomerById(id);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(validate, HttpStatus.OK);

    }

    @PutMapping("/editar")
    public ResponseEntity<?> updateCustomer(@RequestBody Customer customer) {
        Customer edited = null;
        try {
            if (customerService.getCustomerById(customer.getId()) != null) {
                edited = customerService.updateCustomer(customer);
            }

        } catch (RuntimeException e) {
            return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(edited, HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable Long id) {
        try {
            customerService.deleteCustomer(id);
            return ResponseEntity.ok().body(Map.of("message", "Customer deleted successfully"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Customer not found"));
        }
    }

}
