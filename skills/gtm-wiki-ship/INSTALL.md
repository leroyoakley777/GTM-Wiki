# Install gtm-wiki-ship on the Hermes machine

From the local GTM-Wiki clone:

```bash
chmod +x skills/gtm-wiki-ship/scripts/*.sh
mkdir -p ~/.hermes/skills/gtm
ln -sfn "$(pwd)/skills/gtm-wiki-ship" ~/.hermes/skills/gtm/gtm-wiki-ship
```

Confirm Hermes can see it:

```bash
ls -l ~/.hermes/skills/gtm/gtm-wiki-ship/SKILL.md
```

Then tell Hermes: "Use the gtm-wiki-ship skill. Start the next backlog item."
