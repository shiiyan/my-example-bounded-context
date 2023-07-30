import { UUID } from "@common/domain/uuid";
import { Validator } from "@common/validation/validator";
import { Group } from "@identity/domain/identity/group";
import { User } from "@identity/domain/identity/user";

export class Role {
  private _id: UUID;
  private _group: Group;
  private _name: string;

  constructor({ name }: { name: string }) {
    Validator.assertArgumentNotEmpty({ name });

    this._id = UUID.createNew();
    this._name = name;
    this._group = new Group({ name });
  }

  public get id(): UUID {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public changeName(value: string): void {
    Validator.assertArgumentNotEmpty({ value });

    this._name = value;
  }

  public get group(): Group {
    return this._group;
  }

  public assignUser(user: User): void {
    this._group.addUser(user);
  }

  public unassignUser(user: User) {}

  public isInRole(user: User): boolean {
    return this._group.isMember(user);
  }
}
