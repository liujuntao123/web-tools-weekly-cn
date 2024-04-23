               

### Issue #554  (STRICH Review, JS Utils, Testing, JS Lib Plugins)02/29/24

**_The following is a paid product review for_** [**_STRICH_**](https://strich.io/?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview)**_, a JavaScript library for real-time, multi-format barcode scanning directly in the browser._**  
  
I think it's safe to say everyone reading this knows what a barcode is. Barcodes have been used for more than half a century to identify physical products, to prevent theft and price tag-swapping, to track packages, among other uses.  
  
Today I'm introducing [**STRICH**](https://strich.io/?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview) (from German meaning "line" or "stroke"), a JavaScript library that allows you to easily build high-performance barcode scanning functionality into any web app.

[![STRICH, a JavaScript library for barcode scanning in the browser](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/e0c6e6fd-c0d9-bb81-5cb7-8496be6b7b02.png)](https://strich.io/?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview)

STRICH, a JavaScript library for barcode scanning in the browser

[**STRICH**](https://strich.io/?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview) includes a number of features developers will love, especially those of us who want the web platform to win.  
  
First of all, you can easily install the STRICH SDK via npm and it has zero dependencies:

```
npm install @pixelverse**/**strichjs**\-**sdk
```

STRICH is built purely using web technologies like WebGL and WebAssembly and isn't dependent on any fancy or bulky third-party solutions for its scanning capabilities. The installation amounts to a single JavaScript file with optional TypeScript bindings. And because STRICH is built for the web, it will work on any modern device without the need to maintain multiple code bases for different native mobile platforms – and your users don't have to install anything.  
  
STRICH can be used to build any app that will take the place of any expensive hardware solutions you might be using at the moment for your barcode scanning needs. This could be some form of ticketing service, merchandise tracking, delivery services, and so on. You can check out case studies for [Bold.co](https://strich.io/case-study-bold.html?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview) and [Swiss Federal Railways](https://strich.io/case-study-sbb.html?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview) for some example real-world uses.  
  
As for the barcode scanning technology itself, STRICH supports [both 1D and 2D barcode scanning](https://strich.io/supported-types.html?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview), with a number of different types, or symbologies, included.

![1D barcodes supported by STRICH](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/71ab0818-5c22-9b21-8af0-e9ed68749907.png)

STRICH supports 1D and 2D barcodes

Because STRICH is in continuous development, new barcode types will be added as demand increases, so you can always ask about a particular type that's not currently supported, which may already be in the pipeline.  
  
The fact that STRICH is built on web technologies also means it's not restricted for use with a particular library or framework. You can use it in a vanilla JavaScript app or with React, Vue, Angular, or any other framework.  
  
You can get up and running pretty quickly with STRICH once you've installed it and signed up for an account. STRICH offers a 30-day free trial to test out its features.  
  
With your account active, you'll have access to your STRICH dashboard, which includes scanning usage stats, license keys, and more.

![Using your STRICH dashboard](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/2e6bd18b-0674-2e8b-26ee-a17377a36882.png)

Using your STRICH dashboard

In my account, I've created a single license key for use with two different domains. Usefully, addresses like localhost, 127.0.0.1, and private IP ranges (e.g. 192.168.x.y, 10.x.y.z), often used in local development, are included by default with any license key created, so you don't need to specify those.

![Creating a new STRICH license key](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/fd93f0b1-6566-fe69-2666-9ab57488ccc0.png)

Creating a new STRICH license key

Once I have access to that key, I can use something like the following code to initialize the STRICH SDK, giving me full access to the API within my custom barcode scanning app:

```
import { StrichSDK, BarcodeReader } from './js/strich.js';  
  
StrichSDK.initialize('<License Key... >')  .then(() \=> console.log('STRICH SDK initialized'));
```

There are some real-world, working examples you can examine on GitHub if you want to take a deeper look at the code or install locally to try them out using your own license key:

*   [STRICH sample using vanilla JavaScript](https://github.com/pixelverse-llc/strich-javascript-sample)
*   [STRICH sample using Next.js/React](https://github.com/pixelverse-llc/strich-next-sample)
*   [STRICH sample using Vue 2](https://github.com/pixelverse-llc/strich-vue2-sample)

You can also check out an in-depth tutorial for [using STRICH to scan barcodes on U.S. drivers' licenses](https://docs.strich.io/scanning-pdf417-barcodes-on-us-driving-licenses-for-age-verification.html?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview) if you'd like something deeper that breaks down the different aspects of the code in real-world usage.  
  
Depending on the technology used, you'll notice a more-or-less similar pattern where your markup will include a 'scanner' element that you'll use to host an instance of **BarcodeReader**, which will generate the UI for scanning.  
​

```
<div class**\=**"container"\>  <div class**\=**"scanner"\>    _<!-- STRICH BarcodeReader will live here -->_  </div\>  <section id**\=**"results"\>    _<!-- results will be added here -->_  </section\>  
</div\>
```

STRICH provides a few different [pricing plans](https://strich.io/?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview#pricing), along with an enterprise option for larger volume. The basic plan includes **up to 10,000 scans per month** and the professional plan includes **up to 100,000 scans per month**. With either of these plans, the limits are soft for up to two months, so you don't have to worry about failed scans should you go over. The enterprise plan includes unlimited scanning, among other features.  
  
Even with the Basic plan (which is a paid plan), you get features like:

*   Unlimited devices
*   Unlimited applications
*   Free updates to the SDK
*   All supported 1D and 2D barcode types
*   Web-based analytics

The Professional plan includes all of the above along with the extra scans per month and priority support.  
  
The STRICH team has set up [this demo app](https://demo.strich.io/home?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview) you can try out using a mobile device, if you'd like to see it in action without the need to sign up for the trial. This is particularly useful if you want to test out your own existing barcodes to make sure STRICH supports them. The demo allows you to select the barcode type or you can choose "all" (as I did in the screenshot below).

![Testing barcode types on STRICH's live demo](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/26bb3d86-4192-bcdb-56ab-79692931bcad.png)

Testing barcode types on STRICH's live demo

That should give you a good idea of what STRICH is capable of and how simple it is to get it up and running. The STRICH docs have a [getting started guide](https://docs.strich.io/getting-started.html?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview), along with a full API reference so you can get an idea of what types of functionality you can incorporate into your own product.  
  
So if your startup or business is in need of a mature and well-maintained barcode scanning solution, be sure to check out [**STRICH**](https://strich.io/?utm_source=newsletter&utm_medium=email&utm_campaign=WebToolsWeeklyReview).   
  
Now on to this week's tools!  
  
 

JavaScript Utilities
--------------------

[**systeminformation**](https://github.com/sebhildebrandt/systeminformation) — A dependency-free Node.js library of 50+ functions to retrieve detailed hardware, system and OS information, with support for Linux, macOS, partial Windows, SunOS, and Android, and more.  
  
[**tldts**](https://github.com/remusao/tldts) — A fast JavaScript utility to extract hostnames, domains, public suffixes, top-level domains, and subdomains from URLs.  
  
[**Tempo**](https://tempo.formkit.com/) — A comprehensive JavaScript and TypeScript library to parse, format, manipulate, and internationalize dates and times.  
  
[**Meco**](https://www.meco.app/get/3nux) — Free your newsletters from the inbox. The inbox is full of distractions and too many subscriptions lead to inbox chaos. Time to liberate your inbox and move to Meco, a newsletter aggregator built for reading.    SPONSORED   
  
[**neoconfetti**](https://github.com/PuruVJ/neoconfetti) — Add a confetti explosion to any page in vanilla JavaScript, with integrations for Svelte, React, Vue, and Solid also.

[![neoconfetti](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/177e384f-63b9-69f2-d5fc-1a168c094bc5.png)](https://github.com/PuruVJ/neoconfetti)

  
[**Sutra**](https://github.com/yantra-core/Sutra.js) — A versatile library for creating and managing behavior trees in JavaScript, useful for game logic development, for easy definition of complex behavior patterns using a simple and intuitive syntax.  
  
[**zip.js**](https://gildas-lormeau.github.io/zip.js/) — A JavaScript library to zip and unzip files supporting multi-core compression, compression streams, zip64, split files, and encryption.  
  
[**x-crawl**](https://github.com/coder-hxl/x-crawl) — A flexible Node.js multifunctional crawler library with flexible usage and numerous functions to help you quickly, safely, and reliably crawl pages, interfaces, and files.  
  
[**sort-on**](https://github.com/sindresorhus/sort-on) — A utility to sort an array based on an object property, with options for descending/ascending, nested objects, among other features.  
  
[**plain-page-transition**](https://github.com/michalzalobny/plain-page-transition) — A dependency-free utility to integrate animated page transition effects to a simple website.  
  
[**Verticalize**](https://github.com/laurentpayot/verticalize) — A pipe-like function to "verticalize" your JavaScript code. There's an example on the page if you aren't sure what that means and part of me doesn't even think this is a serious thing.

 

Testing & Debugging Tools
-------------------------

[**Automock**](https://automock.dev/) — A tool to optimize the unit testing process within dependency injection frameworks by providing a virtual, isolated environment and automated mock generation, for more efficient test suites.  
  
[**wacat**](https://github.com/mikesmallhelp/wacat) — A utility powered by Playwright to run chaotic tests on your web app, inspired by the manner a cat may chaotically walk across a keyboard, pressing every key.  
  
[**Nuxt Test Utils**](https://github.com/nuxt/test-utils) — The same set of utilities used by the Nuxt team, offering first-class support for end-to-end and unit testing of your Nuxt applications.  
  
[**Echoed**](https://github.com/mrasu/echoed) — An enhanced API testing solution that uses OpenTelemetry on top of Jest, with YAML support, test troubleshooting, code compatibility, and more.  
  
[**The Secret Sauce To HTML Video Autoplay**](https://imagekit.io/blog/html-video-autoplay/?utm_source=Webtoolsweekly&utm_medium=email&utm_campaign=VideoAPI_Newsletter_Q423&utm_term=HTML_Video_Autoplay&utm_content=Text+ad+) — We'll delve into HTML video autoplay, exploring how this feature has revolutionized online content delivery, the pitfalls to avoid, and pairing it with ImageKit to make autoplay an asset (and not an annoyance!) for your website.    SPONSORED   
  
[**line-length**](https://psalaets.github.io/line-length/) — A bookmarklet that allows you to mouse-over any element on a page and view information on median and max line-length, useful for projecting readability in layouts.  
  
[**Tabgod**](https://chromewebstore.google.com/detail/tabgod-cross-tab-javascri/hllgifenolhiihoihflfghkfaefpjdbg) — A Chrome extension that allows you to execute any JavaScript on any open browser tab in parallel.  
  
[**Vue DevTools Next**](https://devtools-next.vuejs.org/) — The next iteration of Vue DevTools, currently available as a Vite plugin or standalone app, with a Chrome extension coming soon.

[![Vue DevTools](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/585718e6-9147-3520-b4b7-47a691f5022c.png)](https://devtools-next.vuejs.org/)

  
[**Chai**](https://www.chaijs.com/) — A BDD / TDD assertion assertion library, similar to Node's built-in assert, for Node.js and the browser that can be paired with any testing framework.  
  
[**Device Simulator & Tester**](https://device-simulator.vercel.app/) — A Chrome extension to test websites on multiple devices in a single tab, with some features like scroll to selector, scroll sync, navigation sync, and more.  
​

  
 

JS Library Plugins & Tools
--------------------------

[**multipleWindow3dScene**](https://github.com/bgstaal/multipleWindow3dScene) — A quick example of how one can "synchronize" a 3D scene across multiple windows using Three.js and localStorage.  
  
[**express-typescript-skeleton**](https://github.com/borjapazr/express-typescript-skeleton) — A template to start developing a REST API with Node.js (Express), TypeScript, Ts.ED, ESLint, Prettier, Husky, Prisma, etc.  
  
[**Animotion**](https://github.com/animotionjs/animotion) — A presentational framework for creating beautiful slides and visualizing ideas with code using Svelte, Reveal.js, and Tailwind.  
  
[**remix-wizard**](https://github.com/dan-cooke/remix-wizard) — An all-in-one solution for building wizards (i.e. setup assistants or multi-step forms) using Remix.  
  
[**The Secret Sauce To HTML Video Autoplay**](https://imagekit.io/blog/html-video-autoplay/?utm_source=Webtoolsweekly&utm_medium=email&utm_campaign=VideoAPI_Newsletter_Q423&utm_term=HTML_Video_Autoplay&utm_content=Text+ad+) — We'll delve into HTML video autoplay, exploring how this feature has revolutionized online content delivery, the pitfalls to avoid, and pairing it with ImageKit to make autoplay an asset (and not an annoyance!) for your website.    SPONSORED   
  
[**Svelte Stepper**](https://github.com/efstajas/svelte-stepper) — A simple headless library for building delightfully animated stepped flows with Svelte, with full control over customizing transitions, layout, styles, etc.  
  
[**Paperless-ngx**](https://docs.paperless-ngx.com/) — An Angular-powered, community-supported, open-source document management system that transforms your physical documents into a searchable online archive so you can keep less paper.  
  
[**⌘K-sv**](https://www.cmdk-sv.com/) — Svelte version of the popular CMD-K pattern for adding fast, unstyled command palette-like functionality to a web app or docs site.

[![CMDK-sv](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/8fa06d0b-1d67-2c44-4643-de8027da44e8.png)](https://www.cmdk-sv.com/)

  
[**Express Slow Down**](https://github.com/express-rate-limit/express-slow-down) — Basic rate-limiting middleware for Express that slows down responses rather than blocking them outright.  
  
[**three-hex-tiling**](https://github.com/Ameobea/three-hex-tiling) — A Three.js plugin that adds support for hiding repeating texture patterns to Three.js.  
  
[**three.js Realism Effects**](https://github.com/0beqz/realism-effects) — A set of effects for Three.js (SSGI, Motion Blur, TRAA) to enhance your three.js scene's realism.  
​