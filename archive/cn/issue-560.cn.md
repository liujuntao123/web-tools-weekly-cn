#560（Popover API，框架，AI工具，JS工具）

你可能已经听说过Popover API，它允许你使用一些HTML属性创建模态窗口，你还可以选择使用一些事件和JavaScript方法来控制功能。

最简单的Popover API示例可以只使用HTML来实现，如下所示:

```html
<button popovertarget="mypopover">Toggle Popover</button>  
<div id="mypopover" popover>A Popover Example</div>
```
不需要JavaScript，Popover可以正常工作。代码的唯一要求是：

* 在作为按钮的元素上添加一个**popovertarget**属性（在本例中为实际的 button 元素）。
* 弹出窗口元素本身上添加一个等于**popovertarget**属性值的id属性。
* 在弹出窗口元素上添加一个**popover**属性。
这基本上是一个最简单状态的弹出窗。当然，没有任何CSS样式的情况下，弹出窗元素只是一个带有一些文本的普通元素。默认情况下，Chrome会为元素添加一个简单的黑色2像素边框，但可以根据需要进行更改。

样式化弹出窗元素的最简单方法是使用**:popover-open**伪类，就像这样：

``` 
:_popover-open_ {  
  border-radius: 20px;  
  transition: linear 1s;  
  padding: 50px;  
  border: none;  
  background: #ccc;  
}
```

