import { Agent } from "./agent";

export class AgentManager {
  agents: Agent[] = [];

  register(agent: Agent) {
    this.agents.push(agent);
  }
}
