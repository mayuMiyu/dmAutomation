import pygetwindow as gw

def discordVisibility():
    wins = gw.getWindowsWithTitle("Discord")
    if wins:
        wins[0].moveTo(-2000, 0)
        print("Discord moved off-screen")
    else:
        print("Discord not found, is it open?")