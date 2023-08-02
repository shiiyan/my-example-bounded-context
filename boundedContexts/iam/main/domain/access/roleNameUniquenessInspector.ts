import { RoleRepositoryInterface } from "./roleRepositoryInterface";

export class RoleNameUniquenessInspector {
  constructor(private roleRepository: RoleRepositoryInterface) {}

  public exists({ name }: { name: string }): boolean {
    return Boolean(this.roleRepository.findByName(name));
  }
}
