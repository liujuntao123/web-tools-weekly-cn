import TurndownService from "turndown";
import fetch from "node-fetch";

export default async function extract(url) {
  const response = await fetch(url);
  const html = await response.text();
  const turndownService = new TurndownService();
  const title = html.match(/<title>(.*)<\/title>/)[1];
  turndownService.remove("title");
  turndownService.remove("script");
  turndownService.remove("style");
  turndownService.remove((node) => {
    return /outlook-group-fix/.test(node.className);
  });
  turndownService.remove((node) => {
    return /cfd/.test(node.className);
  });
  turndownService.remove((node) => {
    return /xpost/.test(node.className);
  });
  turndownService.remove((node) => {
    return /footer/.test(node.className);
  });
  turndownService.remove((node) => {
    return node.textContent === "Advertisement";
  });
  turndownService.remove((node) => {
    return node.textContent === "Commercial Apps & Classifieds";
  });

  turndownService.remove((node) => {
    return node.textContent === "Commercial Apps and Classifieds";
  });

  turndownService.remove((node) => {
    return node.style.backgroundColor === "#54463f";
  });
  turndownService.addRule("codeArea", {
    filter: (node) => {
      return node.style.backgroundColor === "#272727";
    },
    replacement: function (content) {
      if (content.includes("```")) return content;
      return "```\n" + content + "\n```";
    },
  });
  const markdown = turndownService.turndown(html);
  const fixedMarkdown = someFixes(markdown);
  return { fixedMarkdown, title };
}

function someFixes(content) {
  return content;
}
