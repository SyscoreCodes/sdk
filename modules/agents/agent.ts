export class Agent {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  act() {
    return `Agent ${this.id} acts`;
  }
}
