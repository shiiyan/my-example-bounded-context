import { UUID } from "@common/domain/uuid";

export type UserInRoleDto = {
  id: UUID;
  name: string;
  emailAddress: string;
};

export class UserApplicationService {
  public getUserInRole({
    id,
    roleName,
  }: {
    id: string;
    roleName: string;
  }): UserInRoleDto | null {
    throw new Error("Method not implemented.");
  }
}
