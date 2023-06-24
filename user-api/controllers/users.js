export const getAllUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuid();
  const userWithId = { ...user, id: userId };
  user.push(userWithId);
  console.log(`User with username ${firstName}${lastName} added.`);
};

export const getUser = (req, res) => {
  const { id } = req.params.id;
  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params.id;
  const { firstName, lastName, age } = req.body;

  const updatedUser = users.find((user) => user.id == id);

  if (firstName) updatedUser.firstName = firstName;
  if (lastName) updatedUser.lastName = lastName;
  if (age) updatedUser.age = age;

  res.send(`User with id ${id} has been updated.`);
};

export const deleteUser = (req, res) => {};
