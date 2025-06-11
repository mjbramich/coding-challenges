# My solution
def validate_pin(pin):
    if len(pin) != 4 and len(pin) != 6:
        return False
    for c in pin:
        if not c.isdigit():
            return False
    return True
