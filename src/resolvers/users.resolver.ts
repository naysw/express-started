import { QueryUsersArgs } from "src/generated/graphql";

export const usersResolver = async (
  parent: any,
  { take, skip }: QueryUsersArgs
) => {
  console.log("take", take);
  console.log("skip", skip);

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
};
