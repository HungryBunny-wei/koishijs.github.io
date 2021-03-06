---
sidebarDepth: 2
---

# 进程控制

## 退出和重启机器人

exit 指令可以让你退出或重启机器人进程。我们也为这个指令注册了快捷调用：

```sh
# 假设 Koishi 是机器人的 nickname
Koishi，关机            # 退出进程，相当于 exit -c 0
Koishi，重启            # 重启进程，相当于 exit -c "-1"
```

::: tip 提示
Koishi 的命令行工具使用**子进程**来实现对机器人的管理。当子进程退出时，主进程可以通过查看 exit code 来确定退出的原因，并执行相应的操作。
:::

## 执行命令行 <Badge text="2.0.0+"/>

exec 指令可以让你执行某段命令行：

```sh
exec echo foo           # 通过执行命令行输出 foo
```

## 在线更新

结合上述两个指令，我们就可以实现机器人的在线更新了。
