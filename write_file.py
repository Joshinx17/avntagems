import sys, os

file_path = sys.argv[1]
content = sys.stdin.read()

os.makedirs(os.path.dirname(file_path), exist_ok=True)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
