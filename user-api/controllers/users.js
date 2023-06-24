export const getAllUsers = (req, res) => {};

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuid();
  const userWithId = { ...user, id: userId };
  user.push(userWithId);
  console.log(`User with username ${firstName}${lastName} added.`);
};

export const getUser = (req, res) => {};

export const updateUser = (req, res) => {};

export const deleteUser = (req, res) => {};
