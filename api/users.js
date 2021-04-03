const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const { JWT_SECRET }  = process.env
const { createUser, getUserByUsername, getUser, getAllUsers, getCartByUserId, getOrdersByUserId, getUserByEmail, getUserById, editProfile } = require('../db');
const admin = require('./administrator');
const authenticated = require('./auth');

usersRouter.get('/', /* admin ,*/ async (req, res, next) => {
    try {
      const users = await getAllUsers();
      res.send(
        users
      );
    } catch (error) {
      next(error)
    }
});

usersRouter.post('/register', async (req, res, next) => {
  const { username, password, email/* , isAdmin */ } = req.body;
  console.log("register ran")
  console.log(req.body)
  try {
    const _user = await getUserByUsername(username);
    const _email = await getUserByEmail(email)

    if (_user) {
      next({
        name: 'UserExistsError',
        message: 'A user by that username already exists'
      })
    } else if (_email) {
        next({
          name: 'EmailExistsError',
          message: 'That email address is already in use'
        })
    } else if (password.length < 8) {
      next({
        name: 'PasswordTooShortError',
        message: 'The password must be at least 8 characters long'
      })
    } else {
      const user = await createUser({ username, password, email/* , isAdmin */ })
      delete user.password
        const token = jwt.sign( user , "Secret Code"/* change later */, {
        expiresIn: 86400}) 
      res.send( {user: {id:user.id, username:user.username}, message: "Thank you for signing up!", token:token });
    }

  } catch (error) {
    next(error)
  }
});

usersRouter.post('/login', async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body, "LOGIN")
  if (!username || !password) {
    return next({
      name: "MissingCredentialsError",
      message: "Please supply both a username and password"
    });
  }

  try {
    const user = await getUser({ username, password });
    
    if (user) {
      const {id, username, email , isAdmin} = user
      const token = jwt.sign({
        id: id,
        username: username,
        email: email,
        isAdmin: isAdmin
      }, "Secret Code" /* process.env.JWT_SECRET */);
      res.send({user: {id: user.id, username:user.username}, message: `Welcome ${user.username}`, token:token });
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

usersRouter.get('/:username/cart', authenticated, async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await getUserByUsername(username);
    const cart = await getCartByUserId(user.id);
    res.send(
      cart
    );
  } catch ({ message }) {
    next({ message });
  }
});

usersRouter.get('/:username/orders', authenticated, async (req, res, next) => {
    try {
      const { username } = req.params;
      
      const user = await getUserByUsername(username);
      const order = await getOrdersByUserId(user.id);
      console.log()
      if(!order){
        console.log("no orders")
        res.send({message: 'No orders by that user'})
      }
      res.send(
        order
      );
    } catch ({error}) {
      next({error})
    }
});

usersRouter.patch('/:userId', authenticated, async (req, res, next) => {
    const { userId } = req.params;
    /* const { username, address, phone } = req.body; */ const { username, email } = req.body;
    const update = { id: userId };

    if (username) {
        update.username = username;
    }

    if(email){
      update.email = email
    }
    /* if (address) {
        update.address = address;
    } */

    /* if (phone) {
        update.phone = phone;
    } */

    try {
        const { id } = await getUserById(userId);
        if (id === req.user.id) {
            const updateProfile = await editProfile(update)
            /* -- */ delete updateProfile.password  /* -- Remove if deciding to edit passwords */
            res.send(updateProfile)
        }
    } catch (error) {
        next(error);
    }
});

module.exports = usersRouter;