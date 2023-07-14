import { Collaborator } from "@collaboration/domain/collaborator/collaborator";
import { UserInRoleAdaptorInterface } from "@collaboration/port/adaptor/service/userInRoleAdaptorInterface";
import { UUID } from "@common/domain/uuid";
import { InvalidArgumentException } from "@common/exception/invalidArgumentException";
import {
  GetUserInRoleResponse,
  UserFacade,
} from "@identity/port/facade/userFacade";

export class UserInRoleAdaptor implements UserInRoleAdaptorInterface {
  private userFacade: UserFacade;

  constructor(userFacade: UserFacade) {
    this.userFacade = userFacade;
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
    const response: GetUserInRoleResponse = this.userFacade.getUserInRole({
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
