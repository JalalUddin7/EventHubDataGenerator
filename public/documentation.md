# Event Hubs Data Generator Documentation

## Getting Started

Event Hubs Data Generator makes use of a library called JSON-Faker-Schema - it would be wise to refer to the documentation provided on their [Github](https://github.com/json-schema-faker/json-schema-faker/) when you're getting started. Their website includes a [playground environment](https://json-schema-faker.js.org/) that is especially useful when testing whether your schema is valid.

## Providers

The concept of providers is an important one in Faker - providers are the generator attributes that are packaged together. For instance, generator attributes such as firstName, lastName are packaged into a Provider called Person. Providers can be thought of as logical groupings of attributes. If you want further details on what providers are available - please take a look at the [wiki](https://github.com/Marak/faker.js/wiki). 

## How does it work?

This tool is web based, and as such, differs slightly from the way the documentation suggests. We are using forms to pass data into the JavaScript file which includes the Faker logic.

In the textbox field 'method' you need to provide a valid schema:

``` json
{
  "firstName": {
    "type": "string",
    "faker": "name.firstName"
  }
}
```

In our index.js file we can pass these values from the form using the Requests library. Here's an example of how it works:

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



## 



