import { GetProfileController } from "../../controllers/GetProfileController";
import { ConsoleView } from "./ConsoleView";
import { ProfileView } from "./ProfileView";

export class GetProfileView extends ConsoleView {
  private controller: GetProfileController;
  private profileView: ProfileView;

  constructor() {
    super();
    this.controller = new GetProfileController();
    this.profileView = new ProfileView();
  }

  public async render(): Promise<void> {
    let name = await this.readString([
      "What profile do you want to get? (Name)",
    ]);
    const profile = this.controller.control(name);


    this.profileView.render(profile);
  }
}
