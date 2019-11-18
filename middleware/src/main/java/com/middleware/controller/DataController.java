package com.middleware.controller;


import com.middleware.model.Data;
import com.middleware.repository.DataRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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

}
