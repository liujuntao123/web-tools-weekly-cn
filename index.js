import extract from "./extract.mjs";
import translate from "./translate.mjs";
import fs from "fs";
import { SOURCE_URL as url } from "./config";


async function main() {
  const fileName = url.split("/").pop();
  const { fixedMarkdown: mdContent, title } = await extract(url);
  console.log("提取成功！");
  fs.writeFileSync(`${fileName}.md`, mdContent);
  console.log("原文写入成功！");
  const translatedContent = await translate(mdContent);
  console.log("翻译成功！");
  const extraContent = `文章翻译自：[${title}](${url}) \n\n`;
  const finalContent = translatedContent + extraContent;

  fs.writeFileSync(`${fileName}-cn.md`, finalContent);
  console.log("译文写入成功！");
}

console.log(process.env.KEY)

// main();
