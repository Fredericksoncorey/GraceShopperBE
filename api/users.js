const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { JWT_SECRET }  = process.env
const { createUser, getUserByUsername, getUser, getCartByUser, getHistoryByUser } = require('../db');
const authenticated = require('./auth');

usersRouter.post('/register', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const _user = await getUserByUsername(username);

    if (_user) {
      next({
        name: 'UserExistsError',
        message: 'A user by that username already exists'
      })
    } else if (password.length < 8) {
      next({
        name: 'PasswordTooShortError',
        message: 'The password must be at least 8 characters long'
      })
    } else {
      const user = await createUser({ username, password })
      res.send({ user });
    }

  } catch (error) {
    next(error)
  }
});

usersRouter.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    });
  }

  try {
    const user = await getUser({ username, password });
    if (user) {
      const token = jwt.sign({
        id: user.id,
        username
      }, process.env.JWT_SECRET);
      res.send({ token });
    } else {
      next({
        name: 'IncorrectCredentialsError',
        message: 'Username or password is incorrect'
      });
    }
  } catch ({ message }) {
    next({ message });
  }
});

usersRouter.get('/me', authenticated, async (req, res) => {
  res.send(req.user);
});

usersRouter.get('/:username/cart', authenticated, async (req, res) => {
  try {
    const { username } = req.params;
    const user = await getUserByUsername(username);
    const cart = await getCartByUser(user);
    res.send(
      cart
    );
  } catch (error) {
    next(error)
  }
});

usersRouter.get('/:username/history', authenticated, async (req, res) => {
    try {
      const { username } = req.params;
      const user = await getUserByUsername(username);
      const history = await getHistoryByUser(user);
      res.send(
        history
      );
    } catch (error) {
      next(error)
    }
});

usersRouter.patch('/:userId', authenticated, async (req, res, next) => {
    const { userId } = req.params;
    const { username, address, phone } = req.body;
    const update = { id: userId };

    if (username) {
        update.username = username;
    }

    if (address) {
        update.address = address;
    }

    if (phone) {
        update.phone = phone;
    }

    try {
        const { creatorId } = await getUserById(userId);
        if (creatorId === req.user.id) {
            const updateProfile = await editProfile(update)
            res.send(updateProfile)
        }
    } catch (error) {
        next(error);
    }
});

module.exports = usersRouter;