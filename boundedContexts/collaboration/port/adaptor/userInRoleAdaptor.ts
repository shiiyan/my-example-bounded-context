import { Collaborator } from "@collaboration/domain/collaborator/collaborator";
import { UserInRoleAdaptorInterface } from "@collaboration/port/adaptor/userInRoleAdaptorInterface";
import { InvalidArgumentException } from "@common/exception/invalidArgumentException";
import {
  GetUserInRoleResponse,
  RoleFacade,
} from "@iam/main/port/facade/roleFacade";

export class UserInRoleAdaptor implements UserInRoleAdaptorInterface {
  private roleFacade: RoleFacade;

  constructor(userFacade: RoleFacade) {
    this.roleFacade = userFacade;
  }
  toCollaborator<T extends Collaborator>({
    id,
    roleName,
    className,
  }: {
    id: string;
    roleName: string;
    className: new (...args: ConstructorParameters<typeof Collaborator>) => T;
  }): T {
    const response: GetUserInRoleResponse = this.roleFacade.getUserInRole({
      id,
      roleName,
    });

    if (response === null) {
      throw new InvalidArgumentException(
        "toCollaborator has invalid argument."
      );
    }

    return new className({
      id: response.id,
      name: response.name,
      emailAddress: response.emailAddress,
    });
  }
}
