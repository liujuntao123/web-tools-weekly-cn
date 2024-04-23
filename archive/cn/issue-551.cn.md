

#551（HTMLElement API, HTML/CSS, JSON/DB, Testing）



我们有时可能忽视的一组Web API是属于不同HTML元素的通常是独特的API。MDN的参考文档有一个特定的页面，称为[HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)，它描述了这些API。

正如该文档所解释的那样：

_**"HTML DOM API由界面组成，这些界面定义了HTML中每个元素的功能，以及它们所依赖的任何支持类型和界面。"**_

例如，这是一个通用的 **HTMLElement** API（或接口），它具有与所有HTML元素相关的特定方法和属性。这使您可以访问诸如以下属性：

* **HTMLElement.autofocus**
* **HTMLElement.dataset**
*   **HTMLElement.hidden**
*   **HTMLElement.innerText**

*   等等...

您可能经常使用那些通用的元素。您只需获取元素的引用，然后就可以访问属性。其中一些属性是可设置的，而其他属性是只读的。该接口还关联有一些方法，比如 **blur()** 和 **focus()** 。

但您可能会忘记特定的HTML元素具有与其关联的独特属性和方法。例如， **HTMLButtonElement** 接口具有以下属性：

*   **HTMLButtonElement​.form**
*   **HTMLButtonElement​.formMethod**
*   **HTMLButtonElement​.validationMessage**
*   **HTMLButtonElement​.labels**
*   其他...

一些上述内容也适用于其他表单元素。类似地，**HTMLImageElement** 接口包括：

*   **HTMLImageElement.alt**
* **HTMLImageElement.complete**
* **HTMLImageElement.naturalHeight**

* **HTMLImageElement.sizes**
* 以此类推...

您可以通过单击任何单独元素的 API 页面，并找到以前可能未见过的各种属性。其中一个独特的属性是 **HTMLQuoteElement**（**\<blockquote>** 的接口），它有一个属性： **cite** 。这些页面列出了各种有趣的属性，包括当然还有已过时的属性，不建议使用，但为了向后兼容性可能将永远继续工作。

所以下次需要使用 JavaScript 访问特定 HTML 元素的各个部分时，请查阅该元素的接口参考，并查看是否存在一种简单且可能跨浏览器的方式来实现您想要的功能，以免重复造轮子。

现在转到本周的工具！

CSS 和 HTML 工具
------------------

