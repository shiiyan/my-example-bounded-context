import { Collaborator } from "@collaboration/domain/collaborator/collaborator";
import { UUID } from "@common/domain/uuid";

export class Author extends Collaborator {
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

  public equals(author: Author): boolean {
    return this._id.equals(author.id);
  }
}
