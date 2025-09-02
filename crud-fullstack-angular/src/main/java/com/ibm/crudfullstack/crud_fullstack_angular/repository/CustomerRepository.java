package com.ibm.crudfullstack.crud_fullstack_angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.crudfullstack.crud_fullstack_angular.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    

}
