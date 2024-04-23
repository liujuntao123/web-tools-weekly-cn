               

### Issue #552  (JS Vulnerabilities, JS Utils, Media, Mobile)02/15/24

  

The DevTools in Chromium-based browsers continue to be improved on and if you're not careful you can end up using the same features without checking out other useful stuff.  
  
One new feature that's currently in experimental mode is the **"CSS Overview"**. To access this section, visit the page for which you want to generate a CSS overview, then click the three dots in the top-right area (the "Customize and control DevTools" option). Select "More tools" then choose "CSS Overview". You can also open the same option using the command palette by doing a keyword search.

![Opening the CSS Overview panel in DevTools](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ca77ef68-85b5-e0c3-bac3-d1f2bb58ebf5.png)

Opening the CSS Overview panel in DevTools

This brings up a summary page explaining briefly how the tool can help you. Click the "Capture Overview" button to run the CSS Overview test.  
  
The first thing you'll see in the result is a basic overview of your page's CSS, with data on number of stylesheets, inline style elements, number of style rules, as well as different types of selectors.

![A synopsis of the CSS Overview features](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/65290bb4-fce2-6fe8-5e24-7debb39a174e.png)

A synopsis of the CSS Overview features

After that, there's info on colors, which divides the colors into categories and provides info on low contrast. The example shown in the screenshot below has 7 different contrast issues that could use fixing for more accessible text.

![A generated CSS Overview summary](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/08700afa-7d8e-b579-bd4a-19892321fec2.png)

A generated CSS Overview summary

There's also info on fonts. For both colors and fonts, you can click on a color or a font to see a list of elements using that color or font. You can click the element to go to it in the Elements panel if you want to deal with it in there.

![Examining colors using CSS Overview](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/0f4d816f-65dd-87b6-000d-2f35ac8b843c.png)

Examining colors using CSS Overview

And you can also simply hover over any of the elements in the list and the element will be indicated visually on the page so you can see which one it maps to in the layout, as shown in the screenshot below.

![Hovering over an element in the elements list in CSS Overview](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5ba31599-5267-da85-f6f0-99b0ceabb346.png)

Hovering over an element in the elements list in CSS Overview

And finally, there's info on unused declarations and number of media queries used on the page. The unused declaration info can certainly be useful for cleaning up your stylesheets and doing some refactoring.

![The unused declarations section in the CSS Overview](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5150ba12-eed2-f58e-439e-eb8a4c615300.png)

The unused declarations section in the CSS Overview

When you first open the CSS Overview panel, you'll see a reminder that this is still an experimental feature, with a link to [this bug report thread](https://issues.chromium.org/issues/40202474) where you can submit issues if you find any. You can also use that for feature requests. It will be interesting to see how this feature improves as it's developed and comes out of the experimental stage, so keep an eye on that!  
  
Now on to this week's tools!  
  
 

Web Frameworks
--------------

