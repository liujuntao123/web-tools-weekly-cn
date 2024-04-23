               

### Issue #555  (innerHTML Security, CSS/HTML, Git/CLI, AI Tools)03/07/24

  

The **Element.innerHTML** property is as old as time, and most of you who have been coding JavaScript for a while have likely used it. Nowadays, the property is discouraged due to security concerns. For example, [MDN states](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) the following regarding using **innerHTML** to replace content:

_**This is a security risk if the string to be inserted might contain potentially malicious content. When inserting user-supplied data you should always consider using Element.setHTML() instead, in order to sanitize the content before it is inserted.**_

The problem with this advice is that the **setHTML()** method is not currently supported by most modern browsers. According to the browser compatibility chart data, it had support in previous versions of Chromium browsers and others but support was dropped.   
  
I'm guessing this is (ironically) due to some type of security concern with the method somehow being exploited, so support has been dropped until the problem is resolved. So it's a good idea to keep **setHTML()** in the back of our minds for future use, but for now other solutions (like safely using **innerHTML**) will have to be relied on.  
  
Another useful tidbit that I found on the MDN article for **innerHTML** is a neat little script that lets you easily create a 'view source' button for the current web page. The code looks something like this:

```
let btn \= document.querySelector('button'),  
    de \= document.documentElement;  
  
btn.addEventListener('click', function () {  
  de.innerHTML \= \`  
    <pre>${de.innerHTML.replace( /</g, "&lt;", )}  
    </pre>  
  \`;  
}, false);
```

