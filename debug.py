import uiautomation as auto

discord = auto.PaneControl(searchDepth=1, SubName="Discord")
message_requests = discord.PaneControl(Name="Message Requests - Discord")

if message_requests.Exists():
    print(f"Name: '{message_requests.Name}'")
    print(f"Control Type: {message_requests.ControlTypeName}")
    
    # Check if it has any children with numbers
    children = message_requests.GetChildren()
    for child in children:
        if child.Name:
            print(f"  Child: '{child.Name}'")