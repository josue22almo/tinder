/* eslint-disable max-classes-per-file */
import { Session } from "../../models/Session";

export abstract class StateController {
  protected session: Session;

  constructor(session: Session) {
    this.session = session;
  }
}
