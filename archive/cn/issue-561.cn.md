#561  (弹出窗口模态框、React、Git/CLI、待分类)

上周我简要介绍了相对较新的Popover API的主要特点，该API允许你只需几行代码就可以原生地创建“弹出内容”。

有一件事我只是粗略提到了一下，一部分原因是因为这个介绍概括，另一部分原因是因为这对我来说是新鲜事物：Popover API不仅仅用于创建“模态窗口”，虽然这是主要的用途之一。Popover还可以创建各种覆盖内容，例如：

* 互动菜单
* 提示工具，显示如何使用界面元素（例如表单提示）
* 提示通知
* 教学内容（例如应用程序的“导览”）

所有这些以及类似用例都是可能的，也是鼓励的。所以这个API不仅仅用于一般会让用户烦恼的内容！ :)

还要注意的是，使用Popover API创建的弹出内容始终是“非模态”的。所以严格地说，将这些弹出窗口称为“模态窗口”并不准确。非模态内容意味着在弹出窗口出现时，页面的其余部分仍然可以进行交互。

如果你想使用Popover API创建“模态”的内容，你需要使用一些额外的功能。例如，下面的CSS可以使弹出窗口看起来更像一个真正的模态窗口：

```css
::_backdrop_ {  
  background-color: lightblue;  
  opacity: 0.7;  
}
```

CSS中的**::backdrop**伪元素定义了一个与CSS中一个元素的“顶层”背后的视口大小的框。类似于我们以前如何在这样的窗口后面使用hack技巧创建绝对定位的元素。这使得创建这样一个元素变得容易。当弹出窗口存在时，**::backdrop**元素会在被包含在你的CSS中时自动添加进来。
**::背景** 元素不仅在弹出窗口中出现，还在使用全屏 API 的全屏模式元素以及用作模态框的 **\<dialog>** 元素中出现。

