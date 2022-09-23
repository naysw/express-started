import { Args, Query, Resolver } from "type-graphql";
import { QueryUsersArgs, User } from "../generated/graphql";

@Resolver()
export class UserResolver {
  @Query(() => [User], {
    nullable: true,
  })
  async users(@Args() { take, skip }: QueryUsersArgs): Promise<User[]> {
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
