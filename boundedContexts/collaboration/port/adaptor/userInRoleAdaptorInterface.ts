import { Collaborator } from "@collaboration/domain/collaborator/collaborator";

export interface UserInRoleAdaptorInterface {
  toCollaborator<T extends Collaborator>({
    id,
    roleName,
    className,
  }: {
    id: string;
    roleName: string;
    className: new (...args: ConstructorParameters<typeof Collaborator>) => T;
  }): T;
}
