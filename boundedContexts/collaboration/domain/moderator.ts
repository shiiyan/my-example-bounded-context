import { UUID } from "@common/domain/uuid";

export class Moderator {
  private _id: UUID;
  private _name: string;
  private _emailAddress: string;

  constructor({
    id,
    name,
    emailAddress,
  }: {
    id: UUID;
    name: string;
    emailAddress: string;
  }) {
    this._id = id;
    this._name = name;
    this._emailAddress = emailAddress;
  }

  public get id(): UUID {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get emailAddress(): string {
    return this._emailAddress;
  }

  public equals(moderator: Moderator): boolean {
    return this._id.equals(moderator.id);
  }
}
