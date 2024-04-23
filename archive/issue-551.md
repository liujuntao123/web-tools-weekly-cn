               

### Issue #551  (HTMLElement API, HTML/CSS, JSON/DB, Testing)02/08/24

  

A set of Web APIs that we may at times forget about is that consisting of the often unique APIs belonging to distinct HTML elements. MDN's reference has a specific page called the [HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) that describes these.  
  
As that document explains:

_**"The HTML DOM API is made up of the interfaces that define the functionality of each of the elements in HTML, as well as any supporting types and interfaces they rely upon."**_

For example, this is a generic **HTMLElement** API (or interface) that has specific methods and properties associated with all HTML elements. This gives you access to properties like:

*   **HTMLElement.autofocus**
*   **HTMLElement.dataset**
*   **HTMLElement.hidden**
*   **HTMLElement.innerText**
*   and so on...

You probably use a lot of those generic ones all the time. You simply get a reference to the element, then you can access the property. Some are settable and others are read-only. There are also methods associated with that interface, like **blur()** and **focus()**.  
  
But you might forget that specific HTML elements have unique properties and methods associated with them. For example, the **HTMLButtonElement** interface has the following properties:

*   **HTMLButtonElement​.form**
*   **HTMLButtonElement​.formMethod**
*   **HTMLButtonElement​.validationMessage**
*   **HTMLButtonElement​.labels**
*   among others...

Some of the above will also apply to other form elements. Similarly, the **HTMLImageElement** interface includes:

*   **HTMLImageElement​.alt**
*   **HTMLImageElement​.complete**
*   **HTMLImageElement​.naturalHeight**
*   **HTMLImageElement​.sizes**
*   and so on...

You can click through to any of the individual element API pages and you'll find all sorts of properties you may not have seen before. One unique one is the **HTMLQuoteElement** (an interface for **<blockquote>**) that has one property: **cite**. There's all sorts of interesting properties listed on those pages, including of course obsolete ones, which aren't recommended for use but will probably keep working forever for backwards compatibility.  
  
So next time you need to access various parts of a particular HTML element with JavaScript, check the interface reference for that element and see if there's a simple and likely cross-browser way to do what you want to do without reinventing the wheel.  
  
Now on to this week's tools!

CSS and HTML Tools
------------------

