# 原创科研封面与个人肖像

更新：2026 年 10 月 29 日。

七幅封面使用内置 **image_gen** 工具制作。除保留用户已认可的前两幅外，本次后五幅均以第一幅为画风参考，统一纸感、矿物色、手绘轮廓和青黛—朱砂—米白色系。未采用的霓虹/玻璃版本已经移到制作过程目录，不用于网站。

## 成品文件与研究线索

| 网页图像 | 画面线索 | 对应研究经历或兴趣 |
| --- | --- | --- |
| curiosity-art.webp | 丝带、细胞意象、药物、网络与书卷 | 遗传、免疫、多组学和交叉研究的整体线索 |
| cover-cell.webp | 菌体、微小颗粒与流动群落 | 肠道菌群、代谢物、免疫因子与肥胖的孟德尔随机化及中介分析 |
| cover-science.webp | 离散纸片、矩阵页层与节点网络 | pGWAS-Portal、SV4GD 的数据整合；AI 辅助科研的探索 |
| cover-nejm.webp | 神经分枝、鞘段、重复纹样 | ATXN3 重复扩增、Slc20a2 与脱髓鞘易感性的研究 |
| cover-bmj.webp | 起点、中间平台、分叉路径 | 因果推断、孟德尔随机化与中介分析 |
| cover-lancet.webp | 同根双树、连接与细胞意象 | 炎症性肠病与卒中的共享遗传易感性、系统性免疫调控 |
| cover-jama.webp | 转运之门、颗粒与代谢流域 | 糖尿病与脂肪肝的跨性状遗传分析、胆汁酸转运蛋白变异 |

这些是研究主题的艺术表达，不是实验结果、分子结构或疾病机制的真实图谱；不根据颜色判断益生菌或致病菌，也不把相关性或统计推断画作已被证实的因果结论。AI 部分对应兴趣及辅助应用探索，不新增未经简历支持的发表成果。

每幅原图均不带刊名。开场的英文刊名由 HTML/CSS 单独叠加；V13 沿用无可见控制的全英文序章，以北斗为灵感安排七张封面，星线属于艺术构图，不是精确天体位置。封面不包含假期号、日期、DOI 或出版认证，不代表用户在这七本期刊上发表过论文。原图画廊不叠加刊名，介绍仍可切换中英文。

本次五幅最终提示词完整保存在 **artwork-prompts-v11.json**。工具模式为内置 image_gen，不使用外部 API 密钥。参考图只用于统一用户自己这套插画的风格；未把他人的期刊封面直接作为成品素材。

## 文件优化

WebP 是为网页生成的压缩编码，尺寸与构图不变。七幅合计约 3.8 MiB，避免在开场加载约 23 MiB 的 PNG。尺寸均为 1122 × 1402。V13 将不参与网页运行的 PNG 原稿移入本地历史版本与制作过程目录，网页成品只保留所需副本；删除制作过程不会影响网站。

## 肖像与标识

portrait-painted.webp 根据用户提供的本人证件照生成绘画肖像，保留主要面容和发型，使用水彩/水粉笔触、暖纸底与青绿点缀；V13 只调整文件编码，未重新绘画或改变构图。portrait.jpg 是简历展示用的本人照片副本。

wx-handwritten.png 来源于用户的“屏保.png”；wx-monogram.svg 与 favicon.svg 以嵌入原图的亮度蒙版保留笔迹，没有重新绘制字形。导航蒙版内嵌以支持离线打开。

## 真实封面的视觉参考

已观察 Nature、Cell、Science 的正刊样本，并核看下列四刊真实封面。各刊的真实版式并不相同，本作品只借鉴刊头层级和编辑构图，统一为用户自己的画册风格；英文按用户要求使用 Times New Roman。

- [Nature：Volume 652, Issue 8110](https://www.nature.com/nature/volumes/652/issues/8110)
- [Cell 官方公开封面](https://x.com/CellCellPress)（观察样本：189 卷第 4 期，2026-02-19）
- [Science：Code by AI 封面的公开展示](https://www.scinexx.de/news/technik/kuenstliche-intelligenz-als-programmierer/)
- [NEJM 作者公开展示，Vol. 385 No. 4](https://christophergmyers.phd/publications/27944-supporting-robust-teamwork-bridging-technology-and-organizational-science)
- [BMJ 出版方封面，2024-03-09](https://bmjgroup.com/wp-content/uploads/2024/03/384-8420-cvr.png)
- [The Lancet 官方封面，2025-08-16](https://x.com/TheLancet/status/1956370735082926199)
- [JAMA 官方封面，2025-09-23/30](https://x.com/JAMA_current/status/1970526076083331197)

## 原始第一幅的生成记录

最终提示词：

> Use case: stylized-concept. Create one finished original illustration asset for a biomedical researcher's personal academic website, replacing an ID photo in the About section. The attached collage is ONLY a palette and visual-language reference, especially its final teal-and-coral Chinese ornament image: do not copy its characters, text, mascots, brands, buildings, or composition. Composition: vertical 4:5 gallery-quality editorial artwork, designed to remain elegant when cropped square. A luminous abstract flowing silk ribbon curves through a miniature constellation of knowledge, with very fine geometric connection lines and translucent folded forms suggesting artificial intelligence; a few delicate capsules and tiny orbs evoke the microscopic world. A small open book near the bottom anchors the composition as human curiosity. These are poetic abstractions, NOT a literal anatomical or molecular diagram. Fine traditional Chinese cloud and botanical engraving forms appear only as restrained border details. No mountains, no portrait or human faces, no text, letters, numbers, logo, labels, watermark, panels, or UI. Mature contemporary Chinese illustration in mineral pigment and silkscreen layering, refined hand-painted texture, exceptionally clean delicate contours, subtle tactile ivory paper. Dominant deep peacock teal #176b73 and ink #203b40, saturated coral vermilion #bc4c40, small warm golden #b48a47 details, ample pale ivory #f8f3e9 breathing space. Main shapes graceful and softly sculpted, rich but disciplined color contrast, warmly optimistic, artful, intelligent, premium. Full edge-to-edge illustration with balanced negative space, no mockup/frame/shadow outside image. A composition that looks bespoke, not a stock AI brain or a medical clipart.


