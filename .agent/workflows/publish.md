---
description: How to publish StudyHub Ultra to GitHub
---

1. Initialize git (already done)
2. Create a new repository on GitHub.com called `StudyHub-Ultra`.
3. Run the following commands:
// turbo
```powershell
git add .
git commit -m "Initial commit: StudyHub Ultra with IDE Auto-complete rules"
git branch -M main
# You will need to add your own remote here:
# git remote add origin https://github.com/YOUR_USERNAME/StudyHub-Ultra.git
# git push -u origin main
```

4. Go to repository settings -> Pages.
5. Set the source to "Deploy from a branch" and select `main`.
6. Your dashboard is now published!

## 🎁 Sharing the IDE Features
Anyone who clones this repo using **Cursor** (or an IDE with agentic support) will automatically get:
- **Instant Search**: The agent can search your logs via the `.cursorrules`.
- **Easy Updates**: Change `bookwork_log.txt` and run `py sync_logs.py`.
