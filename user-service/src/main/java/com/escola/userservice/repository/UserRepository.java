package com.escola.userservice.repository;

import com.escola.userservice.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    List<User> findByUserNameAndRecordStatus(String userName, int i);

}
