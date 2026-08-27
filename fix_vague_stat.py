#!/usr/bin/env python3
import os

# Paths
registry_path = '/Users/leroyoakley/gtm-wiki/RESEARCH/gtm-wiki/SOURCES_REGISTRY.md'
target_path = '/Users/leroyoakley/gtm-wiki/docs/foundations/03-positioning-and-messaging.md'

# 1. Add new source to registry
with open(registry_path, 'r') as f:
    registry_lines = f.readlines()

# Find the end of the Sources section (before the Claim-verification status)
# We'll look for the line that starts with '## Claim-verification status'
insert_idx = None
for i, line in enumerate(registry_lines):
    if line.strip() == '## Claim-verification status':
        insert_idx = i
        break

if insert_idx is None:
    # Fallback: append at the end
    insert_idx = len(registry_lines)

# New source row
new_row = '235| Digital Silk | 2026 | 69% of startup project failures can be attributed to marketing-related causes when you combine ICP misalignment, messaging failure, poor positioning, and channel inefficiency | docs/foundations/03-positioning-and-messaging.md\n'

# Insert the new row before the Claim-verification status line
registry_lines.insert(insert_idx, new_row)

with open(registry_path, 'w') as f:
    f.writelines(registry_lines)

print(f"Added source to {registry_path}")

# 2. Replace the vague stat claim in the target file
with open(target_path, 'r') as f:
    target_lines = f.readlines()

# Find the line containing the vague claim
for i, line in enumerate(target_lines):
    if 'Most new product launches fail at the messaging layer, not the product layer.' in line:
        # Replace with the new sentence
        target_lines[i] = '69% of startup project failures can be attributed to marketing-related causes, including ICP misalignment, messaging failure, poor positioning, and channel inefficiency (Digital Silk, 2026).\n'
        break

with open(target_path, 'w') as f:
    f.writelines(target_lines)

print(f"Updated {target_path}")