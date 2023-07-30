import { Role } from "@iam/main/domain/access/role";
import { User } from "@iam/main/domain/identity/user";

test("assign user to role", () => {
  const role = new Role({ name: "tester" });
  const user = new User({ userName: "A", emailAddress: "a@example.com" });

  role.assignUser(user);
});

test("when assign user to role, then the user is in role", () => {
  const role = new Role({ name: "tester" });
  const user = new User({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  expect(role.isInRole(user)).toBeTruthy();
});

test("when assign user to role, then another user with same name is not in role", () => {
  const role = new Role({ name: "tester" });
  const user = new User({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  const anotherUser = new User({
    userName: "A",
    emailAddress: "a2@example.com",
  });

  expect(role.isInRole(anotherUser)).toBeFalsy();
});

test("when assign user to role, then another user with same email address is not in role", () => {
  const role = new Role({ name: "tester" });
  const user = new User({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  const anotherUser = new User({
    userName: "A2",
    emailAddress: "a@example.com",
  });

  expect(role.isInRole(anotherUser)).toBeFalsy();
});

test("when assign user to role twice, then throw error", () => {
  const role = new Role({ name: "tester" });
  const user = new User({ userName: "A", emailAddress: "a@example.com" });
  role.assignUser(user);

  expect(() => role.assignUser(user)).toThrow();
});