这会给所有弹出窗在打开状态时添加样式。您可以在[这个CodePen演示]中查看这个简单的弹出窗示例(https://codepen.io/impressivewebs/pen/MWRXwJq?editors=1000)。

其他可用于自定义弹出窗的选项包括以下内容：
*   弹出框元素上的 **popover** 属性具有默认值 "auto"，但你也可以选择值 "manual"。值 "auto" 意味着可以通过点击弹出框外部或按下键盘上的 ESC 键来关闭。值 "manual" 要求使用切换按钮或指定为关闭按钮的另一个按钮来关闭。* 如前面所述，您可以使用多个按钮来打开和关闭弹出框。您可以通过为每个按钮添加名为 **popovertargetaction** 的属性，并指定值 "show" 或 "hide" 来定义这些按钮。如果不包含它们，这些值将覆盖默认值 "toggle"。

这里有[另一个 CodePen](https://codepen.io/impressivewebs/pen/ZEZRGem?editors=1000)，使用不同的按钮进行打开和关闭，并且还包括 "manual" 值，因此只能使用这些按钮关闭弹出框。

现在开始介绍本周的工具！

Web 框架
-------

[**MBRV**](https://github.com/mayfer/mbrv) — 一个方便快捷的全栈 TypeScript、Bun、React 脚手架，支持热重载和SSR。

[**next-starter**](https://github.com/Skolaczk/next-starter) — 一个超级自命不凡的 Next.js 起始模板，包括 TypeScript、Tailwind、next-auth、ESlint、shadcn-ui、Prisma、Jest、React Testing Library 等功能。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — 创业者们，您是否需要一个与家庭分开的商务地址？Anytime Mailbox 提供了一个完美的解决方案，提供私人专业地址、邮件转发和扫描等增值服务，为您带来极致便利。    赞助商

[**Svelte UX**](https://github.com/techniq/svelte-ux) — 一个包含 200 多个组件、动作、存储和实用工具的套件，用于使用 Svelte 构建高度交互的应用程序。

[**Bulma**](https://bulma.io/) — 一个流行的开源 CSS 框架，提供了一组可直接组合以构建响应式 Web 界面的前端组件。
[**Tiny Stack**](https://github.com/Sh4yy/tiny-stack) — 一个使用Astro、SQLite和Litestream（流行的SQLite工具）构建Web应用程序的简单而精简的堆栈。

[**Wedges**](https://www.lemonsqueezy.com/wedges) — 一组适用于React的适度UI组件，使用Wedges设计系统、Radix UI和Tailwind构建。

[![Wedges](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/7eb25104-79dc-cf34-f5ed-aeab7f33e0ee.png)](https://www.lemonsqueezy.com/wedges)

[**WXT**](https://wxt.dev/) — 基于TypeScript的用于构建基于Chromium浏览器的Web扩展和插件的框架，具有构建清单v2/v3、快速开发模式、类似Nuxt的自动导入等功能。

[**Shadow Panda**](https://shadow-panda.dev/) — 一个可访问且可自定义的库，包含40多个基于Panda CSS、Radix和shadcn/ui构建的组件。

[**drab**](https://drab.robino.dev/) — 一个无头组件库，包含14多个组件，每个组件都基于HTML自定义元素，在特定的Web API周围提供有用的包装。

ChatGPT和AI工具
--------------------

[**OpenModerator**](https://www.openmoderator.com/) — 一个开源、现代化的AI内容审核工具，提供图像和文本审核，以帮助社区避免或删除可疑的用户生成内容。

[**Lummi**](https://www.lummi.ai/) — 由AI生成的免费版权库存照片。其中大多数看起来非常真实，不像某些基于AI的照片那样“卡通化”。
[Codel](https://github.com/semanser/codel) — 一个安全的、完全自主的人工智能代理，可以使用终端、浏览器和编辑器执行复杂的任务和项目。

[Simplicity Builder](https://www.simplicitywebtools.com/) — 一个Web组件，可以让您为项目添加简化的拖放构建功能。将任何HTML转换为拖放构建块。适用于原生JavaScript、Angular、React和Vue。适用于页面构建器和无代码工具。赞助内容。

[AI Gateway](https://github.com/missingstudio/gateway) — 用于构建用于生产的AI应用的核心基础设施堆栈，包括AI路由器、负载均衡、与通用API的无缝集成等功能。

[openai-cloudflare](https://github.com/janlay/openai-cloudflare) — 使用Cloudflare worker运行的OpenAI API代理，支持OpenAI提供的所有API以及其他一些功能。

[Cursor](https://cursor.sh/) — 一个以人工智能为主的代码编辑器，具有命令盘、原生Copilot++、AI聊天、代码库答案等功能。

[CodeMate](https://codemate.bot/) — 一个面向开发人员的AI驱动的搜索引擎，可以选择编程语言以及是否在“智能模式”或“快速模式”下显示结果。

[Braintrust AI Proxy](https://github.com/braintrustdata/braintrust-proxy) — 通过单个API以统一方式访问全球领先的AI模型，包括来自OpenAI、Anthropic、LLaMa 2、Mistral等的模型。

[Cosine](https://cosine.sh/) — 一个AI代码助手，可用于代码审核、脚手架、无缝README更新、全面影响评估、快速错误检测等。
# JavaScript 实用工具

[**Minditor**](https://github.com/minditor/minditor) — 一个块级富文本编辑器，具有图片上传、Markdown 命令、内联插入、简化插件开发等功能。

[**gaxios**](https://github.com/googleapis/gaxios) — 提供类似于 Axios 接口的 HTTP 请求客户端，基于 node-fetch。

[**Bentocache**](https://github.com/Julien-R44/bentocache) — 用于 Node.js 应用的强大多级缓存解决方案，支持 Redis、Upstash、Postgres、SQLite 等驱动。

[**Simplicity Builder**](https://www.simplicitywebtools.com/) — 一个 Web 组件，可为您的项目添加简化的拖放构建能力，可将任何 HTML 转换为拖放构建块。适用于原生 JavaScript、Angular、React 和 Vue。适用于页面构建器、低代码工具。    SPONSORED 

[**mdbox**](https://github.com/unjs/mdbox) — 一组简单的 Markdown 实用工具，可对 Markdown 语法进行编程处理，而无需处理复杂和严格的 AST 对象。

[**emojisplosion**](https://www.emojisplosion.dev/) — 一种在网页上发射基于表情符号的“烟花”的实用工具，支持 Astro 和 TypeDoc 的插件，以及包括时间、表情符号类型、位置、大小等多种自定义方式。

[![Emojisplosion](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/4dd0726f-77f6-1299-f6b9-c199a26abd1c.png)](https://www.emojisplosion.dev/)
[**Journey.js**](https://github.com/williamtroup/Journey.js) — 一个轻量级、易于使用的JavaScript库，用于创建交互式、可定制、可访问的网站和应用程序引导式旅程。

[**gsplat.js**](https://github.com/huggingface/gsplat.js) — 一个易于使用、通用、开源的3D高斯Splatting库，提供类似Three.js的功能，但用于高斯Splatting。

[**export-to-csv**](https://github.com/alexcaza/export-to-csv) — 一个小巧、简单、单一用途的CSV导出库，零依赖，功能灵感来自于功能性接近且类型良好定义的库。

[**Siero**](https://github.com/fabiospampinato/siero) — 一个序列化库，可处理函数、Promise和符号，并可与一个辅助的worker工具一起使用。


文章翻译自：[Web Tools Weekly Issue #560 (Popover API, Frameworks, AI Tools, JS Utils)](https://webtoolsweekly.com/archives/issue-560) 

