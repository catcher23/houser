const users = {};
const user = {};

export const getUsers = (req, res) => res.send(users);

export const getUser = (req, res) => res.send(user);

export const postUser = (req, res) => res.send(user);
