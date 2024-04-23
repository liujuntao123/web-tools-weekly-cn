               

### Issue #556  (structuredClone(), Frameworks, Testing, JS Utils)03/14/24

  

Since 2022, all modern browsers have had full support of the new **structuredClone()** method that allows you to create a deep clone of a given object using something called the _structured clone algorithm_ (which is the mechanism working behind the scenes).  
  
A simple example of the method in use looks like this:

```
const obj \= {  
  name: "WTW",  
  type: "Newsletter"  
};  
  
// clone the original  
const clone \= structuredClone(obj);
```

The method takes one mandatory argument, the object you want to clone, and it's a method in the global scope, so it belongs to the Window object and isn't called on any specific object.  
  
Once the clone is created, you still have access to each of the objects individually and can modify them as needed and each will reflect its own changes. For example:

```
// modify the clone  
clone.issue \= 556;  
  
// modify the original  
delete obj.type;  
  
// clone and original reflect changes  
console.log(clone);  
/\* Result:  
{  
  "name": "WTW",  
  "type": "Newsletter",  
  "issue": 556  
}  
\*/  
  
console.log(obj);  
/\* Result:  
{  
  "name": "WTW"  
}  
\*/
```

You can try out the above code in [this CodePen demo](https://codepen.io/impressivewebs/pen/OJGRMPg?editors=0011).  
  
And one extra feature in **structuredClone()** is the ability to transfer objects from the original during the cloning process. This means you're technically cloning with exceptions, thus it's not a full clone. The only catch is that you can only transfer objects that are transferable. Examples are ArrayBuffer, MessagePort, AudioData, ImageBitmap, and VideoFrame. You can see a full list of transferable objects in [this MDN article](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).  
  
And as a side point, the **structuredClone()** [article](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) on MDN is an example of an article that benefits from the new "Baseline..." info component that's included in some articles for new features. It looks like this:

![MDN's new Baseline info box](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ab38dfa5-319c-7b94-3b47-752895baf3e4.png)

This is a neat little feature that gives you a quick summary of current browser support. This seems to be placed at the top of articles for modern features to indicate if these are safe to use (as opposed to older features that are almost always cross-browser and have been for a long time).  
  
Now on to this week's tools!  
  
 

Web Frameworks
--------------

[**Astroplate**](https://github.com/zeon-studio/astroplate) — A free starter template built with Astro, Tailwind, and TypeScript, with features for blogging like multiple authors, similar posts, tags/categories, and lots more.  
  
[**Tailframes**](https://www.tailframes.com/) — A UI components library built with Tailwind that includes about 20 primary components along with variations for each.  
  
[**VueEmail**](https://vuemail.net/) — A collection of 15+ high-quality, unstyled components for creating beautiful emails using Vue and TypeScript. Has integrations with different ESPs.  
  
[**Video API That Developers Love**](https://imagekit.io/use-cases/video-api/?utm_source=Webtoolsweekly&utm_medium=email&utm_campaign=VideoAPI_Newsletter_Q423&utm_term=VideoAPI_Stunning_Visual&utm_content=Top_Ad) — Effortlessly crop, resize, trim, and overlay videos using 50+ URL parameters. Automate format conversion and video quality. Use HLS & MPEG-DASH protocols for a smooth streaming experience. Try our free plan and supercharge your videos.     SPONSORED   
  
[**Beer CSS**](https://www.beercss.com/) — A CSS framework and component library based on Material Design 3, to help you build Material Design UIs fast, with access to 30+ components, example templates, theming, light/dark modes, and more.

[![Beer CSS](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/328468a9-e969-c789-239c-86f4133dd2f1.png)](https://www.beercss.com/)

  
[**Naturaily Storyblok**](https://github.com/Naturaily/naturaily-storyblok-next-starter) — A Jamstack starter template built with Next.js, Turborepo, and Tailwind, with ready-to-use configs for Storyblok, Storybook, ESLint, Prettier, Framer Motion, and more.  
  
[**Just Ship**](https://www.justship.today/) — A TypeScript-based starter template built with SvelteKit that features Google or magic link login, Turso for database, Vercel for hosting, shdcn-svelte, etc.  
  
[**Wiki.js**](https://js.wiki/) — Powerful and extensible open-source Wiki software, based on Node.js, to build documentation with an intuitive interface, installable on almost any platform.  
  
[**Browser Extension Template**](https://github.com/puemos/browser-extension-template) — A template for building browser extensions, based on React, shadcn/ui, Storybook, and Lucide for icons.  
  
[**Design Systems Database**](https://designsystems.surf/) — A categorized directory of design systems from popular brands. You can also choose a component type to filter the design systems that include the chosen component.  
 

Testing & Debugging Tools
-------------------------

[**debugbar**](https://debugbar.dev/) — I rarely include Ruby on Rails tools, but this is a debugging tool for RoR developers to get a better understanding of your application performance and behavior.  
  
[**Testcontainers**](https://testcontainers.com/) — An open-source framework for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container.

[![Testcontainers](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/f9bbc088-b9f7-f6ea-73ed-cca6e098808d.png)](https://testcontainers.com/)

  
[**Dep Tree**](https://github.com/gabotechs/dep-tree) — A Go-based tool to visualize the entropy of a code base with a 3D force-directed graph. For example, the more decoupled and modular a code base is, the more spread-out the graph will look.  
  
[**UI Options**](https://floeproject.org/ui-options/) — A Chrome extension that adds a customizable slide-down menu on any page, to help you enhance or improve website usability, flexibility, and accessibility.  
  
[**Responsive Viewport Units**](https://github.com/ClintonGallagher/responsive-viewport-units) — A JavaScript utility that generates and displays a browser's viewport unit values when a page is loaded and regenerates the unit values each time the browser is resized horizontally or vertically.  
  
[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux) — The inbox is full of distractions and too many subscriptions lead to inbox chaos. Free your newsletters from the inbox. Move your newsletters to a space built for reading and declutter your inbox in seconds.    SPONSORED   
  
[**Keploy**](https://keploy.io/) — An open-source and extensible Go-based backend testing tool for converting user-traffic to test cases and data stubs.  
  
[**PHPSecure**](https://phpsecure.net/) — A vulnerabilities scanner for PHP projects, with support for Laravel, WordPress, Drupal, and Joomla, and is currently free during Beta.  
  
[**Firecamp**](https://github.com/firecamp-dev/firecamp) — A developer-first open-source tool that's an alternative to tools like Postman or Insomnia, to help you design, develop, test, and document APIs.  
  
[**Multiple**](https://www.multiple.dev/) — A developer-centric load-testing platform that can test anything across your stack. Free plan allows up to 200 virtual user hours and 50 virtual users.

  
 

JavaScript Utilities
--------------------

[**Observe.js**](https://github.com/williamtroup/Observe.js) — A lightweight JavaScript library that allows developers to keep track of changes to JavaScript objects and/or DOM elements.  
  
[**Cookie Consent**](https://github.com/brainsum/cookieconsent) — A script to add a GDPR-compliant cookie consent notification on a first visit, with options to consent to different categories of cookies and services.

[![Cookie Consent](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/d424c3e2-ad2f-a22c-9528-38736f7ca8bc.png)](https://github.com/brainsum/cookieconsent)

  
[**worker-timers**](https://github.com/chrisguttandin/worker-timers) — A Web Workers-based replacement for the setInterval() and setTimeout() methods that works in unfocused windows.  
  
[**Type.js**](https://github.com/mattboldt/typed.js/) — A library that lets you add custom 'typing' animations to any text, with features like fad out, smart backspace, bulk typing, and more.  
  
[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux) — The inbox is full of distractions and too many subscriptions lead to inbox chaos. Free your newsletters from the inbox. Move your newsletters to a space built for reading and declutter your inbox in seconds.    SPONSORED   
  
[**fuzzy-search**](https://github.com/m31coding/fuzzy-search) — A fast, accurate, and multilingual fuzzy search library for searching objects with IDs (entities) by their names and features (terms).  
  
[**unenv**](https://github.com/unjs/unenv) — A framework-agnostic system that allows you to convert JavaScript code to be platform agnostic and work in any environment including browsers, Web Workers, Node.js, or a JavaScript runtime.  
  
[**strz**](https://github.com/dilan-dio4/strz) — A dependency-free, tree-shakable utility that brings the power of strongly typed string functions to TypeScript.  
  
[**Transformers.js**](https://github.com/xenova/transformers.js) — State-of-the-art Machine Learning for the web that serves as a functionally-equivalent JavaScript version of Hugging Face's Python library with a similar name.  
  
[**Effection**](https://frontside.com/effection) — Structured concurrency and effects for JavaScript, giving you leak-proof control over asynchronous operations.