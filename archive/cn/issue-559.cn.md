

#559 （HTML 模板，CSS/HTML，测试，React）



如果你还没有研究过，新型 HTML **<template>** 元素是一种启用 HTML 模板化的方式。也就是说，通过 JavaScript 生成重复的常见 HTML 部分。

出现在**<template></template>**标签内的内容或子节点在HTML页面上不显示，因此需要使用JavaScript来使此功能有效。

类似于其他HTML元素API，`<template>`元素由**HTMLTemplateElement**对象或API表示。该API具有一个属性：**content**。当您访问**template.content**（假设"template"是对HTML模板对象的引用）时，这等于所引用的**<template>**内所有子节点的**DocumentFragment**。

访问模板时，您可以使用 `cloneNode` 进行克隆，并将其插入到需要的位置。例如，假设我有以下的 HTML：

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

注意表格标记以及**<template>**元素内的单元格行和两个单元格。通常情况下，我会将表格单元格留空，但为了显示目的，我在每个单元格中添加了一个非间断空格，所以这些单元格在技术上是“可见”的。在一个真实的应用程序中，我会有一些进一步的代码来生成数据。

有了这个设置，然后我可以使用以下JavaScript来生成一个单独的表格行，将其添加到<tbody>元素中：

```
let tbody \= document.querySelector('tbody'),  
    template \= document.querySelector('template');  

tbody.append(template.content.cloneNode(true));
```

