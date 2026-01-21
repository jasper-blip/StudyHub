import re
import json

def parse_log_file(filepath):
    logs = []
    with open(filepath, 'r') as f:
        lines = f.readlines()
        
    for line in lines:
        line = line.strip()
        if not line.startswith('- ['):
            continue
            
        # Format: - [Source] Topic - Question - Answer
        match = re.match(r'- \[(.*?)\] (.*?) - (.*?) - (.*)', line)
        if match:
            source = match.group(1)
            topic = match.group(2)
            question = match.group(3)
            answer = match.group(4)
            logs.append({
                "source": source,
                "topic": topic,
                "question": question,
                "answer": answer
            })
    return logs

def update_app_js(logs, app_js_path):
    with open(app_js_path, 'r') as f:
        content = f.read()
        
    # Replace the logs array in app.js
    # Looking for: logs: [ ... ]
    logs_json = json.dumps(logs, indent=8)
    # Adjust indentation for the first line
    logs_json = logs_json.replace('[', '[\n', 1)
    
    new_content = re.sub(
        r'logs: \[[\s\S]*?\],',
        f'logs: {logs_json},',
        content
    )
    
    with open(app_js_path, 'w') as f:
        f.write(new_content)

if __name__ == "__main__":
    logs = parse_log_file('bookwork_log.txt')
    update_app_js(logs, 'app.js')
    print(f"Successfully synced {len(logs)} logs to app.js")
