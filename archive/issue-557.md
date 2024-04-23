               

### Issue #557  (Badging API, Media, JSON/DB, Uncats)03/21/24

  

Here's an interesting Web API that you may not have heard of yet: the Badging API. As the name suggests, this API is used to allow apps to push notification badges onto an app's icon, to indicate something is available.  
  
A popular example of this is mobile devices that indicate unread messages or other notifications using a small number. Below is a screenshot from iOS with two apps using this type of badge.

![Badges on App icons on iOS](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/a2b42a36-3383-4b11-f936-b94ee9129e31.png)

Of course, many users find these types of notifications annoying and are part of the endless notifications problem we have on our devices nowadays. But as developers, it's good to know the web platform now has a similar feature for use with web apps.  
  
The code to use the Badging API looks something like the following:

```
_// Set an app badge_  
let contents \= 15;  
  
navigator.setAppBadge(​contents​).catch((error) \=> {  
  _// Do something on error..._  
});  
  
_// Clear the app badge_  
navigator.clearAppBadge().catch((​error​) \=> {  
  _// Do something on error..._  
});
```

There's two primary methods used in the code above: **setAppBadge()** and **clearAppBadge()**. When setting the badge, you can pass in a single parameter representing the contents you want to display. The contents can be any number, and the badge will ignore any decimal values, displaying only the integer (it apparently won't do any rounding).  
  
When clearing the badge, no parameter is passed; the icon is instantly cleared of its badge. You can also clear the badge by passing in a value of "0" when setting the badge. If the **setAppBadge()** method is used without a parameter, the app icon will display a badge without a value (this is different from a value of "0").  
  
Currently the Badging API is supported on Chrome and Edge for Windows and Mac and on Safari for Mac and iOS. In all cases, the API needs to be used on a web app that is installed on the user's system (e.g. a PWA or installed on the home screen on iOS).  
  
