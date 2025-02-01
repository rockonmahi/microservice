package com.escola.authserver.repository;

import com.escola.authserver.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    List<User> findByUserNameAndRecordStatus(String userName, int i);

}
