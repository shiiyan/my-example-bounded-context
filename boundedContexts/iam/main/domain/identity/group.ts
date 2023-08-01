import { UUID } from "@common/domain/uuid";
import { Validator } from "@common/validation/validator";
import { GroupMember } from "@iam/main/domain/identity/groupMember";
import { User } from "@iam/main/domain/identity/user";

export class Group {
  private readonly _id: UUID;
  private readonly _name: string;
  private _groupMembers: GroupMember[] = [];

  constructor({
    id,
    name,
    groupMembers,
  }: {
    id: UUID;
    name: string;
    groupMembers: GroupMember[];
  }) {
    Validator.assertArgumentNotEmpty({ name });

    this._id = id;
    this._name = name;
    this._groupMembers = groupMembers;
  }

  public static createNew({ name }: { name: string }): Group {
    return new Group({ id: UUID.createNew(), name: name, groupMembers: [] });
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
    return Boolean(
      this._groupMembers.find((member: GroupMember) =>
        member.isSame(user.toGroupMember())
      )
    );

    // TODO: find member from nested groups.
  }

  public toGroupMember(): GroupMember {
    throw new Error("Method not implemented.");
  }
}
