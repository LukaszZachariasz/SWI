package com.middleware.repository;

import com.middleware.model.MeasurementDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepository extends MongoRepository<MeasurementDTO, String> {

}