[**Velvette**](https://github.com/noamr/velvette)  - 一个小的JavaScript库，由作者提出作为未来的标准，它建立在视图转换API（用于页面和状态转换）之上。

[**OOHTML**](https://github.com/webqit/oohtml)  - 一组功能，扩展了标准的HTML和DOM，以实现模块化、可重用和响应式的标记。

[**loadership**](https://www.loadership.com/)  - 一个在线配置工具，可以创建自己的纯CSS加载动画。从十几个预建的加载动画之一中选择，然后根据需要调整设置。

[**Save $1 Off Your Domain Name**](https://sponsr.is/tld_webtoolsweekly)  - Porkbun拥有用户友好的界面，没有升级销售，所以您不会感到被迫购买不需要的东西。在一个地方管理您的新域名的一切，无需四处寻找。立即在Porkbun上获得您的下一个域名。  赞助内容

[**CSS3D Clouds**](https://spite.github.io/CSS3DClouds/)  - 不是一个新工具，但这是一个演示教程，展示了如何使用CSS和一些JavaScript来创建具有交互性的动态WebGL样式的3D云。

[**CSSformalize**](https://www.cssformalize.com/)  - 一个CSS框架和交互式在线工具，用于生成代码以轻松地为CSS表单添加样式。您还可以选择并自定义表单元素的现有暗黑和浅色主题。

[![CSSformalize](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/da5520d7-23ed-07b7-3cb7-6ead84b4ff9c.png)](https://www.cssformalize.com/)


[**htmldocs**](https://htmldocs.com/)  - 一个可以从HTML / CSS创建和自动生成PDF文档的在线文档编辑器。无需安装，包括发票，报告，简历，法律文件等模板。

[**Palettify**](https://palettify.co/)  - 一个基于shadcn-ui组件的操场，可实时在真实的UI元素上尝试不同的UI色彩主题。您可以切换到暗色或亮色模式，并将主题令牌复制为CSS自定义属性。

[**Autosize Textarea**](https://github.com/andrico1234/autosize-textarea)  - 一个用于HTML文本框元素的网络组件，可以自动调整大小以适应元素的内容。

[**Animotion**](https://animotion.dev/)  - 一个在线工具，可通过拖动、调整大小、旋转、裁剪等方式，可视化地创建CSS动画，包括关键帧编辑器、一系列可直接使用的动画和29种内置缓动效果。



JSON和数据库工具
-----------------------

[**JOSEDb**](https://github.com/anywhichway/josedb)  - 一个基于JSON的数据库，利用JSON对象签名和加密（JOSE）标准，为JSON对象提供安全灵活的加密和签名键值存储。

[**Joist**](https://github.com/stephenh/joist-ts)  - 一个为Postgres设计的有主见的TypeScript ORM，旨在为TypeScript项目带来与ActiveRecord相当的生产力。

[**SQLiteGPT**](https://github.com/Airsequel/SQLiteGPT)  - 一个用于SQLite的SQL函数，可以直接查询ChatGPT，目前仅能在JavaScript项目中使用。

[**monday.com**](https://www.clkmg.com/wellput-io/70103ls15ap0h/70103-1026/Lazarpress///)  - 你团队成功的秘密武器就在这里。通过 monday.com 从概念到完成，帮助你轻松管理、自动化和优化你的项目。是时候改变你的工作生活了。立即开始免费试用。 赞助

[**Schema Generator**](https://schemagenerator.app/)  - 设计的一个网络应用程序，可帮助您构建和生成 JSON-LD 模式标记，以支持 Google 列出并支持的所有模式，以提升网站的搜索引擎优化排名。

[**JSON Resume**](https://jsonresume.org/)  - 一个开源倡议，旨在创建一个基于JSON的简历标准，专门用于开发人员简历。

[**URL to JSON**](https://urltojson.com/)  - 输入一个URL，这个工具将以JSON格式显示页面的内容，包括Open Graph媒体和内容等元数据。

[![URL到JSON](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/e4e77d0e-f26d-7988-4f2c-d7783cdac7f6.png)](https://urltojson.com/)


[**SQLSync**](https://github.com/orbitinghail/sqlsync)  - 一个基于Rust的协作离线优先封装器，旨在在用户、设备和边缘之间同步Web应用程序状态。

[**lowstorage**](https://github.com/good-lly/lowstorage)  - 使用 R2 存储桶，Cloudflare Workers 的简易、零依赖、对象伪数据库。

[**PostgREST**](https://postgrest.org/)  - 单独的网络服务器，可以直接将您的PostgreSQL数据库转换为一个RESTful API。数据库中的结构约束和权限确定API的端点和操作。





测试和调试工具
---------------------------

[**Bernard**](https://bernard.app/)  - 一个可以从头到尾测试您的网站，确保每个链接和资源对您的访问者有效和工作的服务。在公测阶段免费，每天最多可以检查5个网站和10k个资源。

[**qryn**](https://github.com/metrico/qryn)  - 一个全能的、轻量级的、多标准的、可直接使用的监控和可观测性框架，用于日志、指标和追踪。

[**Hero**](https://github.com/ulixee/hero)  - 一个为了爬取信息而构建的无头浏览器，由Chrome驱动，并且可以模拟任何现代浏览器而不会被封锁。

[**Domain Digger**](https://digger.tools/)  - 输入URL以获取任何域的详细信息，包括DNS，WHOIS，证书和可用子域名列表。

[**monday.com**](https://www.clkmg.com/wellput-io/70103ls15ap0h/70103-1026/Lazarpress///)  - 你团队成功的秘方就在这里。借助monday.com，从概念到完成，无需费力帮助您轻松管理、自动化和优化项目。是时候改变您的工作生活了。立即开始免费试用。赞助商提供。

[**Tearable Dots**](https://tearabledots.com/)  - 在React 18中，对不同的全局状态解决方案进行了一次状态撕裂尝试。"状态撕裂"类似于"屏幕撕裂"，其中多帧视频被绘制为一幅图像，但应用于状态管理。

[**WebGPU-Memory**](https://github.com/greggman/webgpu-memory)  - 在初始化WebGPU之前，将此脚本添加到您的页面中，以便在特定上下文中测试WebGPU内存使用量。

[**Consola**](https://github.com/unjs/consola)  - 一个优雅的控制台日志记录器，适用于Node.js和浏览器，在最小环境下提供精美的输出，支持标签、模拟、可插拔的报告生成器等等。

[![Consola](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/76fcbbd2-ae47-b980-1e60-51837432203b.png)](https://github.com/unjs/consola)


[**SMTP Debug**](https://smtpdebug.com/)  - 一个独特的3合1 SMTP调试工具，用于查找并解决可能存在的SMTP连接问题，包括基本的SMTP测试、SMTP代理或SMTP黑洞。

[**autoheal**](https://github.com/dion-/autoheal)  - 一个实验性的AutoGPT CLI工具，可以自动修复您的测试，提供由GPT驱动的测试驱动开发。




文章翻译自：[Web Tools Weekly Issue #551 (HTMLElement API, HTML/CSS, JSON/DB, Testing)](https://webtoolsweekly.com/archives/issue-551) 

