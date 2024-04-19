

### #560  (弹出窗口 API，框架，人工智能工具，JS 实用工具)



到目前为止，您可能听说过 Popover API，它允许您使用一些 HTML 属性创建模态窗口，并可选择使用一些 JavaScript 事件和方法来控制功能。

最简单的Popover API示例可以仅使用HTML来实现，类似以下内容：

```
<button popovertarget\="mypopover"\>Toggle Popover</button\>  
<div id\="mypopover" popover\>A Popover Example</div\>
```

不需要JavaScript，弹出框工作正常。此代码的唯一要求是：

* 在元素上添加 **popovertarget** 属性，作为按钮使用（在此示例中为实际的按钮元素）。
* 在弹出窗口元素本身上使用`id`属性，其值与`popovertarget`属性的值相等。
* 弹出窗元素上的**popover**属性。

这基本上就是最简单的弹出框。当然，没有任何CSS的情况下，这个弹出框元素只是一个带有一些文本的普通元素。默认情况下，Chrome会给元素添加一个简单的深色2px边框，但可以根据需要进行更改。

使用**：popover-open**伪类是样式化弹出框元素的最简单方式，就像这样：


```
:_popover-open_ {  
  border-radius: 20px;  
  transition: linear 1s;  
  padding: 50px;  
  border: none;  
  background: #ccc;  
}
```