I've aliased the **document.document­Element** object to abbreviate the code a bit but that's the gist of the little script. [Try it on CodePen here](https://codepen.io/impressivewebs/pen/QWPjZaM?editors=0010).  
  
The main thing to notice is that I'm using **innerHTML** to replace the contents of the current document with a pair of **<pre></pre>** tags. Within those tags the script uses the **replace()** method to replace the first angle bracket of every HTML tag with its encoded equivalent. This is enough to essentially encode the HTML, as the closing angle bracket will be assumed to be encoded as well.  
  
The only problem with the demo is that there's no way to return to the original HTML without refreshing the page. I could build a mechanism to regenerate the original DOM elements, but this simple demo should suffice.  
  
I also noticed that adding any CSS to the **<pre>** element in the CSS panel won't work, so if you want to (for example) wrap the lines, you'd have add some inline styles directly onto the **<pre>** element in the JavaScript or else find a way to successfully inject the styles onto the newly added element.  
  
Now on to this week's tools!  
 

CSS & HTML Tools
----------------

[**GoHT**](https://github.com/stackus/goht) — A Haml template engine and file generation tool for Go that includes full Haml support and templates are compiled to type-safe Go.  
  
[**Curlwind**](https://curlwind.com/) — Use a CDN along with query parameters to create your own on-demand Tailwind bundle with no build process, specifying features like used classes, variants, exclude Preflight, minified or not, and more.  
  
[**htmz**](https://leanrada.com/htmz/) — A minimalist HTML microframework (similar to htmx, but simplified) for creating interactive and modular web user interfaces with the familiar simplicity of plain HTML.  
  
[**Your Next Big AI Product Idea**](https://ae.studio/lh/ai-ideas?utm_campaign=lets-talk&utm_source=web-tools-weekly&utm_medium=newsletter-ad&utm_content=ai-ideas) — We taught AI to brew beer and big ideas. Our AI Ideas Generator takes your business problem and gives you a report of AI-powered solutions that can help you address it. Give it a try.     SPONSORED   
  
[**Skeleton Generator**](https://skeletongenerator.com/) — Paste your HTML code and this tool will generate the Tailwind equivalent for generating animated 'loading skeletons' for your UI.  
  
[**Mojo CSS**](https://mojocss.com/) — An atomic CSS Framework that generates CSS based on your HTML in real-time and with near zero-runtime.

[![Mojo CSS](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/51cc6262-8010-e2b7-0a77-6b3bcc1fd02e.png)](https://mojocss.com/)

  
[**concrete.css**](https://concrete.style/) — A simple, classless CSS stylesheet, as a companion to Normalize.css, useful as a starting point for a simple website or landing page, with automatic dark mode via a media query.  
  
[**ui.jln.dev**](https://ui.jln.dev/) — A generator and directory that lets you explore 10,000+ themes for shadcn/ui. You can randomize the UI colors, save palettes, toggle dark mode, and copy the tokens as CSS variables.  
  
[**click-spark**](https://github.com/hexagoncircle/click-spark) — A web component that adds animated sparks (i.e. like tiny explosions) when the user clicks on specific parts of the page (or the whole page if you prefer).  
  
[**buttons.ibelick**](https://buttons.ibelick.com/) — A gallery of button click and hover effects built with Tailwind and easy to copy/paste into an existing Tailwind project.  
  
[**Color Lisa**](https://colorlisa.com/) — A curated list of color palettes based on masterpieces of the worlds greatest artists, with palettes in hex format.

 

Git, GitHub, & CLI Tools
------------------------

[**Distrobox**](https://distrobox.it/) — A shell application that allows you to use any Linux distribution inside your terminal. Enable both backward and forward compatibility with software and freedom to use whatever distribution you want.  
  
[**actions-batch**](https://github.com/alexellis/actions-batch) — A time-sharing supercomputer built on GitHub Actions, built in Go, allowing you to run a shell script in an isolated, immutable environment, and collect the logs or results.  
  
[**tea.xyz**](https://tea.xyz/) — A decentralized technology framework secured by reputation and incentives that enables open-source developers and maintainers to be rewarded for their software contributions.  
  
[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux) — The inbox is full of distractions and too many subscriptions lead to inbox chaos. Free your newsletters from the inbox. Move your newsletters to a space built for reading and declutter your inbox in seconds.    SPONSORED   
  
[**Sudo for Windows**](https://github.com/microsoft/sudo) — From Microsoft, a Windows-equivalent to the \`sudo\` command, allowing users to run elevated commands directly from unelevated terminal windows.  
  
[**Files Sync Action**](https://github.com/wadackel/files-sync-action) — A GitHub Action that synchronizes files across multiple repositories based on a configuration file written in YAML.  
  
[**npminsights**](https://npminsights.vercel.app/) — Enter a package name and this interactive tool will show you daily, weekly, monthly, and yearly download history in an attractive visual graph format.

[![npminsights](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/426d25f0-83c6-e4bc-d5f2-556b05aca244.png)](https://npminsights.vercel.app/)

  
[**meow**](https://github.com/sindresorhus/meow) — A dependency-free CLI app helper with features like argument parsing, converting flags to camel case, flag negation, and more.  
  
[**Gmeek**](https://github.com/Meekdai/Gmeek) — A blog generator based on GitHub Pages, GitHub issues, and GitHub Actions, and can be deployed in a few minutes.  
  
[**Diversion**](https://www.diversion.dev/) — A version control tool for modern code and assets management powered by the cloud. Includes a decent free plan (10 repos, 10 users, 100GB).

  
 

ChatGPT and AI Tools
--------------------

[**Dewhale**](https://dewhale.pages.dev/) — A GitHub-Powered AI for effortless development, an open-source alternative to v0 by Vercel.  
  
[**OpenAI DevTools**](https://github.com/AndrewWalsh/openapi-devtools) — A browser extension (Chrome & Firefox) that automatically generates OpenAPI specifications in real time for any app or website.  
  
[**McAnswers**](https://mcanswers.ai/) — A prompt library that lets you choose your programming language, then select from predefined errors and warnings, or type your own text into the prompt to create a new AI-based answer thread.  
  
[**Privy**](https://github.com/srikanth235/privy) — An open-source alternative to GitHub copilot that runs locally, featuring real-time code completion, chat about your code, and more.  
  
[**SecureAI Tools**](https://github.com/SecureAI-Tools/SecureAI-Tools) — Private and secure AI tools that includes AI chat, chat with docs, support for 100+ AI models, built-in authentication, user management, and more.  
  
[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux) — The inbox is full of distractions and too many subscriptions lead to inbox chaos. Free your newsletters from the inbox. Move your newsletters to a space built for reading and declutter your inbox in seconds.    SPONSORED   
  
[**Zerve**](https://www.zerve.ai/) — A platform that provides data science and ML teams a unified space to explore, collaborate, build and deploy data science and AI projects. Includes a free Community version for individuals.  
  
[**Visual Backend**](https://visual-backend.com/) — Generate code and scaffolding for back-end essentials like endpoint handlers, auth and CI/CD to help you quickly connect your ML service to a REST API.

[![Visual Backend](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5d350960-f798-7055-1ece-8451f573f86a.png)](https://visual-backend.com/)

  
[**Jan**](https://jan.ai/) — A native, open-source ChatGPT alternative that runs 100% offline on your computer, available for Windows, Mac, and Linux.  
  
[**nextjs-chatgpt-plugin-starter**](https://github.com/dabit3/nextjs-chatgpt-plugin-starter) — A Next.js boilerplate for creating a simple ChatGPT plugin, essentially the JavaScript version of a similar Python app.