这段代码相当基础，因此并不太实用。但这应该能让你了解该功能的工作原理。你可以在 [这个交互演示](https://codepen.io/impressivewebs/pen/KKYZEOZ?editors=1000) 中尝试这段代码。有一个按钮可以动态地插入“row”模板，你可以根据需要插入多次，以及一个行重置按钮。

而且最后一点，从技术上讲，您不必在HTML文档中包含您的 **<template>** 元素。您可以使用JavaScript创建 **<template>** 元素，然后根据需要将其插入和插入其子元素。一旦它在DOM中，您可以通过相同的方式访问它。

现在就进入这周的工具！


CSS和HTML工具
------------------



[**magick.css**](https://github.com/wintermute-cell/magick.css)  - 一个以LaTeX、老派TTRPG规则书和其他无类框架为灵感的极简和大部分无样式的CSS框架。

[**Dropflow**](https://github.com/chearon/dropflow/)  - 一个创建的CSS布局引擎，旨在探索基本CSS标准的范围（即：内联，块，浮动，定位，而不是flexbox或grid）。

[**ECSS**](https://ecss.info/)  - 一套用于编写现代 CSS 的规则和原则，包括一个 Stylelint 配置和脚手架工具，以帮助整合所需的规则。

[**Webinar: Android Malware Application Protection**](https://www.vpdae.com/redirect/9dvky5ckpzxybpb5e3kwvhb9q5q)  - 加入Guardsquare于4月9日，了解Android恶意软件最常见的行为和攻击技术、推荐的缓解技术，以及通过加固代码和运行时保护来防止恶意软件攻击的重要性。赞助

[**play-button**](https://github.com/daviddarnes/play-button)  - 一个简单的Web组件，使用一个按钮播放音频或视频，以便用户可以用一个按钮控制音频或视频轨道。


[**MistCSS**](https://typicode.github.io/mistcss/)  - 一款代码生成工具，可以使用只需CSS（即“从CSS到JS”）编写原子化React组件，并且支持Next.js，Remix和Tailwind。

[**TeamColors**](https://teamcolors.jim-nielsen.com/)  - 这是不同的！这是一个包含主要体育联盟队伍的官方和非官方颜色的画廊，目前包括6个联盟，可以按照队名过滤，并且可以选择不同的颜色格式。


[！[团队颜色]（https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/b19168c5-be73-64c4-ed25-f9e37c9772a4.png）]（https://teamcolors.jim-nielsen.com/）


[**Variable Fonts**](https://v-fonts.com/)  - 一个用于查找和测试可变字体的简单资源，可根据分类标签、字体设计师、字符集、许可证等进行过滤。

[**pagefind-search**](https://github.com/zachleat/pagefind-search/)  - 一个Web组件，为Pagefind添加功能，Pagefind是一个流行的完全静态的搜索库，使用Rust构建，常用于静态网站。

[**cccolor**](https://fffuel.co/cccolor/)  - 一个颜色选择器和颜色调色板生成器，显示针对所选颜色的不同类型的调色板，并且可以轻松转换为不同的颜色格式。


测试和调试工具
---------------------------


[**Webhook.Cool**](https://webhook.cool/)  - 一个允许您接收和检查Webhook请求的服务。使用您的独特Webhook URL将任何Webhook发送到它。

[**Vlite**](https://github.com/Jinjiang/vlite)  - 一个简约、零配置、支持ESM的演示服务器，受Vite启发，支持Vue、React、TypeScript、JSX、TSX等等。

[**Under New Management**](https://github.com/classvsoftware/under-new-management)  - 一款Chrome或Firefox插件，定期检查已安装的插件，以查看Chrome Web Store或Firefox Addons商店上列出的开发者信息是否发生了变化。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///)  - 商业创业者们，你们是否需要一个与家庭分开的商业地址？Anytime Mailbox 提供了一个无缝解决方案，为您提供一个私人、专业的地址，还具备邮件转发和扫描等额外的便利功能。赞助

[**PDFcheck**](https://code.jasonmorris.com/pdfcheck/)  - 一个在线工具，允许您上传一个或多个PDF文件，根据Adobe发布的较早的PDF可访问性标准对其进行检查。

[**Web Font Analyzer**](https://tools.paulcalvano.com/wpt-font-analysis/)  - 一个在线工具，使用WebPageTest API来帮助您识别字体子集化的机会，以帮助解决加载字体时的性能瓶颈。

[**OpenAPI DevTools**](https://chromewebstore.google.com/detail/openapi-devtools/jelghndoknklgabjgaeppjhommkkmdii)  - Chrome扩展，可让您即时实时生成任何应用程序或网站的API规范。

[![OpenAPI DevTools](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/239eede5-576d-7624-c474-640711180d92.png)](https://chromewebstore.google.com/detail/openapi-devtools/jelghndoknklgabjgaeppjhommkkmdii)


[**CodeRev**](https://coderev.app/)  - 一个轻量级工具，帮助您使用代码审查而不是 LeetCode（为技术面试准备的流行平台）组织和进行技术面试的工具。

[**screenlog.js**](https://github.com/chinchang/screenlog.js)  - 一个非常老的工具，可以将浏览器的开发者控制台直接显示在屏幕上，这样您就可以在不保持控制台开启的情况下进行日志记录。





React 工具
-----------


[**restore-scroll**](https://github.com/epicweb-dev/restore-scroll)  - 一个React组件，可以在页面导航时恢复任何可滚动元素的滚动位置。

[**Shader Gradient**](https://github.com/ruucm/shadergradient)  - 为您的React项目创建和自定义动画3D渐变。 包括在线渐变编辑器，并可下载用于React，Framer或Figma的生成渐变。

[**typed-route-handler**](https://github.com/venables/typed-route-handler)  - 对于Next.js，提供类型安全的路由处理程序，就像Next.js中丢失的API端点层一样。

[**Functional UI Kit**](https://functional-ui-kit.com/)  - 一个适用于React的Figma UI工具包，包含精确的Figma和React组件，拥有最佳实践，统一的属性名称，一致的设计和代码。

[**Vocs**](https://vocs.dev/)  - 一个精简的静态文档生成器，旨在加速您的文档工作流程，采用现代Web技术构建。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///)  - 商业创业者，您是否需要一个与家庭分开的商务地址？Anytime Mailbox提供了一个无缝的解决方案，为您提供一个私密、专业的地址，并提供邮件转发和扫描等额外的便利服务。赞助内容

[**MightyMeld**](https://www.mightymeld.com/)  - 一个全能的拖放工具，用于React项目，可以直观地展示组件、JSX和样式，并与您的常规开发设置无缝集成。专业版即将推出，但免费版看起来不错。

[![MightyMeld](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/44bcbe39-9527-34ad-3570-d4d3c8db562f.png)](https://www.mightymeld.com/)


[**nlux**](https://nlux.ai/)  - 一个开源的JavaScript和React库，使将强大的大型语言模型（LLMs）如ChatGPT集成到您的Web应用程序或网站变得非常简单。

[**Mantine React Table**](https://www.mantine-react-table.com/)  - 一个功能完整的Mantine实现了TanStack React Table组件，从Material React Table中派生出来。

[**next-route-handler-pipe**](https://github.com/KolbySisk/next-route-handler-pipe)  - 将函数串联在一起，为您的Next.js路由处理程序创建可重用的函数管道。
文章翻译自：[Web Tools Weekly Issue #559 (HTML Template, CSS/HTML, Testing, React)](https://webtoolsweekly.com/archives/issue-559) 

