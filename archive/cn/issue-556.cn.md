

＃556（structuredClone（），框架，测试，JS Utils）



自2022年开始，所有现代浏览器已完全支持名为 **structuredClone()** 的新方法，可使用所谓的“结构化克隆算法”（这是背后工作的机制）创建给定对象的深层克隆。

一个使用该方法的简单示例如下：

```
const obj \= {  
  name: "WTW",  
  type: "Newsletter"  
};  

// clone the original  
const clone \= structuredClone(obj);
```

该方法接受一个必需的参数，即您想要克隆的对象，它是全局范围内的一个方法，因此它属于 Window 对象，而不是在任何特定对象上调用。

创建副本后，您仍然可以单独访问每个对象，并根据需要对其进行修改，每个对象的更改将反映出自己的更改。例如：

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

你可以在[这个 CodePen 演示](https://codepen.io/impressivewebs/pen/OJGRMPg?editors=0011)中尝试上述代码。

而且在 **structuredClone（）** 中的一项额外功能是在克隆过程中能够从原始对象转移对象。这意味着你在技术上是带有异常克隆，因此它并不是完全的克隆。唯一的限制是你只能转移可转移的对象。例如，ArrayBuffer、MessagePort、AudioData、ImageBitmap 和 VideoFrame。在[这篇 MDN 文章](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)中可以看到完整的可转移对象列表。

而且作为一个附带说明，MDN上的 **structuredClone()** [article](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)是一个例子，它从一些为新功能包含的新的"Baseline..."信息组件中受益。它看起来像这样：

![MDN的新基准信息框](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ab38dfa5-319c-7b94-3b47-752895baf3e4.png)

这是一个很棒的小功能，它可以为您快速总结当前浏览器的支持情况。这似乎放置在现代功能的文章顶部，以指示这些功能是否可以安全使用（与几乎始终可以跨浏览器使用的旧功能相对）。

现在进入本周的工具！



Web 框架
----------------

[**Astroplate**](https://github.com/zeon-studio/astroplate)  - 一个免费的起始模板，使用Astro、Tailwind和TypeScript构建，具有多个作者、相似文章、标签/分类等博客功能，还有许多其他功能。

[**Tailframes**](https://www.tailframes.com/)  - 使用Tailwind构建的UI组件库，包括约20个主要组件以及每个组件的变体。

[**VueEmail**](https://vuemail.net/)  - 一个包含15+个高质量、未经样式处理的组件集，用于使用Vue和TypeScript创建漂亮的电子邮件。与不同的ESP集成。

[**Video API That Developers Love**](https://imagekit.io/use-cases/video-api/?utm_source=Webtoolsweekly&utm_medium=email&utm_campaign=VideoAPI_Newsletter_Q423&utm_term=VideoAPI_Stunning_Visual&utm_content=Top_Ad)  - 轻松使用50多个URL参数裁剪、调整大小、修剪和叠加视频。自动格式转换和视频质量。使用HLS和MPEG-DASH协议实现平滑的流媒体体验。尝试我们的免费计划，提升您的视频效果。赞助商提供支持。

[**Beer CSS**](https://www.beercss.com/)  - 基于 Material Design 3 的 CSS 框架与组件库，可帮助您快速构建 Material Design 用户界面，提供 30 多个组件、示例模板、主题化、浅色/深色模式等功能。

[![Beer CSS](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/328468a9-e969-c789-239c-86f4133dd2f1.png)](https://www.beercss.com/)


[**Naturaily Storyblok**](https://github.com/Naturaily/naturaily-storyblok-next-starter)  - 使用Next.js、Turborepo和Tailwind构建的Jamstack入门模板，配有Storyblok、Storybook、ESLint、Prettier、Framer Motion等的可直接使用的配置文件。

[**Just Ship**](https://www.justship.today/)  - 一个基于TypeScript的起始模板，使用SvelteKit构建，具有Google或魔法链接登录、Turso用于数据库、Vercel用于托管、shdcn-svelte等功能。

[**Wiki.js**](https://js.wiki/)  - 强大且可扩展的开源维基软件，基于Node.js，以直观的界面构建文档，可在几乎任何平台上安装。

[**Browser Extension Template**](https://github.com/puemos/browser-extension-template)  - 一个基于React、shadcn/ui、Storybook和Lucide图标的浏览器扩展模板。

[**Design Systems Database**](https://designsystems.surf/)  - 一个按类别分类的设计系统目录，包括来自知名品牌的设计系统。您还可以选择一个组件类型来筛选包含所选组件的设计系统。


测试和调试工具
-------------------------


[**debugbar**](https://debugbar.dev/)  - 我很少包含Ruby on Rails工具，但这是一个用于RoR开发者的调试工具，以便更好地了解您的应用程序性能和行为。

[**Testcontainers**](https://testcontainers.com/)  - 一个用于提供一次性、轻量级数据库实例、消息代理、Web浏览器或几乎任何可以在Docker容器中运行的东西的开源框架。

[![Testcontainers](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/f9bbc088-b9f7-f6ea-73ed-cca6e098808d.png)](https://testcontainers.com/)


[**Dep Tree**](https://github.com/gabotechs/dep-tree)  - 一个基于Go的工具，用于使用3D力导向图可视化代码库的熵。例如，代码库越解耦和模块化，图形就越分散。

[**UI Options**](https://floeproject.org/ui-options/)  - 一个在任何页面上添加可定制的下拉菜单的 Chrome 扩展，帮助你增强或改善网站的可用性、灵活性和可访问性。

[**Responsive Viewport Units**](https://github.com/ClintonGallagher/responsive-viewport-units)  - 一个 JavaScript 实用工具，当页面加载时生成并显示浏览器的视口单位值，并在浏览器水平或垂直调整大小时重新生成单位值。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱充满了干扰，太多订阅会导致收件箱混乱。将您的新闻简报从收件箱中解放出来。将您的新闻简报移到一个专为阅读而建的空间，秒级清理您的收件箱。  SPONSORED

[**Keploy**](https://keploy.io/)  - 一个开源且可扩展的基于Go的后端测试工具，用于将用户流量转换为测试用例和数据存根。

[**PHPSecure**](https://phpsecure.net/)  - 一个针对PHP项目的漏洞扫描器，支持Laravel、WordPress、Drupal和Joomla，并且目前在Beta期间免费。

[**Firecamp**](https://github.com/firecamp-dev/firecamp)  - 一个以开发者为先的开源工具，是 Postman 或 Insomnia 等工具的替代品，帮助您设计、开发、测试和文档化接口。

[**Multiple**](https://www.multiple.dev/)  - 一个以开发者为中心的负载测试平台，可以在整个堆栈上测试任何东西。免费计划可提供高达200个虚拟用户小时和50个虚拟用户。




JavaScript实用工具
--------------------



[**Observe.js**](https://github.com/williamtroup/Observe.js)  - 一个轻量级的JavaScript库，允许开发人员追踪JavaScript对象和/或DOM元素的更改。

[**Cookie Consent**](https://github.com/brainsum/cookieconsent)  - 有一个脚本可以在首次访问时添加符合GDPR的cookie同意通知，可选择同意不同类别的cookie和服务。

[![Cookie Consent](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/d424c3e2-ad2f-a22c-9528-38736f7ca8bc.png)](https://github.com/brainsum/cookieconsent)


[**worker-timers**](https://github.com/chrisguttandin/worker-timers)  - 使用 Web Workers 基于 setInterval() 和 setTimeout() 方法的替代方案，在未聚焦的窗口中正常工作。

[**Type.js**](https://github.com/mattboldt/typed.js/)  - 一个允许您为任何文本添加自定义的“打字”动画的库，具有淡出、智能退格、批量打字等功能。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱里充满了干扰，太多的订阅会导致收件箱混乱。将你的新闻简报从收件箱中解放出来。将你的新闻简报移到一个专为阅读而建造的空间，仅需几秒钟就能清理你的收件箱。赞助服务

[**fuzzy-search**](https://github.com/m31coding/fuzzy-search)  - 一个快速、准确且多语言的模糊搜索库，用于通过名称和特征（术语）搜索带有ID（实体）的对象。

[**unenv**](https://github.com/unjs/unenv)  - 一个不依赖于框架的系统，允许你将 JavaScript 代码转换为支持多平台，并在包括浏览器、Web Workers、Node.js 或 JavaScript 运行时等任何环境中使用的系统。

[**strz**](https://github.com/dilan-dio4/strz)  - 一个无依赖、可进行树摇的实用程序，将强类型的字符串函数能力带到 TypeScript 中。

[**Transformers.js**](https://github.com/xenova/transformers.js)  - 适用于网络的先进机器学习服务，作为与Hugging Face的Python库同名的功能等效的JavaScript版本。

[**Effection**](https://frontside.com/effection)  - JavaScript的结构化并发和效果，使您对异步操作具有无泄漏的控制。


文章翻译自：[Web Tools Weekly Issue #556 (structuredClone(), Frameworks, Testing, JS Utils)](https://webtoolsweekly.com/archives/issue-556) 

