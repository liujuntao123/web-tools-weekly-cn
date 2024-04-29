#553 (CSS概述，框架，构建工具，Uncats）

基于Chromium的浏览器中的DevTools继续得到改进，如果您不小心，可能会仅使用相同的功能而不去了解其他有用的功能。

目前处于实验阶段的一个新功能是**"CSS概述"**。要访问此部分，请访问要生成CSS概述的页面，然后点击右上角的三个点（"自定义和控制DevTools"选项）。选择 "更多工具"，然后选择 "CSS概述"。您也可以使用命令面板打开同样的选项，进行关键字搜索。

![在DevTools中打开CSS概述面板](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ca77ef68-85b5-e0c3-bac3-d1f2bb58ebf5.png)

在DevTools中打开CSS概述面板

这将带出一个简要解释如何使用该工具的总结页面。点击"捕获概述"按钮运行CSS概述测试。

在结果中，您将首先看到页面CSS的基本概览，包括样式表数量、内联样式元素数量、样式规则数量以及不同类型的选择器。

![CSS概述功能概要](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/65290bb4-fce2-6fe8-5e24-7debb39a174e.png)

CSS概述功能概要

其后是有关颜色的信息，将颜色分为不同类别，并提供关于低对比度的信息。下面的截图示例显示了7个不同的对比度问题，可以通过修复来改善文本的可访问性。

![生成的CSS概述总结](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/08700afa-7d8e-b579-bd4a-19892321fec2.png)

生成的CSS概述总结

还有关于字体的信息。对于颜色和字体，您可以点击一个颜色或字体，以查看使用该颜色或字体的元素列表。如果您想在Elements面板中处理它，可以点击该元素以转到该元素。

![使用CSS概述检查颜色](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/0f4d816f-65dd-87b6-000d-2f35ac8b843c.png)

使用CSS概述检查颜色

您还可以简单地将鼠标悬停在列表中的任何元素上，该元素将在页面上以可视方式指示，以便您可以看到它在布局中对应的位置，如下面的截图所示。

![在CSS概述中悬停在元素列表中的元素](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5ba31599-5267-da85-f6f0-99b0ceabb346.png)

在CSS概述中悬停在元素列表中的元素

最后，还有关于页面上未使用的声明和媒体查询数量的信息。未使用的声明信息对于清理样式表并进行一些重构肯定是有用的。

当您首次打开CSS概述面板时，您会看到一个提醒，指出这仍然是一个实验性的功能，并附带一个链接，让您提交问题（如果发现有任何问题），您也可以在那里提出功能请求。很有意思的是，看到此功能在开发过程中如何改进并摆脱实验阶段，所以保持关注！

现在，开始介绍本周的工具！

Web框架
------

