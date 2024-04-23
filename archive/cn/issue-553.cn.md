

＃553（CSS概述，框架，构建工具，未分类）



基于Chromium的浏览器中的开发工具继续得到改进, 如果你不小心的话, 你可能会使用相同的功能, 而没能体验其他有用的东西。

目前处于实验模式的一个新功能是“CSS概览”。要访问此部分，请访问要生成CSS概览的页面，然后点击右上方的三个点（“自定义和控制开发工具”选项）。选择“更多工具”，然后选择“CSS概览”。您也可以通过命令面板打开相同的选项，进行关键字搜索。

![打开 DevTools 中的 CSS 概述面板](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ca77ef68-85b5-e0c3-bac3-d1f2bb58ebf5.png)

打开DevTools中的CSS概述面板

这将带出一个总结页面，简要解释工具如何帮助您。点击“捕获概览”按钮运行CSS概览测试。

您在结果中首先看到的是页面CSS的基本概述，包括样式表数量、内联样式元素数量、样式规则数量以及不同类型的选择器。

![CSS概述功能简介图](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/65290bb4-fce2-6fe8-5e24-7debb39a174e.png)

CSS概述功能简介

之后，有关颜色的信息，将颜色分为不同的类别，并提供了有关低对比度的信息。如下所示截图中的示例有7个不同的对比问题，可以通过修复来使文本更易读。

![生成的CSS概述摘要](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/08700afa-7d8e-b579-bd4a-19892321fec2.png)

生成的CSS概述摘要

还有关于字体的信息。对于颜色和字体，您可以单击颜色或字体以查看使用该颜色或字体的元素列表。如果您想在元素面板中处理它，请单击该元素以转到该元素。

![使用 CSS 概述检查颜色](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/0f4d816f-65dd-87b6-000d-2f35ac8b843c.png)

使用CSS檢查顏色的概述。

您还可以简单地将鼠标悬停在列表中的任何元素上，页面将会对该元素进行视觉指示，以便您可以看到它在布局中映射到哪个位置，如下图所示。

![在 CSS 概述中在元素列表上悬停](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5ba31599-5267-da85-f6f0-99b0ceabb346.png)

悬停在CSS概述中元素列表中的一个元素上

最后，页面上还有关于未使用的声明和媒体查询的信息。未使用的声明信息可以用于清理样式表和进行一些重构工作。

![CSS概述中未使用的声明部分](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5150ba12-eed2-f58e-439e-eb8a4c615300.png)

CSS总览中的未使用声明部分

当您首次打开CSS概述面板时，您会看到一个提醒，指出它仍然是一个实验性功能，并提供一个链接到这个错误报告线程，您可以在那里提交问题。您也可以用它来提出功能请求。很有意思看到这个功能在发展过程中如何改进，并从实验阶段走出来，所以请注意关注！

现在让我们开始本周的工具吧！



Web 框架
--------------



