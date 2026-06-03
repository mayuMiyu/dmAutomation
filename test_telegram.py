# test_telegram.py
import requests
from dotenv import load_dotenv
import os 

load_dotenv()

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
data = {
    'chat_id': TELEGRAM_CHAT_ID,
    'text': '🎣 *Test!* Bot is working!\n\nIf you see this, Telegram is connected.',
    'parse_mode': 'Markdown'
}

response = requests.post(url, json=data)
print("Sent!" if response.status_code == 200 else f"Error: {response.text}")