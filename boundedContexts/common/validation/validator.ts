import { InvalidArgumentException } from "@common/exception/invalidArgumentException";
import { InvalidStateException } from "@common/exception/invalidStateException";

export class Validator {
  static assertArgumentNotEmpty(argument: { [key: string]: string }): void {
    const key = Object.keys(argument)[0];
    if (argument[key].length === 0) {
      throw new InvalidArgumentException(`The ${key} must be provided.`);
    }
  }

  static assertArgumentTrue(argument: { [key: string]: boolean }): void {
    const key = Object.keys(argument)[0];
    if (!argument[key]) {
      throw new InvalidArgumentException(`The condition ${key} must be true.`);
    }
  }
  static assertStateFalse(state: { [key: string]: boolean }): void {
    const key = Object.keys(state)[0];
    if (state[key]) {
      throw new InvalidStateException(`The state ${key} must be false.`);
    }
  }
}
