import { UUID } from "@common/domain/uuid";
import { Validator } from "@common/validation/validator";
import { GroupMember } from "@iam/main/domain/identity/groupMember";
import { GroupMemberType } from "./groupMemberType";

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
    Validator.assertArgumentNotEmpty({ userName });
    Validator.assertArgumentNotEmpty({ emailAddress });

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

  public changeUserName(value: string) {
    Validator.assertArgumentNotEmpty({ value });

    this._userName = value;
  }

  public get emailAddress(): string {
    return this._emailAddress;
  }

  public changeEmailAddress(value: string) {
    Validator.assertArgumentNotEmpty({ value });

    this._emailAddress = value;
  }

  public toGroupMember(): GroupMember {
    return new GroupMember({
      id: this.userId,
      name: this.userName,
      type: GroupMemberType.User,
    });
  }
}
