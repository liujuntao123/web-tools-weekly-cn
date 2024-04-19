               

### #560  (Popover API, Frameworks, AI Tools, JS Utils)

  

By now you may have heard of the Popover API that allows you to create modal windows using a few HTML attributes and optionally controlling the functionality using some events and methods in JavaScript.  
  
The simplest Popover API example can be implemented with nothing but HTML using something like the following:

```
<button popovertarget\="mypopover"\>Toggle Popover</button\>  
<div id\="mypopover" popover\>A Popover Example</div\>
```

No JavaScript needed, the popover just works. The only requirements for this code are:

*   A **popovertarget** attribute on the element that will serve as the button (in this case an actual button element).
*   An id attribute on the popover element itself with a value that's equal to the value of the **popovertarget** attribute.
*   A **popover** attribute on the popover element.

That's basically a popover in its simplest state. Of course, without any CSS, the popover element would be nothing but a plain element with some text. By default, Chrome adds a simple dark 2px border to the element, but this can be changed as needed.  
  
The easiest way to style a popover element is using the **:popover-open** pseudo-class, like this:  
 

```
:_popover-open_ {  
  border-radius: 20px;  
  transition: linear 1s;  
  padding: 50px;  
  border: none;  
  background: #ccc;  
}
```

This styles all popovers in their open state. You can see this simple popover example in [this CodePen demo](https://codepen.io/impressivewebs/pen/MWRXwJq?editors=1000).  
  
Some other options available to customize the popover, include the following:

*   The **popover** attribute on the popover element has a default value of "auto" but you can also choose a value of "manual". The value "auto" means it can be dismissed by clicking outside the popover or by hitting the ESC key on the keyboard. A value of "manual" requires that it be closed using either the toggle button or another button designated as the close button.
*   As indicated in the previous point, you can use multiple buttons for opening and closing the popover. You can define these by adding an attribute called **popovertargetaction** to each button and specifying a value of "show" or "hide". These override the default value "toggle" that is assumed if you don't include them.

Here's [another CodePen](https://codepen.io/impressivewebs/pen/ZEZRGem?editors=1000) that uses different buttons for opening and closing and also includes the "manual" value so the popover can't be closed without using the buttons.  
  
Now on to this week's tools!  
 

Web Frameworks
--------------

[**MBRV**](https://github.com/mayfer/mbrv) — A hassle-free full-stack TypeScript, Bun, and React boilerplate with hot reload and SSR support.  
  
[**next-starter**](https://github.com/Skolaczk/next-starter) — A super-opinionated Next.js starter template that includes features like TypeScript, Tailwind, next-auth, ESlint, shadcn-ui, Prisma, Jest, React Testing Library, and lots more.  
  
[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — Business starters, are you in need of a business address separate from your home? Anytime Mailbox provides a seamless solution, securing a private, professional address with added benefits like mail forwarding and scanning for ultimate convenience.     SPONSORED   
  
[**Svelte UX**](https://github.com/techniq/svelte-ux) — A suite of 200+ components, actions, stores, and utilities to build highly interactive applications with Svelte.  
  
[**Bulma**](https://bulma.io/) — A popular open-source CSS framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.  
  
[**Tiny Stack**](https://github.com/Sh4yy/tiny-stack) — A simple and tiny stack for building web applications using Astro, SQLite, and Litestream (the popular SQLite tool).  
  
[**Wedges**](https://www.lemonsqueezy.com/wedges) — A modest set of UI components for React, built with the Wedges Design System, Radix UI, and Tailwind.

[![Wedges](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/7eb25104-79dc-cf34-f5ed-aeab7f33e0ee.png)](https://www.lemonsqueezy.com/wedges)

  
[**WXT**](https://wxt.dev/) — A TypeScript-based framework for building web extensions and plugins for Chromium-based browsers, featuring build manifest v2/v3, fast dev mode, Nuxt-like auto-imports, and more.  
  
[**Shadow Panda**](https://shadow-panda.dev/) — An accessible and customizable library of 40+ components built with Panda CSS, Radix, and shadcn/ui.  
  
[**drab**](https://drab.robino.dev/) — A headless component library of 14+ components that are all based on HTML Custom Elements, each providing a useful wrapper around a specific web API.

ChatGPT and AI Tools
--------------------

[**OpenModerator**](https://www.openmoderator.com/) — An open-source, modern AI content moderation tool that provides image and text moderation to help communities avoid or remove questionable user-generated content.  
  
[**Lummi**](https://www.lummi.ai/) — AI-generated, free stock photos that are royalty free. Most of these look pretty look realistic and not so "cartoon-like" as some of these AI-based ones seem to be.  
  
[**Codel**](https://github.com/semanser/codel) — A secure, fully autonomous AI agent that can perform complicated tasks and projects using terminal, browser, and editor.  
  
[**Simplicity Builder**](https://www.simplicitywebtools.com/) — A web component that lets you add simplified drag and drop building capability to your project. Turn any HTML into drag and drop building blocks. Works with vanilla JavaScript, Angular, React, and Vue. Use for page builders, no-code tools.    SPONSORED   
  
[**AI Gateway**](https://github.com/missingstudio/gateway) — A core infrastructure stack for building production-ready AI applications with features like AI Router, load balancing, seamless integration with Universal API, and more.  
  
[**openai-cloudflare**](https://github.com/janlay/openai-cloudflare) — An OpenAI API proxy running with Cloudflare worker that has support all APIs provided by OpenAI, among a number of other features.  
  
[**Cursor**](https://cursor.sh/) — An AI-first code editor with features like command palette, a native Copilot++, AI chat, codebase answers, and more.

[![Cursor](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/3a2096dd-54dc-5be8-fdad-2b53c9de8c34.png)](https://cursor.sh/)

  
[**CodeMate**](https://codemate.bot/) — An AI-powered search engine for developers that lets you select the programming language and whether to display results in "smart mode" or "fast mode".  
  
[**Braintrust AI Proxy**](https://github.com/braintrustdata/braintrust-proxy) — A unified way to access the world's leading AI models through a single API, including models from OpenAI, Anthropic, LLaMa 2, Mistral, and more.  
  
[**Cosine**](https://cosine.sh/) — An AI code companion to help with code reviews, scaffolding, seamless README updates, comprehensive impact assessments, rapid bug detection, and more.

  
 

JavaScript Utilities
--------------------

[**Minditor**](https://github.com/minditor/minditor) — A block-level rich text editor with features like image uploading, markdown commands, inline insertions, simplified plugin development, and lots more.  
  
[**gaxios**](https://github.com/googleapis/gaxios) — An HTTP request client that provides an Axios-like interface over top of node-fetch.  
  
[**Bentocache**](https://github.com/Julien-R44/bentocache) — A robust multi-tier caching solution for Node.js applications and supports drivers for Redis, Upstash, Postgres, SQLite, etc.  
  
[**Simplicity Builder**](https://www.simplicitywebtools.com/) — A web component that lets you add simplified drag and drop building capability to your project. Turn any HTML into drag and drop building blocks. Works with vanilla JavaScript, Angular, React, and Vue. Use for page builders, no-code tools.    SPONSORED   
  
[**mdbox**](https://github.com/unjs/mdbox) — A set of simple Markdown utilities to programmatically work with Markdown syntax without dealing with complex and strict AST objects.  
  
[**emojisplosion**](https://www.emojisplosion.dev/) — A utility to blast emoji-based "fireworks" on a web page, with plugins for Astro and TypeDoc, and lots of ways to customize including timing, types of emojis, position, size, and more.

[![Emojisplosion](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/4dd0726f-77f6-1299-f6b9-c199a26abd1c.png)](https://www.emojisplosion.dev/)

  
[**Journey.js**](https://github.com/williamtroup/Journey.js) — A lightweight, easy-to-use JavaScript library to create interactive, customizable, accessible guided tours for websites and apps.  
  
[**gsplat.js**](https://github.com/huggingface/gsplat.js) — An easy-to-use, general-purpose, open-source 3D Gaussian Splatting library, providing functionality similar to Three.js but for Gaussian Splatting.  
  
[**export-to-csv**](https://github.com/alexcaza/export-to-csv) — A small, simple, and single-purpose CSV export library with zero dependencies, functionally inspired, and fairly well-typed.  
  
[**Siero**](https://github.com/fabiospampinato/siero) — A serialization library that can handle functions, promises, and symbols, and can be used with an accompanying worker utility.