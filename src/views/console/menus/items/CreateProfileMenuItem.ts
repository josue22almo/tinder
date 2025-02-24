import { InitialStateController } from "../../../../controllers/state/InitialStateController";
import { MenuItem } from "./MenuItem";
import { CreateProfileAction } from "../actions/CreateProfileAction";

export class CreateProfileMenuItem extends MenuItem {
  constructor(controller: InitialStateController) {
    super("Create a profile", new CreateProfileAction(controller));
  }
}
