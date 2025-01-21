const { execute } = require("../services/codeExecutorService");

exports.executeCode = async (req, res, next) => {
  try {
    const { language, code, input } = req.body;
    const output = await execute(language, code, input);
    res.status(200).json({ success: true, output });
  } catch (error) {
    next(error);
  }
};
