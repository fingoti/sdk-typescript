import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class DevicePokeCommand implements Command<never> {
  property: CommandProperty = "devicePoke";
  operation: RequestOperation = RequestOperation.Read;
}
