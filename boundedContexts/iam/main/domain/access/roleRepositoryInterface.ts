import { Role } from "@iam/main/domain/access/role";

export interface RoleRepositoryInterface {
  findByName(roleName: string): Role | null;
  save(role: Role): void;
}
