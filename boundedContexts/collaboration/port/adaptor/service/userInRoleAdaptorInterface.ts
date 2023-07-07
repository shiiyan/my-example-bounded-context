import { Collaborater } from "@collaboration/domain/collaborator/collaborator";

export interface UserInRoleAdaptorInterface {
  toCollaborator<T extends Collaborater>({
    id,
    roleName,
  }: {
    id: string;
    roleName: string;
  }): T;
}
