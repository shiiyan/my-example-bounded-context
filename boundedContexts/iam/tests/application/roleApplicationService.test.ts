import { UUID } from "@common/domain/uuid";
import { RoleApplicationService } from "@iam/main/application/roleApplicationService";
import { User } from "@iam/main/domain/identity/user";
import { InMemoryUserRepository } from "@iam/main/port/persistence/inMemoryUserRepository";

let sut: RoleApplicationService;
let userRepository: InMemoryUserRepository;

beforeEach(() => {
  userRepository = new InMemoryUserRepository();
  userRepository.save(
    new User({
      id: new UUID("72d17d0f-1f40-4c2a-a570-23d398cafffe"),
      userName: "A",
      emailAddress: "a@example.com",
    })
  );
  sut = new RoleApplicationService(userRepository);
});

test("when get user with role tester, then user id will be returned", () => {
  const actual = sut.getUserInRole({
    id: new UUID("72d17d0f-1f40-4c2a-a570-23d398cafffe"),
    roleName: "tester",
  });
  expect(actual?.id.value).toBe("72d17d0f-1f40-4c2a-a570-23d398cafffe");
});

test("when get user with role tester, then user name will be returned", () => {
  const actual = sut.getUserInRole({
    id: new UUID("72d17d0f-1f40-4c2a-a570-23d398cafffe"),
    roleName: "tester",
  });
  expect(actual?.name).toBe("A");
});

test("when get user with role tester, then user email address will be returned", () => {
  const actual = sut.getUserInRole({
    id: new UUID("72d17d0f-1f40-4c2a-a570-23d398cafffe"),
    roleName: "tester",
  });
  expect(actual?.emailAddress).toBe("a@example.com");
});

test("when requested user doesn't exist, then null will be returned", () => {
  const actual = sut.getUserInRole({
    id: new UUID("non-existent-user"),
    roleName: "tester",
  });
  expect(actual).toBeNull();
});
