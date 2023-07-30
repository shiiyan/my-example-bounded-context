import { UUID } from "@common/domain/uuid";
import { UserApplicationService } from "@identity/main/application/userApplicationService";
import { UserPresenter } from "@identity/main/port/presentation/userPresenter";

export type GetUserInRoleResponse = {
  id: UUID;
  name: string;
  emailAddress: string;
} | null;

export class UserFacade {
  private userApplicationService: UserApplicationService;
  private userPresenter: UserPresenter;

  constructor({
    userApplicationService,
    userPresenter,
  }: {
    userApplicationService: UserApplicationService;
    userPresenter: UserPresenter;
  }) {
    this.userApplicationService = userApplicationService;
    this.userPresenter = userPresenter;
  }

  public getUserInRole({
    id,
    roleName,
  }: {
    id: string;
    roleName: string;
  }): GetUserInRoleResponse {
    return this.userPresenter.toGetUserInRoleResponse(
      this.userApplicationService.getUserInRole({ id, roleName })
    );
  }
}
