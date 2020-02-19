# Getting Started

The form has four inputs. 

#### 1) Event Hub Connection String

 If you haven't already created an Event Hub, go to the Azure Portal and click "Create a new resource", search for "Event Hubs" and click "Create". Fill in the required details as you prefer.

Go to your Event Hubs resource and on the left hand sidebar select "Shared Access Policies", then select the policy named "RootManageSharedAccessKey" at which point all the connection details will appear on the right hand side of your screen. Copy the value stored under "Connection string–primary key" and paste it into the Event Hub Connection String field in the form. 

#### 2) Event Hub Namespace

Acquiring your Event Hub Connection String also helps you with finding out your Event Hubs' namespace. The first part of the Connection String will contain the namespace. Here's an example: "Endpoint=sb://<namespace>.servicebus.windows.net/". Whatever you see after "://" and before the ".servicebus" is your Event Hub's namespace. Copy and paste this value into the namespace field in the form.

#### 3) Enter the number of messages you wish to send to Event Hubs.

#### 4) Enter a valid schema that is accepted by json-schema-faker.
If you are unsure of what that looks like, take a look at the [readme](https://github.com/JalalUddin7/EventHubDataGenerator/blob/master/README.md) and [example schemas](https://github.com/JalalUddin7/EventHubDataGenerator/blob/master/documentation/examples.md).

