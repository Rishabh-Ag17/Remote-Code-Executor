const { runInSandbox } = require("../utils/sandbox");

exports.execute = async (language, code, input) => {
  // Map extensions to languages
  const fileExtensionMap = {
    python: "py",
    javascript: "js",
    c: "c",
    cpp: "cpp",
  };

  if (!fileExtensionMap[language]) {
    throw new Error("Unsupported language");
  }

  // Pass to sandbox for execution
  return await runInSandbox(language, code, input);
};
