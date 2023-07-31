import { UUID } from "@common/domain/uuid";
import { User } from "@iam/main/domain/identity/user";
import { UserRepositoryInterface } from "@iam/main/domain/identity/userRepositoryInterface";

type UserSchema = {
  _id: { _value: string };
  _userName: string;
  _emailAddress: string;
};

export class InMemoryUserRepository implements UserRepositoryInterface {
  private data: { [index: string]: string } = {};

  public findById(userId: UUID): User | null {
    if (!this.data.hasOwnProperty(userId.value)) {
      return null;
    }

    const parsed = <UserSchema>JSON.parse(this.data[userId.value]);

    return new User({
      id: new UUID(parsed._id._value),
      userName: parsed._userName,
      emailAddress: parsed._emailAddress,
    });
  }

  public save(user: User): void {
    this.data[user.userId.value] = JSON.stringify(user);
  }
}
