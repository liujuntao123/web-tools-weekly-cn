

#557 （徽章API、媒体、JSON/DB、未分类）



这是一个有趣的Web API，你可能还没有听说过：徽章 API。顾名思义，该 API 用于允许应用将通知徽章推送到应用程序的图标上，以表示某些内容可用。

这的一个流行的例子是，移动设备使用少量的数字来指示未读消息或其他通知。下面是iOS中使用此类型徽章的两个应用程序的屏幕截图。

![iOS上应用图标上的徽章](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/a2b42a36-3383-4b11-f936-b94ee9129e31.png)

当然，许多用户发现这类通知令人讨厌，并且是我们现在设备上无尽通知问题的一部分。但作为开发者，了解现在网页平台上可以使用类似功能的特性是很好的。

使用Badging API的代码如下所示：

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

在上面的代码中，有两种主要的方法：**setAppBadge()** 和 **clearAppBadge()** 。设置徽章时，您可以传入一个表示您想显示的内容的单个参数。内容可以是任何数字，徽章将忽略任何小数值，只显示整数（显然不会进行任何四舍五入）。

在清除徽章时，没有传入参数；图标会立即清除其徽章。您还可以通过传入一个值为"0"来清除徽章。如果使用 **setAppBadge()** 方法时没有传入参数，则应用图标将显示一个没有值的徽章（这与值为"0"不同）。

目前，Badge API 可在 Windows 和 Mac 上的 Chrome 和 Edge 以及 Mac 和 iOS 上的 Safari 使用。在所有情况下，API 需要被用于用户系统上安装的 Web 应用（例如 PWA 或安装在 iOS 主屏幕上的应用）。

