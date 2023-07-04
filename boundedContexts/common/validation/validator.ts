import { InvalidArgumentException } from "@common/exception/invalidArgumentException";

export class Validator {
  static assertArgumentNotEmpty(argument: {[key: string]: string}): void {
    const key = Object.keys(argument)[0];
    if (argument[key].length === 0) {
      throw new InvalidArgumentException(`The ${key} must be provided.`);
    }
  }

  static assertArgumentTrue(argument: {[key: string]: boolean}): void {
    const key = Object.keys(argument)[0];
    if (!(argument[key]) {
        throw new InvalidArgumentException(`The condition ${key} must be true.`);
    }
  }
}
