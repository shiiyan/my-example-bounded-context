import { UUID } from "@common/domain/uuid";
import { Collaborator } from "@collaboration/domain/collaborator/collaborator";

export class Moderator extends Collaborator {
  constructor({
    id,
    name,
    emailAddress,
  }: {
    id: UUID;
    name: string;
    emailAddress: string;
  }) {
    super({ id, name, emailAddress });
  }

  public equals(moderator: Moderator): boolean {
    return this._id.equals(moderator.id);
  }
}
