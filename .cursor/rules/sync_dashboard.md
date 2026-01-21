---
description: Instructions for syncing logs and keeping the dashboard updated
globs: ["bookwork_log.txt", "app.js", "sync_logs.py"]
---

# Dashboard Sync Rule

Whenever the user adds a new entry to `bookwork_log.txt`, you should:

1.  Remind the user to run `py sync_logs.py` to update the web dashboard.
2.  Offer to run the command for them if they have terminal access enabled.
3.  Ensure the format in `bookwork_log.txt` remains consistent:
    `- [Source] Topic - Question - Answer`
