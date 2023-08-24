const { RegExHelper } = require("../../helpers/regex.helper");

function validateLoginInfo(req, res, next) {
  try {
    const { body: { email, password } } = req;

    if (!email) {
      return res.status(400).json({ message: '"E-mail" é um campo obrigatório.' });
    }

    if (!password) {
      return res.status(400).json({ message: '"Senha" é um campo obrigatório.' });
    }

    const validEmail = RegExHelper.email.test(email);

    if (!validEmail) {
      return res.status(400).json({ message: 'Email em formato incorreto.' });
    }

    next();

  } catch(err) {
    return next(err);
  }
}

module.exports = validateLoginInfo;
