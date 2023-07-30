import { UUID } from "@common/domain/uuid";
import { GroupMemberType } from "@iam/main/domain/identity/groupMemberType";

export class GroupMember {
  private _id: UUID;
  private _name: string;
  private _type: GroupMemberType;

  constructor({
    id,
    name,
    type,
  }: {
    id: UUID;
    name: string;
    type: GroupMemberType;
  }) {
    this._id = id;
    this._name = name;
    this._type = type;
  }

  public get id(): UUID {
    return this._id;
  }

  public set id(value: UUID) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get type(): GroupMemberType {
    return this._type;
  }

  public set type(value: GroupMemberType) {
    this._type = value;
  }

  public isSame(that: GroupMember): boolean {
    return (
      this.id.equals(that.id) &&
      this.name === that.name &&
      this.type === that.type
    );
  }
}
