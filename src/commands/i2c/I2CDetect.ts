import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class I2CDetectCommand implements Command<never> {
  property: CommandProperty = "i2cDetect";
  operation: RequestOperation = RequestOperation.Read;
}

