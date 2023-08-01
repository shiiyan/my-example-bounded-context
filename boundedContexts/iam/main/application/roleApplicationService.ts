import { UUID } from "@common/domain/uuid";
import { UserInRoleDto } from "@iam/main/application/dto/userInRoleDto";
import { UserRepositoryInterface } from "@iam/main/domain/identity/userRepositoryInterface";

export class RoleApplicationService {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public getUserInRole({
    id,
    roleName,
  }: {
    id: UUID;
    roleName: string;
  }): UserInRoleDto | null {
    const user = this.userRepository.findById(id);
    if (user === null) {
      return null;
    }

    return new UserInRoleDto(id, "A", "a@example.com");
  }
}
