import { UUID } from "@common/domain/uuid";
import { RoleApplicationService } from "@iam/main/application/roleApplicationService";
import { RolePresenter as RolePresenter } from "@iam/main/port/presentation/rolePresenter";

export type GetUserInRoleResponse = {
  id: UUID;
  name: string;
  emailAddress: string;
} | null;

export class RoleFacade {
  private roleApplicationService: RoleApplicationService;
  private rolePresenter: RolePresenter;

  constructor({
    userApplicationService,
    userPresenter,
  }: {
    userApplicationService: RoleApplicationService;
    userPresenter: RolePresenter;
  }) {
    this.roleApplicationService = userApplicationService;
    this.rolePresenter = userPresenter;
  }

  public getUserInRole({
    id,
    roleName,
  }: {
    id: string;
    roleName: string;
  }): GetUserInRoleResponse {
    return this.rolePresenter.toGetUserInRoleResponse(
      this.roleApplicationService.getUserInRole({ id: new UUID(id), roleName })
    );
  }
}