[**Velvette**](https://github.com/noamr/velvette) — A small JavaScript library, proposed by the author as a future standard, that builds on the View Transitions API (for page and state transitions).  
  
[**OOHTML**](https://github.com/webqit/oohtml) — A set of features that extend standard HTML and the DOM to enable authoring modular, reusable and reactive markup.  
  
[**loadership**](https://www.loadership.com/) — An online configuration tool to create your own pure CSS loading animations. Choose from one of the dozen or so prebuilt loading animations then adjust the settings as needed.  
  
[**Save $1 Off Your Domain Name**](https://sponsr.is/tld_webtoolsweekly) — Porkbun has a user-friendly interface with no upsells so you don’t feel pressured into buying things you don’t need. Manage everything about your new domain in one place without having to hunt around. Get your next domain at Porkbun today.     SPONSORED   
  
[**CSS3D Clouds**](https://spite.github.io/CSS3DClouds/) — Not a new tool but this is a demo for a tutorial showing how you can create animated WebGL-like 3D clouds with CSS and some JavaScript for interactivity.  
  
[**CSSformalize**](https://www.cssformalize.com/) — A CSS framework and interactive online tool to generate code for easily styling CSS forms. You can also choose from and customize existing dark and light themes for form elements.

[![CSSformalize](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/da5520d7-23ed-07b7-3cb7-6ead84b4ff9c.png)](https://www.cssformalize.com/)

  
[**htmldocs**](https://htmldocs.com/) — An online document editor for creating and automating generation of PDF documents from HTML/CSS. No installation needed and includes templates for invoices, reports, resumes, legal documents, and more.  
  
[**Palettify**](https://palettify.co/) — A playground, based on shadcn-ui components, to experiment with UI color themes on real UI elements in real time. You can switch to dark or light mode and copy the theme tokens as CSS custom properties.  
  
[**Autosize Textarea**](https://github.com/andrico1234/autosize-textarea) — A web component for an HTML textarea element that auto-resizes itself to fit the element's content.  
  
[**Animotion**](https://animotion.dev/) — An online tool to create CSS animations visually, by dragging, resizing, rotating, clipping, and more, including a keyframes editor, a collection of ready-to-use animations, and 29 built-in easings.

 

JSON and Database Tools
-----------------------

[**JOSEDb**](https://github.com/anywhichway/josedb) — A JSON-based database that leverages JSON Object Signing and Encryption (JOSE) standards to provide a secure and flexible encrypted and signed key-value store for JSON objects.  
  
[**Joist**](https://github.com/stephenh/joist-ts) — An opinionated TypeScript ORM for Postgres, with the goal to bring ActiveRecord-level productivity to TypeScript projects.  
  
[**SQLiteGPT**](https://github.com/Airsequel/SQLiteGPT) — An SQL function for SQLite to directly query ChatGPT, currently can only be used in JavaScript projects.  
  
[**monday.com**](https://www.clkmg.com/wellput-io/70103ls15ap0h/70103-1026/Lazarpress///) — Your team's secret sauce to success is here. From concept to completion with monday.com helps you manage, automate, and streamline your projects effortlessly. It’s time to transform your work life. Start your free trial today.    SPONSORED   
  
[**Schema Generator**](https://schemagenerator.app/) — A web application designed to help you build and generate JSON-LD schema markup, to support all the schemas listed and supported by Google, for your websites to boost SEO rankings.  
  
[**JSON Resume**](https://jsonresume.org/) — An open-source initiative to create a JSON-based standard for résumés, specifically for use in developer résumés.  
  
[**URL to JSON**](https://urltojson.com/) — Enter a URL and this tool will display the page's content in JSON format, including meta data like Open Graph media and content.

[![URL to JSON](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/e4e77d0e-f26d-7988-4f2c-d7783cdac7f6.png)](https://urltojson.com/)

  
[**SQLSync**](https://github.com/orbitinghail/sqlsync) — A Rust-based collaborative offline-first wrapper around SQLite designed to synchronize web application state between users, devices, and the edge.  
  
[**lowstorage**](https://github.com/good-lly/lowstorage) — A simple, zero-dependency, object pseudo-database for Cloudflare Workers using R2 bucket.  
  
[**PostgREST**](https://postgrest.org/) — A standalone web server that turns your PostgreSQL database directly into a RESTful API. The structural constraints and permissions in the database determine the API endpoints and operations.  
 

  
 

Testing and Debugging Tools
---------------------------

[**Bernard**](https://bernard.app/) — A service that tests your website from top to bottom, making sure every link and resource is valid and working for your visitors. Free while in open Beta, up to 5 websites and 10k resources checked per day.  
  
[**qryn**](https://github.com/metrico/qryn) — An all-in-one polyglot, lightweight, multi-standard drop-in monitoring and observability framework for logs, metrics, and traces.  
  
[**Hero**](https://github.com/ulixee/hero) — A headless web browser built for scraping, powered by Chrome and can emulate any modern browser without being blocked.  
  
[**Domain Digger**](https://digger.tools/) — Enter a URL to get details on any domain, including DNS, WHOIS, certificates, and list of available subdomains.  
  
[**monday.com**](https://www.clkmg.com/wellput-io/70103ls15ap0h/70103-1026/Lazarpress///) — Your team's secret sauce to success is here. From concept to completion with monday.com helps you manage, automate, and streamline your projects effortlessly. It’s time to transform your work life. Start your free trial today.    SPONSORED   
  
[**Tearable Dots**](https://tearabledots.com/) — A state tearing attempt tested against different global state solutions in React 18. "State tearing" is similar to "Screen tearing" where multiple frames of a video are drawn in a single image, but applied to state management.  
  
[**WebGPU-Memory**](https://github.com/greggman/webgpu-memory) — Add this script to your page before you initialize WebGPU, allowing you to test how much WebGPU memory you're using in a given context.  
  
[**Consola**](https://github.com/unjs/consola) — An elegant console logger for Node.js and the browser that provides fancy output with fallback for minimal environments, support for tags, mocking, pluggable reporters, and more.

[![Consola](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/76fcbbd2-ae47-b980-1e60-51837432203b.png)](https://github.com/unjs/consola)

  
[**SMTP Debug**](https://smtpdebug.com/) — A unique 3-in-1 SMTP debugging tool to find out and resolve possible issues with SMTP connections with a basic SMTP test, SMTP proxy, or SMTP blackhole.  
  
[**autoheal**](https://github.com/dion-/autoheal) — An experimental AutoGPT CLI tool that automatically fixes your tests, providing GPT-powered test-driven development.  
 
