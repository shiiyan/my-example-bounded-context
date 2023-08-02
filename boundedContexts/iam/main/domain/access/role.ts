import { UUID } from "@common/domain/uuid";
import { Validator } from "@common/validation/validator";
import { Group } from "@iam/main/domain/identity/group";
import { User } from "@iam/main/domain/identity/user";
import { RoleNameUniquenessInspector } from "@iam/main/domain/access/roleNameUniquenessInspector";

export class Role {
  private _id: UUID;
  private _name: string;
  private _group: Group;

  constructor({ id, name, group }: { id: UUID; name: string; group: Group }) {
    Validator.assertArgumentNotEmpty({ name });

    this._id = id;
    this._name = name;
    this._group = group;
  }

  public static createNew({
    name,
    inspector,
  }: {
    name: string;
    inspector: RoleNameUniquenessInspector;
  }): Role {
    Validator.assertStateFalse({ isRoleNameExist: inspector.exists({ name }) });

    return new Role({
      id: UUID.createNew(),
      name,
      group: Group.createNew({ name }),
    });
  }

  public get id(): UUID {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public changeName({
    name,
    inspector,
  }: {
    name: string;
    inspector: RoleNameUniquenessInspector;
  }): void {
    Validator.assertArgumentNotEmpty({ value: name });
    Validator.assertStateFalse({ isRoleNameExist: inspector.exists({ name }) });

    this._name = name;
  }

  public get group(): Group {
    return this._group;
  }

  public assignUser(user: User): void {
    Validator.assertStateFalse({ isInRole: this.isInRole(user) });

    this._group.addUser(user);
  }

  public unassignUser(user: User): void {}

  public isInRole(user: User): boolean {
    return this._group.isMember(user);
  }
}
