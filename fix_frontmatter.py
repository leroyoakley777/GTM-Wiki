#!/usr/bin/env python3
import os
import re

def extract_frontmatter(content):
    """Return (frontmatter_lines, rest) where frontmatter_lines is list of lines
    between the first and second '---' (exclusive)."""
    lines = content.splitlines()
    if not lines or lines[0].strip() != '---':
        return [], content  # no frontmatter
    # find the second '---'
    idx = 1
    while idx < len(lines) and lines[idx].strip() != '---':
        idx += 1
    if idx >= len(lines):
        # no closing ---, treat as no frontmatter
        return [], content
    frontmatter = lines[1:idx]
    rest = lines[idx:]  # includes the closing --- and after
    return frontmatter, rest

def parse_frontmatter(fm_lines):
    """Parse frontmatter lines into a dict of key:value (simple)."""
    data = {}
    for line in fm_lines:
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        if ':' in line:
            key, val = line.split(':', 1)
            data[key.strip()] = val.strip()
    return data

def format_frontmatter(data):
    """Format dict as frontmatter lines (simple)."""
    lines = []
    for key, val in data.items():
        lines.append(f"{key}: {val}")
    return lines

def compute_tags(filepath):
    """Compute tags based on directory and filename."""
    # Get relative path from docs/
    rel_path = os.path.relpath(filepath, '/Users/leroyoakley/gtm-wiki/docs')
    # Split into components
    parts = rel_path.split(os.sep)
    # Remove filename
    if len(parts) == 0:
        return []
    dir_part = parts[0] if len(parts) > 1 else ''
    # Remove number prefix and extension from filename
    if len(parts) > 1:
        filename = parts[-1]
    else:
        filename = parts[0]
    # Remove leading numbers and hyphens
    name = re.sub(r'^\d+[-_]', '', filename)
    name = re.sub(r'\.md$', '', name)
    # Split by hyphens and take first 2 words
    words = name.split('-')
    # Take up to 2 words from the name
    name_tags = [w.lower() for w in words[:2] if w]
    # Directory tag
    dir_tag = [dir_part.lower()] if dir_part else []
    # Combine, avoid duplicates
    tags = []
    for t in dir_tag + name_tags:
        if t not in tags:
            tags.append(t)
    # Ensure we have at least 2 tags, if not add some generic ones
    if len(tags) < 2:
        tags.append('gtm')
        if len(tags) < 2:
            tags.append('foundations')
    # Limit to 4 tags
    return tags[:4]

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    fm_lines, rest = extract_frontmatter(content)
    fm_data = parse_frontmatter(fm_lines)
    
    changed = False
    
    # Add status if missing
    if 'status' not in fm_data:
        fm_data['status'] = 'active'
        changed = True
    
    # Add tags if missing
    if 'tags' not in fm_data:
        tags = compute_tags(filepath)
        fm_data['tags'] = tags
        changed = True
    
    if changed:
        # Format frontmatter back to lines
        new_fm_lines = format_frontmatter(fm_data)
        # Reconstruct content
        new_content = '---\n' + '\n'.join(new_fm_lines) + '\n---\n' + '\n'.join(rest[1:])  # skip the first line of rest which is the closing --- we kept?
        # Actually, rest includes the closing --- and everything after.
        # We want to keep the closing --- and after.
        # So we do: ---\n<new frontmatter>\n---\n<content after second --->
        # But note: rest[0] is the line with '---' (the closing one)
        # So we want: ---\n<new frontmatter>\n---\n<rest[1:]>
        new_content = '---\n' + '\n'.join(new_fm_lines) + '\n---\n' + '\n'.join(rest[1:])
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")
    else:
        print(f"No change: {filepath}")

def main():
    docs_root = '/Users/leroyoakley/gtm-wiki/docs'
    for root, dirs, files in os.walk(docs_root):
        for f in files:
            if f.endswith('.md'):
                process_file(os.path.join(root, f))

if __name__ == '__main__':
    main()