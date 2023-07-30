import { UserInRoleDto } from "@identity/main/application/userApplicationService";
import { GetUserInRoleResponse } from "../facade/userFacade";

export class UserPresenter {
  public toGetUserInRoleResponse(
    userInRoleDto: UserInRoleDto | null
  ): GetUserInRoleResponse {
    if (userInRoleDto === null) {
      return null;
    }

    return {
      id: userInRoleDto.id,
      name: userInRoleDto.name,
      emailAddress: userInRoleDto.emailAddress,
    };
  }
}
