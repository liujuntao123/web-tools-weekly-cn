#559  （HTML模板、CSS/HTML、测试、React）

如果你还没有研究过，新的HTML **\<template>** 元素是一种启用HTML模板的方法。也就是说，可以通过JavaScript生成的重复出现的HTML的一部分。

出现在开头和结尾的 **\<template></template>** 标签中的内容或子元素在HTML页面上不显示，因此需要使用JavaScript来使这个特性有用。

类似于其他HTML元素API，**\<template>**元素由**HTMLTemplateElement**对象或API表示。此API具有一个属性：**content**。当你访问**template.content**（假设"template"是对HTML模板对象的引用）时，它相当于对应 **\<template>**内所有子节点的**DocumentFragment**。

当你访问模板时，你可以使用**cloneNode**进行克隆，并在需要的地方插入它。举个例子，假设我有以下HTML：

```
<table class\="table"\>  
  <thead\>  
    <tr\>  
      <th\>Name</th\>  
      <th\>Description</th\>  
    </tr\>  
  </thead\>  
  <tbody\>  
  </tbody\>  
</table\>  
  
<template\>  
  <tr\>  
    <td class\="cell"\>&nbsp;</td\>  
    <td\>&nbsp;</td\>  
  </tr\>  
</template\>
```

注意表格标记以及 **\<template>** 元素内的单个表格行和两个单元格。通常情况下，我会将表格单元格留空，但为了显示的目的，我在每个单元格中添加了一个非断行空格，以便单元格在技术上是“可见”的。在实际应用中，我可能会有一些生成数据的代码。

有了这个准备，我可以使用以下JavaScript来生成一个单独的表格行，并将其添加到 **\<tbody>** 元素中：

```
let tbody \= document.querySelector('tbody'),  
    template \= document.querySelector('template');  
  
tbody.append(template.content.cloneNode(true));
```

