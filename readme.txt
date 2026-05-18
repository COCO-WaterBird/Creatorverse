改动记录
========

2026-05-15（Git）
- 按需求撤销先前的本地汇总提交（未成功推送到远程）：`git reset --soft origin/main` 保留全部改动于暂存区后，重新做一次提交并执行 `git push origin main`。
- 当前本地提交 `0487495`（update）仍领先 `origin/main`；`git push` 持续 HTTP 400 → 需在 macOS 钥匙串更新 GitHub 凭据（Classic PAT 含 repo，或 Fine-grained 含 Contents: Write；组织仓库需 Authorize SSO），或配置 SSH 后再推送。

2026-05-18（demo.gif 压缩）
- 原文件约 7.7MB（370×240，10fps，36s）→ ffmpeg 调色板优化（96 色、8fps）后约 2.1MB，已覆盖根目录 `demo.gif`；备份为 `demo.gif.bak`（可删）。推送前需 `git add demo.gif` 并提交。
