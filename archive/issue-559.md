               

### Issue #559  (HTML Template, CSS/HTML, Testing, React)04/04/24

  

If you haven't researched it yet, the new-ish HTML **<template>** element is a way to enable HTML templating. That is, repeating common bits of HTML that are generated via JavaScript.  
  
The contents, or children, that appear inside the opening and closing **<template></template>** tags don't appear on an HTML page, so JavaScript is required to make this feature useful.  
  
Similar to other HTML element APIs, the <template> element is represented by the **HTMLTemplateElement** object, or API. This API has a single property: **content**. When you access **template.content** (assuming "template" is a reference to an HTML template object), this is equal to a **DocumentFragment** of all child nodes inside the referenced **<template>**.  
  
When you access the template, you can then clone it using **cloneNode**, and insert it wherever it's needed. As an example, let's say I have the following HTML:

```
<table class\="table"\>  
  <thead\>  
    <tr\>  
      <th\>Name</th\>  
      <th\>Description</th\>  
    </tr\>  
  </thead\>  
  <tbody\>  
  </tbody\>  
</table\>  
  
<template\>  
  <tr\>  
    <td class\="cell"\>&nbsp;</td\>  
    <td\>&nbsp;</td\>  
  </tr\>  
</template\>
```

Notice the table markup along with the single table row with two cells inside the **<template>** element. Normally I would leave the table cells blank but for display purposes, I'm adding a non-breaking space into each cell, so the cells will technically be 'visible'. In a real application, I would have some further code that generates the data.  
  
With that in place, I can then use the following JavaScript to generate a single table row that gets added to the **<tbody>** element:

```
let tbody \= document.querySelector('tbody'),  
    template \= document.querySelector('template');  
  
tbody.append(template.content.cloneNode(true));
```

This code is fairly rudimentary and thus isn't very practical. But that should give you an idea of how the feature works. You can try out the code in [this interactive demo](https://codepen.io/impressivewebs/pen/KKYZEOZ?editors=1000). There's a button that dynamically inserts the 'row' template as many times as you want to insert it, along with a row reset button.  
  
And as a final point, you don't technically have to include your **<template>** element inside your HTML document. You can create the **<template>** element using JavaScript then insert it and its children as needed. Once it's in the DOM, you can access it the same way.  
  
Now on to this week's tools!  
 

CSS and HTML Tools
------------------

