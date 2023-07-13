import { UUID } from "@common/domain/uuid";

export type GetUserInRoleResponse = { id: UUID; name: string; emailAddress: string } | null;

export class UserFacade {
  public getUserInRole({
    id,
    roleName,
  }: {
    id: string;
    roleName: string;
  }): GetUserInRoleResponse {}
}
