export class Flow {
  private rate: number = 1;

  update() {
    this.rate += Math.random() * 0.01;
  }

  getRate() {
    return this.rate;
  }
}
