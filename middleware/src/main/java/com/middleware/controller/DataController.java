package com.middleware.controller;


import com.middleware.Utils.CsvUtils;
import com.middleware.model.Data;
import com.middleware.repository.DataRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping(value = "/")
public class DataController {


    private final Logger LOG = LoggerFactory.getLogger(getClass());

    private final DataRepository dataRepository;

    public DataController(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Data> getAllUsers() {
        LOG.info("Getting all.");
        return dataRepository.findAll();
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Data addNewUsers(@RequestBody Data data) {
        LOG.info("Saving.");
        return dataRepository.save(data);
    }

    @PostMapping(value = "/upload", consumes = "text/csv")
    public void uploadSimple(@RequestBody InputStream body) throws IOException {
        dataRepository.saveAll(CsvUtils.read(Data.class, body));
    }

    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    public void uploadMultipart(@RequestParam("file") MultipartFile file) throws IOException {
        dataRepository.saveAll(CsvUtils.read(Data.class, file.getInputStream()));
    }

}
