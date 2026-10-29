# 星表与星官连线来源

`star-catalog.js` 是以下开放数据的节选、整理与组合。此派生数据文件继续采用 **Creative Commons Attribution-ShareAlike 4.0 International（CC BY-SA 4.0）**，不改变原始资料的署名。该许可适用于此数据文件，并不代替网站中其他代码、照片、画作的许可。

- **HYG Database v4.1** — David Nash / Astronexus。采用 `hyg/CURRENT/hygdata_v41.csv` 中的 HIP 编号、J2000 赤经赤纬、视星等、B−V 色指数、光谱型、距离和星名。[项目与许可](https://github.com/astronexus/HYG-Database)，[数据说明](https://github.com/astronexus/HYG-Database/blob/main/hyg/README.md)。原数据采用 CC BY-SA 4.0。
- **Stellarium Chinese sky culture** — 最初由 Karrie Berglund 提供，Sun Shuwei 补充，Stellarium 团队维护。二十八宿主星官的连线及中文星名来自 [Chinese sky culture](https://github.com/Stellarium/stellarium/tree/master/skycultures/chinese)。来源说明依据《中西对照恒星图表 1950.0》等资料。其文本与连线标注 CC BY-SA；本图没有使用其中的传统星图图片、星座人物插画或待确认的宿界。
- **Stellarium Western sky culture** — Stellarium 团队。[数据与说明](https://github.com/Stellarium/stellarium-skycultures/tree/master/western)，文本与数据标注 CC BY-SA。本图只提取部分常见星座的 HIP 连线，没有使用 Johan Meuris 的星座插画。

## 本站的整理

保留视星等不大于 6.2 的 HIP 恒星，并补齐所选星官连线所需的较暗成员；将 HYG 的赤经小时数换成角度，以六位小数保存。把多点折线拆成相邻星对，归并重复的星号；加入北斗、夏季大三角、冬季大三角、秋季四边形与昴星团的常用检索入口。中文常用别名及简明中英介绍由本站整理。连线是文化意义上的辨识图案，不代表恒星间的物理连接或正式星座边界。

距离由秒差距换算为光年，未纳入原数据库无有效距离时的占位值。坐标属于 J2000 星表坐标；不声称随缩放而显示真实恒星表面。亮度与颜色作屏幕适配，星点大小不代表恒星的实际角直径。

## 行星计算

`vendor/astronomy.browser.min.js` 来自 Don Cross 的 [Astronomy Engine](https://github.com/cosinekitty/astronomy)，采用 MIT 许可，完整许可保存在 `vendor/astronomy-LICENSE.txt`。行星按所选日期计算地心 J2000 赤经、赤纬、亮度与照明比例。这里没有访问设备定位，不是某一城市此时此刻的地平观测图。

资料取得日期：2026-10-29。原始下载与构建核对记录保存在可删除的 `v12制作过程` 文件夹；运行网页不依赖该文件夹。

[CC BY-SA 4.0 许可全文](https://creativecommons.org/licenses/by-sa/4.0/legalcode)
