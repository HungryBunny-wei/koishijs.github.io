(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{394:function(t,v,e){"use strict";e.r(v);var _=e(25),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令 (Command)")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("这里是"),e("strong",[t._v("正在施工")]),t._v("的 koishi v2 的文档。要查看 v1 版本的文档，请前往"),e("RouterLink",{attrs:{to:"/v1/"}},[e("strong",[t._v("这里")])]),t._v("。")],1)]),t._v(" "),e("p",[t._v("指令系统是 Koishi 的核心功能之一。通过 "),e("code",[t._v("ctx.command()")]),t._v(" 方法获得的是指令的实例，它含有下面的方法：")]),t._v(" "),e("h2",{attrs:{id:"cmd-option"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-option"}},[t._v("#")]),t._v(" cmd.option(rawName, description?, config?)")]),t._v(" "),e("p",[t._v("为指令添加一个选项。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("rawName:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 选项的名字和参数")]),t._v(" "),e("li",[e("strong",[t._v("description:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 选项的描述")]),t._v(" "),e("li",[e("strong",[t._v("config:")]),t._v(" "),e("RouterLink",{attrs:{to:"/guide/command-system.html#optionconfig-对象"}},[e("code",[t._v("OptionConfig")])])],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-removeoption"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-removeoption"}},[t._v("#")]),t._v(" cmd.removeOption(name)")]),t._v(" "),e("p",[t._v("删除一个选项。注意：如果你为一个选项注册了多个别名，则删除任何一个别名都相当于删除整个选项。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("name")]),t._v(": "),e("code",[t._v("string")]),t._v(" 指令的名称")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-usage"}},[t._v("#")]),t._v(" cmd.usage(text)")]),t._v(" "),e("p",[t._v("为指令添加使用方法。多次调用此方法只会保留最后一次的定义。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("text:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 使用方法说明")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-example"}},[t._v("#")]),t._v(" cmd.example(example)")]),t._v(" "),e("p",[t._v("为指令添加使用示例。多次调用此方法会一并保留并显示在帮助的最后面。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("example:")]),t._v(" "),e("code",[t._v("text")]),t._v(" 使用示例")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-action"}},[t._v("#")]),t._v(" cmd.action(action)")]),t._v(" "),e("p",[t._v("为指令添加执行函数。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("action:")]),t._v(" "),e("code",[t._v("(config: ParsedCommandLine, ...args: string[]) => any")]),t._v(" 执行函数。这个函数的第一个参数是 "),e("RouterLink",{attrs:{to:"/guide/command-system.html#parsedcommandline-对象"}},[e("code",[t._v("ParsedCommandLine")])]),t._v(" 对象，之后的每个参数都是字符串，表示从指令调用中解析出来的参数")],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-userfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-userfields"}},[t._v("#")]),t._v(" cmd.userFields(fields)")]),t._v(" "),e("p",[t._v("如果指令需要用到用户数据，你可以提前声明，这样有助于合并多次请求，从而提高性能。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("fields:")]),t._v(" "),e("code",[t._v("Iterator<UserField>")]),t._v(" 要请求的用户字段")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-groupfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-groupfields"}},[t._v("#")]),t._v(" cmd.groupFields(fields)")]),t._v(" "),e("p",[t._v("如果指令需要用到群数据，你可以提前声明，这样有助于合并多次请求，从而提高性能。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("fields:")]),t._v(" "),e("code",[t._v("Iterator<GroupField>")]),t._v(" 要请求的群字段")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-alias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-alias"}},[t._v("#")]),t._v(" cmd.alias(...names)")]),t._v(" "),e("p",[t._v("设置指令别名。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("names:")]),t._v(" "),e("code",[t._v("string[]")]),t._v(" 要设置的别名")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-shortcut"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-shortcut"}},[t._v("#")]),t._v(" cmd.shortcut(name, config?)")]),t._v(" "),e("p",[t._v("设置快捷方式。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("name:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 快捷方式名")]),t._v(" "),e("li",[e("strong",[t._v("config:")]),t._v(" "),e("RouterLink",{attrs:{to:"/guide/command-system.html#shortcutconfig-对象"}},[e("code",[t._v("ShortcutConfig")])])],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("this")])])]),t._v(" "),e("h2",{attrs:{id:"cmd-subcommand"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-subcommand"}},[t._v("#")]),t._v(" cmd.subcommand(name, description?, config?)")]),t._v(" "),e("p",[t._v("注册或修改子指令。子指令会继承当期指令的上下文。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("rawName:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 指令名以及可能的参数")]),t._v(" "),e("li",[e("strong",[t._v("description:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 指令的描述")]),t._v(" "),e("li",[e("strong",[t._v("config:")]),t._v(" "),e("RouterLink",{attrs:{to:"/api/command.html#commandconfig"}},[e("code",[t._v("CommandConfig")])]),t._v(" 指令的配置")],1),t._v(" "),e("li",[t._v("返回值："),e("RouterLink",{attrs:{to:"/api/command.html"}},[e("code",[t._v("Command")])]),t._v(" 注册或修改的指令")],1)]),t._v(" "),e("h2",{attrs:{id:"cmd-parse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-parse"}},[t._v("#")]),t._v(" cmd.parse(message)")]),t._v(" "),e("p",[t._v("解析一段指令调用文本。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("message:")]),t._v(" "),e("code",[t._v("string")]),t._v(" 要解析的文本（开头不要包含指令名和前缀）")]),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("ParseResult")]),t._v(" 解析结果。包含 "),e("RouterLink",{attrs:{to:"/guide/command-system.html#parsedcommandline-对象"}},[e("code",[t._v("ParsedCommandLine")]),t._v(" 对象")]),t._v(" 的 "),e("code",[t._v("args")]),t._v(", "),e("code",[t._v("options")]),t._v(", "),e("code",[t._v("unknown")]),t._v(" 和 "),e("code",[t._v("rest")]),t._v(" 四个属性")],1)]),t._v(" "),e("h2",{attrs:{id:"cmd-execute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmd-execute"}},[t._v("#")]),t._v(" cmd.execute(config, next?)")]),t._v(" "),e("p",[t._v("执行本指令。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("config:")]),t._v(" "),e("RouterLink",{attrs:{to:"/guide/command-system.html#parsedcommandline-对象"}},[e("code",[t._v("ParsedCommandLine")])]),t._v(" 执行配置")],1),t._v(" "),e("li",[e("strong",[t._v("next:")]),t._v(" "),e("RouterLink",{attrs:{to:"/guide/message.html#中间件"}},[e("code",[t._v("NextFunction")])]),t._v(" 所处的中间件的 "),e("code",[t._v("next")]),t._v(" 回调函数")],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("any")]),t._v(" 执行函数的返回结果")])]),t._v(" "),e("h2",{attrs:{id:"静态方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[t._v("#")]),t._v(" 静态方法")]),t._v(" "),e("p",[t._v("这里包含了 "),e("RouterLink",{attrs:{to:"/api/command.html"}},[t._v("Command")]),t._v(" 类的静态方法。")],1),t._v(" "),e("h3",{attrs:{id:"command-attachuserfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-attachuserfields"}},[t._v("#")]),t._v(" Command.attachUserFields(fields, argv)")]),t._v(" "),e("p",[t._v("按照 argv 中的 command 属性向 fields 添加所需的用户字段。它是一个内置的 before-user 监听器。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("fields:")]),t._v(" "),e("code",[t._v("Set<UserField>")]),t._v(" 用户字段集合")]),t._v(" "),e("li",[e("strong",[t._v("argv:")]),t._v(" "),e("RouterLink",{attrs:{to:"/guide/command-system.html#parsedcommandline-对象"}},[e("code",[t._v("ParsedCommandLine")])]),t._v(" 只需确保其中存在 command 属性即可")],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])]),t._v(" "),e("h3",{attrs:{id:"command-attachgroupfields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-attachgroupfields"}},[t._v("#")]),t._v(" Command.attachGroupFields(fields, argv)")]),t._v(" "),e("p",[t._v("按照 argv 中的 command 属性向 fields 添加所需的群字段。它是一个内置的 before-group 监听器。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("fields:")]),t._v(" "),e("code",[t._v("Set<GroupField>")]),t._v(" 群字段集合")]),t._v(" "),e("li",[e("strong",[t._v("argv:")]),t._v(" "),e("RouterLink",{attrs:{to:"/guide/command-system.html#parsedcommandline-对象"}},[e("code",[t._v("ParsedCommandLine")])]),t._v(" 只需确保其中存在 command 属性即可")],1),t._v(" "),e("li",[t._v("返回值: "),e("code",[t._v("void")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);