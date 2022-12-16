import { DeviceApi } from "../apis";
import { Configuration } from "../runtime";
import { MqttDeviceResponse, RequestOperation, WifiSlot } from "../models";
import { ICommand } from "./Commnad";
import { IPayload } from "./Payload";
import {
  DeviceColourCommand,
  DeviceBlinkCommand,
  DeviceInformationCommand,
  DeviceActivityCommand,
  DeviceVersionCommand,
  DeviceTimeCommand,
  DevicePokeCommand,
  DeviceBusCommand,
  DevicePowerCommand,
  DeviceSleepCommand,
  BlinkSpeed,
  BusMode,
  DeviceUptimeCommand,
} from "./device";
import {
  NetworkIPCommand,
  NetworkMACCommand,
  NetworkInternetCommand,
  NetworkTrafficCommand,
} from "./network";
import {
  GPIODirectionCommand,
  GPIOStateCommand,
  GPIOToggleCommand,
  GPIOPulseCommand,
  GPIONumber,
  GPIODirectionPayload,
  GPIOAllDirectionPayload,
  GPIOSaveDirectionPayload,
  GPIOStatePayload,
  GPIOAllStatePayload,
  GPIOSaveStatePayload,
  Direction,
  State,
} from "./gpio";
import {
  I2CDataCommand,
  I2CDetectCommand,
  I2CSetupCommand,
  I2CSpeed,
} from "./i2c";
import {
  MQTTCertificateCommand,
  MQTTSessionCommand,
  MQTTSetupCommand,
  MQTTStatusCommand,
} from "./mqtt";
import {
  ScheduleCronCommand,
  ScheduleRequestCommand,
  ScheduleSetupCommand,
  ScheduleSlot,
  ScheduleStatusCommand,
} from "./schedule";
import {
  TimerIntervalCommand,
  TimerRequestCommand,
  TimerStatusCommand,
} from "./timer";
import {
  UARTDataCommand,
  UARTModeCommand,
  UARTMode,
  UARTSessionCommand,
  Baudrate,
  Databits,
  Parity,
  Stopbits,
  UARTSetupCommand,
  UARTTriggerCommand,
} from "./uart";
import {
  WifiCredentialsCommand,
  WifiStatusCommand,
  WiifDetectCommand,
} from "./wifi";

interface IBuilder {
  serial: string;
  response: boolean;
  request: ICommand<IPayload>[];
}

/**
 * The builder class allows you to easily add device commands to a message and send it
 */
export class Builder implements IBuilder {
  serial: string;
  response = true;
  request: ICommand<IPayload>[] = [];
  config: Configuration;

  /**
   * @param {Configuartion} config - API client configuration
   * @param {string} serial - Serial number of the device you would like to send the resulting message to
   * @returns {Builder} Configured instance of a command builder
   */
  constructor({ config, serial }: { config: Configuration; serial: string }) {
    this.serial = serial;
    this.config = config;
  }

  private validateCommands() {
    if (this.request.length == 8) {
      throw Error("You cannot add more than 8 commands to a single request");
    }
  }

  /**
   * @returns {Object} An object that contains the current state of the builder
   */
  toJson() {
    return {
      serial: this.serial,
      response: this.response,
      request: this.request,
    };
  }

