const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

exports.runInSandbox = (language, code, input) => {
  return new Promise((resolve, reject) => {
    const tempDir = path.join(__dirname, "../../temp");
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const fileExtension = {
      python: "py",
      javascript: "js",
      c: "c",
      cpp: "cpp",
    }[language];

    const filePath = path.join(tempDir, `temp.${fileExtension}`);
    const inputPath = path.join(tempDir, `input.txt`);
    const outputPath = path.join(tempDir, `output.txt`);
    const executablePath = path.join(tempDir, "a.out");

    // Write code and input to temporary files
    fs.writeFileSync(filePath, code);
    if (input) fs.writeFileSync(inputPath, input);

    // Command to execute the file
    const commands = {
      python: `python3 ${filePath}`,
      javascript: `node ${filePath}`,
      c: `gcc ${filePath} -o ${tempDir}/a.out && ${tempDir}/a.out`,
      cpp: `g++ ${filePath} -o ${tempDir}/a.out && ${tempDir}/a.out`,
    };

    const cmd = input ? `${commands[language]} < ${inputPath} > ${outputPath}` : `${commands[language]} > ${outputPath}`;

    exec(cmd, (error, stdout, stderr) => {
      if (error || stderr) {
        // console.log(error.message);
        reject(stderr || error.message);
      } else {
        const output = fs.readFileSync(outputPath, "utf8");
        resolve(output);
      }

      // Cleanup temporary files
      fs.unlinkSync(filePath);
      if (input) fs.unlinkSync(inputPath);
      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
      if (fs.existsSync(executablePath)) fs.unlinkSync(executablePath);

    });
  });
};
