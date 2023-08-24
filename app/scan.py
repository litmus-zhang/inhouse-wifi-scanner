import subprocess

def scan_wifi():
    results = subprocess.check_output(["iwlist", "wlan0", "scan"])
    return results.decode("utf-8")


def scan_bluetooth():
    results = subprocess.check_output(["hcitool", "inq"])
    return results.decode("utf-8")


