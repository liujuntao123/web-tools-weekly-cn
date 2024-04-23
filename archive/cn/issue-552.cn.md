

＃552 (JS漏洞，JS工具，媒体，移动)



基于Chromium的浏览器中的开发工具不断得到改进，如果你不小心的话，可能会意外使用相同的功能，而没有去了解其他有用的功能。

目前处于实验模式的一个新功能是“CSS概览”。要访问此部分，请访问你要生成CSS概览的页面，然后单击右上角的三个点(“自定义和控制DevTools”选项)。选择“更多工具”，然后选择“CSS概览”。你还可以通过关键字搜索在命令面板中打开相同的选项。

![在 DevTools 中打开 CSS 概览面板](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ca77ef68-85b5-e0c3-bac3-d1f2bb58ebf5.png)

在DevTools中打开CSS概览面板

这将展示一个简要的摘要页面，解释工具如何帮助您。点击"Capture Overview"按钮运行CSS概览测试。

您将在结果中看到的第一件事是对您页面的CSS的基本概述，其中包含有关样式表数量、内联样式元素数量、样式规则数量以及不同类型的选择器的数据。

![CSS概述功能概要](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/65290bb4-fce2-6fe8-5e24-7debb39a174e.png)

CSS概述功能简介

之后，有关颜色的信息将颜色分为不同的类别，并提供低对比度的信息。屏幕截图中的示例有7个不同的对比问题，可以通过改进来获得更易访问的文本。

![生成的CSS概览摘要](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/08700afa-7d8e-b579-bd4a-19892321fec2.png)

生成的CSS概述摘要

还有关于字体的信息。对于颜色和字体，你可以点击一个颜色或字体以查看使用该颜色或字体的元素列表。如果你想在“元素”面板中处理它，你可以点击该元素跳转到相应位置。

![使用CSS概述检查颜色](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/0f4d816f-65dd-87b6-000d-2f35ac8b843c.png)

通过CSS概述来检查颜色

而且你也可以简单地将鼠标悬停在列表中的任何元素上，页面上将以视觉方式显示出该元素，以便你可以看到它在布局中映射到的位置，如下面的屏幕截图所示。

![在CSS概览中悬停在元素列表上方](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5ba31599-5267-da85-f6f0-99b0ceabb346.png)

在CSS概览中悬停在元素列表上

最后，还有有关未使用的声明和页面上使用的媒体查询数量的信息。未使用的声明信息对于清理样式表和进行一些重构肯定是有用的。

![CSS概述中的未使用声明部分](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5150ba12-eed2-f58e-439e-eb8a4c615300.png)

CSS概述中的未使用声明部分

