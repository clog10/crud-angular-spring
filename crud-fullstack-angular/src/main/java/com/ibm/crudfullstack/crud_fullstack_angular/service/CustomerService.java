package com.ibm.crudfullstack.crud_fullstack_angular.service;


import java.util.List;

import com.ibm.crudfullstack.crud_fullstack_angular.entity.Customer;

public interface CustomerService {

    Customer saveCustomer(Customer customer);
    List<Customer> getAllCustomers();
    Customer getCustomerById(Long id);
    Customer updateCustomer(Customer customer);
    void deleteCustomer(Long id);

}
