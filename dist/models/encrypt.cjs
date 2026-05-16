const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const modelsDir = __dirname;

const encryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  output.write(iv);
  input.pipe(cipher).pipe(output);
};

const inputPath = path.join(modelsDir, "character.glb");
const outputPath = path.join(modelsDir, "character.enc");

if (!fs.existsSync(inputPath)) {
  console.error("Missing character.glb at:", inputPath);
  process.exit(1);
}

encryptFile(inputPath, outputPath, "Character3D#@");
console.log("Wrote", outputPath, "from", inputPath);
