package com.middleware.controller;

import com.middleware.model.MeasurementDTO;
import com.middleware.service.DataManagementService;
import com.mongodb.DBObject;
import com.mongodb.client.DistinctIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import org.apache.coyote.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@RestController
@RequestMapping(value = "/")
public class DataManagementController {

    private final Logger LOG = LoggerFactory.getLogger(getClass());

    private DataManagementService dataManagementService;
    private MongoTemplate mongoTemplate;


    @Autowired
    public DataManagementController(DataManagementService dataManagementService, MongoTemplate mongoTemplate) {
        this.dataManagementService = dataManagementService;
        this.mongoTemplate = mongoTemplate;
    }

    @RequestMapping(value = "/getAllData", method = RequestMethod.GET)
    public ResponseEntity getAllData() {

        LOG.info("getAllData");
        List<MeasurementDTO> response = dataManagementService.getDataRepository().findAll();

        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "/getAvgValuesInDataRange", method = RequestMethod.GET)
    public ResponseEntity getAverageValuesInRange(@RequestParam("startDate") String startDate,
                                                  @RequestParam("endDate") String endDate,
                                                  @RequestParam("pickedDevice") String pickedDevice) throws ParseException {

        LOG.info("getAvgValuesInDataRange");

        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yy");
        Date d1 = format.parse(startDate);
        Date d2 = format.parse(endDate);
        LocalDateTime localDateTime1 = d1.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();
        LocalDateTime localDateTime2 = d2.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();

        TypedAggregation<MeasurementDTO> agg = newAggregation(
                MeasurementDTO.class,
                match(Criteria.where("measurementDate").gte(localDateTime1).lt(localDateTime2).and("stationName").is(pickedDevice)),
                group("stationName")
                        .avg("airTemperature").as("avgAirTemperature")
                        .avg("humidity").as("avgHumidity")
                        .avg("rainIntensity").as("avgRainIntensity")
                        .avg("totalRain").as("avgTotalRain")
                        .avg("windSpeed").as("avgWindSpeed")
                        .avg("barometricPressure").as("avgBarometricPressure")
                        .avg("solarRadiation").as("avgSolarRadiation")
        );

        AggregationResults<DBObject> result = mongoTemplate.aggregate(agg, DBObject.class);
        List<DBObject> resultList = result.getMappedResults();

        return ResponseEntity.ok(resultList);
    }

    @RequestMapping(value = "/getMinValuesInDataRange", method = RequestMethod.GET)
    public ResponseEntity getMinInDateRange(@RequestParam("startDate") String startDate,
                                            @RequestParam("endDate") String endDate,
                                            @RequestParam("pickedDevice") String pickedDevice) throws ParseException {

        LOG.info("getMinValuesInDataRange");

        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yy");
        Date d1 = format.parse(startDate);
        Date d2 = format.parse(endDate);
        LocalDateTime localDateTime1 = d1.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();
        LocalDateTime localDateTime2 = d2.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();

        TypedAggregation<MeasurementDTO> agg = newAggregation(
                MeasurementDTO.class,
                match(Criteria.where("measurementDate").gte(localDateTime1).lt(localDateTime2).and("stationName").is(pickedDevice)),
                group("stationName")
                        .min("airTemperature").as("minAirTemperature")
                        .min("humidity").as("minHumidity")
                        .min("rainIntensity").as("minRainIntensity")
                        .min("totalRain").as("minTotalRain")
                        .min("windSpeed").as("minWindSpeed")
                        .min("barometricPressure").as("minBarometricPressure")
                        .min("solarRadiation").as("minSolarRadiation")
        );

        AggregationResults<DBObject> result = mongoTemplate.aggregate(agg, DBObject.class);
        List<DBObject> resultList = result.getMappedResults();

        return ResponseEntity.ok(resultList);
    }

