### #561 （弹出模态框，React，Git / CLI，未分类）



上周我简要介绍了相对较新的 Popover API 的主要特点，它允许你使用几行代码本地创建“浮动”内容。

在此介绍部分的简短和因为这是对我来说新的事物，我忽略了一件事情，那就是 Popover API 不仅仅用于创建“模态窗口”，尽管这是主要的用例之一。Popover 允许你创建各种覆盖内容，例如：

* 交互式菜单
* 工具提示显示如何使用 UI 元素（例如，表单提示）
*   弹出通知
*   指导内容（例如应用程序的“导览”）

所有这些类似的用例都是可行的，并且鼓励使用。因此，API并不仅限于通常让用户感到烦恼的内容！ :)

还应注意到，使用Popover API创建的弹出内容始终是“非模态”的。因此，在技术上将这些弹出窗口称为“模态窗口”是不准确的。非模态内容意味着在弹出窗口出现时，页面的其余部分仍然可以进行交互。

如果您想使用弹出窗口API创建“模态”内容，您需要使用一些额外的功能。例如，以下CSS将使弹出窗口更像一个正确的模态窗口：


```
::_backdrop_ {  
  background-color: lightblue;  
  opacity: 0.7;  
}
```

CSS中的**::backdrop** 伪元素定义了一个与视口大小相同的框，位于CSS中元素的“顶层”之后。这类似于我们以前用于在这样的窗口后面获得绝对定位元素的方式。这使得创建这样的元素变得容易。当存在弹出窗口时，**::backdrop**元素会在包含在CSS中时自动添加。

**::backdrop**元素不仅在弹出框中存在，而且在使用全屏API的全屏模式下以及用作模态框的**<dialog>**元素中也存在。

