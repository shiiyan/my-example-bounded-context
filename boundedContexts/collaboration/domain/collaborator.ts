import { UUID } from "@common/domain/uuid";

export abstract class Collaborater {
  protected _id: UUID;
  protected _name: string;
  protected _emailAddress: string;

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

  public abstract equals(another: Collaborater): boolean;
}
