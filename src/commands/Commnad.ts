import { RequestOperation } from "../models/RequestOperation";

export type CommandProperty =
  | "deviceActivity"
  | "deviceBlink"
  | "deviceBus"
  | "deviceColour"
  | "deviceInformation"
  | "devicePoke"
  | "devicePower"
  | "deviceSleep"
  | "deviceTime"
  | "deviceUptime"
  | "deviceVersion"
  | "gpioDirection"
  | "gpioPulse"
  | "gpioState"
  | "gpioToggle"
  | "i2cData"
  | "i2cDetect"
  | "i2cSetup"
  | "mqttCertificate"
  | "mqttSession"
  | "mqttSetup"
  | "mqttStatus"
  | "networkInternet"
  | "networkIp"
  | "networkMac"
  | "networkTraffic"
  | "scheduleCron"
  | "scheduleRequest"
  | "scheduleSetup"
  | "scheduleStatus"
  | "timerInterval"
  | "timerRequest"
  | "timerStatus"
  | "uartData"
  | "uartMode"
  | "uartSession"
  | "uartSetup"
  | "uartTrigger"
  | "wifiCredentials"
  | "wifiDetect"
  | "wifiStatus";

export interface ICommand<T> {
  property: CommandProperty;
  operation: RequestOperation;
  payload?: T;
}

export class Command<T> implements ICommand<T> {
  property: CommandProperty;
  operation: RequestOperation;
  payload?: T;

  constructor({ property, operation, payload }: ICommand<T>) {
    (this.property = property),
      (this.operation = operation),
      (this.payload = payload);
  }
}
