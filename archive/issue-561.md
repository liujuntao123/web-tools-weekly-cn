               

### Issue #561  (Popover Modals, React, Git/CLI, Uncats)04/18/24

  

Last week I briefly introduced the main features of the relatively new Popover API, which allows you to create 'popover' content natively with a few lines of code.  
  
One thing I glossed over, partly due to the brevity of this intro and partly because it's new to me, is the fact that the Popover API is not just for creating 'modal windows', although that is one of the primary use cases. Popovers allows you to create all sorts of overlaid content such as:

*   Interactive menus
*   Tooltips showing things like how to use a UI element (e.g. a form hint)
*   Toast notifications
*   Instructional content (e.g. a "tour" of an app)

All of these and similar use cases are possible and encouraged. So the API isn't just for content that generally annoys users! :)  
  
It should also be noted that popover content created using the Popover API is always 'non-modal'. So technically referring to these popovers as "modal windows" isn't accurate. Non-modal content means that the rest of the page can be interacted with while the popover is present.  
  
If you want to create content that's 'modal' using the Popover API, you would have to use a few extra features. For example, the following CSS would make a popover appear more like a proper modal window:  
 

```
::_backdrop_ {  
  background-color: lightblue;  
  opacity: 0.7;  
}
```

The **::backdrop** pseudo-element in CSS defines a box the size of the viewport behind the "top layer" of an element in CSS. This is similar to the way we used to hack an absolutely positioned element behind such windows. This makes it easy to create such an element. When a popover is present, the **::backdrop** element is added automatically when it's included in your CSS.  
  
The **::backdrop** element is present not just with popovers, but also with elements in fullscreen mode using the Fullscreen API and also **<dialog>** elements used as modals.  
  
