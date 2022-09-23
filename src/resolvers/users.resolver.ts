import { Query, Resolver } from "type-graphql";
import { User } from "../generated/graphql";

@Resolver()
export class UserResolver {
  @Query(() => [User], {
    nullable: true,
  })
  async users(): Promise<User[]> {
    return [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        password: "password",
      },
      {
        id: "2",
        firstName: "Ni",
        lastName: "Lar",
        email: "nilar@gmail.com",
        password: "password",
      },
    ];
  }
}
