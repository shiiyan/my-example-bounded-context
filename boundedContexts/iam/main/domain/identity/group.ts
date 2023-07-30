import { UUID } from "@common/domain/uuid";
import { GroupMember } from "@identity/main/domain/identity/groupMember";
import { User } from "@identity/main/domain/identity/user";

export class Group {
  private readonly _id: UUID;
  private readonly _name: string;
  private _groupMembers: GroupMember[] = [];

  constructor({ name }: { name: string }) {
    this._id = UUID.createNew();
    this._name = name;
    this._groupMembers = [];
  }

  public get id(): UUID {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get groupMembers(): GroupMember[] {
    return this._groupMembers;
  }

  public addGroup(group: Group): void {
    throw new Error("Method not implemented.");
  }

  public addUser(user: User): void {
    this._groupMembers.push(user.toGroupMember());
  }

  public isMember(user: User): boolean {
    return this._groupMembers.includes(user.toGroupMember());

    // TODO: find member from nested groups.
  }

  public toGroupMember(): GroupMember {
    throw new Error("Method not implemented.");
  }
}
