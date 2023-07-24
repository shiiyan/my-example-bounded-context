import { v4 as uuidv4 } from "uuid";

export class UUID {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  public static createNew(): UUID {
    return new UUID(uuidv4());
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this._value = value;
  }

  public equals(that: UUID): boolean {
    return this._value === that.value;
  }
}
