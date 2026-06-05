import discord
import requests
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()
DISCORD_BOT_TOKEN = os.getenv("DISCORD_BOT_TOKEN")
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")
YOUR_DISCORD_USER_ID = int(os.getenv("YOUR_DISCORD_USER_ID"))

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
    

class DMWatcher(discord.Client):
    async def on_ready(self):
        print(f'✅ DM Watcher Online: {self.user}')
    
    async def on_message(self, message):
        print(f"\n📨 Message seen:")
        print(f"   Channel type: {type(message.channel).__name__}")
        print(f"   Is DM: {isinstance(message.channel, discord.DMChannel)}")
        print(f"   Author: {message.author.name} (ID: {message.author.id})")
        print(f"   Content: {message.content[:50]}")
        
        # Check if it's a DM
        if isinstance(message.channel, discord.DMChannel):
            print("   ✅ It's a DM!")
            
            if message.author.id == YOUR_DISCORD_USER_ID:
                print("   ⏭️ Yay - it's your message")
            
            if message.author.bot:
                print("   ⏭️ Skipping - it's a bot")
                return
            
            print(f"   📱 Forwarding to Telegram...")
            send_telegram(message.author.name, message.content[:300])
        else:
            print("   ⏭️ Not a DM, skipping")

if __name__ == "__main__":
    print("Starting DM Watcher...")
    client = DMWatcher(intents=discord.Intents.all())
    client.run(DISCORD_BOT_TOKEN)