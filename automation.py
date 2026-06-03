import pyautogui
import time
import random
import keyboard

line1 = "**TRADING 3 Spirit Set // 5 Tranquility Rod Set // 1 Mourned Moonstone // 200 Exalted // 50 Twisted // 20 Cosmic // 15 Sov Relic // 10 SotD // 10 Festive**"
line2 = "LF rbx stuff / S$, Come with an offer"

print("Fisch Auto-Trader Starting...")
print("Press 'Q' to quit")
print("Make sure Discord is visible on screen!")
time.sleep(3)

while True:

    if keyboard.is_pressed('`'):
        print ("Quitting...")
        break

    pyautogui.write (line1, interval = 0.08)
    time.sleep(0.15)
    
    pyautogui.keyDown('shift')
    pyautogui.press('enter')
    pyautogui.keyUp('shift')
    time.sleep(0.1)

    pyautogui.write (line2, interval = 0.15)
    time.sleep(0.15)

    pyautogui.press('enter')
    
    wait = random.randint(630, 660)
    print(f"Sent! Next message in {wait//60} minutes...")
    time.sleep(wait)