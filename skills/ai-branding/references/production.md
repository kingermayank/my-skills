# Identity and consistent image production

## Establish the production brief

Before a generation session, reconcile the latest name, positioning, pillars, voice, selected territory, and reference decisions. Create a reusable master brand brief containing brand overview, positioning, visual implications of each pillar, visual translation of voice, chosen territory, specific exclusions, and success criteria.

Do not send the entire research archive to every image model. Translate it into concrete visual instructions and keep the strategic record available for critique. Inspect the combined prompt: duplicated, contradictory, or inherited instructions can quietly ask for the wrong quantity or format.

If results drift, inspect the stored instructions before assuming the model needs a longer prompt. Remove conflicting context, simplify the brief, and isolate the step that introduced the error. A prompt concatenator joins text; it does not inherently reconcile contradictions.

## Logo development

Explore relevant mark types and symbols through sketches, language, and small generation tests. Start with structure and silhouette, often in one colour, before adding material effects. Choose the number of colours and mark/wordmark/lockup form for the brand rather than copying a demo's constraints.

When using outside references, extract construction logic, designed tension, what is absent, and a transferable principle. Run the strategic brief alone as a baseline, introduce one reference's principles, then compare. Keep each reference analysis separate until combining deliberate choices. Attribute sources without assuming attribution grants reuse rights.

A portable production chain is:

```text
reference → principle analysis ┐
current master brand brief ───┼→ combined generation brief → candidates → vector refinement
specific mark instruction ────┘
```

Branch from a strong candidate and preserve the baseline. Change one meaningful variable at a time. Use generated work as a sketch when execution is weak; redraw rather than endlessly rerolling a nearly correct mark. A “vector-style” bitmap is still a bitmap. Inspect an exported SVG's paths, embedded images, curves, spacing, and small-size behaviour before calling it an editable production asset.

Test the final mark in monochrome, reversed, small and large, with its wordmark/lockups, and in relevant applications. Inspect counters, negative space, optical balance, kerning, and unwanted similarity. An AI resemblance critique is an initial design check, not legal clearance.

## Icon and illustration systems

From the brand's approved reference, extract a reusable specification: silhouette/massing, fill/stroke logic, caps/joins, corner treatment, negative space, detail density, texture, grid, alignments, and permitted variation. Keep the subject/action instruction separate from these rules.

Combine **fixed style specification + new subject/action + approved reference image**. Test at least two different subjects to demonstrate transfer, not just repeated copies of one icon. Keep grid, weight, spacing, complexity, and optical size consistent. Vectorise if appropriate, then inspect and refine; tracing alone does not establish quality or originality.

## Art-direct images explicitly

Build a concise brief from seven controllable dimensions: **subject, environment, medium, style, composition, lighting, mood**. Add aspect ratio, output dimensions, and exclusions separately. Do not fill every dimension with adjectives when a smaller prompt is clearer.

With references, distinguish:

- **Composition/content:** framing, pose, arrangement, scale.
- **Style:** colour, texture, materials, light, finish.
- **Subject identity:** the recurring product, object, or character.

A visual description can help find useful terms, but check that it matches the actual image. Style transfer does not reliably preserve exact logos, product geometry, or people. Reference weights and parameter names differ by tool/version; verify them rather than treating historical course values as universal.

## Choose and lock a baseline

Start with one simple hero image: one subject, minimal props, controlled surface/background, and clear framing. If a model comparison is useful, send the same brief and equivalent settings to a small number of available models. Compare brand fit, lighting/materials, composition control, identity fidelity, and repeatability. A single lucky frame is weak evidence of production reliability.

Choose a baseline and document its rules. Run a targeted edit that should preserve the subject while changing one property. Keep the original and record what changed. Increase resolution or generation volume after the visual direction is working.

## Extend the world through a shot list

Convert one approved image into a small set using controlled changes in angle, crop, action, or prop. Keep lighting, colour grade, subject details, materials, architecture, and identity assets explicit as invariants. Reference the approved frame consistently; repeated edits can accumulate drift.

Use a structured list or JSON array with stable shot IDs, prompt, changes, invariants, aspect ratio, and output target. In a node tool, split to an array and select entries; if a delimiter is required, ensure it does not also occur inside prompts. Validate item count and nonempty prompts before running the batch. Do not create unrequested Cartesian combinations.

Inspect the set side by side for identity drift, inconsistent materials/light, implausible reflections or scale, text errors, and unintended additions. Re-run only failed shots when possible. Stop once the set meets the brief and document the chosen pipeline. Seamless patterns require visible edge-repeat testing; an instruction or parameter alone does not prove a seamless tile.
