

# @fingoti/sdk

The Fingoti SDK makes it easy to use Fingoti infrastructure to manage your organisations & users as well as communicate with your devices, follow the examples below to get started

---

<br>

### Environment

- Node.js
- Webpack
- Browserify

### Language level

- ES5 - you must have a Promises/A+ library installed
- ES6

### Module system

- CommonJS
- ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`.

<br>
<br>

## Install

In the project you would like to use the Fingoti SDK run the following commands, depending on the package manager in use

```bash
npm i @fingoti/sdk
```

or

```
yarn add @fingoti/sdk
```

<br>
<br>

## Getting Started

Here we will briefly cover the steps needed to get up and running with the SDK

<br>

### Create a configuration

The first step to communicating with the Fingoti infrastructure is authentication and configureation, to do this you will need an API key which can be obtained from http://account.fingoti.com, once you have an API key you can create a configuration as shown below

```typescript
import { Configuration } from "@fingoti/sdk";

const config = new Configuration({
  accessToken: "<your-api-key>",
});
```

Now you have a configuration we can use that to authenticate requests to the Fingoti infrastructure, lets start with a basic Organisation information request.

<br>

### Using the APIs

In the SDK the diffrent sections of the infrastructure are split into seperate API's in the example below, we are going to use the Organisation API to retrieve basic information about your Organisation. All the functions are promises so you can use them with either `.then()` syntax or `async/await` syntax

```typescript
import { OrganisationApi } from "@fingoti/sdk";

const organisationApi = new OrganisationApi(config);

async function getOrganisationData() {
  try {
    var response = await organisationApi.getOrganisation();
    console.log("Organisation data", response);
  } catch (err) {
    console.error("Failed to get Organisation data", err);
  }
}
```
or using `.then()` syntax
```typescript
function getOrganisationData() {
  organisationApi
    .getOrganisation()
    .then((response) => {
      console.log("Organisation data", response);
    })
    .catch((err) => {
      console.error("Failed to get Organisation data", err);
    });
}
```

Running the `getOrganisationData()` function should print a response in the console, if it does, great! You can now explore the rest of the docuemntation to find API's that fit your requirements.

<br>

### Device Control/Communication

Alongside the API's this package also comes with what we call a command builder which allows you to assemble requests to send to your Fingoti devices. It works in a similar way to the other API's and takes the same configuration shown in [Create a configuration](#create-a-configuration), see below

```typescript
import { Builder } from "@fingoti/sdk";

//Create a new command builder
const commandBuilder = new Builder({
  config: config,
  serial: "A0B1C3D4E5",
});

/*
Device commands can have read or write operation, for commands where both is avaliable you must specify which operation you would like to perform. 
In cases where only one operation is avaliable the operation can be omitted.

All write operations require a payload
*/
async function sendCommands() {
  //Adds a deviceColour read command
  commandBuilder.addDeviceColour(RequestOperation.Read);

  //Adds a deviceColour write command with a payload of RGB values
  commandBuilder.addDeviceColour(RequestOperation.Write, {
    r: 100,
    g: 20,
    b: 225,
  });

  //Adds a devicePower read command, no operation required because read is the only possible operation
  commandBuilder.addDevicePower();

  //Adds a uartData write command, no opeation required because write is the only possible opeartion
  commandBuilder.addUARTData([
    72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100,
  ]);

  //The .toJson() method allows you to get a copy of what the builder has assembled in the background, this is useful for debugging
  const currentCommands = commandBuilder.toJson();
  console.log("Current commands", currentCommands);

  //Once you've finished assembling your commands, send them
  try {
    var result = await commandBuilder.send();
    console.log("Sent commands result", result);
  } catch (err) {
    console.error("Error sending commands", err);
  }
}
```
After running `sendCommands()` you should see 2 outputs in your console, the first one is the what was sent to the device and the second is what the device responded with, This is just a small introduction into the command builder and you can find a full list of [avaliable commands](https://developer.fingoti.com/hardware/protocol)