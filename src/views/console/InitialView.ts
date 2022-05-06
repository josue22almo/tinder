import { ConsoleView } from "./ConsoleView";
import { LoginView } from "./LoginView";
import { ProfileView } from "./ProfileView";

export class InitialView extends ConsoleView {
  private loginView: LoginView;
  private profileView: ProfileView;

  constructor() {
    super();
  }

  public async render(): Promise<void> {
    this.console.print("[UIVIEW] - [WELCOME TO TINDER🔥]");
    this.console.print(
      "[UIVIEW] - Please, choose the option you want to perform [1/4]:"
    );

    let option: string;

    do {
      option = await this.console.read([
        "\n1- Create a profile",
        "2- Login with an existing profile",
        "3- Edit an existing profile",
        "4- Delete profile",
        "5- Exit\n",
      ]);

      switch (option) {
        case "1":
          this.profileView.create();
          break;
        case "2":
          await this.loginView.render();
          break;
        case "3":
          this.profileView.edit();
          break;
        case "4":
          this.profileView.delete()
          break;
        default:
          this.console.print(
            "[UIVIEW] - Wrong input selected. Please, choose again [1/5]:"
          );
      }
    } while (option !== "5");
  }
}
