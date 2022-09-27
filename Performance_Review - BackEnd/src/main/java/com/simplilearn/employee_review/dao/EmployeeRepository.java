package com.simplilearn.employee_review.dao;

import com.simplilearn.employee_review.entity.Employee;
import com.simplilearn.employee_review.entity.User;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // all Employees
	
	Page<Employee> findByUsername(@RequestParam("username") String username, Pageable pageable);

    Page<Employee> findAllByOrderByNameAsc(Pageable pageable);

   // Page<Employee> findAllByOrderByDateCreatedDesc(Pageable pageable);

    // by Status

    Page<Employee> findByStatus(@RequestParam("status") int status, Pageable pageable);

    Page<Employee> findByStatusOrderByNameAsc(@RequestParam("status") int status, Pageable pageable);

//    Page<Employee> findByStatusOrderByDateCreatedDesc(@RequestParam("status") int status, Pageable pageable);


}
