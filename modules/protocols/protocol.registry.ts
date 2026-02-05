import { Protocol } from "./protocol";

export class ProtocolRegistry {
  private protocols: Protocol[] = [];

  add(protocol: Protocol) {
    this.protocols.push(protocol);
  }
}
