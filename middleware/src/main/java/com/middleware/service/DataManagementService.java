package com.middleware.service;

import com.middleware.model.MeasurementDTO;
import com.middleware.repository.DataRepository;
import com.middleware.utils.CsvUtils;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@Service
@Data
public class DataManagementService {

    DataRepository dataRepository;

    @Autowired
    public DataManagementService(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    public void storeDataFromFile(MultipartFile file) {
        try {
            dataRepository.saveAll(CsvUtils.read(MeasurementDTO.class, file.getInputStream()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