这将为所有弹出窗口的打开状态设置样式。您可以在[这个 CodePen 演示](https://codepen.io/impressivewebs/pen/MWRXwJq?editors=1000)中看到这个简单的弹出窗口示例。

有其他可用选项来自定义弹出窗口，包括以下内容：

*   弹出框元素上的 **popover** 属性默认值为 "auto"，但您也可以选择值为 "manual"。值 "auto" 表示它可以通过点击弹出框外部或按下键盘上的 ESC 键来关闭。值为 "manual" 需要使用切换按钮或指定为关闭按钮的另一个按钮来关闭。
* 如前所述，您可以使用多个按钮来打开和关闭弹出窗口。您可以通过为每个按钮添加名为 **popovertargetaction** 的属性，并指定值为 "show" 或 "hide" 来定义这些按钮。如果您不包含这些属性，它们将覆盖默认值 "toggle"。

这里是[另一个 CodePen](https://codepen.io/impressivewebs/pen/ZEZRGem?editors=1000)，它使用不同的按钮来打开和关闭，并且还包括 "manual" 的值，这样弹出框就无法在不使用按钮的情况下关闭。

现在开始介绍本周的工具！


Web 框架
----------------

[**MBRV**](https://github.com/mayfer/mbrv)  - 一个无麻烦的全栈 TypeScript、Bun 和 React 模板，支持热加载和SSR。

[**next-starter**](https://github.com/Skolaczk/next-starter)  - 一种超级有见解的Next.js起始模板，包括特色如TypeScript，Tailwind，next-auth，ESlint，shadcn-ui，Prisma，Jest，React Testing Library等等。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///)  - 创业者们，您是否需要一个与家庭分开的商务地址？Anytime Mailbox提供了一个无缝的解决方案，可以提供私人专业地址，并提供邮件转发和扫描等额外的便利。     赞助

[**Svelte UX**](https://github.com/techniq/svelte-ux)  - 使用Svelte构建高度互动的应用程序的200多个组件、操作、存储和实用程序套件。

[**Bulma**](https://bulma.io/)  - 一个受欢迎的开源CSS框架，提供了一些可直接使用的前端组件，你可以轻松地组合起来构建响应式的网络界面。

[**Tiny Stack**](https://github.com/Sh4yy/tiny-stack)  - 使用Astro、SQLite和Litestream（流行的SQLite工具）构建Web应用程序的简单而轻巧的堆栈。

[**Wedges**](https://www.lemonsqueezy.com/wedges)  - 一个适用于React的简洁UI组件集，使用Wedges设计系统、Radix UI和Tailwind构建。

[![楔形](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/7eb25104-79dc-cf34-f5ed-aeab7f33e0ee.png)](https://www.lemonsqueezy.com/wedges)


[**WXT**](https://wxt.dev/)  - 一个基于TypeScript的框架，用于构建基于Chromium浏览器的Web扩展和插件，具有构建清单v2/v3、快速开发模式、类似Nuxt的自动导入等特性。

[**Shadow Panda**](https://shadow-panda.dev/)  - 使用Panda CSS、Radix和shadcn/ui构建的40多个可访问且可自定义的组件库。

[**drab**](https://drab.robino.dev/)  - 一个无头组件库，包含14+个组件，所有组件都基于HTML自定义元素，每个组件在特定的Web API周围提供一个有用的包装器。

ChatGPT和AI工具
--------------------



[**OpenModerator**](https://www.openmoderator.com/)  - 一个开源的、现代的 AI 内容审核工具，提供图像和文本审核，帮助社区避免或移除可疑的用户生成内容。

[**Lummi**](https://www.lummi.ai/)  - AI生成的免费版权图片。其中大多数看起来相当逼真，不像一些基于AI的图片那样像卡通。

[**Codel**](https://github.com/semanser/codel)  - 一个安全的、完全自主的人工智能代理，可以使用终端、浏览器和编辑器执行复杂的任务和项目。

                    

[**Simplicity Builder**](https://www.simplicitywebtools.com/)  - 一个网络组件，让您的项目获得简化的拖放构建功能。将任何HTML转换为拖放构建块。适用于原始JavaScript、Angular、React和Vue。用于页面构建器和无代码工具。赞助

[**AI Gateway**](https://github.com/missingstudio/gateway)  - 一个用于构建可投入生产的人工智能应用程序的核心基础架构堆栈，具有AI路由器、负载平衡、与通用API的无缝集成等功能。

[**openai-cloudflare**](https://github.com/janlay/openai-cloudflare)  - 使用Cloudflare worker运行的OpenAI API代理，支持OpenAI提供的所有API，以及其他多种功能。

[**Cursor**](https://cursor.sh/)  - 一个以人工智能为先的代码编辑器，具有命令面板、本地Copilot++、人工智能聊天、代码库答案等功能。

[![鼠标](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/3a2096dd-54dc-5be8-fdad-2b53c9de8c34.png)](https://cursor.sh/)


[**CodeMate**](https://codemate.bot/)  - 一个为开发者而设计的基于AI技术的搜索引擎，可让您选择编程语言，并选择“智能模式”或“快速模式”显示结果。

[**Braintrust AI Proxy**](https://github.com/braintrustdata/braintrust-proxy)  - 通过单个 API 统一访问世界领先的 AI 模型，包括来自 OpenAI、Anthropic、LLaMa 2、Mistral 等模型。

[**Cosine**](https://cosine.sh/)  - 一个AI代码伴侣，可以帮助进行代码审查、生成脚手架、无缝更新README、全面分析影响、快速检测错误等。




JavaScript实用工具
--------------------


[**Minditor**](https://github.com/minditor/minditor)  - 一款具有图像上传、Markdown 命令、行内插入、简化插件开发等功能的块级富文本编辑器，以及诸多其他特性。

[**gaxios**](https://github.com/googleapis/gaxios)  - 一个使用node-fetch在顶部提供类似Axios接口的HTTP请求客户端。

[**Bentocache**](https://github.com/Julien-R44/bentocache)  - 一个强大的Node.js应用程序多层缓存解决方案，支持Redis，Upstash，Postgres，SQLite等驱动程序。

[**Simplicity Builder**](https://www.simplicitywebtools.com/)  - 一个网页组件，允许您为项目添加简化的拖放建设能力。将任何HTML转化为拖放建设块。适用于原生JavaScript、Angular、React和Vue。适用于页面构建器和无代码工具。赞助提供支持。

[**mdbox**](https://github.com/unjs/mdbox)  - 一个简单的Markdown工具集，可以以编程方式处理Markdown语法，而无需处理复杂且严格的AST对象。

[**emojisplosion**](https://www.emojisplosion.dev/)  - 一个在网页上放射基于表情符号的“烟花”的实用工具，附带Astro和TypeDoc插件，并且有很多自定义选项，包括时间、表情符号的种类、位置、尺寸等。

[![Emojisplosion](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/4dd0726f-77f6-1299-f6b9-c199a26abd1c.png)](https://www.emojisplosion.dev/)


[**Journey.js**](https://github.com/williamtroup/Journey.js)  - 一个轻量级、易于使用的JavaScript库，用于为网站和应用程序创建交互式、可自定义、易于访问的导览。

[**gsplat.js**](https://github.com/huggingface/gsplat.js)  - 一个易于使用的、通用的、开源的3D高斯滴墨库，提供类似Three.js但用于高斯滴墨的功能。

[**export-to-csv**](https://github.com/alexcaza/export-to-csv)  - 一个小巧、简单且功能单一的CSV导出库，没有任何依赖关系，灵感来源于功能，类型相当完备。

[**Siero**](https://github.com/fabiospampinato/siero)  - 一个可以处理函数、Promises和符号，并且可以与相应的worker实用程序一起使用的序列化库。
