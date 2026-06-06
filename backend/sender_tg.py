import discord
import requests
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

def send_telegram(name, message):
    text = f"🎣 New DM Fih!\n\nFrom: *{name}*\nMessage: {message}\n\n`{datetime.now().strftime('%Y-%m-%d %H:%M')}`"
    
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    try:
        response = requests.post(url, json={
            'chat_id': TELEGRAM_CHAT_ID,
            'text': text,
            'parse_mode': 'Markdown'
        }, timeout=10)
        response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Telegram send failed: {e}")
    

if __name__ == "__main__":
    print("Starting DM Watcher...")