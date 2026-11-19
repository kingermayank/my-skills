# My Skills

Live site: [mayank-skills.vercel.app](https://mayank-skills.vercel.app).

Mayank Kinger's personal skill library. A small, responsive static website with downloadable agent workflows for Codex, Claude Code, and Grok Bot.

## Run locally

```sh
python3 -m http.server 4173 --directory public
```

Open http://localhost:4173. No dependencies or build step are needed.

## Contents

- `public/`: website, self-hosted Allo font, and downloadable files.
- `skills/ai-branding/`: canonical source for the AI Branding skill.
- `scripts/package.py`: refresh the ZIP and public skill directory after editing the source.
- `DESIGN.md`: observations from the requested visual reference and implementation choices.

## Updating a skill

Edit its source in `skills/`, then run `python3 scripts/package.py`. Commit and push the source and updated downloads. Deploy the static `public/` directory with `npx vercel deploy --prod`. The initial production deployment is live. Automatic GitHub deployments are not connected: the current Vercel GitHub integration reported insufficient repository access. After the repository owner grants the Vercel integration access to `kingermayank/my-skills`, connect it in Vercel to enable deployment on push.

The single-file portable Markdown is maintained in `public/downloads/ai-branding-portable.md`; update it alongside the source when procedures change. Never add course recordings, transcripts, handouts, private project files, credentials, or third-party example artwork to this repository.

## Credits

Visual reference: [Floatprompt Specs](https://floatprompt.com/specs/).

Typeface: [Allo by Josh Puckett](https://allo.joshpuckett.me/), redistributed unmodified under the SIL Open Font License. Licence included in `public/fonts/OFL.txt`.

The AI Branding workflow is independently adapted from House of gAi's AI for Branding Masterclass. See its source notes for attribution and the limits of source review. This site is not affiliated with House of gAi, Floatprompt, or the supported agent platforms.
