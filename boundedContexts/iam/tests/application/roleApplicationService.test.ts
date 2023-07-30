import { UserInRoleDto } from "@iam/main/application/dto/userInRoleDto";
import { UserApplicationService } from "@iam/main/application/roleApplicationService";

test("when get user with role tester, then user id will be returned", () => {
  const sut = new UserApplicationService();
  const actual = sut.getUserInRole({ id: "12345", roleName: "tester" });
  expect(actual?.id.value).toBe("12345");
});

test("when get user with role tester, then user name will be returned", () => {
  const sut = new UserApplicationService();
  const actual = sut.getUserInRole({ id: "12345", roleName: "tester" });
  expect(actual?.name).toBe("");
});
