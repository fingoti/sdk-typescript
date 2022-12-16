import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class DevicePowerCommand implements Command<never> {
  property: CommandProperty = "devicePower";
  operation: RequestOperation = RequestOperation.Read;
}
