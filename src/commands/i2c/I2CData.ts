import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class I2CDataCommand implements Command<I2CDataPayload> {
  property: CommandProperty = "i2cData";
  operation = RequestOperation.Write;
  payload: I2CDataPayload;

  constructor({ payload }: { payload: I2CDataPayload }) {
    this.payload = payload;
  }
}

export interface I2CDataPayload extends IPayload {
  address: Number;
  profile: string[];
}
