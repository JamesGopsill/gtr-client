import { Base } from "./base";
import { Funds } from "./funds";
import { Organisations } from "./organisations";
import { Outcomes } from "./outcomes";
/**
 * Inherits from all the other classes featuring the API calls to the Prusa.
 *
 *
 */
declare class GtrClient extends Base {
}
interface GtrClient extends Funds, Organisations, Outcomes {
}
export { GtrClient as GtrClient };
export * from "./generic.interfaces";
export * from "./funds/interfaces";
export * from "./organisations/interfaces";
export * from "./outcomes/interfaces";