如果您想要使用 Popover API 创建更传统的“模态”窗口的演示，请尝试 [此 CodePen 演示](https://codepen.io/impressivewebs/pen/ZEZqXyy?editors=0100)。如果您希望模态框能够使用 ESC 键或单击模态框外部关闭，请将 popover 属性从 "manual" 更改为 "auto"。

现在开始介绍本周的工具！

React 工具
---------

[**Firebolt**](https://firebolt.dev/) — 一个 React 框架，可帮助您快速构建高性能、高效的全栈 Web 应用程序，具有 10 KB 运行时、统一的路由、CSS-in-JS 等功能。

[**use-travel**](https://github.com/unadlib/use-travel) — 用于状态时间旅行的 React Hook，具有撤销、重做、重置和存档功能。

[**@gsap/react**](https://github.com/greensock/react) — 用于流行的 GSAP 动画库的 React Hook，用于解决在 React 项目中使用 GSAP 时的一些 React 特定的摩擦点。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///) — 创业者们，您是否需要一个独立于家庭的商务地址？Anytime Mailbox 提供无缝解决方案，为您提供一个私密、专业的地址，并提供邮件转发和扫描等额外便利功能。广告赞助。

[**Next.js 图像转换**](https://github.com/coollabsio/next-image-transformation) — 用于 Vercel 的 Next.js 图像优化服务的替代方案，用于在 <Image> 组件中调整 Next.js 中的图像大小。

[**next-export-i18n**](https://github.com/martinkr/next-export-i18n) — 用于 Next.js 应用程序的项目国际化的简单、响应式客户端解决方案。

[**Chai Builder**](https://chaibuilder.com/) — 一个简单的 React 组件，可以集成到任何基于 React 的框架中作为低代码 React + Tailwind 登录页面构建器。

[![Chai Builder](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/2e7817e9-693e-07e0-6d24-9f74bbfb6878.png)](https://chaibuilder.com/)

[**UVCanvas**](https://uvcanvas.com/) — 一个开源的 React 组件库，提供一组丰富的动态画布，可用作 Web 背景、壁纸和设计素材。
[**Underhive**](https://github.com/Underhive/visual-react-editor) — 一个用于在React项目中添加可视化编辑功能的React工具，类似于在Figma或其他设计工具中进行工作。

[**Marquee**](https://github.com/devnomic/marquee) — 一个用于向网页部分添加可自定义的跑马灯效果的React组件，类似于旋转木马，但是是连续滚动的动画，可以包含图片或文字。

Git、GitHub和CLI工具
-----------------------------

[**Gitu**](https://github.com/altsem/gitu) — 一种基于Rust的终端用户界面，用于Git，灵感来自于Magit，这是一个流行的基于文本的Git用户界面。

[**GitHub个人资料README生成器**](https://githubprofile.com/) — 一个简单的用户界面，用于生成GitHub的README，您可以在其中分享个人资料、技能、社交链接等，以Markdown格式。

[![GitHub个人资料README生成器](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/08061d6e-e0eb-5e90-1881-b7c69b75ec9a.png)](https://githubprofile.com/)


[**csvlens**](https://github.com/YS-L/csvlens) — 一个命令行CSV文件查看器，用Rust编写，可以使用CSV文件名或直接管道CSV数据。

[**错过了Ring和Nest？不要错过RYSE！**](https://www.clkmg.com/wellput-io/87563lufz1ktl/87563-1154/Lazarpress/Consolidated%20Body%20Copy%20v1//) — RYSE刚在100多家百思买商店推出，您仍然可以以1.50美元/股投资。他们已经申请了唯一的大众市场遮阳自动化设备专利，他们与百思买的独家交易类似于过去的Ring和Nest等十亿美元收购。赞助。

[**Gitroom**](https://gitroom.com/) — 一套工具，帮助您扩大开源仓库，获得更多的可见性、星星、贡献等，作为类似于Buffer等服务的替代品。

[**自动维基**](https://wiki.mutable.ai/) — 查看任何仓库的高质量自动生成文档。

[**Repo Lockdown**](https://github.com/marketplace/actions/repo-lockdown) — 一个GitHub操作，立即关闭和锁定存储库的问题和拉取请求，在您不想归档存储库但想限制外部请求时很有用。

[**deploy-pages**](https://github.com/actions/deploy-pages) — 一个GitHub操作，用于将“构件”发布到GitHub Pages以进行部署。有关构件的讨论，请参阅描述中的参考链接。

[**Difftastic**](https://difftastic.wilfred.me.uk/) — 一种基于语法而不是逐行比较文件的CLI差异工具，生成易于阅读的准确差异。

[**hypershell**](https://github.com/holepunchto/hypershell) — 一个npm包，可以在任何地方生成完全点对点、经过身份验证和端到端加密的shell。
## 不分类的项目
---------------------

[**Classnames**](https://classnames.paulrobertlloyd.com/) — 一个资源，包含按主题分组的单词列表，以帮助您在编程中为HTML类、CSS属性或JavaScript函数等命名提供灵感。

[**HeyForm**](https://github.com/heyform/heyform) — 一个开源的表单构建工具，允许任何人创建引人注目的对话式表单，用于调查、问卷调查、测验和投票，无需编程技能。

[**Creo**](https://www.trycreo.com/) — 一个简单的基于React的初始框架，可加快内部工具的开发。

[**Counterscale**](https://counterscale.dev/) — 免费且开源的、注重隐私的网页分析工具，可部署为单个Cloudflare Worker。

[![Counterscale](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/c3c3c13d-6c00-bb8e-3c6e-891f21dddab7.png)](https://counterscale.dev/)

[**Stract**](https://stract.com/) — 一个面向黑客和修补师的开源搜索引擎，用户可以查看搜索结果的具体内容，并自定义几乎一切。

[**错过了Ring和Nest？别让RYSE错过你！**](https://www.clkmg.com/wellput-io/87563lufz1ktl/87563-1154/Lazarpress/Consolidated%20Body%20Copy%20v1//) — RYSE刚在100多家百思买商店推出，你仍然可以以1.50美元/股的价格投资。他们拥有唯一的大众市场遮阳自动化设备专利，他们与百思买的独家交易类似于过去带来数十亿美元的Ring和Nest收购交易。赞助链接

[**RunJS**](https://runjs.app/play) — 一个简单的JavaScript沙盒，当您键入时，右侧会立即显示结果，可能对演示和直播展示很有用。

[**Nitro**](https://github.com/unjs/nitro) — 一个下一代的服务器工具包，用于创建包含所有需要的Web服务器，并在您喜欢的任何地方部署它们。

[**Automatisch**](https://automatisch.io/) — 一个开源的Zapier替代工具，可帮助您在不编写代码的情况下自动化业务流程。

[**QuickWP**](https://quickwp.ai/) — 一个在线工具，可以根据您的输入创建基于人工智能生成的WordPress主题，包括样式、内容和图片。


文章翻译自：[Web Tools Weekly Issue #561 (Popover Modals, React, Git/CLI, Uncats)](https://webtoolsweekly.com/archives/issue-561) 

