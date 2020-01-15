package com.middleware.repository;

import com.middleware.model.MeasurementDTO;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface DataRepository extends MongoRepository<MeasurementDTO, String> {

    List<MeasurementDTO> findAllByMeasurementDateBetween(Date d1, Date d2);

}
