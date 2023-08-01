import { UUID } from "@common/domain/uuid";
import { Role } from "@iam/main/domain/access/role";
import { RoleRepositoryInterface } from "@iam/main/domain/access/roleRepositoryInterface";
import { Group } from "@iam/main/domain/identity/group";
import { GroupMember } from "@iam/main/domain/identity/groupMember";
import { GroupMemberType } from "@iam/main/domain/identity/groupMemberType";

type RoleSchema = {
  _id: { _value: string };
  _name: string;
  _group: {
    _id: { _value: string };
    _name: string;
    _groupMembers: {
      _id: { _value: string };
      _name: string;
      _type: keyof typeof GroupMemberType;
    }[];
  };
};

export class InMemoryRoleRepository implements RoleRepositoryInterface {
  private data: { [index: string]: string } = {};

  public findByName(roleName: string): Role | null {
    const parsed = <RoleSchema>JSON.parse(this.data[roleName]);
    return this.jsonObjectToEntity(parsed);
  }

  public save(role: Role): void {
    this.data[role.name] = JSON.stringify(role);
  }

  private jsonObjectToEntity(parsed: RoleSchema): Role | null {
    return new Role({
      id: new UUID(parsed._id._value),
      name: parsed._name,
      group: new Group({
        id: new UUID(parsed._group._id._value),
        name: parsed._group._name,
        groupMembers: parsed._group._groupMembers.map(
          (parsedGroupMember) =>
            new GroupMember({
              id: new UUID(parsedGroupMember._id._value),
              name: parsedGroupMember._name,
              type: GroupMemberType[parsedGroupMember._type],
            })
        ),
      }),
    });
  }
}