[**magick.css**](https://github.com/wintermute-cell/magick.css) — A minimalistic and mostly classless CSS framework inspired by LaTeX, old school TTRPG rulebooks, and other classless frameworks.  
  
[**Dropflow**](https://github.com/chearon/dropflow/) — A CSS layout engine created to explore the reaches of the foundational CSS standards (that is: inlines, blocks, floats, positioning, but not flexbox or grid).  
  
[**ECSS**](https://ecss.info/) — A set of rules and principles for authoring modern CSS that includes a Stylelint config and scaffolding tool to help incorporate the desired rules.  
  
[**Webinar: Android Malware Application Protection**](https://www.vpdae.com/redirect/9dvky5ckpzxybpb5e3kwvhb9q5q) — Join Guardsquare on April 9th to learn about Android malware's most common behavior and attack techniques, recommended mitigation techniques, and the importance of code hardening and runtime protection in preventing malware attacks.     SPONSORED   
  
[**play-button**](https://github.com/daviddarnes/play-button) — A simple web component to play audio or video with a button, so the user can control an audio or video track with a single button.

  
[**MistCSS**](https://typicode.github.io/mistcss/) — A code generation tool that enables you to write atomic React components using only CSS (i.e. "JS-from-CSS"), with support for Next.js, Remix, and Tailwind.  
  
[**TeamColors**](https://teamcolors.jim-nielsen.com/) — This is different! It's a gallery of official and unofficial colors associated with teams from major sports leagues, with 6 leagues currently included, filterable by team name and you can choose different color formats.  
 

[![Team Colors](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/b19168c5-be73-64c4-ed25-f9e37c9772a4.png)](https://teamcolors.jim-nielsen.com/)

  
[**Variable Fonts**](https://v-fonts.com/) — A simple resource for finding and testing variable fonts, filterable by category tags, font designers, character sets, licenses, and more.  
  
[**pagefind-search**](https://github.com/zachleat/pagefind-search/) — A web component that adds functionality for Pagefind, a popular fully static search library, built in Rust, and commonly used in static websites.  
  
[**cccolor**](https://fffuel.co/cccolor/) — A color picker and color palette generator that shows different types of color palettes for a chosen color, and is easy to convert to different color formats.  
 

Testing and Debugging Tools
---------------------------

[**Webhook.Cool**](https://webhook.cool/) — A service that allows you to receive and inspect webhook requests. Use your unique webhook URL to send any webhook to it.  
  
[**Vlite**](https://github.com/Jinjiang/vlite) — A lite, zero-config ESM-friendly demo server, inspired by Vite, with Support for Vue, React, TypeScript, JSX, TSX, and more.  
  
[**Under New Management**](https://github.com/classvsoftware/under-new-management) — A Chrome or Firefox extension that checks your installed extensions intermittently to see if the developer information listed on the Chrome Web Store or Firefox Addons store has changed.  
  
[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — Business starters, are you in need of a business address separate from your home? Anytime Mailbox provides a seamless solution, securing a private, professional address with added benefits like mail forwarding and scanning for ultimate convenience.    SPONSORED   
  
[**PDFcheck**](https://code.jasonmorris.com/pdfcheck/) — An online tool that lets you upload one or more PDFs to check them for accessibility, based on an older PDF accessibility standard that was published by Adobe.  
  
[**Web Font Analyzer**](https://tools.paulcalvano.com/wpt-font-analysis/) — An online tool that uses the WebPageTest API to help you identify font subsetting opportunities, to help with performance bottlenecks associated with loading fonts.  
  
[**OpenAPI DevTools**](https://chromewebstore.google.com/detail/openapi-devtools/jelghndoknklgabjgaeppjhommkkmdii) — Chrome extension that enables you to instantly generate API specifications in real time for any app or website.

[![OpenAPI DevTools](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/239eede5-576d-7624-c474-640711180d92.png)](https://chromewebstore.google.com/detail/openapi-devtools/jelghndoknklgabjgaeppjhommkkmdii)

  
[**CodeRev**](https://coderev.app/) — A lightweight tool to help you organize and conduct technical interviews using code reviews rather than LeetCode (the popular platform for preparing for tech interviews).  
  
[**screenlog.js**](https://github.com/chinchang/screenlog.js) — A very old tool that brings the browser's developer console right on your screen so that you can do logging without keeping the console open.  
 

  
 

React Tools
-----------

[**restore-scroll**](https://github.com/epicweb-dev/restore-scroll) — A React component that enables you to restore the scroll position of any scrollable elements on page navigation.  
  
[**Shader Gradient**](https://github.com/ruucm/shadergradient) — Create and customize animated 3D gradients for your React projects. Includes an online gradient editor and the generated gradient can be downloaded for React, Framer, or Figma.  
  
[**typed-route-handler**](https://github.com/venables/typed-route-handler) — Type-safe route handlers for Next.js, like the missing API endpoint layer for Next.js.  
  
[**Functional UI Kit**](https://functional-ui-kit.com/) — A Figma UI kit for React that includes precise Figma and React components packed with best practices, unified prop names, consistent design and code.  
  
[**Vocs**](https://vocs.dev/) — A minimal static documentation generator designed to supercharge your documentation workflow, built with modern web technologies.  
  
[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — Business starters, are you in need of a business address separate from your home? Anytime Mailbox provides a seamless solution, securing a private, professional address with added benefits like mail forwarding and scanning for ultimate convenience.    SPONSORED   
  
[**MightyMeld**](https://www.mightymeld.com/) — An all-in-one drag-and-drop tool for React projects to visualize your components, JSX, and styles, integrating seamlessly with your regular dev setup. The Pro plan is coming soon but the free plan seems pretty good.

[![MightyMeld](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/44bcbe39-9527-34ad-3570-d4d3c8db562f.png)](https://www.mightymeld.com/)

  
[**nlux**](https://nlux.ai/) — An open-source JavaScript and React library that makes it super simple to integrate powerful large language models (LLMs) like ChatGPT into your web app or website.  
  
[**Mantine React Table**](https://www.mantine-react-table.com/) — A full-featured Mantine implementation of the TanStack React Table component, forked from Material React Table.  
  
[**next-route-handler-pipe**](https://github.com/KolbySisk/next-route-handler-pipe) — Pipe together functions to create reusable function pipelines for your Next.js route handlers.