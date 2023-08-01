import { UUID } from "@common/domain/uuid";
import { Role } from "@iam/main/domain/access/role";
import { Group } from "@iam/main/domain/identity/group";
import { InMemoryRoleRepository } from "@iam/main/port/persistence/inMemoryRoleRepository";

test("save role", () => {
  const role = new Role({
    id: UUID.createNew(),
    name: "tester",
    group: Group.createNew({ name: "tester" }),
  });
  new InMemoryRoleRepository().save(role);
});

test("when save role, then role is found by name", () => {
  const role = new Role({
    id: UUID.createNew(),
    name: "tester",
    group: Group.createNew({ name: "tester" }),
  });
  const sut = new InMemoryRoleRepository();
  sut.save(role);

  const actual = sut.findByName("tester");
  expect(actual).toBeInstanceOf(Role);
});
