import customtkinter as ctk
import webview
import json
import threading
import pyperclip
import time
import os
import sys
import pyautogui
import re

# Set appearance and theme
ctk.set_appearance_mode("Dark")
ctk.set_default_color_theme("blue")

# Configure PyAutoGUI Safety
pyautogui.FAILSAFE = True  # Move mouse to corner to abort

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

        self.title("StudyHub Ultra v3.0 | Total Autopilot")
        self.geometry("480x650")
        self.resizable(False, False)

        # Load Data for Auto-Complete
        self.load_data()
        
        # UI State
        self.logged_in_user = None
        self.clipboard_monitor_running = False
        self.autopilot_enabled = False

        # Build Login Page
        self.show_login()

    def load_data(self):
        try:
            with open(resource_path('app.js'), 'r', encoding='utf-8') as f:
                content = f.read()
                log_match = re.search(r'logs: (\[[\s\S]*?\]),', content)
                if log_match:
                    self.logs = json.loads(log_match.group(1))
                else:
                    self.logs = []
        except Exception:
            self.logs = []

    def show_login(self):
        for widget in self.winfo_children():
            widget.destroy()

        self.main_frame = ctk.CTkFrame(self, corner_radius=20, fg_color="#0f172a")
        self.main_frame.pack(pady=40, padx=40, fill="both", expand=True)

        self.label = ctk.CTkLabel(self.main_frame, text="STUDYHUB ULTRA", font=("Outfit", 28, "bold"), text_color="#8b5cf6")
        self.label.pack(pady=(40, 10))

        self.sublabel = ctk.CTkLabel(self.main_frame, text="V3.0 Total Autopilot Edition", font=("Inter", 12), text_color="#94a3b8")
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

        try:
            with open(resource_path('users.json'), 'r') as f:
                users = json.load(f)
            if user in users and users[user]['password'] == pwd:
                self.logged_in_user = users[user]
                self.on_login_success()
            else:
                self.status_label.configure(text="Invalid credentials. Access denied.")
        except:
            self.status_label.configure(text="Error loading user database.")

    def on_login_success(self):
        self.start_autonomous_monitor()
        
        for widget in self.winfo_children():
            widget.destroy()

        self.main_frame = ctk.CTkFrame(self, corner_radius=20, fg_color="#0f172a")
        self.main_frame.pack(pady=40, padx=40, fill="both", expand=True)

        self.label = ctk.CTkLabel(self.main_frame, text=f"Agent: {self.logged_in_user['name']}", font=("Outfit", 24, "bold"), text_color="#10b981")
        self.label.pack(pady=(30, 10))

        # Toggles
        self.auto_copy_var = ctk.BooleanVar(value=True)
        self.auto_copy_switch = ctk.CTkSwitch(self.main_frame, text="Auto-Copy Answers", variable=self.auto_copy_var, 
                                              progress_color="#8b5cf6")
        self.auto_copy_switch.pack(pady=10)

        self.autopilot_var = ctk.BooleanVar(value=False)
        self.autopilot_switch = ctk.CTkSwitch(self.main_frame, text="TOTAL AUTOPILOT (Ghost Type)", variable=self.autopilot_var,
                                              progress_color="#facc15", command=self.toggle_autopilot)
        self.autopilot_switch.pack(pady=10)

        self.desc = ctk.CTkLabel(self.main_frame, text="READY FOR COMMANDS\nMove mouse to any corner to abort Ghost Typing.", 
                                font=("Inter", 11), text_color="#94a3b8", justify="center")
        self.desc.pack(pady=20)

        self.launch_btn = ctk.CTkButton(self.main_frame, text="OPEN DASHBOARD", command=self.launch_browser, 
                                        width=250, height=45, corner_radius=12, font=("Inter", 14, "bold"))
        self.launch_btn.pack(pady=10)
        
        self.logout_btn = ctk.CTkButton(self.main_frame, text="EXIT SYSTEM", command=self.show_login, 
                                        width=150, height=35, corner_radius=8, fg_color="transparent", border_width=1)
        self.logout_btn.pack(pady=20)

    def toggle_autopilot(self):
        self.autopilot_enabled = self.autopilot_var.get()
        if self.autopilot_enabled:
            # Show a warning toast or label
            self.desc.configure(text="AUTOPILOT ARMED\nApp will type in your current window.", text_color="#facc15")
        else:
            self.desc.configure(text="READY FOR COMMANDS\nMove mouse to any corner to abort Ghost Typing.", text_color="#94a3b8")

    def launch_browser(self):
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
                        if self.auto_copy_var.get():
                            pyperclip.copy(answer)
                        
                        if self.autopilot_enabled:
                            # Ghost Typing Sequence
                            time.sleep(1) # Give user a second to tab back
                            pyautogui.write(answer, interval=0.05)
                            pyautogui.press('enter')
                            print(f"Ghost Typed: {answer}")
                        
                        last_clip = answer 
                    else:
                        last_clip = current_clip
            except pyautogui.FailSafeException:
                print("Fail-safe triggered from corner move.")
                self.autopilot_var.set(False)
                self.autopilot_enabled = False
            except Exception as e:
                print(f"Error: {e}")
            time.sleep(1)

    def find_answer(self, query):
        q = query.lower()
        for log in self.logs:
            if q in log['topic'].lower() or q in log['question'].lower():
                return log['answer']
        return None

if __name__ == "__main__":
    app = StudyHubApp()
    app.mainloop()