[**DigitalHippo**](https://github.com/joschan21/digitalhippo)  - 一个适用于数字产品的现代全栈电子商务市场模板，使用Next.js、shadcn/ui和Tailwind构建，并包括管理员仪表盘、通过Payload进行身份验证等等。

[**The Boring JavaScript Stack**](https://github.com/sailscastshq/boring-stack)  - 一个具有主观观点的全栈JavaScript项目起始模板，使用Sails（Node.js框架），Inertia（用于单页应用），Tailwind，并兼容Vue、React或Svelte。

[**Product for Engineers**](https://newsletter.posthog.com/?utm_source=webtools&utm_campaign=webtools)  - Product for Engineers是PostHog专为提高工程师产品技能而设的新闻简报。免费订阅，获取关于打造出色产品的建议，PostHog的经验教训（和错误），以及对顶级初创公司的深入探讨。 SPONSORED

[**David UI Angular**](https://www.david-ui-angular.com/)  - 一个基于Tailwind和Angular的企业级项目的UI组件库，具有20多个可定制的组件。

[![David UI Angular](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/4ddadbb9-690a-89c0-a966-a2acea7638bc.png)](https://www.david-ui-angular.com/)


[**Draft UI**](https://draft-ui.com/)  - 一套20多个简单设计的React组件，专注于可访问性，并使用Adobe的React Aria库和Tailwind构建。

[**Homepage**](https://github.com/gethomepage/homepage)  - 一个现代化、完全静态、快速、安全的完全代理、高度可定制的应用程序仪表盘，通过YAML文件进行配置，集成了100多个服务，并支持多种语言翻译。

[**Baklava**](https://github.com/Trendyol/baklava)  - 基于原生 Web 组件的组件库和设计系统，可轻松与您选择的框架集成。

[**rainboot.css**](https://rainboot.github.io/)  - 一个使用Cloudscape的设计令牌的Bootstrap主题，具有与Bootstrap相同的基本功能，但由第三方设计系统和组件库提供支持。

[**JSX Email**](https://jsx.email/) — 一组用于使用JSX或TSX构建响应式电子邮件模板的React组件和助手，与现代电子邮件客户端兼容。

[**Nextly**](https://github.com/web3templates/nextly-template)  - 一个适用于初创企业和独立项目的落地页和营销网站模板，使用Next.js和Tailwind构建。



构建工具，捆绑工具，等等。
---------------------------



[**pretty-quick**](https://github.com/prettier/pretty-quick)  - 一个npm包，可以在您的更改文件上运行流行的代码格式化工具Prettier，并支持Git和Mercurial。

[**Secretlint**](https://github.com/secretlint/secretlint)  - 一个可插拔的检查工具，可扫描您的项目以防止提交凭据，可通过Docker或npm安装，并包含一个预提交钩子。

[**Oxc**](https://oxc-project.github.io/)  - 一套使用Rust编写的JavaScript工具集，包括解析器、代码检查、Rspack打包工具、捆绑工具、类型检查器等。

[**@fastify/vite**](https://github.com/fastify/fastify-vite)  - 一个用于干净优雅地集成Fastify和Vite的Fastify插件，以创建一个最小、开销低、快速的全栈单体架构设置。

[**package-majors**](https://majors.nullvoxpopuli.com/)  - 一个互动工具，显示过去一周内软件包的主要（或次要）版本下载量的差异，以帮助确定在升级过程中人们所“卡住”的地方。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱充满了干扰，太多订阅导致收件箱一团糟。将你的通讯从收件箱中解放出来。将你的通讯移动到专为阅读而设计的空间中，在几秒钟内整理好你的收件箱。赞助内容

[**Glowup Vibes**](https://github.com/christina-de-martinez/babel-plugin-glowup-vibes)  - 这是你不知道你需要的东西。它是一个Babel插件，将网络俚语转译为有效的JavaScript。例如，"ghosted"变成"return null"，"lowkey.sus('message')"变成console.warn("message")，等等。

[**pgxman**](https://pgxman.com/)  - 一个类似于 npm 的注册表，用于 PostgreSQL，以便您可以发现、安装和升级您的 PostgreSQL 扩展。

[![pgxman](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ecc116d2-f3f9-dc81-d6bf-8e81b05cb120.png)](https://pgxman.com/)


[**Banal**](https://github.com/fabiospampinato/banal)  - 一个CLI应用程序，可以按需分析您的捆绑包，由esbuild提供支持，并可作为类似在线工具的替代品工作。

[**TypeSpec**](https://typespec.io/)  - 从Microsoft，一种语言描述您的数据并生成模式、API规范、客户端/服务器代码、文档等。




未分类项目
---------------------


[**Unkey**](https://unkey.dev/)  - 一个用于扩展用户面向API的开源API身份验证和授权平台，可以让您在几秒钟内创建、验证和管理低延迟的API密钥。

[**TypeHero**](https://typehero.dev/)  - 不仅仅是一个工具，而是一个平台，通过交互式编码挑战、讨论和知识分享，让您与TypeScript开发人员社区连接、合作和成长。

[**CodeDiagram**](https://www.codediagram.io/)  - 创建一个VS Code扩展，让您能够在代码旁边创建一个可视化的代码库图表，以便更好地理解架构并改进重构。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱充斥着各种干扰，太多的订阅会导致收件箱混乱不堪。将你的新闻订阅从收件箱中解放出来。将你的新闻订阅移到一个专为阅读而建的空间，并在几秒钟内整理你的收件箱。赞助内容

[**Zed**](https://zed.dev/)  - 由Atom和Tree-sitter的创造者开源的高性能多人代码编辑器。

[**Webacus**](https://webacus.dev/)  - 一个“开发者的瑞士军刀”，包括70多种操作，包括编码、解码、压缩、日期和时间函数、哈希等等。

[![Webacus](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/8f562b02-807b-b038-63f5-926d1a348603.png)](https://webacus.dev/)


[**textart.sh**](https://textart.sh/)  - 一个由纯文本制作的庞大图形目录。只需点击任何类别，您将获得多个文本艺术示例，可切换颜色调色板、调整填充，甚至可以点赞/踩您最喜欢的。

[**Quetta**](https://www.quetta.net/)  - 一个免费的、专注于隐私保护的安卓网页浏览器（iOS即将推出），具有跟踪器屏蔽和数据加密等功能。

[**Tart**](https://tart.run/)  - 一个用于在Apple Silicon设备上构建、运行和管理macOS和Linux虚拟机的虚拟化工具集。

[**Privacy Tools**](https://www.privacytools.io/)  - 一个一站式资源，始于2015年，提供关于服务、工具和隐私指南的信息，对抗全球大规模监控。


文章翻译自：[Web Tools Weekly Issue #553 (CSS Overview, Frameworks, Build Tools, Uncats)](https://webtoolsweekly.com/archives/issue-553) 

