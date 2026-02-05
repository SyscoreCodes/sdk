import { Flow } from "./flow";
import { Momentum } from "./momentum";

export class SyscoreEngine {
  flow: Flow;
  momentum: Momentum;

  constructor() {
    this.flow = new Flow();
    this.momentum = new Momentum();
  }

  tick() {
    this.flow.update();
    this.momentum.propagate();
  }
}
