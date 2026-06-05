import uiautomation as auto
import time 
import re
from dm_watcher import send_telegram

def getMessageCount():
    discord = auto.PaneControl(searchDepth=1, SubName="Discord")

    if not discord.Exists(0):
        print("Discord window not found, is it open?")
        return None
    
    # Search for message requests with number badge (unviewed only)
    for i in range(1, 100):
        link = discord.Control(searchDepth=20, Name=f"Message Requests {i}")
        if link.Exists(0):
            return i
    return 0

print("Starting... Reading Current State First")

last_count = getMessageCount()
if last_count is None:
    print("Failed to detect discord, make sure discord is visible!")
    exit(1)

print(f"Current Message Request Count on start: {last_count} (won't send notification for this)")
print("watching for new message requests...")

while True:
    time.sleep(30)
    current_count = getMessageCount()

    if current_count is None:
        continue

    if current_count > last_count:
        new_dm = current_count - last_count
        print(f'🎣 New DM Fish! You have {new_dm} new message requests')
        send_telegram('Message Request', f"you have {new_dm} new request(s)!")

    last_count = current_count