[**DigitalHippo**](https://github.com/joschan21/digitalhippo) — A modern full-stack e-commerce marketplace template for digital products, built with Next.js, shadcn/ui, and Tailwind, and includes an admin dashboard, auth via Payload, and lots more.  
  
[**The Boring JavaScript Stack**](https://github.com/sailscastshq/boring-stack) — An opinionated full-stack JavaScript project starter built with Sails (the Node.js framework), Inertia (for SPA), Tailwind, and is compatible with Vue, React, or Svelte.  
  
[**Product for Engineers**](https://newsletter.posthog.com/?utm_source=webtools&utm_campaign=webtools) — Product for Engineers is PostHog’s newsletter dedicated to improving engineer's product skills. Subscribe for free to get advice on building great products, lessons (and mistakes) from PostHog, and deep dives on top startups.     SPONSORED   
  
[**David UI Angular**](https://www.david-ui-angular.com/) — A UI component library for enterprise-level projects based on Tailwind and Angular and features 20+ customizable components.

[![David UI Angular](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/4ddadbb9-690a-89c0-a966-a2acea7638bc.png)](https://www.david-ui-angular.com/)

  
[**Draft UI**](https://draft-ui.com/) — A set of 20+ simply designed React components focused accessibility and built with Adobe's React Aria library and Tailwind.  
  
[**Homepage**](https://github.com/gethomepage/homepage) — A modern, fully static, fast, secure fully proxied, highly customizable application dashboard, configured via YAML files, with integrations for over 100 services and translations into multiple languages.  
  
[**Baklava**](https://github.com/Trendyol/baklava) — A component library and design system based on native Web Components and can be easily integrated with your framework of choice.  
  
[**rainboot.css**](https://rainboot.github.io/) — A Bootstrap theme with the same basic features as Bootstrap but powered by design tokens from Cloudscape, a third-party design system and component library.  
  
[**JSX Email**](https://jsx.email/) — A set of React components and helpers for building responsive email templates with JSX or TSX and compatible with modern email clients.  
  
[**Nextly**](https://github.com/web3templates/nextly-template) — A landing page and marketing website template for startups and indie projects, built with Next.js and Tailwind.

 

Build Tools, Bundlers, etc.
---------------------------

[**pretty-quick**](https://github.com/prettier/pretty-quick) — An npm package that runs Prettier, the popular code formatter, on your changed files, with support for Git and Mercurial.  
  
[**Secretlint**](https://github.com/secretlint/secretlint) — A pluggable linting tool that scans your project to prevent committing credentials, installable via Docker or npm and includes a pre-commit hook.  
  
[**Oxc**](https://oxc-project.github.io/) — A collection of JavaScript tools written in Rust that includes a parser, linter, Rspack bundler, and bundler, type checker, and more.  
  
[**@fastify/vite**](https://github.com/fastify/fastify-vite) — A Fastify plugin to cleanly and elegantly integrate Fastify and Vite to create a minimal, low overhead, fast setup for full-stack monoliths.  
  
[**package-majors**](https://majors.nullvoxpopuli.com/) — An interactive tool that shows the difference in a package's major (or minor) version downloads over the past week, to help identify where people are "stuck" when doing upgrades.  
  
[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux) — The inbox is full of distractions and too many subscriptions lead to inbox chaos. Free your newsletters from the inbox. Move your newsletters to a space built for reading and declutter your inbox in seconds.    SPONSORED   
  
[**Glowup Vibes**](https://github.com/christina-de-martinez/babel-plugin-glowup-vibes) — Here's one you didn't know you needed. It's a Babel plugin that transpiles internet slang to valid JavaScript. For example "ghosted" becomes "return null", "lowkey.sus('message')" becomes console.warn("message"), etc.  
  
[**pgxman**](https://pgxman.com/) — An npm-like registry for PostgreSQL so you can discover, install, and upgrade your PostgreSQL extensions.

[![pgxman](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ecc116d2-f3f9-dc81-d6bf-8e81b05cb120.png)](https://pgxman.com/)

  
[**Banal**](https://github.com/fabiospampinato/banal) — A CLI app that lets you analyzer your bundles on-demand, powered by esbuild, and works as a replacement for similar online tools.  
  
[**TypeSpec**](https://typespec.io/) — From Microsoft, a language to describe your data up front and generate schemas, API specifications, client/server code, docs, and more.

  
 

The Uncateg­orizables
---------------------

[**Unkey**](https://unkey.dev/) — An open-source API authentication and authorization platform for scaling user facing APIs, to let you create, verify, and manage low latency API keys in seconds.  
  
[**TypeHero**](https://typehero.dev/) — Not a tool but a platform that lets you connect, collaborate, and grow with a community of TypeScript developers via interactive coding challenges, discussions, and knowledge sharing.  
  
[**CodeDiagram**](https://www.codediagram.io/) — A VS Code extension that lets you create a visual diagram of your codebase, side-by-side with your code, so you can better understand the architecture and improve refactoring.  
  
[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux) — The inbox is full of distractions and too many subscriptions lead to inbox chaos. Free your newsletters from the inbox. Move your newsletters to a space built for reading and declutter your inbox in seconds.    SPONSORED   
  
[**Zed**](https://zed.dev/) — Newly open-sourced, a high-performance, multiplayer code editor from the creators of Atom and Tree-sitter.  
  
[**Webacus**](https://webacus.dev/) — A "Swiss-army knife for developers" that includes 70+ operations, including encoding, decoding, compression, date and time functions, hashing, and lots more.

[![Webacus](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/8f562b02-807b-b038-63f5-926d1a348603.png)](https://webacus.dev/)

  
[**textart.sh**](https://textart.sh/) — A huge directory of graphics made purely with text. Just click any of the categories and you'll get multiple text art examples with options to toggle a color palette, adjust fills, and even upvote/downvote your favourites.  
  
[**Quetta**](https://www.quetta.net/) — A free, privacy-focused web browser for Android (iOS coming soon) with features like tracker blocking and data encryption.  
  
[**Tart**](https://tart.run/) — A virtualization toolset to build, run and manage macOS and Linux virtual machines on Apple Silicon devices.  
  
[**Privacy Tools**](https://www.privacytools.io/) — A one-stop resource, started in 2015, for information on services, tools, and privacy guides to counter global mass surveillance.