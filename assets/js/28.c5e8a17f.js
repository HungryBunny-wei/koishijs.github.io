(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{405:function(t,a,e){"use strict";e.r(a);var s=e(25),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("这里是"),e("strong",[t._v("正在施工")]),t._v("的 koishi v2 的文档。要查看 v1 版本的文档，请前往"),e("RouterLink",{attrs:{to:"/v1/"}},[e("strong",[t._v("这里")])]),t._v("。")],1)]),t._v(" "),e("h2",{attrs:{id:"关于消息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于消息"}},[t._v("#")]),t._v(" 关于消息")]),t._v(" "),e("h3",{attrs:{id:"cq-码是什么？应该如何使用-cq-码？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cq-码是什么？应该如何使用-cq-码？"}},[t._v("#")]),t._v(" CQ 码是什么？应该如何使用 CQ 码？")]),t._v(" "),e("p",[t._v("CQ 码，是指在 CoolQ 的消息中，以 "),e("code",[t._v("[CQ:")]),t._v(" 开头、"),e("code",[t._v("]")]),t._v(" 结尾的，可以实现特殊功能的代码。我们利用 CQ 码发送图片，语音，表情等普通文本无法表达的消息。下面是一些参考资料：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://d.cqp.me/Pro/CQ%E7%A0%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQ 码官方文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cqhttp.cc/docs/4.13/#/CQCode?id=%E5%A2%9E%E5%BC%BA%E5%8A%9F%E8%83%BD%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQHTTP 的增强功能"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api/wiki/CQ-%E7%A0%81%E7%9A%84%E5%9D%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQ 码的坑"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"autoescape-参数是干什么的？什么时候需要设置这个参数？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autoescape-参数是干什么的？什么时候需要设置这个参数？"}},[t._v("#")]),t._v(" autoEscape 参数是干什么的？什么时候需要设置这个参数？")]),t._v(" "),e("p",[e("code",[t._v("autoEscape")]),t._v(" 参数决定了消息内容是否作为纯文本发送（即不解析 CQ 码）。举个例子，如果你要 @ 某个人，你应该调用的方法相当于：")]),t._v(" "),e("panel-view",{staticClass:"code",attrs:{title:""}},[e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[e("code",[e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("sender.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendGroupMsg")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#AE81FF"}},[t._v("123")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),e("span",{staticStyle:{color:"#E6DB74"}},[t._v("'[CQ:at,qq=456]'")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])])])]),e("p",[t._v("如果这个时候传入第三个参数 "),e("code",[t._v("true")]),t._v("，则相当于直接发送一串 "),e("code",[t._v("[CQ:at,qq=456]")]),t._v("，在大部分情况下这都不是你期望的结果。因此，"),e("strong",[t._v("在大部分情况下我们都不建议你设置这个参数")]),t._v("。如果你真的需要避免 CQ 码转义，你可以使用 "),e("code",[t._v("CQCode.escape()")]),t._v(" 函数：")]),t._v(" "),e("panel-view",{staticClass:"code",attrs:{title:""}},[e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[e("code",[e("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" { CQCode } ")]),e("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),e("span",{staticStyle:{color:"#66D9EF"}},[t._v("require")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#E6DB74"}},[t._v("'koishi-utils'")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")]),t._v("\n"),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("sender.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendGroupMsg")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#AE81FF"}},[t._v("123")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", CQCode.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("escape")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#E6DB74"}},[t._v("'[CQ:at,qq=456]'")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("))")])])])]),e("h3",{attrs:{id:"发送信息时如果抛出-sendererror，应该如何理解-retcode？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送信息时如果抛出-sendererror，应该如何理解-retcode？"}},[t._v("#")]),t._v(" 发送信息时如果抛出 SenderError，应该如何理解 retcode？")]),t._v(" "),e("p",[t._v("retcode 是一个整数，大于 0 表示是 CQHTTP 发出的错误，小于 0 表示是 CoolQ 发出的错误。它们分别在下面定义：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cqhttp.cc/docs/4.13/#/API?id=%E5%93%8D%E5%BA%94%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQHTTP 响应数据"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.cqp.im/dev/v9/errorcode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoolQ 错误代码"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("上面是官方文档中描述的代码，但是实际应用中你更可能碰到下面的代码，它们都没有文档，因此我只给出自己的推测：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("retcode")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("推测意义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("账号已下线")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("尝试发送不支持的 CQ 码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-11")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无法下载图片导致发送失败")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-14")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无法发送匿名消息")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-26")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("发送消息内容超长")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-30")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("消息被服务器拒绝")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-34")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("帐号在该群内被禁言")])])])]),t._v(" "),e("p",[t._v("如果有错误或想补充，欢迎 "),e("a",{attrs:{href:"https://github.com/koishijs/koishijs.github.io/edit/docs/guide/faq.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("完善此页面"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"关于插件和上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于插件和上下文"}},[t._v("#")]),t._v(" 关于插件和上下文")]),t._v(" "),e("h3",{attrs:{id:"一个插件可以被注册多次吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个插件可以被注册多次吗？"}},[t._v("#")]),t._v(" 一个插件可以被注册多次吗？")]),t._v(" "),e("p",[t._v("可以。插件本身就是一个函数，插件被多次注册简单来说就是函数被多次调用。每一次自然也可以传入不同的上下文和选项。")]),t._v(" "),e("p",[t._v("特别地，如果插件内注册的是监听器或者中间件，那么将插件在多个上下文中注册则相当于将一个监听器或中间件分别注册到这些上下文（这并没有任何问题）；而如果插件内注册的是指令，由于同名指令只能拥有一个，因此后注册的会覆盖先注册的。这一点需要注意。")]),t._v(" "),e("h2",{attrs:{id:"关于生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于生命周期"}},[t._v("#")]),t._v(" 关于生命周期")]),t._v(" "),e("h3",{attrs:{id:"应该如何保证一段代码在成功完成初始化之后执行？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应该如何保证一段代码在成功完成初始化之后执行？"}},[t._v("#")]),t._v(" 应该如何保证一段代码在成功完成初始化之后执行？")]),t._v(" "),e("p",[t._v("可以有很多种方式。你可以利用 "),e("code",[t._v("app.start()")]),t._v(" 或者 "),e("code",[t._v("startAll()")]),t._v(" 返回的 "),e("code",[t._v("Promise")]),t._v(" 对象：")]),t._v(" "),e("panel-view",{staticClass:"code",attrs:{title:""}},[e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[e("code",[e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("start")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("().")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("then")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(() ")]),e("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.sender.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendPrivateMsg")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#AE81FF"}},[t._v("1234567")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),e("span",{staticStyle:{color:"#E6DB74"}},[t._v("'你的机器人上线了'")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("))")])])])]),e("p",[t._v("特别地，如果你使用了 "),e("code",[t._v("startAll()")]),t._v(" 方法，你也可以使用 "),e("code",[t._v("onStart()")]),t._v(" 钩子：")]),t._v(" "),e("panel-view",{staticClass:"code",attrs:{title:""}},[e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[e("code",[e("span",{staticStyle:{color:"#A6E22E"}},[t._v("onStart")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(() ")]),e("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.sender.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendPrivateMsg")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#AE81FF"}},[t._v("1234567")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),e("span",{staticStyle:{color:"#E6DB74"}},[t._v("'你的机器人上线了'")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("))")]),t._v("\n"),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("startAll")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")])])])]),e("p",[t._v("当然，你还可以利用 "),e("code",[t._v("connect")]),t._v(" 事件：")]),t._v(" "),e("panel-view",{staticClass:"code",attrs:{title:""}},[e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[e("code",[e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.receiver.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("on")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#E6DB74"}},[t._v("'connect'")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", () ")]),e("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" app.sender.")]),e("span",{staticStyle:{color:"#A6E22E"}},[t._v("sendPrivateMsg")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),e("span",{staticStyle:{color:"#AE81FF"}},[t._v("1234567")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", ")]),e("span",{staticStyle:{color:"#E6DB74"}},[t._v("'你的机器人上线了'")]),e("span",{staticStyle:{color:"#F8F8F2"}},[t._v("))")])])])]),e("h3",{attrs:{id:"配置文件中和传入-app-的选项是完全等价的吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件中和传入-app-的选项是完全等价的吗？"}},[t._v("#")]),t._v(" 配置文件中和传入 App 的选项是完全等价的吗？")]),t._v(" "),e("p",[t._v("不是。App 的构造函数不支持 "),e("code",[t._v("plugin")]),t._v(" 选项，而配置文件支持。App 的构造函数的 "),e("code",[t._v("database")]),t._v(" 选项不会自动从依赖中注册数据库，而配置文件会。具体的区别请参见 "),e("RouterLink",{attrs:{to:"/guide/plugin-and-context.html#使用插件"}},[e("strong",[t._v("使用插件")])]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/guide/using-database.html#安装数据库"}},[e("strong",[t._v("安装数据库")])]),t._v(" 两章。")],1),t._v(" "),e("p",[t._v("除此以外，还有一些 CLI 特有的功能，比如 "),e("RouterLink",{attrs:{to:"/guide/logger.html"}},[e("strong",[t._v("输出日志")])]),t._v(" 等，其相关的配置项也是只支持写入配置文件的。")],1),t._v(" "),e("h2",{attrs:{id:"关于通信方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于通信方式"}},[t._v("#")]),t._v(" 关于通信方式")]),t._v(" "),e("h3",{attrs:{id:"http-和-websocket-有什么区别？应该如何选择？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-和-websocket-有什么区别？应该如何选择？"}},[t._v("#")]),t._v(" HTTP 和 WebSocket 有什么区别？应该如何选择？")]),t._v(" "),e("p",[t._v("目前 Koishi 已经完全实现了 CQHTTP 提供的 HTTP 和 WebSocket 通信方式，因此它们之间"),e("strong",[t._v("不存在任何功能上的差别")]),t._v("。")]),t._v(" "),e("p",[t._v("但是，HTTP 需要 Koishi 和 CQHTTP 所处于同一台机器，或所处的机器都拥有公网 IP；而 WebSocket 只需要 Koishi 和 CQHTTP 所处于同一台机器，或运行 CQHTTP 的机器拥有公网 IP。因此如果你在服务端运行 CoolQ，同时在个人电脑上调试你的 Koishi 应用，你应当选择使用 WebSocket 模式。")]),t._v(" "),e("p",[t._v("从性能上说，WebSocket 占用的资源会更少（因为不需要每次都建立连接），但是响应速度可能不如 HTTP；另一方面，当一个 Koishi 应用同时管理着多个机器人时，HTTP 能通过快捷调用和服务器复用的方式来提高性能，但是 WebSocket 并没有这些机制。")])],1)}),[],!1,null,null,null);a.default=o.exports}}]);