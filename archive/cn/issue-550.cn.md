

#550 （全屏API，JS库，AI工具，React）



全屏 API 在现代浏览器中的支持非常好，因此在过去几年中一直可以安全使用。API 本身并不太复杂，只有少量的方法和属性。

FullScreen API在技术上允许您通过编程方式将页面上的任何元素都切换到全屏模式。

一个简单的切换全屏模式的函数可能看起来像这样：

```
function toggleFullScreen() {  
  if (!document.fullscreenElement) {  
    document.documentElement.requestFullscreen();  
  } else {  
    if (document.exitFullscreen) {  
      document.exitFullscreen();  
    }  
  }  
}
```

然后你需要某种触发器来切换。[这个 CodePen 演示](https://codepen.io/impressivewebs/pen/wvOmzbK?editors=0011) 使用一个用户可以点击以切换的按钮。

全屏模式可使用 **requestFullscreen()** 方法切换开启。该方法应用于您想要全屏显示的元素（例如视频或整个文档，如上例所示）。

该函数还使用当前文档的 **fullscreenElement** 属性来检查是否有任何元素当前处于全屏模式。此属性返回当前全屏元素。所以您可以使用类似 **tagName** 或 **nodeName** 的东西来找出它是哪个元素。在演示中，我正在记录全屏元素的标签名称。

该函数还使用了 **exitFullscreen()** 方法，该方法直接应用于 **document** 对象，而不是全屏显示的元素。

关于全屏 API 的其他一些注意事项：

*   **document.full­screenEnabled** 属性可用于检查当前页面或设备是否具备全屏功能。
* 你可以使用 **fullscreenchange** 事件来检测元素是否已经进入或退出全屏模式。
*   使用此API时，用户不被强制停留在全屏模式中；他们可以使用ESC键或F11键退出全屏模式。
* 请求和退出方法在切换到或退出全屏模式后都会返回一个Promise。

那基本上就是全屏 API 的概要。在某些特定情况下，全屏功能可能不太明显，这时它可能会派上用场。例如，视频已经有全屏选项，但你也可以通过某种嵌入式游戏或动画来实现此功能，以便用户可以以全屏模式查看，以获得无干扰的体验。

现在就来展示本周的工具吧！


JavaScript库与框架
---------------------------------

[**Simple Statistics**](https://github.com/simple-statistics/simple-statistics)  - 用JavaScript实现的描述性、回归和推断统计的实现，无任何依赖，旨在适用于所有现代浏览器和Node.js。

[**Shadeup**](https://shadeup.dev/)  - 一种旨在简化着色器编写的语言，由 WebGPU 提供支持，基于 TypeScript 并设计为尽量减少样板代码。

[**Moddio**](https://github.com/moddio/moddio2)  - 一个拥有内置服务器验证代码的多人游戏引擎，包括快照插值和客户端协调，支持50+并发玩家或300+移动实体。

[**Low-Code for Enterprise Application Development**](https://vpdae.com/redirect/6wtx4q3h07n9fvr04pz8o154rl)  - BitDegree的“缩短速度和质量之间的差距”。通过利用专业的低代码解决方案来克服技术障碍和预算限制，简化企业应用程序开发。  赞助

[**H3**](https://github.com/unjs/h3)  - 一个为高性能和可移植性而构建的最小化http框架，包含一组可组合的实用工具，但可以扩展和快速匹配路由。

[**Cami**](https://camijs.com/)  - 一个简单而强大的UI框架，用于在Web应用中创建交互性岛屿，无需构建步骤。包括响应式Web组件、异步状态管理、流和跨组件状态管理。

[**Electron Prokit**](https://github.com/Xutaotaotao/electron-prokit)  - 基于Electron的桌面应用程序框架，用于使用JavaScript开发本机桌面应用程序。包括对Vite，完全类型化的API等的支持。

[**QX82**](https://btco.github.io/qx82/)  - 一个小型的JavaScript引擎，让您可以创作出受到复古1980年代计算机外观感受的游戏和体验。

[![QX82](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/dcdb81e1-f8dd-98c0-025a-e2a013c9c554.png)](https://btco.github.io/qx82/)


[**ReqEase**](https://github.com/ReqEase/ReqEase)  - 一个多功能的前端库，旨在通过简化诸如带验证、加载指示器和响应处理的HTTP请求等任务，简化网页开发任务。

[**Ree.js**](https://ree.js.org/)  - 使用由Sucrase（Babel的替代品）驱动的构建工具、直接URL导入、支持大多数运行时环境等特性，搭建规模化的Web应用程序框架。

[**Mosaic**](https://uwdata.github.io/mosaic/)  - 一个将数据可视化、表格、输入组件和其他数据驱动组件链接在一起的框架，让您可以交互式地可视化和探索数百万甚至数十亿个数据点。



# ChatGPT和AI工具
--------------------

[**Casibase**](https://casibase.org/)  - 一个由ChatGPT驱动的开源领域知识数据库、即时通讯和论坛软件。

[**llamafile**](https://github.com/Mozilla-Ocho/llamafile)  - 一个项目，允许您使用单个文件分发和运行LLMs，以便将开源大型语言模型更加方便地提供给开发者和最终用户。

[**Promptr**](https://github.com/ferrislucas/promptr)  - 一个CLI工具，可以用简单的英语指令指导OpenAI LLM模型对你的代码库进行更改。

[**yaml-runner**](https://github.com/mbusigin/yaml-runner)  - 一个命令行工具，根据在YAML文件中定义的指令来自动执行任务，以执行来自GPT-4或其他LLMs的指令。

[**Get Smarter About AI and Tech in 5 min**](https://sparklp.co/p/1fb93bdda8)  - 每天接收来自60多家媒体机构精心挑选的最重要的人工智能和科技新闻摘要。加入来自OpenAI、Meta、Google、Microsoft、Hugging Face、JP Morgan等机构的超过30,000名专业人士。赞助商：

[**WeatherGPT**](https://github.com/steven-tey/weathergpt)  - 使用Next.js 13应用程序路由、Edge函数和Vercel构建的ChatGPT插件起始模板，用于获取任意位置的天气。

[**Fastpedia**](https://fastpedia.io/)  - 一个大型的AI工具目录，可按关键字或几十种标签/类别（声音、图像编辑、低代码、营销等）进行搜索。

[![Fastpedia](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/a4cfdd6f-6dbb-6faa-91db-d34f7a3db36b.png)](https://fastpedia.io/)


[**GPT Assistant**](https://github.com/BuilderIO/gpt-assistant)  - 用Qwik和Puppeteer构建的实验工具，使一个自主的GPT代理程序能够访问浏览器并完成任务。

[**AI Legion**](https://github.com/eumemic/ai-legion)  - 一个由LLM驱动的自主代理平台，可以使自主代理一起合作完成任务。

[**node-openai**](https://github.com/joyqi/node-openai)  - 一个优雅的Node.js库，使用TypeScript编写，为OpenAI API服务，无需依赖，在Node.js和浏览器中运行。

[**BingGPT**](https://github.com/dice2o/BingGPT)  - 一个桌面应用程序，用于与Bing的新AI聊天，无需安装Microsoft Edge或任何浏览器扩展即可与Bing聊天。




React工具
-----------

[**react-quiz-component**](https://github.com/wingkwong/react-quiz-component)  - 一个React组件，允许您为用户创建一个交互式的测验，具有许多功能可自定义问题类型、包括数据、实时反馈等等。

[**Beak.js**](https://github.com/mme/beakjs)  - 为您的React应用创建定制AI助理所需的一切，具有易于定制的内置用户界面。

[**next-safe-action**](https://next-safe-action.dev/)  - 一个充分利用最新、最好的Next.js、React和TypeScript功能的库，使用您选择的验证库，让您定义类型安全的服务器操作，并在客户端组件内执行它们。

[**Next Fetch**](https://github.com/vercel-labs/next-fetch)  - 使用您喜欢的库，在Next.js中以直观的方式动态获取API端点的数据。

[**Get Smarter About AI and Tech in 5 min**](https://sparklp.co/p/1fb93bdda8)  - 每天收到从60多家媒体选择出的最重要的人工智能和科技新闻的摘要。加入来自OpenAI、Meta、Google、Microsoft、Hugging Face、JP Morgan等的30,000多名专业人士。 SPONSORED

[**Graphic Walker**](https://github.com/Kanaries/graphic-walker)  - 一个开源的替代Tableau的工具，允许数据科学家使用简单的拖放和自然语言查询操作分析数据和可视化模式，易于嵌入React应用程序中。

[**React Curved Text**](https://obss.github.io/react-curved-text/)  - 用于创建圆形或弯曲文本的React组件。首页有一个互动示例，显示您如何自定义不同的设置。

[![React曲线文字](https://mcusercontent.com/ea228d7061e8bbfa8639666ad/images/e06101db-6d8b-6074-52a0-d7ba3e997e08.png)](https://obss.github.io/react-curved-text/)


[**Reacton**](https://github.com/widgetti/reacton)  - 一个纯Python的React移植库，用于Jupyter Notebooks的交互式小部件集ipwidgets。

[**Superglue**](https://github.com/thoughtbot/superglue)  - 如果Python不是你擅長的領域，這個專案（尚在早期開發階段）讓你使用經典的Rails來構建豐富的React Redux應用程序，無需API和客戶端路由。

[**re-frame**](https://github.com/day8/re-frame)  - 我们已经讲解了Python和Rails，现在来介绍一下ClojureScript框架，它可以用来构建用户界面并利用React技术。

[**react-three-gpu-pathtracer**](https://github.com/pmndrs/react-three-gpu-pathtracer)  - 一个对流行的 three-gpu-pathtracer 项目的 React 抽象化。


文章翻译自：[Web Tools Weekly Issue #550 (Fullscreen API, JS Libs, AI Tools, React)](https://webtoolsweekly.com/archives/issue-550) 