Chrome团队已经整理了一个关于Badging API的[写作](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)，其中包括一个链接到一个优秀的[实时演示](https://badging-api.glitch.me/)，您可以在该演示中看到它的运作。

[![Badging API Demo](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/f7fa8cce-cb1a-f63b-e825-9d8195ff694b.png)](https://badging-api.glitch.me/)

通过安装应用程序并使用页面上的控件来更改徽章值，在支持的浏览器上试用一下。尝试将值设置为"0"。请注意应用程序图标的行为（在任务栏、主屏幕等上，具体取决于测试设备）。

关于API的语法，没有太多其他内容可讨论。这两种方法是语法的唯一部分。当然，设置一个可安装的应用程序是一个更大的工作，所以这个小的API可以被视为这个过程的一部分。

当然，您希望谨慎使用此功能，因为许多用户不希望收到这类通知。当我运行 Chrome 演示时，我的浏览器询问我是否允许在该页面上使用徽章 API。因此，它需要权限，并且这些权限稍后可以在需要时撤销。

现在进入本周的工具！


媒体工具 （SVG，视频等）
-------------------------------------------------



[**MiroTalk SFU**](https://github.com/miroslavpejic85/mirotalksfu)  - 一个开源的、简单的、安全的、可扩展的实时视频会议解决方案，支持高达4K的视频质量，兼容所有现代浏览器和平台。

[**CartoSVG**](https://cartosvg.com/)  - 一个在线工具，可以使用多种不同的地理相关设置和地图外观自定义选项来轻松设计交互式和漂亮的SVG地图。

[![CartoSVG](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/a42abc2b-ab04-79e5-5da4-6cfaf7446efc.png)](https://cartosvg.com/)


[**PixiEditor**](https://pixieditor.net/)  - 一个美丽、快速的像素艺术编辑器，打包在一个眼睛友好的暗黑主题中，适用于Windows。

[**monday.com**](https://www.clkmg.com/wellput-io/76900ltj4idri/76900-1024/Lazarpress///)  - 改变你团队的效率，重新构想你的工作管理。自动化任务，无缝集成，全面可见。轻松完成每个项目。立即免费试用。  赞助

[**Wiggle Animate**](https://wiggle.tools/) — 一款开源的基于矢量的运动图形动画工具，让你可以通过多种属性、关键帧控制和曲线编辑器来自定义你的动画。

[**YT Pics**](https://www.ytpics.com/)  - 输入YouTube URL以及时间戳，此工具将在视频中生成该时间点的截图。还可下载字幕和缩略图。

[**canvas-size**](https://github.com/jhildenbiddle/canvas-size)  - 一个脚本，用于确定HTML <canvas>元素的最大面积、高度、宽度和自定义尺寸，以克服该区域在不同浏览器中的差异。

[**SiriWave**](https://github.com/kopiro/siriwave)  - 使用Canvas API纯JavaScript复制的“Apple Siri”波形，支持经典和iOS9+波形。

[**Penrose**](https://penrose.cs.cmu.edu/)  - 一个平台，只需在纯文本中键入符号，即可创建漂亮的图表，并提供多种导出选项。

[**Avatartion**](https://www.avatartion.com/)  - 一个用于创建和自定义社交媒体个人资料、占位符等类似Notion风格头像的用户界面。您还可以生成随机头像并以PNG或SVG格式导出。

数据库工具
--------------

[**nodb**](https://nodb.sh/)  - 一个具有RESTful API的无服务器应用程序数据库，用于存储和提取JSON，并构建与您的应用程序匹配的API。

[**redb**](https://www.redb.org/)  - 一个简单、便携、高性能、ACID的嵌入式键值存储引擎，使用纯Rust编写，灵感来自一个名为LMDB的旧项目。

[**GatewayD**](https://gatewayd.io/)  - 一个开源的云原生数据库网关和框架，用于构建数据驱动应用，类似于API网关，但适用于数据库。

[**Smartr Daily**](https://smartrdailynewsletter.beehiiv.com/)  - 每日为好奇的人提供的必备通讯。收集互联网上最智能的文章。为您提供引发思考的想法和洞见，直接发送到您的收件箱。赞助内容

[**SQL Workbench**](https://sql-workbench.com/)  - 一个在线 SQL 工作台，可以在浏览器中运行 SQL 查询。允许您拖放 CSV、Parquet 或 Arrow 文件以创建新表格。

[![SQL Workbench](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/40387636-b68a-172e-4ad3-84f85abcf8fe.png)](https://sql-workbench.com/)


[**Vanna.AI**](https://vanna.ai/)  - 一个以人工智能驱动的工具，可以为您编写SQL，并通过提问从您的数据库中获取可行的见解。

[**Skytable**](https://skytable.io/)  - 一个可扩展的实时 NoSQL 数据库，使您能够对复杂数据进行建模，并通过其自有的查询语言 BlueQL 编写表达性强的查询语句。

[**pgroll**](https://github.com/xataio/pgroll)  - 一个基于Go语言的开源命令行工具，通过同时提供多个模式版本，为PostgreSQL提供安全可逆的架构迁移。

[**SQL Formatter**](https://github.com/sql-formatter-org/sql-formatter)  - 一个用于漂亮打印 SQL 查询的 JavaScript 库，最初是一个类似的 PHP 库的移植版本，并支持12个以上的 SQL 方言。

[**Tiny RDM**](https://github.com/tiny-craft/tiny-rdm)  - 一个现代的轻量级跨平台Redis桌面管理器，适用于Mac、Windows和Linux操作系统。





未分类的项目
---------------------



[**Flyde**](https://www.flyde.dev/)  - 一个与您的文本编码配合使用的可视化编程语言，可以在 VS Code 中运行，并与现有的 TypeScript 代码、浏览器和 Node.js 集成。

[**Phase**](https://phase.dev/)  - 一个开源的、端到端加密的平台，用于管理、同步和共享环境变量（即秘密管理）。

[**automd**](https://github.com/unjs/automd)  - 一个自动化的Markdown维护工具，可以在Markdown文档中扫描注释，并使用内置生成器更新其内容。

[**Smartr Daily**](https://smartrdailynewsletter.beehiiv.com/)  - 对于充满好奇心的人来说，这是必读的新闻通讯。收集网络上最聪明的文章。每天直接送达到您的收件箱的值得思考的观点和见解。赞助商提供支持。

[**Prici.io**](https://prici.io/)  - 一个用于管理任何SaaS应用的计划和定价的开源项目。您可以使用Docker的独立服务，在本地或您的机器上运行它。

[**Expressive Code**](https://expressive-code.com/)  - 一个用于在网页上呈现源代码的语法高亮引擎，完全支持VS Code主题，编辑器和终端框架，复制到剪贴板，文本标记，可折叠的部分等等。

[![富有表现力的代码](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/dc2f6373-9ac1-4652-6d18-b67bb28959d4.png)](https://expressive-code.com/)


[**Loco**](https://loco.rs/)  - 一个基于Rails概念的Rust框架，专为“一人团队”的副项目和初创公司而设计。

[**Adaptive Cards**](https://adaptivecards.io/)  - 一套不受平台限制的 UI 片段，以 JSON 格式编写，可供应用程序和服务之间公开交换的。

[**Regexper**](https://regexper.com/)  - 一个在线工具，用于可视化你的JavaScript风格的正则表达式。如果这对你有帮助！你还可以深入链接到你可视化的正则表达式。

[**Statsig**](https://statsig.com/)  - 一个供团队实现功能标志、发布和配置的平台，免费计划提供功能标志、配置和实验。


文章翻译自：[Web Tools Weekly Issue #557 (Badging API, Media, JSON/DB, Uncats)](https://webtoolsweekly.com/archives/issue-557) 

