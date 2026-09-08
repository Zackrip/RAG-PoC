import fs from "fs/promises";
import { PDFParse } from "pdf-parse";

const buffer = await fs.readFile("./uploads/Lorem_ipsum.pdf");

console.log("Buffer loaded:", buffer.length);

const parser = new PDFParse({
  data: buffer,
});

try {
  const result = await parser.getText();

  console.log("Extracted characters:", result.text.length);
  console.log(result.text.slice(0, 500));
} finally {
  await parser.destroy();
}