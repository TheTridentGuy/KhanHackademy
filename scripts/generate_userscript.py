with open("header.user.js", "r") as f:
    header = f.read()
with open("khanhackademy.js", "r") as f:
    code = f.read()
with open("khanhackademy.user.js", "w") as f:
    f.write(header+code)