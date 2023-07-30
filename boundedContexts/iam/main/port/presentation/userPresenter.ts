import { UserInRoleDto } from "@iam/main/application/dto/userInRoleDto";
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
