import { UUID } from "@common/domain/uuid";
import { Role } from "@iam/main/domain/access/role";
import { Group } from "@iam/main/domain/identity/group";
import { User } from "@iam/main/domain/identity/user";

let role: Role;

beforeEach(() => {
  role = new Role({
    id: UUID.createNew(),
    name: "tester",
    group: Group.createNew({ name: "tester" }),
  });
});

test("assign user to role", () => {
  const user = User.createNew({ userName: "A", emailAddress: "a@example.com" });

  role.assignUser(user);
});

test("when assign user to role, then the user is in role", () => {
  const user = User.createNew({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  expect(role.isInRole(user)).toBeTruthy();
});

test("when assign user to role, then another user with same name is not in role", () => {
  const user = User.createNew({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  const anotherUser = User.createNew({
    userName: "A",
    emailAddress: "a2@example.com",
  });

  expect(role.isInRole(anotherUser)).toBeFalsy();
});

test("when assign user to role, then another user with same email address is not in role", () => {
  const user = User.createNew({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  const anotherUser = User.createNew({
    userName: "A2",
    emailAddress: "a@example.com",
  });

  expect(role.isInRole(anotherUser)).toBeFalsy();
});

test("when assign user to role twice, then throw error", () => {
  const user = User.createNew({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  expect(() => role.assignUser(user)).toThrow();
});