[**DigitalHippo**](https://github.com/joschan21/digitalhippo) — 一个现代的全栈电子商务市场模板，用Next.js、shadcn/ui和Tailwind构建，包括管理仪表板、采用Payload身份验证等等。

[**The Boring JavaScript Stack**](https://github.com/sailscastshq/boring-stack) — 一个极简的全栈JavaScript项目入门工具，使用Sails（Node.js框架）、Inertia（用于SPA）、Tailwind构建，并与Vue、React或Svelte兼容。

[**Product for Engineers**](https://newsletter.posthog.com/?utm_source=webtools&utm_campaign=webtools) — Product for Engineers是PostHog的专注于改善工程师产品技能的新闻通讯。免费订阅，获取关于构建优秀产品的建议、PostHog的教训（以及错误）、以及对顶级创业公司的深入探讨。 SPONSORED

[**David UI Angular**](https://www.david-ui-angular.com/) — 一个基于Tailwind和Angular的面向企业级项目的UI组件库，包含20多个可自定义的组件。

[![David UI Angular](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/4ddadbb9-690a-89c0-a966-a2acea7638bc.png)](https://www.david-ui-angular.com/)


[**Draft UI**](https://draft-ui.com/) — 一套集成了Adobe的React Aria库和Tailwind的20多个简单设计的React组件，专注于可访问性。

[**Homepage**](https://github.com/gethomepage/homepage) — 一个现代、完全静态的、快速、安全、完全代理的、高度可自定义的应用程序仪表板，通过YAML文件进行配置，可与100多个服务集成，并提供多种语言的翻译。

[**Baklava**](https://github.com/Trendyol/baklava) — 一个基于原生Web组件的组件库和设计系统，可轻松与您选择的框架集成。

[**rainboot.css**](https://rainboot.github.io/) — 一个Bootstrap主题，具有与Bootstrap相同的基本功能，但使用第三方设计系统和组件库Cloudscape的设计标记。

[**JSX Email**](https://jsx.email/) — 一组用于使用JSX或TSX构建响应式电子邮件模板的React组件和辅助工具，与现代电子邮件客户端兼容。

[**Nextly**](https://github.com/web3templates/nextly-template) — 一个面向初创公司和独立项目的落地页和营销网站模板，使用Next.js和Tailwind构建。

构建工具、打包工具等
-----------------

[**pretty-quick**](https://github.com/prettier/pretty-quick) — 一个npm包，可以在您更改的文件上运行Prettier，这是一款流行的代码格式化工具，支持Git和Mercurial。

[**Secretlint**](https://github.com/secretlint/secretlint) — 一款可插拔的代码检查工具，用于扫描项目以防止提交凭据，可通过Docker或npm进行安装，并包含一个pre-commit钩子。

[**Oxc**](https://oxc-project.github.io/) — 一组用Rust编写的JavaScript工具，包括解析器、语法检查器、Rspack打包工具、bundler、类型检查器等。

[**@fastify/vite**](https://github.com/fastify/fastify-vite) — 一个Fastify插件，清晰优雅地集成Fastify和Vite，创建一个最小、低开销、快速的全栈单体应用程序设置。

[**package-majors**](https://majors.nullvoxpopuli.com/) — 一个交互式工具
[**Banal**](https://github.com/fabiospampinato/banal) — 一款CLI应用程序，可以按需分析您的捆绑包，采用esbuild技术，并作为类似在线工具的替代品工作。

[**TypeSpec**](https://typespec.io/) — 来自微软的一种语言，可以预先描述您的数据并生成模式、API规范、客户端/服务器代码、文档等。

The Uncateg­orizables
---------------------

[**Unkey**](https://unkey.dev/) — 一款开源API身份验证和授权平台，用于扩展面向用户的API，让您能够在几秒钟内创建、验证和管理低延迟API密钥。

[**TypeHero**](https://typehero.dev/) — 不是一款工具，而是通过互动编程挑战、讨论和知识分享，让您与TypeScript开发者社区建立联系、合作和成长的平台。

[**CodeDiagram**](https://www.codediagram.io/) — 一款VS Code扩展程序，可让您在代码旁边创建一个可视化代码库图表，以便更好地理解架构并改进重构。

[**Meco: 第一份新闻订阅聚合**](https://www.meco.app/get/3nux) — 收件箱里充满了干扰，过多的订阅导致收件箱混乱。将您的新闻订阅从收件箱中解放出来。将您的新闻订阅转移到专为阅读而构建的空间，仅需几秒钟即可清理您的收件箱。    赞助商：

[**Zed**](https://zed.dev/) — 最新开源，一款高性能的多人代码编辑器，由Atom和Tree-sitter的创作者开发。

[**Webacus**](https://webacus.dev/) — 一款专为开发人员打造的“瑞士军刀”，包括70多个操作，包括编码、解码、压缩、日期和时间函数、哈希等等。

[![Webacus](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/8f562b02-807b-b038-63f5-926d1a348603.png)](https://webacus.dev/)

[**textart.sh**](https://textart.sh/) — 一个巨大的纯文本图形目录。只需点击任何类别，您将获得多个文本艺术示例，可以切换颜色调色板、调整填充，甚至点赞/反对您喜欢的作品。

[**Quetta**](https://www.quetta.net/) — 一款免费的面向隐私的Android（iOS即将推出）网络浏览器，具有跟踪器拦截和数据加密等功能。

[**Tart**](https://tart.run/) — 用于在Apple Silicon设备上构建、运行和管理macOS和Linux虚拟机的虚拟化工具集。

[**Privacy Tools**](https://www.privacytools.io/) — 从2015年开始的一站式资源，提供有关服务、工具和隐私指南以对抗全球大规模监视的信息。


文章翻译自：[Web Tools Weekly Issue #553 (CSS Overview, Frameworks, Build Tools, Uncats)](https://webtoolsweekly.com/archives/issue-553) 

