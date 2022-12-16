import { RequestOperation } from "../../models";
import { Command, CommandProperty } from "../Commnad";

export class NetworkInternetCommand implements Command<never> {
  property: CommandProperty = "networkInternet";
  operation: RequestOperation = RequestOperation.Read;
}
