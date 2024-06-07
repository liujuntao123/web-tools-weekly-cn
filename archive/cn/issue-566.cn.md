# 566 (Visual Viewport API, JS Libs, Build Tools, Uncats)

一个有趣且相对较新的 API 是 [Visual Viewport API](https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API)。这已经存在了一段时间，根据 MDN 的浏览器数据，现在被认为是“广泛可用”的。因此，使用是安全的，并且在处理不同设备和缩放级别的布局问题时看起来非常实用。

Visual Viewport 被定义为：

_**“...屏幕的视觉部分，不包括屏幕键盘、捏放缩小区域外的区域或任何不会随页面尺寸缩放的屏幕工件。”**_

这改进了一般视口（称为布局视口）的概念，后者会包括该定义中提到的内容，基本上相当于页面上当前可见的所有内容。

使用 Visual Viewport API 时你将主要处理的接口是 **VisualViewport** 对象。这个对象具有 **offsetLeft**、**offsetTop**、**pageLeft**、**pageTop**、**width**、**height** 和 **scale** 属性。这些属性返回各种可以使用的值。API 还有两个事件：**resize** 和 **scroll**。

MDN 关于 **VisualViewport** 对象的文章包括几个 [实时演示](https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport#examples) 你可以试试。但请注意，如果你要测试“缩放”，你必须使用能够进行捏放缩放的移动设备。据我所知，仅在桌面设备上缩放并不会触发示例脚本中查询的“scale”属性的变化。以下是其中一个示例代码片段，你可以了解它是如何工作的：

```javascript
const bottomBar = document.getElementById("bottombar");  
const viewport = window.visualViewport;  

function resizeHandler() {  
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";  
}  

window.visualViewport.addEventListener("resize", resizeHandler);
```

上面的代码中的主要操作是根据 **VisualViewport.scale** 属性（由于使用了变量缩写为 **viewport.scale**）的值切换底部栏的显示。

这个接口可以根据缩放级别隐藏不必要的“旁边”内容，比如侧栏、广告、粘性元素等。如果你正在进行需要针对移动查看进行优化的布局工作，肯定会用到这个 API。

现在让我们来看看本周的工具！

JavaScript Libraries & Frameworks
---------------------------------

[**DBOS Transact**](https://github.com/dbos-inc/dbos-transact) — 一个事务性的 TypeScript 框架，可靠、简单且易于调试，用于开发具有内置一次性代码执行的数据库支持应用程序。

[**Ollama.js**](https://github.com/ollama/ollama-js) — 一个 JavaScript 库，提供将你的 JavaScript 项目与 Ollama 集成的最简单方法，这是一款流行的本地应用程序，可在本地使用大型语言模型。

[**compromise**](https://github.com/spencermountain/compromise) — 一个 JavaScript 库，用于进行自然语言处理，旨在通过做出有限且合理的决定将文本转化为数据。

[**Support This Newsletter**](https://paypal.me/webtoolsweekly) — 这封新闻通讯是一个人的操作，在当前市场中找到合适的赞助商越来越困难。你可以通过 PayPal 一次性捐款支持这封新闻通讯。 
SPONSORED

[**Mana Potion**](https://github.com/verekia/manapotion) — 一个用于 JavaScript 游戏开发和互动体验的工具包，包含一系列常在构建游戏时需要的底层工具和助手。

[**Tini**](https://tinijs.dev/) — 一个小型、快速且可互操作的框架，用于构建单页应用程序、渐进式 Web 应用程序或桌面或移动应用程序。

[![Tini](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/44e074a9-a09b-1c19-65d7-be2e85fe3ba8.png)](https://tinijs.dev/)

[**Sampo-UI**](https://github.com/SemanticComputing/sampo-ui) — 一个用于构建语义门户用户界面的框架。

[**PanvasJS**](https://panvasjs.leptr.com/) — 一个基于 HTML canvas 元素的 JavaScript 框架，是一个从头开始使用基本工具制作 2D 视频游戏的基础游戏引擎。

[**goja**](https://github.com/dop251/goja) — 不是一个 JavaScript 库，但用纯 Go 实现的 ECMAScript 5.1，强调标准兼容性和性能。

[**Labyrinthos.js**](https://github.com/yantra-core/Labyrinthos.js) — 一个 JavaScript 程序生成器，适用于迷宫、地形和生物群落，专为游戏开发者和专业爱好者设计。

Build Tools, Bundlers, etc.
---------------------------

[**Earthly**](https://github.com/earthly/earthly) — 一个简单的基于 Go 的构建框架，具有快速、可重复的构建和直观的语法——像 Dockerfile 和 Makefile 的结合。

[**TS Docs**](https://tsdocs.dev/) — 一个在线工具，通过输入包名来浏览 npm 包的类型文档。

[**tshy**](https://github.com/isaacs/tshy) — 一个混合（CommonJS/ESM）TypeScript 节点包构建器，使你编写的模块在 ESM 和 CommonJS 中无缝运行，简单易用。

[**Parcel REPL**](https://repl.parceljs.org/) — 一个用于使用和学习 Parcel 的 REPL 或在线示范工具，这是一个流行的零配置构建工具。

[![Parcel REPL](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/b3bcf74f-9467-15e0-de86-876a7fe9ba14.png)](https://repl.parceljs.org/)

[**Kuto**](https://github.com/samthor/kuto) — 一个 Node.js 包，通过重用代码减少 JavaScript 下载大小。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/94006lvgc11in/94006-1101/Web%20Tools%20Weekly///) — 初创企业需要一个独立于家庭的商业地址吗？ Anytime Mailbox 提供无缝解决方案，确保一个私密、专业的地址，并附加邮件转发和扫描等便利。 
SPONSORED

[**Dioma**](https://github.com/zheksoon/dioma) — 一个优雅的依赖注入容器，适用于 vanilla JavaScript 和 TypeScript，没有装饰器、注解和依赖项。

[**JSR**](https://jsr.io/) — 一个用于现代 JavaScript 和 TypeScript 的开源包注册表，发布 TypeScript 源码，而注册表处理生成 API 文档、.d.ts 文件，并转译代码以跨运行时兼容。

[**TanStack Config**](https://github.com/TanStack/config) — 一个无缝且直观的配置管理系统，简化了构建和发布高质量 JavaScript 包的过程。

[**typescript-eslint Playground**](https://typescript-eslint.io/play/) — 一个用于 typecript-eslint 的在线工具，这是一个流行的工具集，支持 ESLint 和 Prettier 支持 TypeScript。

The Uncateg­orizables
---------------------

[**Latitude**](https://tools.latitude.so/) — 一个开源嵌入式分析框架，使用 SQL 在数据库或数据仓库上创建 API 端点，并将交互式可视化本地嵌入你喜欢的前端框架或通过 iframe 嵌入。

[**Zenlogin**](https://zenlogin.co/) — 一个服务，每次在你的网站上有异常登录尝试时提供 AI 驱动的电子邮件通知。免费计划包括每月 500 次请求和 50 封可疑登录邮件。

[**SubQuery**](https://github.com/subquery/subql) — 一个开源、灵活、快速且通用的数据索引框架，适用于 web3，帮助开发者创建去中心化产品。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/94006lvgc11in/94006-1101/Web%20Tools%20Weekly///) — 初创企业需要一个独立于家庭的商业地址吗？ Anytime Mailbox 提供无缝解决方案，确保一个私密、专业的地址，并附加邮件转发和扫描等便利。 
SPONSORED

[**@docker/Windows**](https://github.com/dockur/windows) — 在 Docker 容器中运行 Windows 操作系统，有十多个版本的 Windows 可供选择。

[**Placemark**](https://github.com/placemark/placemark) — 一个用于创建、编辑和可视化地图数据的基于 Web 的工具，支持包括 GeoJSON、KML、Shapefiles、CSV 等在内的各种格式。

[**dive**](https://github.com/wagoodman/dive) — 一个基于 Go 的工具，用于探索 Docker 镜像、层内容，并发现减少 Docker/OCI 镜像大小的方法。

[**Wasmer**](https://wasmer.io/) — 一个非常快速和安全的 WebAssembly 运行时，支持在桌面、云端、边缘和浏览器中运行的超轻容器。

[![Wasmer](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/51447de4-4590-ec9e-5c58-517220b07c39.png)](https://wasmer.io/)

[**Casbin**](https://casbin.org/) — 一个用 Go 编写的授权库，支持 Node.js、JavaScript、Ruby、Python、C/C++、Golang、Java 等的访问控制模型。

[**Dewhale**](https://github.com/Yuyz0112/dewhale) — 前称 vx，一个 GitHub 支持的 AI，作为 Vercel 的 v0 的替代工具，从文本提示生成 UI。


文章翻译自：[Web Tools Weekly Issue #566 (Visual Viewport API, JS Libs, Build Tools, Uncats)](https://webtoolsweekly.com/archives/issue-566) 

