package com.middleware.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document("Data")
public class Data {

    @Id
    private String measurementID;
    private String stationName;
    private String measurementDate;
    private Float airTemperature;
    private Float wetBulbTemperature;
    private Float humidity;
    private Float rainIntensity;
    private Float intervalRain;
    private Float totalRain;
    private Float precipitationType;
    private Float windDirection;
    private Float windSpeed;
    private Float maximumWindSpeed;
    private Float barometricPressure;
    private Float solarRadiation;
    private Integer heading;
    private Float batteryLife;
    private String measurementTimestampLabel;

}
