

＃555（innerHTML安全，CSS/HTML，Git/CLI，AI工具）



 **Element.innerHTML** 属性和时间一样古老，你们大部分有一段时间在编写JavaScript代码的人可能使用过它。现如今，由于安全问题，这个属性不再被推荐使用。例如，[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)对使用 **innerHTML** 替换内容给出了以下说明：

_**如果要插入的字符串可能包含潜在的恶意内容，则存在安全风险。在插入用户提供的数据时，应始终考虑使用Element.setHTML()来对内容进行清理以后再插入。**_

这些建议存在问题的原因是大多数现代浏览器目前不支持 **setHTML()** 方法。根据浏览器兼容性表的数据，此方法在以前版本的Chromium浏览器和其他浏览器中有支持，但现在已被取消支持。

我猜这可能是由于某种安全关注导致的让方法被滥用的问题，所以在问题解决之前支持已被放弃。所以明智的做法是暂时把 **setHTML()** 放在我们的脑海中以备将来使用，但目前必须依赖其他解决方案（如安全地使用  **innerHTML** ）。

我在 **innerHTML** 的MDN文章上找到的另一个有用的小技巧是一个简单的脚本，可以方便地为当前网页创建一个“查看源代码”的按钮。代码大致如下：

```
let btn \= document.querySelector('button'),  
    de \= document.documentElement;  

btn.addEventListener('click', function () {  
  de.innerHTML \= \`  
    <pre>${de.innerHTML.replace( /</g, "&lt;", )}  
    </pre>  
  \`;  
}, false);
```

