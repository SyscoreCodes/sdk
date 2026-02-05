import { SyscoreEngine } from "./core/engine";
import { log } from "./utils/logger";

const engine = new SyscoreEngine();

setInterval(() => {
  engine.tick();
  log("System tick executed");
}, 1000);
