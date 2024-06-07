                

### Issue #566  (Visual Viewport API, JS Libs, Build Tools, Uncats)05/23/24

  

An interesting and somewhat new API that you might want to become familiar with is the [Visual Viewport API](https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API). It's been around long enough that it's now considered "Widely Available" according to MDN's browser data. So it's safe to use and looks to be quite practical for dealing with layouts on different devices and zoom levels.  
  
The Visual Viewport is defined as:

_**"...the visual portion of a screen excluding on-screen keyboards, areas outside of a pinch-zoom area, or any other on-screen artifact that doesn't scale with the dimensions of a page."**_

This improves on the concept of the general viewport (referred to as the Layout Viewport), which would include the things mentioned in that definition, basically amounting to everything currently visible on the page.  
  
The primary interface you'll work with when using the Visual Viewport API is the **VisualViewport** object. This object has the properties **offsetLeft**, **offsetTop**, **pageLeft**, **pageTop**, **width**, **height**, and **scale**. These return various values that you can work with. The API also has two events: **resize** and **scroll**.  
  
The MDN article for the **VisualViewport** object includes a couple of [live demos](https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport#examples) you can try out. But take note that if you're going to test the 'zooming', you'll have to use a mobile devices that is able to pinch-zoom. As far as I can tell, just zooming on a desktop device doesn't trigger a change in the 'scale' property that's queried in the scripts on the demos. Here's one of the example code snippets, so you can get an idea how it works:

```
const bottomBar **\=** document**.**getElementById("bottombar");  
const viewport **\=** window**.**visualViewport;  
  
function resizeHandler() {  
  bottomBar**.**style**.**display **\=** viewport**.**scale **\>** 1.3 ? "none" : "block";  
}  
  
window**.**visualViewport**.**addEventListener("resize", resizeHandler);
```

The primary action in the above code is the ternary expression that switches the display of the bottom bar depending on the value of the **VisualViewport.scale** property (abbreviated as **viewport.scale** due to the use of the variable).  
  
This interface can come in handy to hide unnecessary 'aside' content like sidebars, ads, stickied elements, and so on, depending on the zoom level. Definitely an API you'll want to utilize if you're working on layouts that need to be optimized for mobile viewing.  
  
  
Now on to this week's tools!  
 

JavaScript Libraries & Frameworks
---------------------------------

[**DBOS Transact**](https://github.com/dbos-inc/dbos-transact) — A transactional TypeScript framework that's reliable, simple, and easy to debug, for developing database-backed applications with built-in once-and-only-once code execution.  
  
[**Ollama.js**](https://github.com/ollama/ollama-js) — A JavaScript library that provides the easiest way to integrate your JavaScript project with Ollama, the popular native app to get up and running with large language models locally.  
  
[**compromise**](https://github.com/spencermountain/compromise) — A JavaScript library for doing natural-language processing that "tries its best" to turn text into data by making limited and sensible decisions.  
  
[**Support This Newsletter**](https://paypal.me/webtoolsweekly) — This newsletter is a one-man operation and finding viable sponsors is getting more difficult in the current market. You can support the newsletter with a one-time donation via PayPal.    SPONSORED   
  
[**Mana Potion**](https://github.com/verekia/manapotion) — A toolkit for JavaScript game development and interactive experiences that contains a collection of low-level utilities and helpers commonly needed when building games.  
  
[**Tini**](https://tinijs.dev/) — A small, fast, and interoperable framework for building Single Page Apps, Progressive Web Apps, or Desktop or Mobile Apps.

[![Tini](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/44e074a9-a09b-1c19-65d7-be2e85fe3ba8.png)](https://tinijs.dev/)

  
[**Sampo-UI**](https://github.com/SemanticComputing/sampo-ui) — A framework for building user interfaces for semantic portals.  
  
[**PanvasJS**](https://panvasjs.leptr.com/) — A JavaScript framework based on the HTML canvas element that's a barebones game engine for making 2D video games practically from scratch with basic tools.  
  
[**goja**](https://github.com/dop251/goja) — Not a JavaScript library but an implementation of ECMAScript 5.1 in pure Go, with emphasis on standards compliance and performance.  
  
[**Labyrinthos.js**](https://github.com/yantra-core/Labyrinthos.js) — A JavaScript procedural generator for mazes, terrains, and biomes, designed for game developers and professional hobbyists.

Build Tools, Bundlers, etc.
---------------------------

[**Earthly**](https://github.com/earthly/earthly) — A simple Go-based build framework with fast, repeatable builds and an instantly familiar syntax – like Dockerfile and Makefile had a baby.  
  
[**TS Docs**](https://tsdocs.dev/) — An online tool that lets you browse type documentation for npm packages, just enter the name of a package to view the docs.  
  
[**tshy**](https://github.com/isaacs/tshy) — A hybrid (CommonJS/ESM) TypeScript node package builder that lets you write modules that just work in ESM and CommonJS, in easy mode.  
  
[**Parcel REPL**](https://repl.parceljs.org/) — A REPL or online playground for working with and learning to use Parcel, the popular zero-config build tool.

[![Parcel REPL](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/b3bcf74f-9467-15e0-de86-876a7fe9ba14.png)](https://repl.parceljs.org/)

  
[**Kuto**](https://github.com/samthor/kuto) — A Node.js package that reduces your JavaScript download size by re-using code you've already shipped.  
  
[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/94006lvgc11in/94006-1101/Web%20Tools%20Weekly///) — Business starters, are you in need of a business address separate from your home? Anytime Mailbox provides a seamless solution, securing a private, professional address with added benefits like mail forwarding and scanning for ultimate convenience.     SPONSORED   
  
[**Dioma**](https://github.com/zheksoon/dioma) — An elegant dependency injection container for vanilla JavaScript and TypeScript, with no decorators, no annotations, and no dependencies.  
  
[**JSR**](https://jsr.io/) — An open-source package registry for modern JavaScript and TypeScript, to publish TypeScript source, while the registry handles generating API docs, .d.ts files, and transpiling your code for cross-runtime compatibility.  
  
[**TanStack Config**](https://github.com/TanStack/config) — A seamless and intuitive configuration management system that simplifies the process of building and publishing high-quality JavaScript packages.  
  
[**typescript-eslint Playground**](https://typescript-eslint.io/play/) — An online tool for working with typescript-eslint, the popular monorepo for tooling that enables ESLint and Prettier to support TypeScript.

  
 

The Uncateg­orizables
---------------------

[**Latitude**](https://tools.latitude.so/) — An open-source framework for embedded analytics to create API endpoints on top of your db or warehouse using just SQL, and embed interactive visualizations natively in your favorite frontend framework or through an iframe.  
  
[**Zenlogin**](https://zenlogin.co/) — A service that enables AI-powered email notifications for every unusual login attempt on your website. Free plan includes 500 requests and 50 suspicious login emails per month.  
  
[**SubQuery**](https://github.com/subquery/subql) — An open-source, flexible, fast and universal data indexing framework for web3, to help developers create decentralized products.  
  
[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/94006lvgc11in/94006-1101/Web%20Tools%20Weekly///) — Business starters, are you in need of a business address separate from your home? Anytime Mailbox provides a seamless solution, securing a private, professional address with added benefits like mail forwarding and scanning for ultimate convenience.     SPONSORED   
  
[**@docker/Windows**](https://github.com/dockur/windows) — Run the Windows OS inside a Docker container, with more than a dozen versions of Windows available to choose from.  
  
[**Placemark**](https://github.com/placemark/placemark) — A web-based tool for creating, editing, and visualizing map data, in a variety of formats including GeoJSON, KML, Shapefiles, CSV, and more.  
  
[**dive**](https://github.com/wagoodman/dive) — A Go-based tool for exploring a Docker image, layer contents, and discovering ways to shrink the size of your Docker/OCI image.  
  
[**Wasmer**](https://wasmer.io/) — A blazing fast and secure WebAssembly runtime that enables incredibly lightweight containers to run anywhere, including desktop, the cloud, edge, and your browser.

[![Wasmer](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/51447de4-4590-ec9e-5c58-517220b07c39.png)](https://wasmer.io/)

  
[**Casbin**](https://casbin.org/) — An authorization library written in Go that supports access control models for Node.js, JavaScript, Ruby, Python, C/C++, Golang, Java, and more.  
  
[**Dewhale**](https://github.com/Yuyz0112/dewhale) — Formerly called vx, a GitHub-powered AI, as an alternative to Vercel's v0, the tool to generate UIs from a text prompt.