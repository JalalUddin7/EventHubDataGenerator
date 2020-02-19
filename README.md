# Event Hubs Data Generator

Event Hub Data Generator (EHDG) is a tool which generates realistic fake data based on a provided schema and sends it to Azure Event Hubs. The purpose is to remove the pain of initial set up that is faced by many developers. For instance, if someone is trying to demonstrate streaming datasets in PowerBI, they likely need to set up a stream analytics job, and in order for them to set up a stream analytics job, they need data; in particular hot data. Setting up this stream of hot data, particularly data that is useful for your use case, can be a tedious and lengthy process. Even if they had access to real data they could stream, real data is often messy - requiring endless cleaning. Event Hub Data Generator (EHDG) is here to make simplify this process and allow the developer to work on the later parts of the pipeline sooner. 

## Event Hubs

Azure Event Hubs, a Platform-as-a-Service offering, is a big data streaming platform and event ingestion service. Highly scalable and reliable, it can receive and process millions of events per second with low latency. 

Event Hubs can be used for a number of different scenarios, such as:

- Anomaly detection
- Device telemetry streaming
- Live dashboarding

## Fake Data

Not every developer has the time to generate a tool to populate their databases or ingestion services. This is where fake data, otherwise known as test or dummy data comes in. Fake data serves to exist where real data is normally present, acting as a placeholder for testing purposes in a non-production environment.

## JSON-Faker-Schema

Event Hub Data Generator (EHDG) is heavily based on the work of JSON-Schema-Faker's JavaScript library. JSON-Faker-Schema can generate realistic fake data in JSON format for many areas, including people, address, finance, and company etc. The data generated will be based on the schema provided by the user. JSON-Faker-Schema adheres to the JSON Schema, which is a standard for a valid JSON file. 

A very simple example of valid schema;

```json
{
  "firstName": {
    "type": "string",
    "faker": "name.firstName"
  }
}
```

Given that Event Hubs Data Generator makes use of a library called JSON-Faker-Schema - it would be wise to refer to the documentation provided on their [Github](https://github.com/json-schema-faker/json-schema-faker/) when you're getting started. Their website includes a [playground environment](https://json-schema-faker.js.org/) that is especially useful when testing whether your schema is valid.

### Providers

The concept of providers is an important one in JSON-Faker-Schema - providers are the generator attributes that are packaged together. For instance, generator attributes such as firstName, lastName are packaged into a Provider called Person. Providers can be thought of as logical groupings of attributes. A complete and exhaustive list of providers can be found on the [Faker Github Wiki](https://github.com/Marak/faker.js/wiki).

## How EHDG Works

This tool is web based, and as such, the implementation differs slightly from the documentation in the Github repository for the library we are using. We are using HTML forms (index.html) to pass data into the JavaScript file (index.js) which includes the Faker logic.

On the HTML page, index.html, the textbox field 'method' you are to insert a valid schema:

``` json
{
  "firstName": {
    "type": "string",
    "faker": "name.firstName"
  }
}
```

In our index.js file we can pass these values from the form using the Express library. Here's an example of how it works:

```javascript
var method = req.body.method;
```

Once we have the form values we can then perform our Faker logic:

```javascript
var dataJSON = JSON.parse(method);
        var data = fakerSchema.generate(dataJSON);
        const eventData = {body: data};
        client.send(eventData); 
```

Outputting 'eventData' to console would look like this:

```json
{
  "firstName": "Oswald"
}
```

## 