  /**
   * Send the message to the device
   * @returns {Promise} Promise which will resolve with either the result from the device or an error
   */
  send(): Promise<MqttDeviceResponse | any> {
    return new Promise((resolve, reject) => {
      var _api = new DeviceApi(this.config);

      _api
        .postDeviceSendrequest({
          deviceRequest: {
            serial: this.serial,
            response: this.response,
            request: this.request,
          },
        })
        .then((res) => {
          this.request = [];
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  }

  /**
   * Adds a request to the builder without using the helper functions included in the builder,
   * typically this is for advanced use
   * @param {ICommand<IPayload>} req a raw command object
   */
  addRawRequest(req: ICommand<IPayload>) {
    this.validateCommands();
    this.request.push(req);
  }

  //#region Device

  /**
   * [Read & Write]
   *
   * Adds a deviceActivity command to the builder
   *
   * @param operation
   * @param payload
   */
  addDeviceActivity(operation: RequestOperation, payload?: boolean): void {
    this.validateCommands();
    this.request.push(
      new DeviceActivityCommand({
        operation: operation,
        payload:
          payload !== null && payload !== undefined
            ? { enabled: payload }
            : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a deviceBlink command to the builder
   *
   * @param operation
   * @param payload
   */
  addDeviceBlink(operation: RequestOperation, payload?: BlinkSpeed): void {
    this.validateCommands();
    this.request.push(
      new DeviceBlinkCommand({
        operation: operation,
        payload:
          payload !== null && payload !== undefined
            ? { state: payload }
            : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a deviceBus command to the builder
   *
   * @param operation
   * @param payload
   */
  addDeviceBus(operation: RequestOperation, payload?: BusMode): void {
    this.validateCommands();
    this.request.push(
      new DeviceBusCommand({
        operation: operation,
        payload:
          payload !== null && payload !== undefined
            ? { protocol: payload }
            : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a deviceColour command to the builder
   *
   * @param operation
   * @param payload
   */
  addDeviceColour(
    operation: RequestOperation,
    payload?: { r: number; g: number; b: number }
  ): void {
    this.validateCommands();
    this.request.push(
      new DeviceColourCommand({
        operation: operation,
        payload: payload
          ? { colour: [payload.r, payload.g, payload.b] }
          : undefined,
      })
    );
  }

  /**
   * [Read]
   *
   * Adds a deviceInformation command to the builder
   */
  addDeviceInformation(): void {
    this.validateCommands();
    this.request.push(new DeviceInformationCommand());
  }

  /**
   * [Read]
   *
   * Adds a devicePoke command to the builder
   */
  addDevicePoke(): void {
    this.validateCommands();
    this.request.push(new DevicePokeCommand());
  }

  /**
   * [Read]
   *
   * Adds a devicePower command to the builder
   */
  addDevicePower(): void {
    this.validateCommands();
    this.request.push(new DevicePowerCommand());
  }

  /**
   * [Write]
   *
   * Adds a deviceInformation command to the builder
   *
   * @param payload
   */
  addDeviceSleep(payload: number): void {
    this.validateCommands();
    this.request.push(
      new DeviceSleepCommand({
        payload: { duration: payload },
      })
    );
  }

  /**
   * [Read]
   *
   * Adds a deviceTime command to the builder
   */
  addDeviceTime(): void {
    this.validateCommands();
    this.request.push(new DeviceTimeCommand());
  }

  /**
   * [Read]
   *
   * Adds a deviceVersion command to the builder
   */
  addDeviceVersion(): void {
    this.validateCommands();
    this.request.push(new DeviceVersionCommand());
  }

  /**
   * [Read]
   *
   * Adds a deviceUptime command to the builder
   */
  addDeviceUptime(): void {
    this.validateCommands();
    this.request.push(new DeviceUptimeCommand());
  }

  //#endregion

  //#region GPIO

  /**
   * [Read & Write]
   *
   * Adds a gpioDirection command to the builder
   *
   * @param operation
   * @param payload
   */
  addGPIODirection(
    operation: RequestOperation,
    payload?:
      | {
          direction: [Direction, Direction, Direction, Direction];
          save?: boolean;
        }
      | { gpio: GPIONumber; value: Direction; save?: boolean }
      | { save: boolean }
  ): void {
    this.validateCommands();

    let p:
      | GPIODirectionPayload
      | GPIOAllDirectionPayload
      | GPIOSaveDirectionPayload
      | undefined;

    if (payload) {
      let keys = Object.keys(payload);

      if (keys.length === 1 && keys.find((k) => k === "save")) {
        p = { save: payload["save"] ?? false };
      } else if (keys.find((k) => k === "direction")) {
        p = {
          direction: [
            payload["direction"][0],
            payload["direction"][1],
            payload["direction"][2],
            payload["direction"][3],
          ],
          save:
            payload.save !== null && payload.save !== undefined
              ? payload.save
              : false,
        };
      } else if (keys.find((k) => k === "gpio")) {
        p = {
          gpio: payload["gpio"],
          value: payload["value"],
          save:
            payload.save !== null && payload.save !== undefined
              ? payload.save
              : false,
        };
      }
    } else {
      p = undefined;
    }

    this.request.push(
      new GPIODirectionCommand({
        operation: operation,
        payload: p,
      })
    );
  }

  /**
   * [Write]
   *
   * Adds a gpioPulse command to the builder
   *
   * @param payload
   */
  addGPIOPulse(payload: { gpio: 1 | 2 | 3 | 4; duration: number }): void {
    this.validateCommands();
    this.request.push(
      new GPIOPulseCommand({
        payload: payload,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a gpioState command to the builder
   *
   * @param operation
   * @param payload
   */
  addGPIOState(
    operation: RequestOperation,
    payload?:
      | { state: [State, State, State, State]; save?: boolean }
      | { gpio: GPIONumber; value: State; save?: boolean }
      | { save: boolean }
  ): void {
    this.validateCommands();

    let p:
      | GPIOStatePayload
      | GPIOAllStatePayload
      | GPIOSaveStatePayload
      | undefined;

    if (payload) {
      let keys = Object.keys(payload);
      if (keys.length === 1 && keys.find((k) => k === "save")) {
        p = { save: payload["save"] ?? false };
      } else if (keys.find((k) => k === "state")) {
        p = {
          state: [
            payload["state"][0],
            payload["state"][1],
            payload["state"][2],
            payload["state"][3],
          ],
          save:
            payload.save !== null && payload.save !== undefined
              ? payload.save
              : false,
        };
      } else if (keys.find((k) => k === "gpio")) {
        p = {
          gpio: payload["gpio"],
          value: payload["value"],
          save:
            payload.save !== null && payload.save !== undefined
              ? payload.save
              : false,
        };
      }
    } else {
      p = undefined;
    }

    this.request.push(
      new GPIOStateCommand({
        operation: operation,
        payload: p,
      })
    );
  }

  /**
   * [Write]
   *
   * Adds a gpioToggle command to the builder
   *
   * @param payload
   */
  addGPIOToggle(payload: 1 | 2 | 3 | 4): void {
    this.validateCommands();
    this.request.push(
      new GPIOToggleCommand({
        payload: { gpio: payload },
      })
    );
  }

  //#endregion

  //#region I2C

  /**
   * [Write]
   *
   * Adds a i2cData command to the builder
   *
   * @param payload
   */
  addI2CData(payload: { address: Number; profile: string[] }): void {
    this.validateCommands();
    this.request.push(new I2CDataCommand({ payload: payload }));
  }

  /**
   * [Read]
   *
   * Adds a i2cDetect command to the builder
   */
  addI2CDetect(): void {
    this.validateCommands();
    this.request.push(new I2CDetectCommand());
  }

  /**
   * [Read & Write]
   *
   * Adds a i2cSetup command to the builder
   *
   * @param operation
   * @param payload
   */
  addI2CSetup(
    operation: RequestOperation,
    payload?: { speed?: I2CSpeed | Number; scan?: boolean }
  ): void {
    this.validateCommands();
    this.request.push(
      new I2CSetupCommand({
        operation: operation,
        payload: payload
          ? {
              speed: payload.speed as number,
              scan: payload.scan,
            }
          : undefined,
      })
    );
  }

  //#endregion

  //#region MQTT

  /**
   * [Read & Write]
   *
   * Adds a mqttCertificate command to the builder
   *
   * @param operation
   * @param payload
   */
  addMQTTCertificate(
    operation: RequestOperation,
    payload?: { pem?: string; clear?: boolean }
  ): void {
    this.validateCommands();
    this.request.push(
      new MQTTCertificateCommand({
        operation: operation,
        payload: payload
          ? {
              pem: payload.pem,
              clear: payload.clear,
            }
          : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a mqttSession command to the builder
   *
   * @param operation
   * @param payload
   */
  addMQTTSession(operation: RequestOperation, payload?: Number): void {
    this.validateCommands();
    this.request.push(
      new MQTTSessionCommand({
        operation: operation,
        payload: payload ? { duration: payload } : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a mqttSetup command to the builder
   *
   * @param operation
   * @param payload
   */
  addMQTTSetup(
    operation: RequestOperation,
    payload?: {
      host: string;
      username: string;
      port: Number;
      qos: 0 | 1 | 2;
      secure: boolean;
      retain: boolean;
    }
  ): void {
    this.validateCommands();
    this.request.push(
      new MQTTSetupCommand({
        operation: operation,
        payload: payload
          ? {
              host: payload.host,
              username: payload.username,
              port: payload.port,
              qos: payload.qos,
              secure: payload.secure,
              retain: payload.retain,
            }
          : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a mqttStatus command to the builder
   *
   * @param operation
   * @param payload
   */
  addMQTTStatus(operation: RequestOperation, payload?: boolean): void {
    this.validateCommands();
    this.request.push(
      new MQTTStatusCommand({
        operation: operation,
        payload:
          payload !== null && payload !== undefined
            ? { enabled: payload }
            : undefined,
      })
    );
  }

  //#endregion

  //#region Network

  /**
   * [Read]
   *
   * Adds a networkInternet command to the builder
   */
  addNetworkInternet(): void {
    this.validateCommands();
    this.request.push(new NetworkInternetCommand());
  }

  /**
   * [Read & Write]
   *
   * Adds a networkIp command to the builder
   *
   * @param operation
   * @param payload
   */
  addNetworkIP(
    operation: RequestOperation,
    payload?: {
      dhcp: boolean;
      local?: string;
      mask?: string;
      gateway?: string;
      dns?: string;
    }
  ): void {
    this.validateCommands();
    this.request.push(
      new NetworkIPCommand({
        operation: operation,
        payload: payload
          ? {
              dhcp: payload.dhcp,
              local: payload.local,
              mask: payload.mask,
              gateway: payload.gateway,
              dns: payload.dns,
            }
          : undefined,
      })
    );
  }

  /**
   * [Read]
   *
   * Adds a networkMac command to the builder
   */
  addNetworkMAC(): void {
    this.validateCommands();
    this.request.push(new NetworkMACCommand());
  }

  /**
   * [Read]
   *
   * Adds a networkTraffic command to the builder
   */
  addNetworkTraffic(): void {
    this.validateCommands();
    this.request.push(new NetworkTrafficCommand());
  }

  //#endregion

  //#region Schedule

  /**
   * [Read & Write]
   *
   * Adds a scheduleCron command to the builder
   *
   * @param operation
   * @param payload
   */
  addScheduleCron(
    operation: RequestOperation,
    payload: ScheduleSlot | { slot: ScheduleSlot; cron: string }
  ): void {
    this.validateCommands();
    this.request.push(
      new ScheduleCronCommand({
        operation: operation,
        payload:
          operation === RequestOperation.Write
            ? {
                slot: payload["slot"] as ScheduleSlot,
                cron: payload["cron"] as string,
              }
            : { slot: payload as ScheduleSlot },
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a scheduleRequest command to the builder
   *
   * @param operation
   * @param payload
   */
  addScheduleRequest(
    operation: RequestOperation,
    payload:
      | ScheduleSlot
      | { slot: ScheduleSlot; request: [ICommand<IPayload>] }
  ): void {
    this.request.push(
      new ScheduleRequestCommand({
        operation: operation,
        payload:
          operation === RequestOperation.Write
            ? {
                slot: payload["slot"] as ScheduleSlot,
                request: payload["request"] as [ICommand<IPayload>],
              }
            : { slot: payload as ScheduleSlot },
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a scheduleSetup command to the builder
   *
   * @param operation
   * @param payload
   */
  addScheduleSetup(
    operation: RequestOperation,
    payload: ScheduleSlot | { slot: ScheduleSlot; clear: boolean }
  ): void {
    this.validateCommands();
    this.request.push(
      new ScheduleSetupCommand({
        operation: operation,
        payload:
          operation === RequestOperation.Write
            ? {
                slot: payload["slot"] as ScheduleSlot,
                clear: payload["clear"] as boolean,
              }
            : {
                slot: payload as ScheduleSlot,
              },
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a scheduleStatus command to the builder
   *
   * @param operation
   * @param payload
   */
  addScheduleStatus(
    operation: RequestOperation,
    payload: ScheduleSlot | { slot: ScheduleSlot; enabled: boolean }
  ): void {
    this.validateCommands();
    this.request.push(
      new ScheduleStatusCommand({
        operation: operation,
        payload:
          operation === RequestOperation.Write
            ? {
                slot: payload["slot"] as ScheduleSlot,
                enabled: payload["enabled"] as boolean,
              }
            : {
                slot: payload as ScheduleSlot,
              },
      })
    );
  }

  //#endregion

  //#region Timer

  /**
   * [Read & Write]
   *
   * Adds a timerInterval command to the builder
   *
   * @param operation
   * @param payload
   */
  addTimerInterval(operation: RequestOperation, payload?: number): void {
    this.validateCommands();
    this.request.push(
      new TimerIntervalCommand({
        operation: operation,
        payload: payload ? { interval: payload } : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a timerRequest command to the builder
   *
   * @param operation
   * @param payload
   */
  addTimerRequest(
    operation: RequestOperation,
    payload?: ICommand<IPayload>[]
  ): void {
    this.validateCommands();
    this.request.push(
      new TimerRequestCommand({
        operation: operation,
        payload: payload ? { request: payload } : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a timerStatus command to the builder
   *
   * @param operation
   * @param payload
   */
  addTimerStatus(
    operation: RequestOperation,
    payload?: { enabled: boolean; repeat: boolean }
  ): void {
    this.validateCommands();
    this.request.push(
      new TimerStatusCommand({
        operation: operation,
        payload: payload ? payload : undefined,
      })
    );
  }

  //#endregion

  //#region UART

  /**
   * [Write]
   *
   * Adds a uartData command to the builder
   *
   * @param payload
   */
  addUARTData(payload: number[]): void {
    this.validateCommands();
    this.request.push(
      new UARTDataCommand({
        payload: { data: payload },
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a uartMode command to the builder
   *
   * @param operation
   * @param payload
   */
  addUARTMode(operation: RequestOperation, payload?: UARTMode): void {
    this.validateCommands();
    this.request.push(
      new UARTModeCommand({
        operation: operation,
        payload: payload ? { mode: payload } : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a uartSession command to the builder
   *
   * @param operation
   * @param payload
   */
  addUARTSession(operation: RequestOperation, payload?: number): void {
    this.validateCommands();
    this.request.push(
      new UARTSessionCommand({
        operation: operation,
        payload: payload ? { duration: payload } : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a uartSetup command to the builder
   *
   * @param operation
   * @param payload
   */
  addUARTSetup(
    operation: RequestOperation,
    payload?: {
      baudrate: Baudrate;
      databits: Databits;
      parity: Parity;
      stopbits: Stopbits;
    }
  ): void {
    this.validateCommands();
    this.request.push(
      new UARTSetupCommand({
        operation: operation,
        payload: payload
          ? {
              ...payload,
            }
          : undefined,
      })
    );
  }

  /**
   * [Read & Write]
   *
   * Adds a uartTrigger command to the builder
   *
   * @param operation
   * @param payload
   */
  addUARTTrigger(
    operation: RequestOperation,
    payload?: { length?: number; terminator?: number[] }
  ): void {
    this.validateCommands();
    this.request.push(
      new UARTTriggerCommand({
        operation: operation,
        payload: {
          ...payload,
        },
      })
    );
  }

  //#endregion

  //#region WiFi

  /**
   * [Read & Write]
   *
   * Adds a wifiCredentials command to the builder
   *
   * @param operation
   * @param payload
   */
  addWifiCredentials(
    operation: RequestOperation,
    payload?: { slot: WifiSlot; ssid: string; password: string }
  ): void {
    this.validateCommands();
    this.request.push(
      new WifiCredentialsCommand({
        operation: operation,
        payload: payload ? payload : undefined,
      })
    );
  }

  /**
   * [Read]
   *
   * Adds a wifiDetect command to the builder
   */
  addWifiDetect(): void {
    this.validateCommands();
    this.request.push(new WiifDetectCommand());
  }

  /**
   * [Read & Write]
   *
   * Adds a wifiStatus command to the builder
   *
   * @param operation
   * @param payload
   */
  addWifiStatus(operation: RequestOperation, payload?: boolean): void {
    this.validateCommands();
    this.request.push(
      new WifiStatusCommand({
        operation: operation,
        payload:
          payload !== null && payload !== undefined
            ? { restart: payload }
            : undefined,
      })
    );
  }

  //#endregion
}
