import { CollaboratorServiceInterface } from "@collaboration/domain/collaborator/collaboratorServiceInterface";
import { Moderator } from "@collaboration/domain/collaborator/moderator";
import { UserInRoleAdaptorInterface } from "@collaboration/port/adaptor/userInRoleAdaptorInterface";

export class TranslatingCollaboratorService
  implements CollaboratorServiceInterface
{
  private userInRoleAdaptor: UserInRoleAdaptorInterface;

  constructor({
    userInRoleAdaptor,
  }: {
    userInRoleAdaptor: UserInRoleAdaptorInterface;
  }) {
    this.userInRoleAdaptor = userInRoleAdaptor;
  }

  createModeratorFrom(moderatorId: string): Moderator {
    return this.userInRoleAdaptor.toCollaborator<Moderator>({
      id: moderatorId,
      roleName: "moderator",
      className: Moderator,
    });
  }
}
