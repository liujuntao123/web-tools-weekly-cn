import fetch from "node-fetch";
import { BASE_URL as baseUrl, KEY as key } from "./config.js";

const systemMessage = {
  role: "system",
  content:
    "You are a professional, authentic translation engine. You only return the translated text, without any explanations.",
};
const model = "gpt-4o-mini";
const mergeLine = 200;

function someFixes(content) {
  const str = content
    .replace("### Issue #", "#")
    .replace(/\d{2}\/\d{2}\/\d{2}/, "");
  return str;
}

function mergeLines(fixedMarkdown) {
  const mergedMarkdown = [];
  fixedMarkdown.split("\n").forEach((line, index) => {
    if (index % mergeLine === 0) {
      mergedMarkdown.push(line);
    } else {
      mergedMarkdown[mergedMarkdown.length - 1] += line + "\n";
    }
  });
  return mergedMarkdown;
}

export default async function translate(mdContent) {
  const url = `${baseUrl}/chat/completions?apikey=${key}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  };
  const fixedMarkdown = someFixes(mdContent);

  const contents = mergeLines(fixedMarkdown);

  // 循环发送请求
  let text = "";
  for (let i = 0; i < contents.length; i++) {
    const content = contents[i];
    console.log("content length:", content.length);

    const data = {
      model,
      messages: [
        systemMessage,
        {
          role: "user",
          content: `把下面的文章翻译成简体中文，要求：精准传达原文信息，严格保留任何格式和术语，以Markdown格式输出。

                    ${content}

                    `,
        },
      ],
    };
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const translatedText = result.choices[0].message.content;

    text += translatedText + "\n";
  }

  return text;
}
