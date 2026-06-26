#!/usr/bin/env python3
# Script to replace old translation system with complete one

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find start and end markers
start_marker = '    // ========== LANGUAGE SWITCHER =========='
end_marker = '    if (savedLang === \'en\') {\n      switchLang(\'en\');\n    }'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker) + len(end_marker)

if start_idx == -1 or end_idx == -1:
    print("ERROR: Could not find translation system markers!")
    exit(1)

# Read new translation system
with open('complete_translations.js', 'r', encoding='utf-8') as f:
    new_translations = f.read()

# Add proper indentation (4 spaces)
new_translations_indented = '\n'.join('    ' + line if line.strip() else line
                                       for line in new_translations.split('\n'))

# Replace
new_content = content[:start_idx] + new_translations_indented + content[end_idx:]

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Translation system updated successfully!")
print(f"Removed {end_idx - start_idx} characters")
print(f"Added {len(new_translations_indented)} characters")
