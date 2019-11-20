package com.middleware.controller;


import com.middleware.utils.CsvUtils;
import com.middleware.model.Data;
import com.middleware.repository.DataRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping(value = "/")
public class DataController {


    private final Logger LOG = LoggerFactory.getLogger(getClass());

    private final DataRepository dataRepository;

    public DataController(DataRepository dataRepository) {
        this.dataRepository = dataRepository;
    }

    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public List<Data> getAllData() throws ParseException {
        LOG.info("Getting all.");
        String inputdate="9/1/10 11:34:35 AM";
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("dd/MM/yy hh:mm:ss aa", Locale.getDefault());

        LOG.info(""+new SimpleDateFormat("dd/MM/yy HH:mm:ss",Locale.getDefault()).format(simpleDateFormat.parse(inputdate)));

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