为了使用弹出式窗口 API 创建更传统的“模态”窗口的演示，您可以尝试[此 CodePen 演示](https://codepen.io/impressivewebs/pen/ZEZqXyy?editors=0100)。如果您希望模态窗口能够通过按下 ESC 键或点击模态窗口外部来关闭，只需将 popover 属性更改为“auto”，而不是“manual”。


现在轮到本周的工具了！


# React 工具
-----------

[**Firebolt**](https://firebolt.dev/)  - 一个React框架，可以帮助您在Web上快速构建高性能、高效的全栈应用程序，具有10KB运行时、统一的路由、CSS-in-JS等功能。

[**use-travel**](https://github.com/unadlib/use-travel)  - 一个用于状态时间旅行的React Hook，具有撤消、重做、重置和存档功能。

[**@gsap/react**](https://github.com/greensock/react)  - 一个用于流行的GSAP动画库的React钩子，解决在React项目中使用GSAP时的一些React特定的摩擦点。

[**Anytime Mailbox**](https://www.clkmg.com/wellput-io/83150luhtrwi6/83150-1101/Web%20Tools%20Weekly///)  - 创业者，您是否需要一个与家庭分开的商业地址？ Anytime Mailbox 提供了一个无缝解决方案，为您提供私人、专业的地址，并提供邮件转发和扫描等额外的便利服务。     赞助

[**Next.js Image Transformation**](https://github.com/coollabsio/next-image-transformation)  - 使用方式与 Vercel 的 Next.js 图片优化服务相同，可替代 <Image> 组件中用于调整图片大小的功能。

[**next-export-i18n**](https://github.com/martinkr/next-export-i18n)  - 在Next.js应用中，一个简单的、反应式的客户端解决方案，用于项目国际化。

[**Chai Builder**](https://chaibuilder.com/)  - 一个简单的React组件，可以集成到任何基于React的框架中作为低代码的React + Tailwind落地页构建器。

[![Chai Builder](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/2e7817e9-693e-07e0-6d24-9f74bbfb6878.png)](https://chaibuilder.com/)


[**UVCanvas**](https://uvcanvas.com/)  - 一个开源的React组件库，提供了丰富的动态画布，可用作网页背景、壁纸和设计材料。

[**Underhive**](https://github.com/Underhive/visual-react-editor)  - 一个React工具，用于向React项目添加可视化编辑功能，类似于在Figma或其他设计工具中工作。

[**Marquee**](https://github.com/devnomic/marquee)  - 一个用于给网页部分添加可定制的走马灯效果的 React 组件，类似于旋转木马，但是可以连续地滚动动画，可以包含图片或文本。

Git、GitHub和CLI工具
--------------------------


[**Gitu**](https://github.com/altsem/gitu)  - Git 的基于 Rust 的终端用户界面，灵感来自于 Magit，一个流行的文本界面的 Git 用户界面。

[**GitHub Profile Readme Generator**](https://githubprofile.com/)  - 一个简单的用户界面，可以生成一个GitHub的README文件，在其中您可以分享您的个人资料、技能、社交链接等等，以Markdown的格式。

[![GitHub个人资料自述文件生成器](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/08061d6e-e0eb-5e90-1881-b7c69b75ec9a.png)](https://githubprofile.com/)


[**csvlens**](https://github.com/YS-L/csvlens)  - 一个用Rust编写的命令行CSV文件查看器，让您可以使用CSV文件名或直接管道CSV数据。

[**Missed out on Ring and Nest? Don’t Let RYSE Slip Away!**](https://www.clkmg.com/wellput-io/87563lufz1ktl/87563-1154/Lazarpress/Consolidated%20Body%20Copy%20v1//)  - RYSE刚刚在100多家百思买商店推出，您仍然可以以1.50美元/股的价格进行投资。他们已经获得专利，是唯一的大众市场自动调光装置，并且他们与百思买达成的独家协议类似于过去引发了类似Ring和Nest的亿美元收购交易。广告

[**Gitroom**](https://gitroom.com/)  - 一套工具，用于帮助您增加开源仓库的成长，获得更多的可见度、星标、贡献等，作为 Buffer 等服务的替代品。

[**Auto Wiki**](https://wiki.mutable.ai/)  - 查看任何存储库的高质量、自动生成的文档。

[**Repo Lockdown**](https://github.com/marketplace/actions/repo-lockdown)  - 一种立即关闭和锁定存储库上的问题和拉取请求的 GitHub 动作，当您不想归档存储库但希望限制外部请求时非常有用。

[**deploy-pages**](https://github.com/actions/deploy-pages)  - 一个用于在部署时将“artifacts”发布到GitHub Pages的GitHub Action。请参阅描述中的参考链接以了解“artifacts”的讨论内容。

[**Difftastic**](https://difftastic.wilfred.me.uk/)  - 一个命令行界面的 diff 工具，根据文件的语法进行比较，而不是逐行比较，以生成更容易阅读的准确差异。

[**hypershell**](https://github.com/holepunchto/hypershell)  - 一个npm软件包，用于在任何地方生成全面点对点、经过身份验证和端到端加密的shell。





未分类的项目
--------------------
                    

[**Classnames**](https://classnames.paulrobertlloyd.com/)  - 一个包含按主题分组的单词列表的资源，可以帮助您在编程中为命名事物（例如HTML类、CSS属性或JavaScript函数）寻找灵感。

[**HeyForm**](https://github.com/heyform/heyform)  - 一个开源的表单生成器，允许任何人创建富有互动性的对话式表单，用于调查、问卷、测验和投票，无需编程技能。

[**Creo**](https://www.trycreo.com/)  - 一个基于React的简单入门框架，可以快速开发内部工具。

[**Counterscale**](https://counterscale.dev/)  - 自由且开源的隐私焦点网络分析工具，可部署为单个Cloudflare Worker。

[![计数器规模](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/c3c3c13d-6c00-bb8e-3c6e-891f21dddab7.png)](https://counterscale.dev/)


[**Stract**](https://stract.com/)  - 一个开源的搜索引擎，专为黑客和工匠们设计，用户能够直接查看搜索过程，并自定义搜索结果的几乎所有部分。

[**Missed out on Ring and Nest? Don’t Let RYSE Slip Away!**](https://www.clkmg.com/wellput-io/87563lufz1ktl/87563-1154/Lazarpress/Consolidated%20Body%20Copy%20v1//)  - RYSE刚刚在100多家百思买商店推出，并且您仍然可以以每股1.50美元的价格进行投资。他们拥有专利授权的唯一大众市场遮阳自动化设备，他们与百思买的独家交易类似于过去像Ring和Nest等公司的数十亿美元收购交易。 SPONSORED

[**RunJS**](https://runjs.app/play)  - 一个简单的JavaScript游乐场，当您输入时立即在右侧显示结果，可能对演示和实时演讲有用。

[**Nitro**](https://github.com/unjs/nitro)  - 一个下一代的服务器工具箱，可以创建具备一切所需的Web服务器，并将它们部署在您喜欢的任何地方。

[**Automatisch**](https://automatisch.io/)  - 一个开源的Zapier替代品，帮助您在不需要编码的情况下自动化业务流程。

[**QuickWP**](https://quickwp.ai/)  - 一个在线工具，允许您根据您的输入，创建一个基于人工智能生成的WordPress主题，包括样式、内容和图像。


文章翻译自：[Web Tools Weekly Issue #561 (Popover Modals, React, Git/CLI, Uncats)](https://webtoolsweekly.com/archives/issue-561) 