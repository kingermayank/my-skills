# Portable project memory and handoff

Use plain text records so the project can move between agents without relying on chat history, a Custom GPT, a particular vendor, or this skill's installation path. Preserve the user's existing structure. Keep one current decision source rather than several conflicting brand bibles.

## Suggested records

| Record | Contents |
| --- | --- |
| Brief | Offer, problem, audience, goals, constraints, required applications, supplied facts, open questions, labelled assumptions. |
| Research | Sources/dates, observed competitor and audience evidence, sample limits, interpretations, gaps to validate. |
| Strategy | Positioning, audience tension, promise, supporting reasons, pillars with creative/behavioural implications, approval status. |
| Voice and naming | Name and meaning/status, voice principles, contextual tone, mechanics, do/don't examples, checks actually performed. |
| Visual direction | Explored territories, selected concept and reason, reference principles, palette roles/values, typography, image and graphic rules. |
| Production | Master brand brief, fixed visual rules, permitted variation, model/version/settings where known, baseline assets, shot list and export targets. |
| Decisions | Date, decision, rationale, status, alternatives rejected, affected downstream assets. |
| Provenance | Source/asset, creator or origin, licence/receipt evidence, permission status, tool/model/version, prompt or run reference, meaningful edits, final output. |

Do not create empty files for every row in a small task. When updating strategy, identify which downstream assets may need revision. Keep old explorations separate from the current brief so an agent does not accidentally retrieve a rejected direction as authoritative.

## Original handoff skeleton

```markdown
# Brand continuation
Project and requested scope:
Current stage:
Files read and their current status:
Established brand facts:
Chosen positioning and pillars:
Name, voice, and selected visual direction:
Fixed production rules:
Assets produced and inspected:
Assets planned or awaiting tools:
Latest decisions and reasons:
Open questions / labelled assumptions:
Research, rights, and production checks still outstanding:
Next concrete action:
```

Fill the applicable fields; do not recite empty headings in chat. Use this record when transferring to another agent or continuing after context loss.

## Provenance without false assurances

Document the actual inputs and work. Prefer original or appropriately licensed source assets and retain their evidence. Verify any public-domain or Creative Commons conditions before relying on them. A reference image being publicly visible does not make it an authorised production input.

Describe material contributions accurately: concept selection, structure, composition, redrawing, retouching, typography, layout, editing, or animation. Keep enough intermediate work to reconstruct significant choices. Add content credentials when available and appropriate; they record provenance rather than guaranteeing ownership or clearance.

Do not copy regional legal claims, model terms, or indemnity promises from old course material into current client advice. If the assignment requires such a determination, research the current primary sources for the applicable jurisdiction and provider, and preserve the limits of that research. Continue the authorised design work with unresolved checks clearly identified.

## Capability fallback

If an agent cannot render images or video, preserve the strategic and visual specifications, reference roles, original prompts, invariants, shot IDs, target formats, and acceptance tests. State the missing capability plainly. Another agent should be able to produce the work without reconstructing the brief; it should also be able to distinguish instructions from assets that already exist.
