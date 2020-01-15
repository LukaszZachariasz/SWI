package com.middleware.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

@Data
public class MeasurementDTO {

    @Id
    private String measurementID;
    private String stationName;
    private Date measurementDate;
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


    public void setMeasurementDate(String measurementDate) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yy hh:mm:ss aa", Locale.getDefault());
        try {
            this.measurementDate = new Date(new SimpleDateFormat("dd/MM/yy HH:mm:ss", Locale.getDefault())
                    .format(simpleDateFormat.parse(measurementDate)));
        } catch (ParseException e) {
            this.measurementDate = null;
        }
    }

    public String getMeasurementDate() {
        return this.measurementDate.toString();
    }

}
