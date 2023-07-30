import { User } from "@iam/main/domain/identity/user";
import { InMemoryUserRepository } from "@iam/main/port/persistence/inMemoryUserRepository";

test("save user", () => {
  const user = User.createNew({ userName: "A", emailAddress: "a@example.com" });
  const sut = new InMemoryUserRepository();
  sut.save(user);
});

test("when save user, then the user is found by id", () => {
  const user = User.createNew({ userName: "A", emailAddress: "a@example.com" });
  const sut = new InMemoryUserRepository();
  sut.save(user);

  const found = sut.findById(user.userId);
  expect(found).toBeInstanceOf(User);
});
