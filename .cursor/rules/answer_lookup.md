---
description: Automatically lookup Sparx/Seneca answers from the logs
globs: ["*.txt", "*.js", "*.md"]
---

# Answer Lookup Rule

When the user asks about a Sparx code (e.g., "123A") or a topic like "Seneca Blood types", you MUST:

1.  Search `bookwork_log.txt` for the corresponding entry.
2.  Search `app.js` (inside the `data.logs` array) for the same entry.
3.  Provide the answer clearly and offer to copy it to the clipboard.
4.  If the answer isn't found, suggest searching the web or asking the user to provide it so you can add it to the log.

## Example Response:
"I found the answer for **[Topic/Code]** in your local logs:
Answer: **[The Answer]**
Would you like me to copy this for you?"
