#!/usr/bin/env python3
import re

# Read files
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('complete_translations.js', 'r', encoding='utf-8') as f:
    new_js = f.read()

# Find and replace the entire translations block
# Pattern: from "const translations = {" to the closing of switchLang function
pattern = r'const translations = \{.*?localStorage\.setItem\(\'preferredLang\', lang\);'

# Add indentation
indented_js = '\n'.join('    ' + line if line.strip() else line
                         for line in new_js.split('\n'))

# Replace
html_new = re.sub(pattern, indented_js.rstrip(), html, flags=re.DOTALL)

if html_new == html:
    print("ERROR: No replacement made!")
else:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_new)
    print("SUCCESS: Translation system updated!")
    print(f"Old length: {len(html)}")
    print(f"New length: {len(html_new)}")
