import { UUID } from "@common/domain/uuid";
import { User } from "@iam/main/domain/identity/user";

export interface UserRepositoryInterface {
  findById(userId: UUID): User | null;
  save(user: User): void;
}
