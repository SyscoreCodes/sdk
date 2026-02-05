import { Network } from "./network";

export class NetworkMap {
  networks: Network[] = [];

  connect(network: Network) {
    this.networks.push(network);
  }
}
