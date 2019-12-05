package com.middleware.service;

import com.middleware.model.MeasurementDTO;
import com.middleware.repository.DataRepository;
import com.middleware.utils.CsvUtils;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


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

    public List<MeasurementDTO> getMeasurementsByDateRange(String startDate, String endDate) throws ParseException {

        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yy");

        Date d1 = format.parse(startDate);

        Date d2 = format.parse(endDate);
        System.out.println(d1 + "  " +d2);

        List<MeasurementDTO> measurementRangeList = dataRepository.findAllByMeasurementDateBetween(d1,d2);

        return measurementRangeList;
    }
}
