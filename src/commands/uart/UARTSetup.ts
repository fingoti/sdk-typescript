import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class UARTSetupCommand implements Command<UARTSetupPayload> {
  property: CommandProperty = "uartSetup";
  operation: RequestOperation;
  payload?: UARTSetupPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: UARTSetupPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export const Baudrate = {
  300: 300,
  600: 600,
  1200: 1200,
  2400: 2400,
  4800: 4800,
  9600: 9600,
  19200: 19200,
  31250: 31250,
  38400: 38400,
  57600: 57600,
  74880: 74800,
  115200: 115200,
  230400: 230400,
  256000: 256000,
  460800: 460800,
  921600: 921600,
  1843200: 1843200,
  3686400: 3686400,
} as const;

export type Baudrate = typeof Baudrate[keyof typeof Baudrate];

export const Databits = {
  5: 5,
  6: 6,
  7: 7,
  8: 8,
} as const;

export type Databits = typeof Databits[keyof typeof Databits];

export const Parity = {
  none: 0,
  odd: 1,
  even: 2,
} as const;

export type Parity = typeof Parity[keyof typeof Parity];

export const Stopbits = {
  1: 0,
  1.5: 1,
  2: 2,
} as const;

export type Stopbits = typeof Stopbits[keyof typeof Stopbits];

export interface UARTSetupPayload extends IPayload {
  baudrate: Baudrate;
  databits: Databits;
  parity: Parity;
  stopbits: Stopbits;
}
