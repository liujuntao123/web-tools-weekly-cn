               

### Issue #550  (Fullscreen API, JS Libs, AI Tools, React)02/01/24

  

The Fullscreen API has excellent browser support pretty much across the board in modern browsers thus has been safe to use for a few years now. The API itself isn't too complex and has only a small number of methods and properties.  
  
The Fullscreen API technically allows you to programmatically make just about any element on the page move into fullscreen mode.  
  
A simple function that toggles fullscreen mode might look something like this:

```
function toggleFullScreen() {  
  if (!document.fullscreenElement) {  
    document.documentElement.requestFullscreen();  
  } else {  
    if (document.exitFullscreen) {  
      document.exitFullscreen();  
    }  
  }  
}
```

Then you would need some kind of trigger for the toggle. [This CodePen demo](https://codepen.io/impressivewebs/pen/wvOmzbK?editors=0011) uses a button that the user can click to toggle it.  
  
Fullscreen mode is toggled on using the **requestFullscreen()** method. This method is applied to whatever element you want to go fullscreen (e.g. a video or the whole document, as in the above example).  
  
The function also uses the **fullscreenElement** property of the current document to check if any element is currently in fullscreen mode. This property returns the current fullscreen element. So you can use something like **tagName** or **nodeName** to find out which element it is. In the demo I'm logging the tag name of the fullscreen element.  
  
The function also uses the **exitFullscreen()** method, which is applied directly to the **document** object, rather than the element that's in fullscreen.  
  
Some other notes about the Fullscreen API:

*   The **document.full­screenEnabled** property can be used to check if the current page or device has fullscreen capabilities.
*   There is a **fullscreenchange** event that you can use to detect whenever an element has transitioned to or from fullscreen mode.
*   Users are not forced to stay in fullscreen mode by this API; they can use ESC or F11 to exit fullscreen mode.
*   The request and exit methods both return a Promise after their respective transitions to or from fullscreen mode.

That's more or less the Fullscreen API in a nutshell. In might come in handy in specific circumstances where fullscreen capability isn't obvious. For example a video already has fullscreen option but you can also do this with some kind of embedded game or animation that you want the user to be able to view in fullscreen mode for a distraction-free experience.  
  
Now on to this week's tools!  
 

JavaScript Libraries & Frameworks
---------------------------------

[**Simple Statistics**](https://github.com/simple-statistics/simple-statistics) — A JavaScript implementation of descriptive, regression, and inference statistics, implemented with no dependencies and designed to work in all modern browsers and Node.js.  
  
[**Shadeup**](https://shadeup.dev/) — A language crafted to make shaders a breeze, powered by WebGPU, extended from TypeScript, and designed to minimize boilerplate.  
  
[**Moddio**](https://github.com/moddio/moddio2) — A multiplayer-first game engine with built-in server-authoritative netcode, including snapshot interpolation and client-side reconciliation, with support for 50+ concurrent players or 300+ moving entities.  
  
[**Low-Code for Enterprise Application Development**](https://vpdae.com/redirect/6wtx4q3h07n9fvr04pz8o154rl) — BitDegree's Bridge the gap between speed and quality. Overcome technical barriers and budget constraints by leveraging a professional low-code solution designed to simplify enterprise application development.     SPONSORED   
  
[**H3**](https://github.com/unjs/h3) —  A minimal http framework built for high performance and portability and includes a set of composable utilities but can be extended and super-fast route matching.  
  
[**Cami**](https://camijs.com/) — A simple and powerful UI framework for interactive islands in web applications with no build step required. Includes reactive web components, async state management, streams, and cross-component state management.  
  
[**Electron Prokit**](https://github.com/Xutaotaotao/electron-prokit) — A desktop app framework based on Electron, to develop native desktop applications with JavaScript. Includes support for Vite, fully-typed APIs, and more.  
  
[**QX82**](https://btco.github.io/qx82/) — A tiny JavaScript engine that lets you create games and experiences inspired by the look and feel of a retro 1980s computer.

[![QX82](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/dcdb81e1-f8dd-98c0-025a-e2a013c9c554.png)](https://btco.github.io/qx82/)

  
[**ReqEase**](https://github.com/ReqEase/ReqEase) —  A versatile front-end library designed to streamline web development tasks by simplifying things like HTTP requests with validation, loading indicators, and response handling.  
  
[**Ree.js**](https://ree.js.org/) — A framework for building web applications at scale, using a build tool powered by Sucrase (the Babel alternative), direct URL imports, support for most runtimes, among other features.  
  
[**Mosaic**](https://uwdata.github.io/mosaic/) — A framework for linking data visualizations, tables, input widgets, and other data-driven components so you can interactively visualize and explore millions and even billions of data points.

 

ChatGPT and AI Tools
--------------------

[**Casibase**](https://casibase.org/) — An open-source domain knowledge database, instant messaging, and forum software, powered by ChatGPT.  
  
[**llamafile**](https://github.com/Mozilla-Ocho/llamafile) — A project that allows you to distribute and run LLMs with a single file, to make open source large language models more accessible to both developers and end users.  
  
[**Promptr**](https://github.com/ferrislucas/promptr) — A CLI tool that lets you use plain English to instruct OpenAI LLM models to make changes to your codebase.  
  
[**yaml-runner**](https://github.com/mbusigin/yaml-runner) — A command-line tool that automates the execution of tasks based on instructions defined in YAML files, to execute instructions from GPT-4, or other LLMs.  
  
[**Get Smarter About AI and Tech in 5 min**](https://sparklp.co/p/1fb93bdda8) — Receive a daily summary of the most important AI and Tech news, carefully selected from 60+ media outlets. Join 30,000+ professionals from OpenAI, Meta, Google, Microsoft, Hugging Face, JP Morgan, and more.    SPONSORED   
  
[**WeatherGPT**](https://github.com/steven-tey/weathergpt) — A ChatGPT plugin starter template built with Next.js 13 App Router, Edge Functions, and Vercel, to get the weather of any given location.  
  
[**Fastpedia**](https://fastpedia.io/) — A large directory of AI tools, searchable by keyword or one of the dozens of tags/categories (voice, image editing, low-code, marketing, etc).

[![Fastpedia](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/a4cfdd6f-6dbb-6faa-91db-d34f7a3db36b.png)](https://fastpedia.io/)

  
[**GPT Assistant**](https://github.com/BuilderIO/gpt-assistant) — An experimental tool, built with Qwik and Puppeteer, to give an autonomous GPT agent access to a browser and have it accomplish tasks.  
  
[**AI Legion**](https://github.com/eumemic/ai-legion) — An LLM-powered autonomous agent platform to allow autonomous agents to work together to accomplish tasks.  
  
[**node-openai**](https://github.com/joyqi/node-openai) — An elegant Node.js library written in TypeScript for the OpenAI API, with no dependencies and works in Node.js and the browser.  
  
[**BingGPT**](https://github.com/dice2o/BingGPT) — A desktop application for Bing's new AI-powered chat, allowing you to chat with Bing without installing Microsoft Edge or any browser extension.

  
 

React Tools
-----------

[**react-quiz-component**](https://github.com/wingkwong/react-quiz-component) — A React component that allows you to create an interactive quiz for users, with lots of features to customize the types of questions, included data, real-time feedback, and lots more.  
  
[**Beak.js**](https://github.com/mme/beakjs) — Everything you need to create custom AI-powered assistants for your React app, with an easy-to-customize built-in UI.  
  
[**next-safe-action**](https://next-safe-action.dev/) — A library that takes full advantage of the latest and greatest Next.js, React and TypeScript features, using validation libraries of your choice, to let you define type-safe Server Actions and execute them inside Client Components.  
  
[**Next Fetch**](https://github.com/vercel-labs/next-fetch) — An intuitive way to dynamically fetch data from API endpoints in Next.js, using your favorite libraries.  
  
[**Get Smarter About AI and Tech in 5 min**](https://sparklp.co/p/1fb93bdda8) — Receive a daily summary of the most important AI and Tech news, carefully selected from 60+ media outlets. Join 30,000+ professionals from OpenAI, Meta, Google, Microsoft, Hugging Face, JP Morgan, and more.    SPONSORED   
  
[**Graphic Walker**](https://github.com/Kanaries/graphic-walker) — An open-source alternative to Tableau that allows data scientists to analyze data and visualize patterns with simple drag-and-drop and natural language query operations, easy to embed in a React app.  
  
[**React Curved Text**](https://obss.github.io/react-curved-text/) — A React component for creating circular or curved text. The home page has an interactive example showing how you can customize the different settings.

[![React Curved Text](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/e06101db-6d8b-6074-52a0-d7ba3e997e08.png)](https://obss.github.io/react-curved-text/)

  
[**Reacton**](https://github.com/widgetti/reacton) — A pure Python port of React for ipywidgets (which is a set of interactive widgets for Jupyter Notebooks).  
  
[**Superglue**](https://github.com/thoughtbot/superglue) — If Python isn't your thing, this project (still in early development) lets you use classic Rails to build rich React Redux applications with no APIs and no client-side routing.  
  
[**re-frame**](https://github.com/day8/re-frame) — We covered Python and Rails, how about a ClojureScript framework for building user interfaces, leveraging React.  
  
[**react-three-gpu-pathtracer**](https://github.com/pmndrs/react-three-gpu-pathtracer) — A React abstraction for the popular three-gpu-pathtracer project.