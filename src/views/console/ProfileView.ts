import { CreateProfileController } from "../../controllers/CreateProfileController";
import { DeleteProfileController } from "../../controllers/DeleteProfileController";
import { EditProfileController } from "../../controllers/EditProfileController";
import { GetProfileController } from "../../controllers/GetProfileController";
import { FileSystemProfilePersistenceService } from "../../infrastructure/file-system/FileSystemProfilePersistenceService";
import { ConsoleView } from "./ConsoleView";
import { CreateProfileView } from "./CreateProfileView";
import { DeleteProfileView } from "./DeleteProfileView";
import { EditProfileView } from "./EditProfileView";
import { GetProfileView } from "./GetProfileView";

export class ProfileView {
  private getProfileView: GetProfileView;
  private deleteProfileView: DeleteProfileView;
  private createProfileView: CreateProfileView;
  private editProfileView: EditProfileView;
  constructor() {
    this.createProfileView = new CreateProfileView(
      new CreateProfileController() // TODO: implementation
    );
    this.editProfileView = new EditProfileView(
      new EditProfileController(new GetProfileController())
    );
    this.deleteProfileView = new DeleteProfileView(
      new DeleteProfileController(new FileSystemProfilePersistenceService())
    );
    this.getProfileView = new GetProfileView(new GetProfileController());
  }

  public get(): void {
    this.getProfileView.render();
  }

  public create(): void {
    this.createProfileView.render();
  }

  public delete(): void {
    this.deleteProfileView.render();
  }

  public edit(): void {
    this.editProfileView.render();
  }
}