    @RequestMapping(value = "/getMaxInDateRange", method = RequestMethod.GET)
    public ResponseEntity getMaxInDateRange(@RequestParam("startDate") String startDate,
                                            @RequestParam("endDate") String endDate,
                                            @RequestParam("pickedDevice") String pickedDevice) throws ParseException {

        LOG.info("getMaxInDateRange");

        SimpleDateFormat format = new SimpleDateFormat("dd/MM/yy");
        Date d1 = format.parse(startDate);
        Date d2 = format.parse(endDate);
        LocalDateTime localDateTime1 = d1.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();
        LocalDateTime localDateTime2 = d2.toInstant()
                .atZone(ZoneId.systemDefault())
                .toLocalDateTime();

        TypedAggregation<MeasurementDTO> agg = newAggregation(
                MeasurementDTO.class,
                match(Criteria.where("measurementDate").gte(localDateTime1).lt(localDateTime2).and("stationName").is(pickedDevice)),
                group("stationName")
                        .max("airTemperature").as("maxAirTemperature")
                        .max("humidity").as("maxHumidity")
                        .max("rainIntensity").as("maxRainIntensity")
                        .max("totalRain").as("maxTotalRain")
                        .max("windSpeed").as("maxWindSpeed")
                        .max("barometricPressure").as("maxBarometricPressure")
                        .max("solarRadiation").as("maxSolarRadiation")
        );

        AggregationResults<DBObject> result = mongoTemplate.aggregate(agg, DBObject.class);
        List<DBObject> resultList = result.getMappedResults();

        return ResponseEntity.ok(resultList);
    }

    @RequestMapping(value = "/saveValue", method = RequestMethod.POST)
    public MeasurementDTO saving(@RequestBody MeasurementDTO measurementDTO) {
        LOG.info("saveValue");

        return dataManagementService.getDataRepository().save(measurementDTO);
    }

    @PostMapping(value = "/uploadFile", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadMultipart(@RequestParam("file") MultipartFile file) {

        LOG.info("uploadFile");
        dataManagementService.storeDataFromFile(file);

        return ResponseEntity.ok().body(null);
    }

    @RequestMapping(value = "/getAllValuesInDateRange", method = RequestMethod.GET)
    public ResponseEntity getDateRange(@RequestParam("startDate") String startDate,
                                       @RequestParam("endDate") String endDate,
                                       @RequestParam("pickedDevice") String pickedDevice) throws ParseException {

        LOG.info("getAllValuesInDateRange");

        List<MeasurementDTO> response = dataManagementService
                .getMeasurementsByDateRange(startDate, endDate)
                .stream()
                .filter(measurementDTO -> measurementDTO.getStationName().equals(pickedDevice)).collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }

    @RequestMapping(value = "/getValuesByPage", method = RequestMethod.GET)
    public ResponseEntity getPage(@RequestParam("pageNumber") Integer pageNumber,
                                  @RequestParam("pageSize") Integer pageSize) {

        LOG.info("getValuesByPage");

        if (pageSize != 0) {
            final Pageable pageableRequest = PageRequest.of(pageNumber, pageSize);
            Page response = dataManagementService.getDataRepository().findAll(pageableRequest);
            return ResponseEntity.ok(response.getContent());
        } else {
            List<MeasurementDTO> response = dataManagementService.getDataRepository().findAll();
            return ResponseEntity.ok(response);
        }
    }

    @RequestMapping(value = "/getDevices", method = RequestMethod.GET)
    public ResponseEntity getDevices() {

        LOG.info("getDevices");

        List<String> categoryList = new ArrayList<>();
        MongoCollection mongoCollection = mongoTemplate.getCollection("measurementDTO");
        DistinctIterable distinctIterable = mongoCollection.distinct("stationName", String.class);
        MongoCursor cursor = distinctIterable.iterator();
        while (cursor.hasNext()) {
            String category = (String) cursor.next();
            categoryList.add(category);
        }
        return ResponseEntity.ok(categoryList);
    }

    @RequestMapping(value = "/removeAllData", method = RequestMethod.POST)
    public String removeAllData() {

        LOG.info("removeAllData");
        dataManagementService.getDataRepository().deleteAll();

        return "All Data Removed";
    }
}
