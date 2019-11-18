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
    private String dataId;
    private String temp;


}