The Chrome team has put together a nice [writeup on the Badging API](https://developer.chrome.com/docs/capabilities/web-apis/badging-api) that includes a link to an excellent [live demo](https://badging-api.glitch.me/) where you can see it in action.

[![Badging API Demo](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/f7fa8cce-cb1a-f63b-e825-9d8195ff694b.png)](https://badging-api.glitch.me/)

Try it out on a supporting browser by installing the app then using the controls on the page to change the badge value. Try setting the value to "0". Take note of the behaviour of the app icon (in the taskbar, on your home screen, etc., depending on which device you're testing).  
  
There isn't much else to discuss about the syntax for the API. The two methods are the only part of the syntax. Of course, setting up an installable app is a much larger job, so this small API can be viewed as one part of that process.  
  
Of course, you'll want to use this sparingly knowing that many users don't want these kinds of notifications. When I ran the Chrome demo, my browser asked me if I wanted the Badging API to be used on the page. So it's good that it requires permissions that can later be revoked if needed.  
  
Now on to this week's tools!  
 

Media Tools (SVG, Video, etc.)
------------------------------

[**MiroTalk SFU**](https://github.com/miroslavpejic85/mirotalksfu) — An open-source, simple, secure, and scalable real-time video conferencing solution with up to 4K video quality and compatible with all modern browsers and platforms.  
  
[**CartoSVG**](https://cartosvg.com/) — An online tool to easily design interactive and beautiful SVG maps using a number of different geo-related settings along with customizations for the look of the maps.

[![CartoSVG](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/a42abc2b-ab04-79e5-5da4-6cfaf7446efc.png)](https://cartosvg.com/)

  
[**PixiEditor**](https://pixieditor.net/) — A beautiful, fast pixel-art editor packed in an eye-friendly dark theme, available for Windows.  
  
[**monday.com**](https://www.clkmg.com/wellput-io/76900ltj4idri/76900-1024/Lazarpress///) — Your team's efficiency, reimagined. Revolutionize your work management. Automate tasks, integrate seamlessly, and gain full visibility. Take every project to completion with ease. Try it free today.     SPONSORED   
  
[**Wiggle Animate**](https://wiggle.tools/) — An open-source vector-based motion graphics animation tool to let you customize your animations with dozens of properties, keyframe control, and curve editors.  
  
[**YT Pics**](https://www.ytpics.com/) — Enter a YouTube URL along with a timestamp and this tool will generate a screenshot at that time in the video. Also allows downloading captions and thumbnails.  
  
[**canvas-size**](https://github.com/jhildenbiddle/canvas-size) — A script to determine the maximum area, height, width, and custom dimensions of an HTML <canvas> element, to overcome some cross-browser variances in this area.  
  
[**SiriWave**](https://github.com/kopiro/siriwave) — The "Apple Siri" waveform replicated in pure JavaScript using the Canvas API, with support for the classic and iOS9+ waveform.  
  
[**Penrose**](https://penrose.cs.cmu.edu/) — A platform to create beautiful diagrams just by typing notation in plain text, with multiple export options available.  
  
[**Avatartion**](https://www.avatartion.com/) — A UI to create and customize Notion-style avatars for social media profiles, placeholders, etc. You can also generate random avatars and export as PNG or SVG.

Database Tools
--------------

[**nodb**](https://nodb.sh/) — A serverless applications database with a RESTful API to store and fetch JSON and construct the API to match your app.  
  
[**redb**](https://www.redb.org/) — A simple, portable, high-performance, ACID, embedded key-value store, written in pure Rust and loosely inspired by an older project called LMDB.  
  
[**GatewayD**](https://gatewayd.io/) — An open-source cloud-native database gateway and framework for building data-driven applications, like API gateways, but for databases.  
  
[**Smartr Daily**](https://smartrdailynewsletter.beehiiv.com/) — The essential newsletter for curious minds. Sourcing the smartest articles on the web. Thought-provoking ideas and insights delivered straight to your inbox daily.    SPONSORED   
  
[**SQL Workbench**](https://sql-workbench.com/) — An online SQL workbench that lets you run SQL queries in your browser. Allows you to drop CSV, Parquet or Arrow files to create a new table.

[![SQL Workbench](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/40387636-b68a-172e-4ad3-84f85abcf8fe.png)](https://sql-workbench.com/)

  
[**Vanna.AI**](https://vanna.ai/) — An AI-driven tool to write your SQL for you and get actionable insights from your database just by asking questions.  
  
[**Skytable**](https://skytable.io/) — A scalable real-time NoSQL database that enables you to model complex data and write expressive queries powered by BlueQL, its own query language.  
  
[**pgroll**](https://github.com/xataio/pgroll) — A Go-based open-source command-line tool that offers safe and reversible schema migrations for PostgreSQL by serving multiple schema versions simultaneously.  
  
[**SQL Formatter**](https://github.com/sql-formatter-org/sql-formatter) — A JavaScript library for pretty-printing SQL queries that started as a port of a similar PHP Library and has support for 12+ SQL dialects.  
  
[**Tiny RDM**](https://github.com/tiny-craft/tiny-rdm) — A modern lightweight cross-platform Redis desktop manager available for Mac, Windows, and Linux.  
 

  
 

The Uncategor­izables
---------------------

[**Flyde**](https://www.flyde.dev/) — A visual programming language that works along with your textual coding, runs in VS Code, and integrates with existing TypeScript code, browser and Node.js.  
  
[**Phase**](https://phase.dev/) — An open-source, end-to-end encrypted platform to manage, sync and share environment variables (i.e. secrets management).  
  
[**automd**](https://github.com/unjs/automd) — An automated Markdown maintainer that scans for annotation comments within a markdown document and updates their contents using built-in generators.  
  
[**Smartr Daily**](https://smartrdailynewsletter.beehiiv.com/) — The essential newsletter for curious minds. Sourcing the smartest articles on the web. Thought-provoking ideas and insights delivered straight to your inbox daily.    SPONSORED   
  
[**Prici.io**](https://prici.io/) — An open-source project to manage plans and pricing for any SaaS application. You can use Docker's standalone service and run it locally or on your machine.  
  
[**Expressive Code**](https://expressive-code.com/) — A syntax highlighting engine for presenting source code on web pages, with full VS Code theme support, editor and terminal frames, copy to clipboard, text markers, collapsible sections, and more.

[![Expressive Code](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/dc2f6373-9ac1-4652-6d18-b67bb28959d4.png)](https://expressive-code.com/)

  
[**Loco**](https://loco.rs/) — A Rust framework, based on Rails concepts, for side-projects and startups, specifically designed for 'one-person teams'.  
  
[**Adaptive Cards**](https://adaptivecards.io/) — A set of platform-agnostic snippets of UI, authored in JSON, that apps and services can openly exchange.  
  
[**Regexper**](https://regexper.com/) — An online tool to visualize your JavaScript-style regular expressions. If that helps you! You can also deep link to the regexes you visualize.  
  
[**Statsig**](https://statsig.com/) — A platform for teams to implement feature flags, rollouts, and configs, with the free plan offering flags, configs, and experiments.