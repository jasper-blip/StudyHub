import customtkinter as ctk
import webview
import json
import threading
import pyperclip
import time
import os
import sys

# Set appearance and theme
ctk.set_appearance_mode("Dark")
ctk.set_default_color_theme("blue")

# Helper for EXE bundling
def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

class StudyHubApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.title("StudyHub Ultra v2.0 | Autonomous Agent")
        self.geometry("450x600")
        self.resizable(False, False)

        # Load Data for Auto-Complete
        self.load_data()
        
        # UI State
        self.logged_in_user = None
        self.clipboard_monitor_running = False

        # Build Login Page
        self.show_login()

    def load_data(self):
        try:
            with open(resource_path('app.js'), 'r', encoding='utf-8') as f:
                content = f.read()
                # Simple extraction of the logs array (hacky but works for local dev)
                # In a real app we would use a shared JSON file
                import re
                log_match = re.search(r'logs: (\[[\s\S]*?\]),', content)
                if log_match:
                    self.logs = json.loads(log_match.group(1))
                else:
                    self.logs = []
        except:
            self.logs = []

    def show_login(self):
        # Clear frame
        for widget in self.winfo_children():
            widget.destroy()

        # Premium Layout
        self.main_frame = ctk.CTkFrame(self, corner_radius=20, fg_color="#0f172a")
        self.main_frame.pack(pady=40, padx=40, fill="both", expand=True)

        self.label = ctk.CTkLabel(self.main_frame, text="STUDYHUB ULTRA", font=("Outfit", 28, "bold"), text_color="#8b5cf6")
        self.label.pack(pady=(40, 10))

        self.sublabel = ctk.CTkLabel(self.main_frame, text="Autonomous academic edge.", font=("Inter", 12), text_color="#94a3b8")
        self.sublabel.pack(pady=(0, 30))

        self.username_entry = ctk.CTkEntry(self.main_frame, placeholder_text="Username", width=250, height=45, corner_radius=12)
        self.username_entry.pack(pady=10)

        self.password_entry = ctk.CTkEntry(self.main_frame, placeholder_text="Password", show="*", width=250, height=45, corner_radius=12)
        self.password_entry.pack(pady=10)

        self.login_button = ctk.CTkButton(self.main_frame, text="LOGIN", command=self.login, 
                                        width=250, height=50, corner_radius=12, font=("Inter", 16, "bold"),
                                        fg_color="#8b5cf6", hover_color="#6d28d9")
        self.login_button.pack(pady=30)

        self.status_label = ctk.CTkLabel(self.main_frame, text="", text_color="#ef4444")
        self.status_label.pack()

    def login(self):
        user = self.username_entry.get().lower()
        pwd = self.password_entry.get()

        with open(resource_path('users.json'), 'r') as f:
            users = json.load(f)

        if user in users and users[user]['password'] == pwd:
            self.logged_in_user = users[user]
            self.on_login_success()
        else:
            self.status_label.configure(text="Invalid credentials. Access denied.")

    def on_login_success(self):
        # Start Autonomous Monitor
        self.start_autonomous_monitor()
        
        # Switch to "App Running" view
        for widget in self.winfo_children():
            widget.destroy()

        self.main_frame = ctk.CTkFrame(self, corner_radius=20, fg_color="#0f172a")
        self.main_frame.pack(pady=40, padx=40, fill="both", expand=True)

        self.label = ctk.CTkLabel(self.main_frame, text=f"Welcome, {self.logged_in_user['name']}", font=("Outfit", 24, "bold"), text_color="#10b981")
        self.label.pack(pady=(40, 10))

        self.info = ctk.CTkLabel(self.main_frame, text="Autonomous Mode: ACTIVE", font=("Inter", 14), text_color="#8b5cf6")
        self.info.pack(pady=20)

        self.desc = ctk.CTkLabel(self.main_frame, text="The agent is now monitoring your\nclipboard. Copy any Seneca/Sparx code,\nand the answer will be instantly ready.", 
                                font=("Inter", 12), text_color="#94a3b8", justify="center")
        self.desc.pack(pady=20)

        self.launch_btn = ctk.CTkButton(self.main_frame, text="OPEN DASHBOARD", command=self.launch_browser, 
                                        width=250, height=50, corner_radius=12, font=("Inter", 14, "bold"))
        self.launch_btn.pack(pady=30)
        
        self.logout_btn = ctk.CTkButton(self.main_frame, text="LOGOUT", command=self.show_login, 
                                        width=150, height=35, corner_radius=8, fg_color="transparent", border_width=1)
        self.logout_btn.pack(pady=10)

    def launch_browser(self):
        # Launch the webview window pointing to your GitHub Pages dashboard
        # (Or local file if preferred: 'file://' + os.path.abspath('index.html'))
        webview.create_window('StudyHub Ultra Dashboard', 'https://jasper-blip.github.io/StudyHub/')
        webview.start()

    def start_autonomous_monitor(self):
        if not self.clipboard_monitor_running:
            self.clipboard_monitor_running = True
            thread = threading.Thread(target=self.clipboard_loop, daemon=True)
            thread.start()

    def clipboard_loop(self):
        last_clip = ""
        while self.clipboard_monitor_running:
            try:
                current_clip = pyperclip.paste().strip()
                if current_clip and current_clip != last_clip:
                    # Logic to find answer
                    answer = self.find_answer(current_clip)
                    if answer:
                        pyperclip.copy(answer)
                        print(f"Auto-Matched: {current_clip} -> {answer}")
                        # Keep track of the auto-copy so we don't loop
                        last_clip = answer 
                    else:
                        last_clip = current_clip
            except:
                pass
            time.sleep(1)

    def find_answer(self, query):
        q = query.lower()
        for log in self.logs:
            # Check topic, question, or Sparx code
            if q in log['topic'].lower() or q in log['question'].lower():
                return log['answer']
        return None

if __name__ == "__main__":
    app = StudyHubApp()
    app.mainloop()
