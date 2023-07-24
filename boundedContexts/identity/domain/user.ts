import { UUID } from "@common/domain/uuid";

export class User {
  private _id: UUID;
  private _userName: string;
  private _emailAddress: string;

  constructor({
    userName,
    emailAddress,
  }: {
    userName: string;
    emailAddress: string;
  }) {
    this._id = UUID.createNew();
    this._userName = userName;
    this._emailAddress = emailAddress;
  }

  public get userId(): UUID {
    return this._id;
  }

  public get userName(): string {
    return this._userName;
  }

  public set userName(value: string) {
    this._userName = value;
  }

  public get emailAddress(): string {
    return this._emailAddress;
  }

  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
}
