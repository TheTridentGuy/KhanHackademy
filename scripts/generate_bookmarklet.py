with open("khanhackademy.js", "r") as f:
    code = f.read()
with open("bookmarklet.txt", "w") as f:
    f.write(f"javascript:{code.replace("\n", " ")}")