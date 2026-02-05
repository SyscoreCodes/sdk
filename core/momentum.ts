export class Momentum {
  private value: number = 0;

  propagate() {
    this.value += 1;
  }

  getMomentum() {
    return this.value;
  }
}
