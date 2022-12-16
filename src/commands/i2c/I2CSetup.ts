import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class I2CSetupCommand implements Command<I2CSetupPayload> {
  property: CommandProperty = "i2cSetup";
  operation: RequestOperation;
  payload?: I2CSetupPayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: I2CSetupPayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export const I2CSpeed = {
  Slow: 100000,
  Fast: 400000,
  Superfast: 1000000,
} as const;

export type I2CSpeed = typeof I2CSpeed[keyof typeof I2CSpeed];

export interface I2CSetupPayload extends IPayload {
  speed?: I2CSpeed | number;
  scan?: boolean;
}