我将 **document.document­Element** 对象连接起来以缩短代码，但这就是这个小脚本的要点。[在 CodePen 上尝试它](https://codepen.io/impressivewebs/pen/QWPjZaM?editors=0010)。

主要需要注意的是，我在使用 **innerHTML** 替换当前文档的内容与一对 **\<pre>\</pre>** 标签。在这些标签内，脚本使用 **replace()** 方法将每个HTML标签的第一个尖括号替换为其编码等价物。这足以将HTML基本编码，因为结束尖括号也会被假定为已编码。

示例的唯一问题是没有办法在不刷新页面的情况下返回到原始的HTML。我可以构建一个机制来重新生成原始的DOM元素，但这个简单的示例应该足够。

我还注意到，在CSS面板中为 **\<pre>** 元素添加任何CSS都不起作用，所以如果您想（例如）换行，您必须在JavaScript中直接向 **\<pre>** 元素添加一些内联样式，否则找到一种成功将样式注入到新增元素的方法。

现在开始介绍本周的工具！


CSS & HTML工具
----------------



[**GoHT**](https://github.com/stackus/goht)  - 一个针对Go的Haml模板引擎和文件生成工具，支持完整的Haml和模板被编译为类型安全的Go。

[**Curlwind**](https://curlwind.com/)  - 使用CDN与查询参数一起创建自己的按需Tailwind捆绑包，无需构建流程，可以指定使用的类、变体、排除预设工作、是否缩小等功能。

[**htmz**](https://leanrada.com/htmz/)  - 一个极简的HTML微框架（类似于htmx，但更简化）用于创建具有纯HTML熟悉简单性的交互式和模块化Web用户界面。

[**Your Next Big AI Product Idea**](https://ae.studio/lh/ai-ideas?utm_campaign=lets-talk&utm_source=web-tools-weekly&utm_medium=newsletter-ad&utm_content=ai-ideas)  - 我们教授AI如何酿造啤酒和产生创意。我们的AI创意生成器将您的业务问题转化为一份报告，提供可以帮助您解决问题的基于AI的解决方案。试试看吧。     赞助广告

[**Skeleton Generator**](https://skeletongenerator.com/)  - 将您的HTML代码粘贴到此工具中，该工具将为您的用户界面生成动画的“加载骨架”等效的Tailwind代码。

[**Mojo CSS**](https://mojocss.com/)  - 一个基于HTML实时生成CSS的原子CSS框架，几乎没有运行时间。

[![Mojo CSS](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/51cc6262-8010-e2b7-0a77-6b3bcc1fd02e.png)](https://mojocss.com/)


[**concrete.css**](https://concrete.style/)  - 一个简单的、无类别的CSS样式表，作为Normalize.css的附属品，适用于简单网站或落地页的起点，通过媒体查询实现自动暗模式。

[**ui.jln.dev**](https://ui.jln.dev/)  - 一个生成器和目录，让您可以探索10,000多个shadcn/ui主题。您可以随机设置UI颜色，保存配色方案，切换暗模式，并将令牌复制为CSS变量。

[**click-spark**](https://github.com/hexagoncircle/click-spark)  - 一个网络组件，在用户点击页面的特定部分（或整个页面，如果您喜欢）时，添加动画的火花（即像小爆炸）。

[**buttons.ibelick**](https://buttons.ibelick.com/)  - 一个使用Tailwind构建的按钮点击和悬停效果的图库，可以轻松复制/粘贴到现有的Tailwind项目中。

[**Color Lisa**](https://colorlisa.com/)  - 一个根据世界伟大艺术家的杰作精心策划的颜色调色板列表，以十六进制格式呈现调色板。



Git，GitHub 和 CLI 工具
------------------------

[**Distrobox**](https://distrobox.it/)  - 一个允许您在终端内使用任何Linux发行版的shell应用程序。同时实现与软件的向后和向前兼容，自由选择使用任何发行版。

[**actions-batch**](https://github.com/alexellis/actions-batch)  - 在GitHub Actions上构建一个基于时间共享的超级计算机，使用Go语言构建，让您能够在独立、不可变的环境中运行shell脚本，并收集日志或结果。

[**tea.xyz**](https://tea.xyz/)  - 一个由声誉和激励保护的分散技术框架，使开源开发人员和维护人员可以获得对其软件贡献的奖励。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱充斥着分散注意力的内容，太多的订阅会导致收件箱混乱。将你的新闻简报从收件箱中解放出来。将你的新闻简报移动到一个专为阅读而设计的空间，并在几秒钟内清理你的收件箱。赞助内容

[**Sudo for Windows**](https://github.com/microsoft/sudo)  - 来自微软的Windows相当于\`sudo\`命令，允许用户在非提权的终端窗口中直接运行提权命令。

[**Files Sync Action**](https://github.com/wadackel/files-sync-action)  - 一个基于YAML配置文件的GitHub Action，可以在多个仓库之间同步文件。

[**npminsights**](https://npminsights.vercel.app/)  - 输入软件包名称，这个交互式工具将以引人注目的图形格式显示每天、每周、每月和每年的下载历史记录。

[![npminsights](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/426d25f0-83c6-e4bc-d5f2-556b05aca244.png)](https://npminsights.vercel.app/)


[**meow**](https://github.com/sindresorhus/meow)  - 一个无依赖的CLI应用程序助手，具有参数解析、将标志转换为驼峰式、标志否定等功能。

[**Gmeek**](https://github.com/Meekdai/Gmeek)  - 基于 GitHub Pages、GitHub issues 和 GitHub Actions 的博客生成器，可以在几分钟内部署。

[**Diversion**](https://www.diversion.dev/)  - 一种由云端驱动的现代代码和资产管理的版本控制工具。包括一个体面的免费计划（10个仓库，10个用户，100GB）。




ChatGPT和AI工具
--------------------

                    

[**Dewhale**](https://dewhale.pages.dev/)  - 一个由GitHub驱动的AI，用于无障碍开发，是Vercel的v0的开源替代品。

[**OpenAI DevTools**](https://github.com/AndrewWalsh/openapi-devtools)  - 一个浏览器扩展（适用于Chrome和Firefox），可以实时为任何应用程序或网站自动生成OpenAPI规范。

[**McAnswers**](https://mcanswers.ai/)  - 一个提示库，让您选择编程语言，然后从预定义的错误和警告中选择，或者在提示中输入自己的文本来创建一个新的基于AI的答案线程。

[**Privy**](https://github.com/srikanth235/privy)  - 一个在本地运行的GitHub copilot的开源替代品，具有实时代码补全、关于你的代码的聊天功能等等。

[**SecureAI Tools**](https://github.com/SecureAI-Tools/SecureAI-Tools)  - 私密且安全的AI工具，包括AI聊天、与文档聊天、支持100多种AI模型、内置身份验证、用户管理等功能。

[**Meco: The #1 Newsletter Aggregator**](https://www.meco.app/get/3nux)  - 收件箱充斥着分散注意力的东西，太多订阅会导致收件箱混乱。将你的通讯订阅从收件箱释放出来。将你的通讯订阅移至一个专为阅读而建的空间，并在几秒钟内将收件箱整理得井井有条。赞助内容

[**Zerve**](https://www.zerve.ai/)  - 一个为数据科学和机器学习团队提供统一空间来探索、协作、构建和部署数据科学和人工智能项目的平台。包括针对个人的免费社区版本。

[**Visual Backend**](https://visual-backend.com/)  - 生成后端基础框架的代码和脚手架，如端点处理程序、授权和CI/CD，以帮助您快速将机器学习服务连接到REST API。

[![可视化后端](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/5d350960-f798-7055-1ece-8451f573f86a.png)](https://visual-backend.com/)


[**Jan**](https://jan.ai/)  - 一个原生的、开源的ChatGPT替代品，在您的计算机上完全离线运行，适用于Windows、Mac和Linux。

[**nextjs-chatgpt-plugin-starter**](https://github.com/dabit3/nextjs-chatgpt-plugin-starter)  - 一个用于创建简单ChatGPT插件的Next.js样板，基本上是类似Python应用程序的JavaScript版本。

 
文章翻译自：[Web Tools Weekly Issue #555 (innerHTML Security, CSS/HTML, Git/CLI, AI Tools)](https://webtoolsweekly.com/archives/issue-555) 

