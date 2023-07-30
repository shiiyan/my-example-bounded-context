import { UUID } from "@common/domain/uuid";
import { UserInRoleDto } from "@iam/main/application/dto/userInRoleDto";

export class UserApplicationService {
  public getUserInRole({
    id,
    roleName,
  }: {
    id: string;
    roleName: string;
  }): UserInRoleDto | null {
    return new UserInRoleDto(
      new UUID(id),
      "test",
      "test@example"
    );
  }
}
