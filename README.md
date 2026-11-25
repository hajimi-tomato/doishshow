# doish 的房间

狗鱼（doish）的个人作品网站。3D 工作室里的复古电脑可以打开桌面作品集。

- [进入 3D 工作室](https://hajimi-tomato.github.io/doishshow/studio/)
- [直接打开桌面作品集](https://hajimi-tomato.github.io/doishshow/)

## 仓库目录

| 路径 | 用途 |
| --- | --- |
| [`studio/`](studio/) | 3D 工作室的生产构建。入口是 `studio/index.html`，窗口视频、季节背景和构建资源位于 `studio/assets/`。 |
| [`index.html`](index.html) | 桌面作品集入口。工作室里的电脑也从这里加载桌面。 |
| [`assets/`](assets/)、[`css/`](css/)、[`js/`](js/) | 桌面作品集使用的图片、文档、样式和脚本。 |

## 发布

GitHub Pages 从 `main` 分支根目录发布。这个公开仓库保存供 Pages 使用的静态发布文件。

更新工作室时，在开发项目中运行 `npm run build`，将正式房间入口及所引用的资源同步到 `studio/`。一条提交内一起更新入口和对应资源，并检查媒体路径在 `/studio/` 下能正常加载。更新桌面作品集时，同时检查独立入口和房间电脑里的桌面。

在 [部署记录](https://github.com/hajimi-tomato/doishshow/deployments) 确认发布状态后，再打开工作室与桌面作品集核对页面。
