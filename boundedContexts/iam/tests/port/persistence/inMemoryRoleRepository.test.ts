import { Role } from "@iam/main/domain/access/role";
import { InMemoryRoleRepository } from "@iam/main/port/persistence/inMemoryRoleRepository";

test("save role", () => {
  const role = Role.createNew({ name: "tester" });
  new InMemoryRoleRepository().save(role);
});


test("when save role, then role is found by name", () => {
    const role = Role.createNew({ name: "tester" });
    const sut = new InMemoryRoleRepository();
    sut.save(role);

    const actual = sut.findByName("tester");
    expect(actual).toBeInstanceOf(Role);
});