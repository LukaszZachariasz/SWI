package com.middleware.repository;

import com.middleware.model.Data;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends MongoRepository<Data, String> {

}
