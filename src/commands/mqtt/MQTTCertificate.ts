import { RequestOperation } from "../../models";
import { IPayload } from "../Payload";
import { Command, CommandProperty } from "../Commnad";

export class MQTTCertificateCommand
  implements Command<MQTTCertificatePayload>
{
  property: CommandProperty = "mqttCertificate";
  operation: RequestOperation;
  payload?: MQTTCertificatePayload;

  constructor({
    operation,
    payload,
  }: {
    operation: RequestOperation;
    payload?: MQTTCertificatePayload;
  }) {
    this.operation = operation;
    this.payload = payload;
  }
}

export interface MQTTCertificatePayload extends IPayload {
  pem?: string;
  clear?: boolean;
}