当您第一次打开CSS概览面板时，您会看到一个提醒，即这仍然是一个实验性功能，并附有一个链接，可以将您发现的问题提交到[此错误报告线程](https://issues.chromium.org/issues/40202474)中。您还可以使用此链接进行功能请求。将来有待观察该功能在实验阶段中的改进情况，敬请关注!

现在进入本周的工具!



Web 框架
--------------

[**DigitalHippo**](https://github.com/joschan21/digitalhippo)  - 一个现代化的全栈电子商务市场模板，用Next.js、shadcn/ui和Tailwind构建，包括管理员仪表板、通过Payload进行身份验证等等。

[**The Boring JavaScript Stack**](https://github.com/sailscastshq/boring-stack)  - 一个基于Sails(Node.js框架)构建的，具有个人见解的全栈JavaScript项目起始器，使用Inertia(用于单页应用)，Tailwind，并且兼容Vue、React或Svelte。

[**Product for Engineers**](https://newsletter.posthog.com/?utm_source=webtools&utm_campaign=webtools)  - 《面向工程师的产品》是PostHog的专栏，致力于提高工程师的产品技能。免费订阅，获取关于构建优秀产品的建议，从PostHog中汲取的经验教训(和错误)，以及对顶尖创业公司的深入解析。    赞助

[**David UI Angular**](https://www.david-ui-angular.com/)  - 一个基于Tailwind和Angular的面向企业级项目的UI组件库，拥有20多个可定制的组件。

[![David UI Angular](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/4ddadbb9-690a-89c0-a966-a2acea7638bc.png)](https://www.david-ui-angular.com/)


[**Draft UI**](https://draft-ui.com/)  - 一套20多个简洁设计的React组件，注重可访问性，并使用Adobe的React Aria库和Tailwind构建。

[**Homepage**](https://github.com/gethomepage/homepage)  - 一个现代化、完全静态、快速、安全的全代理、高度可定制的应用仪表板，通过YAML文件进行配置，支持超过100种服务的集成，并提供多语言翻译。

[**Baklava**](https://github.com/Trendyol/baklava)  - 基于原生Web组件的组件库和设计系统，可以与您选择的框架轻松集成。

[**rainboot.css**](https://rainboot.github.io/)  - 一个使用Cloudscape的设计令牌来驱动的Bootstrap主题，具有与Bootstrap相同的基本功能，Cloudscape是一个第三方的设计系统和组件库。

[**JSX Email**](https://jsx.email/) — 一组用于使用JSX或TSX构建响应式电子邮件模板的React组件和帮助程序，并与现代电子邮件客户端兼容。

[**Nextly**](https://github.com/web3templates/nextly-template)  - 一个针对初创公司和独立项目的落地页和营销网站模板，采用Next.js和Tailwind构建。



构建工具，打包工具等等。
---------------------------

[**pretty-quick**](https://github.com/prettier/pretty-quick)  - 一个npm包，在你改动的文件上运行流行的代码格式化工具Prettier，并支持Git和Mercurial。

[**Secretlint**](https://github.com/secretlint/secretlint)  - 一个可插拔的代码检查工具，用于扫描项目以防止提交凭据，可通过Docker或npm安装，并包含一个预提交钩子。

[**Oxc**](https://oxc-project.github.io/)  - 一个由Rust编写的JavaScript工具集，包括解析器、linter、Rspack bundler和bundler、类型检查器等等。

[**@fastify/vite**](https://github.com/fastify/fastify-vite)  - 用一个简洁、优雅的方式将 Fastify 和 Vite 整合起来，创建一个轻量、低开销、快速的完整堆栈单体应用的 Fastify 插件。

[**package-majors**](https://majors.nullvoxpopuli.com/)  - 一个互动工具，显示过去一周包的主要(或次要)版本下载量的差异，以帮助确定人们在升级时“卡住”的地方。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱充斥着各种分心的事物，太多的订阅会导致收件箱混乱不堪。让你的时事通讯摆脱收件箱的束缚。将你的时事通讯移到一个专为阅读而建的空间，并在几秒钟内整理你的收件箱。赞助

[**Glowup Vibes**](https://github.com/christina-de-martinez/babel-plugin-glowup-vibes)  - 你不知道你需要的东西就是这个。它是一个 Babel 插件，将网络俚语转换为有效的 JavaScript。例如，“ghosted” 变成 “return null”，“lowkey.sus('message')” 变成 console.warn("message")，等等。

[**pgxman**](https://pgxman.com/)  - 一个类似于 npm 的注册表，用于 PostgreSQL，让你可以发现、安装和升级你的 PostgreSQL 扩展。

[![pgxman](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/ecc116d2-f3f9-dc81-d6bf-8e81b05cb120.png)](https://pgxman.com/)


[**Banal**](https://github.com/fabiospampinato/banal)  - 一个CLI应用程序，让您可以随时分析您的捆绑包，由esbuild提供支持，并可作为类似在线工具的替代品。

[**TypeSpec**](https://typespec.io/)  - 来自 Microsoft 的一种语言，用于描述你的数据，并生成模式、API 规范、客户端/服务器代码、文档等等。




未分类项目
---------------------

[**Unkey**](https://unkey.dev/)  - 一个开源的API身份验证和授权平台，用于扩展用户界面的API，让您可以在几秒钟内创建、验证和管理低延迟的API密钥。

[**TypeHero**](https://typehero.dev/)  - 不仅仅是一个工具，而是一个平台，通过互动的编码挑战、讨论和知识共享，让你与一群TypeScript开发者建立联系、合作并发展。

[**CodeDiagram**](https://www.codediagram.io/)  - 一个VS Code扩展，可以让您在代码旁边创建一个可视化的代码库图表，以便更好地理解架构和改进重构。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱充斥着干扰，订阅太多会导致收件箱混乱。解放你的新闻订阅，将其转移到专为阅读而设计的空间中，仅需几秒钟即可清理收件箱。赞助内容

[**Zed**](https://zed.dev/)  - 新开源的、来自Atom和Tree-sitter创作者的高性能多人代码编辑器。

[**Webacus**](https://webacus.dev/)  - 一个“开发者的瑞士军刀”，包含70多种操作，包括编码、解码、压缩、日期和时间函数、哈希等等。

[![Webacus](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/8f562b02-807b-b038-63f5-926d1a348603.png)](https://webacus.dev/)


[**textart.sh**](https://textart.sh/)  - 一个巨大的以纯文本制作的图形目录。只需点击任何类别，您将获得多个文字艺术示例，同时还可以切换颜色调色板、调整填充，并对您喜欢的作品进行投票。

[**Quetta**](https://www.quetta.net/)  - 一个免费、专注隐私的 Android 网络浏览器(iOS 版即将推出)，具有跟踪器拦截和数据加密等功能。

[**Tart**](https://tart.run/)  - 一个用于在Apple Silicon设备上构建、运行和管理macOS和Linux虚拟机的虚拟化工具集。

[**Privacy Tools**](https://www.privacytools.io/)  - 一个一站式的资源，始于2015年，提供有关服务、工具和隐私指南的信息，以对抗全球大规模监控。


文章翻译自：[Web Tools Weekly Issue #552 (JS Vulnerabilities, JS Utils, Media, Mobile)](https://webtoolsweekly.com/archives/issue-552) 

