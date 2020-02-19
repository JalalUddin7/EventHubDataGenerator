Examples 

The Faker Schema can seem a bit tricky at first. There's a great [playground environment](https://json-schema-faker.js.org/) for you to look at examples and test your own schemas. In the meantime, here are some pre-written, working schemas to get you started.

Example for employee data:

``` json
{ 
      "employee_id": { 
          "type": "string",
          "faker": {
              "fake": "{{random.uuid}}"
          }
      },
      "employee_name": {
          "type": "string",
          "faker": {
              "fake": "{{name.firstName}} {{name.lastName}}"
          }
      },
      "employee_country": {
          "type": "string",
          "faker": {
              "fake": "{{address.country}}"
          }
      },
      "email_address": {
          "type": "string",
          "faker": {
              "fake": "{{internet.email}}"
          }
      },
      "employee_age": {
          "type": "integer",
          "minimum": "18",
          "maximum": "100"
      },
      "employee_department": {
          "type": "string",
          "faker": {
              "random.arrayElement": [["IT", "Finance", "HR", "Marketing", "Sales"]]
          }
      },
      "employee_salary": {
        "type": "integer",
        "minimum": "38000",
        "maximum": "75000"
    }
  }          
```

Example for sensor data:

``` json
{  
  "sensor_id":{
    "faker": {
      "fake": "{{random.number(100)}}"
    }
  },
  "sensor_temp": {
    "type": "integer", "minimum": "18", "maximum": "100"
  },
  "sensor_status": {
    "type": "string",
    "faker": {
      "random.arrayElement": [["OK", "WARN", "FAIL"]]
    }
  }
}
```