For a demo that uses the Popover API to create such a more traditional 'modal' window, you can try out [this CodePen demo](https://codepen.io/impressivewebs/pen/ZEZqXyy?editors=0100). If you want the modal to be able to close using the ESC key or by clicking outside the modal, simply change the popover attribute to "auto" instead of "manual".

  
Now on to this week's tools!  
 

React Tools
-----------

[**Firebolt**](https://firebolt.dev/) — A React framework to help you quickly build high performance, efficient, full-stack apps on the web, with features like a 10 KB runtime, unified routing, CSS-in-JS, and more.  
  
[**use-travel**](https://github.com/unadlib/use-travel) — A React hook for state time travel with undo, redo, reset and archive functionalities.  
  
[**@gsap/react**](https://github.com/greensock/react) — A React hook for the popular GSAP animation library, to solve a few React-specific friction points when using GSAP in your React projects.  
  
[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — Business starters, are you in need of a business address separate from your home? Anytime Mailbox provides a seamless solution, securing a private, professional address with added benefits like mail forwarding and scanning for ultimate convenience.     SPONSORED   
  
[**Next.js Image Transformation**](https://github.com/coollabsio/next-image-transformation) — A drop-in replacement for Vercel's Next.js image optimization service, for resizing images with Next.js used in the <Image> component.  
  
[**next-export-i18n**](https://github.com/martinkr/next-export-i18n) — A simple, reactive client-side solution for project internationalization in Next.js apps.  
  
[**Chai Builder**](https://chaibuilder.com/) — A simple React component that can be integrated into any React based framework as a low code React + Tailwind landing page builder.

[![Chai Builder](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/2e7817e9-693e-07e0-6d24-9f74bbfb6878.png)](https://chaibuilder.com/)

  
[**UVCanvas**](https://uvcanvas.com/) — An open-source React component library that provides a rich set of dynamic canvases that are useful as web backgrounds, wallpapers, and design materials.  
  
[**Underhive**](https://github.com/Underhive/visual-react-editor) — A React tool to add visual editing to React projects, similar to working inside Figma or other design tools.  
  
[**Marquee**](https://github.com/devnomic/marquee) — A React component to add a customizable marquee effect to web page sections, similar to a carousel but a continuous animated scroll that can include images or text.

Git, GitHub, and CLI Tools
--------------------------

[**Gitu**](https://github.com/altsem/gitu) — A Rust-based terminal user interface for Git, inspired by Magit, a popular text-based user interface for Git.  
  
[**GitHub Profile Readme Generator**](https://githubprofile.com/) — A simple UI to generate a GitHub README where you can share your profile, skills, social links, and more, in Markdown format.

[![GitHub Profile Readme Generator](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/08061d6e-e0eb-5e90-1881-b7c69b75ec9a.png)](https://githubprofile.com/)

  
[**csvlens**](https://github.com/YS-L/csvlens) — A command-line CSV file viewer, written in Rust, that lets you use a CSV file name or pipe CSV data directly.  
  
[**Missed out on Ring and Nest? Don’t Let RYSE Slip Away!**](https://www.clkmg.com/wellput-io/87563lufz1ktl/87563-1154/Lazarpress/Consolidated%20Body%20Copy%20v1//) — RYSE has just launched in 100+ Best Buy stores, and you can still invest at $1.50/share. They’ve patented the only mass market shade automation device and their exclusive Best Buy deal resembles that which led to other past billion-dollar buyouts like Ring and Nest.    SPONSORED   
  
[**Gitroom**](https://gitroom.com/) — A set of tools to help you grow your open-source repository, gain more visibility, stars, contributions, etc., as an alternative to services like Buffer.  
  
[**Auto Wiki**](https://wiki.mutable.ai/) — View high-quality, automatically-generated documentation for any repository.  
  
[**Repo Lockdown**](https://github.com/marketplace/actions/repo-lockdown) — A GitHub Action that immediately closes and locks issues and pull requests on a repo, useful when you don't want to archive a repo but want to limit outside requests.  
  
[**deploy-pages**](https://github.com/actions/deploy-pages) — A GitHub Action to publish "artifacts" to GitHub Pages for deployments. See the reference link in the description for a discussion of artifacts.  
  
[**Difftastic**](https://difftastic.wilfred.me.uk/) — A CLI diff tool that compares files based on their syntax, not line-by-line, to produce accurate diffs that are easier for humans to read.  
  
[**hypershell**](https://github.com/holepunchto/hypershell) — An npm package to spawn shells anywhere that are fully peer-to-peer, authenticated, and end-to-end encrypted.  
 

  
 

The Uncategor­izables
---------------------

[**Classnames**](https://classnames.paulrobertlloyd.com/) — A resource that contains thematically grouped lists of words to help you find inspiration for naming things in programming like HTML classes, CSS properties, or JavaScript functions.  
  
[**HeyForm**](https://github.com/heyform/heyform) — An open-source form builder that allows anyone to create engaging conversational forms for surveys, questionnaires, quizzes, and polls, with no coding skills required.  
  
[**Creo**](https://www.trycreo.com/) — A simple starter framework, based on React, that enables rapid development of internal tools.  
  
[**Counterscale**](https://counterscale.dev/) — Free and open-source, privacy-focused web analytics, that can be deployed as a single Cloudflare Worker.

[![Counterscale](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/c3c3c13d-6c00-bb8e-3c6e-891f21dddab7.png)](https://counterscale.dev/)

  
[**Stract**](https://stract.com/) — An open-source search engine, made for hackers and tinkerers, where the user has the ability to see exactly what is going on and customize almost everything about their search results.  
  
[**Missed out on Ring and Nest? Don’t Let RYSE Slip Away!**](https://www.clkmg.com/wellput-io/87563lufz1ktl/87563-1154/Lazarpress/Consolidated%20Body%20Copy%20v1//) — RYSE has just launched in 100+ Best Buy stores, and you can still invest at $1.50/share. They’ve patented the only mass market shade automation device and their exclusive Best Buy deal resembles that which led to other past billion-dollar buyouts like Ring and Nest.    SPONSORED   
  
[**RunJS**](https://runjs.app/play) — A simple JavaScript playground that instantly displays results on the right as you type, potentially useful for demos and live presentations.  
  
[**Nitro**](https://github.com/unjs/nitro) — A next-generation server toolkit to create web servers with everything you need and deploy them wherever you prefer.  
  
[**Automatisch**](https://automatisch.io/) — An open-source Zapier alternative that helps you to automate your business processes without coding.  
  
[**QuickWP**](https://quickwp.ai/) — An online tool that allows you to create an AI-generated WordPress theme with styles, content, and images, based on your input.