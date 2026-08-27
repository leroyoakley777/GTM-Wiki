#!/usr/bin/env python3
import os

def insert_failure_modes_pricing():
    filepath = '/Users/leroyoakley/gtm-wiki/docs/data/04-pricing-as-gtm.md'
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    # Find the line index of "## Sources"
    for i, line in enumerate(lines):
        if line.strip() == '## Sources':
            # Insert before this line
            failure_section = [
                '\n',
                '## Failure modes\n',
                '\n',
                '- Fail: Setting prices based solely on cost-plus or competitor benchmarking without considering customer value.\n',
                '- When it breaks: When market conditions change (e.g., new entrant, economic shift) and pricing is not revisited.\n',
                '- Pitfall: Overcomplicating pricing tiers leading to confusion and increased sales cycle.\n',
                '- Risk: Ignoring price elasticity and demand curves, leading to lost revenue or lost market share.\n',
                '- Objection: "Our product is too expensive" – often a signaling of poor value communication rather than actual price.\n',
                '\n'
            ]
            # Insert the failure_section at position i
            lines[i:i] = failure_section
            break
    
    with open(filepath, 'w') as f:
        f.writelines(lines)
    print(f"Updated {filepath}")

def insert_failure_modes_revenue():
    filepath = '/Users/leroyoakley/gtm-wiki/docs/foundations/revenue-architecture.md'
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    # Find the line index of "## Further Reading"
    for i, line in enumerate(lines):
        if line.strip() == '## Further Reading':
            # Insert before this line
            failure_section = [
                '\n',
                '## Failure modes\n',
                '\n',
                '- Fail: Designing GTM motions without considering the factory model, leading to siloed teams and misaligned metrics.\n',
                '- When it breaks: When scaling exceeds the capacity of the weakest production line, causing bottlenecks and quality drops.\n',
                '- Pitfall: Focusing on volume metrics (like leads) without balancing with efficiency and quality metrics.\n',
                '- Risk: Ignoring the interdependence of GTM motions, leading to suboptimal resource allocation and internal competition.\n',
                '- Objection: "We need to customize each motion for each product" – often leads to complexity that outweighs benefits; standardization across motions improves efficiency.\n',
                '\n'
            ]
            lines[i:i] = failure_section
            break
    
    with open(filepath, 'w') as f:
        f.writelines(lines)
    print(f"Updated {filepath}")

if __name__ == '__main__':
    insert_failure_modes_pricing()
    insert_failure_modes_revenue()