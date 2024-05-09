import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jonny",
    email: "jonny@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jack",
    email: "jack@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
