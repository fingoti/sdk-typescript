import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class DeviceTimeCommand implements Command<never> {
  property: CommandProperty = "deviceTime";
  operation: RequestOperation = RequestOperation.Read;
}
