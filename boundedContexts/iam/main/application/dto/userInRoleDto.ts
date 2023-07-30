import { UUID } from "@common/domain/uuid";

export class UserInRoleDto {
  constructor(
    public readonly id: UUID,
    public readonly name: string,
    public readonly emailAddress: string
  ) {}
}
