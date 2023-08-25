const bcrypt = require('bcrypt');
const { User } = require('../../../database/models');
const createToken = require('../../services/createToken');

async function login(req, res, next) {
  try {
    const { body: { email, password } } = req;

    if (process.env.MOCK_DB) {
      const user = {
        name: 'Mock User',
        email: 'mock_user@test.com',
        password: 'mock_password'
      }

      if (password === user.password) {
        const token = createToken(user);

        return res.status(200).json({ user, token });
      }

      return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
    }

    const foundUser = await User.findOne({
      where: { email }
    });

    let correctPassword;

    if (foundUser) {
      correctPassword = await bcrypt.compare(password, foundUser.password);

      delete foundUser.dataValues.password;
    }

    if (!correctPassword) {
      return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
    }

    const userInfo = foundUser.dataValues;

    const token = createToken(userInfo);

    const user = {
      name: foundUser.name,
      email
    }

    return res.status(200).json({ user, token });

  } catch (err) {
    return next(err);
  }
}

module.exports = login;