这段代码非常简单，因此不太实用。但这应该给你一个对特性如何工作的想法。你可以在[此交互演示](https://codepen.io/impressivewebs/pen/KKYZEOZ?editors=1000)中尝试这段代码。有一个按钮，可以动态插入“行”模板多次，以及一个重置行的按钮。

最后，你其实不需要在HTML文档中包含你的 **\<template>**元素。你可以使用JavaScript创建 **\<template>**元素，然后根据需要插入它及其子元素。一旦它在DOM中，你可以以相同的方式访问它。

现在让我们进入本周的工具！


CSS和HTML工具
------------------

[**magick.css**](https://github.com/wintermute-cell/magick.css) — 一个受LaTeX、老式TTRPG规则书和其他无类框架启发的极简主义无类CSS框架。

[**Dropflow**](https://github.com/chearon/dropflow/) — 一个用于探索基础CSS标准（即内联元素、块元素、浮动元素、定位元素，但不包括弹性盒子或网格）的CSS布局引擎。

[**ECSS**](https://ecss.info/) — 一套用于编写现代CSS的规则和原则，包括Stylelint配置和脚手架工具，帮助整合所需的规则。

[**Webinar: Android恶意应用程序保护**](https://www.vpdae.com/redirect/9dvky5ckpzxybpb5e3kwvhb9q5q) — 加入Guardsquare，了解Android恶意软件最常见的行为和攻击技术、推荐的缓解技术，以及在防止恶意软件攻击中加固代码和运行时保护的重要性。     赞助商

[**play-button**](https://github.com/daviddarnes/play-button) — 一个简单的Web组件，用于播放音频或视频，并通过一个按钮让用户可以控制音频或视频轨道。

[**MistCSS**](https://typicode.github.io/mistcss/) — 一个代码生成工具，可以使用纯CSS（即“从CSS中生成JavaScript”）来编写原子级React组件，并支持Next.js、Remix和Tailwind。

[**TeamColors**](https://teamcolors.jim-nielsen.com/) — 这是不同的！这是一个包含了来自主要体育联赛的官方和非官方团队颜色的画廊，目前包括6个联赛，可以根据团队名称进行过滤，并选择不同的颜色格式。

![Team Colors](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/b19168c5-be73-64c4-ed25-f9e37c9772a4.png)

[**Variable Fonts**](https://v-fonts.com/) — 一个简单的资源，用于查找和测试可变字体，可以按照类别标签、字体设计师、字符集、许可证等进行过滤。

[**pagefind-search**](https://github.com/zachleat/pagefind-search/) — 一个Web组件，为Pagefind添加了功能，即一种常用的完全静态搜索库，由Rust构建，并常用于静态网站。

[**cccolor**](https://fffuel.co/cccolor/) — 一个颜色选择器和调色板生成器，展示了一种选定颜色的不同类型调色板，并且可轻松转换为不同的颜色格式。


测试和调试工具
---------------------------

[**Webhook.Cool**](https://webhook.cool/) — 可以接收和检查Webhook请求的服务。使用你的唯一Webhook URL将任何Webhook发送到它。

[**Vlite**](https://github.com/Jinjiang/vlite) — 一个精简的、零配置的ESM友好的演示服务器，受Vite启发，支持Vue、React、TypeScript、JSX、TSX等。

[**Under New Management**](https://github.com/classvsoftware/under-new-management) — 一个Chrome或Firefox扩展，会间歇性地检查已安装的扩展是否更改了Chrome Web Store或Firefox附加组件商店上列出的开发者信息。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — 创业者们，你们是否需要一个与家庭独立的商务地址？Anytime Mailbox提供了无缝解决方案，提供私人专业地址，包括邮件转发和扫描等附加优势。     赞助商

[**PDFcheck**](https://code.jasonmorris.com/pdfcheck/) — 一个在线工具，可上传一个或多个PDF文件进行可访问性检查，基于Adobe发布的一个较旧的PDF可访问性标准。

[**Web Font Analyzer**](https://tools.paulcalvano.com/wpt-font-analysis/) — 一个使用WebPageTest API来帮助你识别字体子集优化机会的在线工具，以解决与加载字体相关的性能瓶颈。

[**OpenAPI DevTools**](https://chromewebstore.google.com/detail/openapi-devtools/jelghndoknklgabjgaeppjhommkkmdii) — Chrome扩展程序，可以即时为任何应用程序或网站生成API规范。

![OpenAPI DevTools](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/239eede5-576d-7624-c474-640711180d92.png)
[**CodeRev**](https://coderev.app/) — 一款轻量级工具，使用代码审查而不是LeetCode（一个流行的准备技术面试的平台）来帮助你组织和进行技术面试。
  
[**screenlog.js**](https://github.com/chinchang/screenlog.js) — 一个非常古老的工具，将浏览器的开发者控制台直接显示在屏幕上，以便您在不保持控制台打开的情况下进行日志记录。
 
 
React 工具
-----------

[**restore-scroll**](https://github.com/epicweb-dev/restore-scroll) — 一个React组件，使您能够在页面导航时恢复任何可滚动元素的滚动位置。
  
[**Shader Gradient**](https://github.com/ruucm/shadergradient) — 为您的React项目创建和定制动画渐变的3D渐变。包括一个在线渐变编辑器，生成的渐变可以下载用于React、Framer或Figma。
  
[**typed-route-handler**](https://github.com/venables/typed-route-handler) — 类似于Next.js的缺失API端点层的类型安全的路由处理程序。
  
[**Functional UI Kit**](https://functional-ui-kit.com/) — 一个React的Figma UI工具包，包括精确的Figma和React组件，采用最佳实践，统一的属性名称，一致的设计和代码。
  
[**Vocs**](https://vocs.dev/) — 一个最小化的静态文档生成器，旨在加速您的文档工作流程，使用现代Web技术构建。
  
[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — 业务初创者，您是否需要一个与家庭分开的专业地址？Anytime Mailbox提供了无缝的解决方案，提供私人的、专业的地址，并提供邮件转发和扫描等附加功能，方便极致。       SPONSORED 
  
[**MightyMeld**](https://www.mightymeld.com/) — 适用于React项目的全能拖放工具，可可视化显示您的组件、JSX和样式，与您的常规开发设置无缝集成。付费计划即将推出，但免费计划似乎非常不错。

[![MightyMeld](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/44bcbe39-9527-34ad-3570-d4d3c8db562f.png)](https://www.mightymeld.com/)

  
[**nlux**](https://nlux.ai/) — 一个开源的JavaScript和React库，使您能够将功能强大的大型语言模型（LLMs），如ChatGPT，轻松集成到您的Web应用或网站中。
  
[**Mantine React Table**](https://www.mantine-react-table.com/) — 一个完整功能的Mantine实现的TanStack React Table组件，从Material React Table分叉出来。
  
[**next-route-handler-pipe**](https://github.com/KolbySisk/next-route-handler-pipe) — 将函数串联起来创建可重用的函数管道，用于您的Next.js路由处理程序。


文章翻译自：[Web Tools Weekly Issue #559 (HTML Template, CSS/HTML, Testing, React)](https://webtoolsweekly.com/archives/issue-559) 

