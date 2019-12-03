package com.middleware.controller;


import com.middleware.model.MeasurementDTO;
import com.middleware.service.DataManagementService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(value = "/")
public class DataManagementController {

    private DataManagementService dataManagementService;
    private final Logger LOG = LoggerFactory.getLogger(getClass());

    public DataManagementController(DataManagementService dataManagementService) {
        this.dataManagementService = dataManagementService;
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public ResponseEntity getAllData() {
        List<MeasurementDTO> response = dataManagementService.getDataRepository().findAll();
        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public MeasurementDTO addNewUsers(@RequestBody MeasurementDTO measurementDTO) {
        LOG.info("Saving.");
        return dataManagementService.getDataRepository().save(measurementDTO);
    }

    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadMultipart(@RequestParam("file") MultipartFile file) {
        dataManagementService.storeDataFromFile(file);
        return ResponseEntity.ok().body(null);
    }

}
