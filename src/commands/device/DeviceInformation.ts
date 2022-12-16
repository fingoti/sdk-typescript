import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class DeviceInformationCommand implements Command<never> {
  property: CommandProperty = "deviceInformation";
  operation: RequestOperation = RequestOperation.Read;
}
