# Higgsfield Asset Prompts — Brillore Holdings

The website ships complete with an SVG metrology gauge, gold lighting, and grid
backdrops — **no images are required to launch.** Use these prompts to generate
optional cinematic visuals that elevate the design later.

---

## ✅ Assets generated for this build (live in the site)

Generated via the Higgsfield MCP, model **`gpt_image_2`** (GPT Image 2), quality
`high`. Output webp placed in `public/assets/images/`. All verified: matte
black / charcoal / metallic gold / steel, photorealistic, **no text, no logos, no
labels**. Captioned with neutral wording (Operational Environments / Technical
Service Areas / Service Capability Preview) — never as real completed projects.

| File (`public/assets/images/`) | Slot | Aspect / res | Size |
| ------------------------------ | ---- | ------------ | ---- |
| `hero-terminal.webp`     | Home hero backdrop + video poster | 16:9 · 2k | ~243 KB |
| `oil-gas.webp`           | Services → Oil & Gas Measurements | 3:2 · 1k  | ~42 KB |
| `pipeline-integrity.webp`| Services → Pipeline & Asset Integrity | 3:2 · 1k | ~52 KB |
| `fire-safety.webp`       | Services → Fire Safety Systems | 3:2 · 1k | ~51 KB |
| `marine.webp`            | Services → Marine Services | 3:2 · 1k | ~64 KB |
| `contact-abstract.webp`  | Contact hero backdrop | 16:9 · 2k | ~86 KB |

**Exact prompts used**

1. **hero-terminal** — "Ultra-realistic cinematic wide photograph of a premium oil and gas industrial terminal at dusk. Matte black and deep charcoal atmosphere with warm metallic gold rim lighting catching the edges of polished steel pipelines, valves, and a large flow-metering skid. Subtle steel and silver tones, soft volumetric haze, shallow depth of field, elegant reflections on dark wet ground. Professional corporate industrial photography, moody low-key lighting, trustworthy and high-end mood. No people in focus, no visible text, no logos, no signage, no labels. Photorealistic, high detail, realistic machinery, not futuristic, not sci-fi, no neon."
2. **oil-gas** — "Ultra-realistic close-up photograph of a polished stainless-steel petroleum flow meter and valve manifold in a dark industrial oil terminal. Warm metallic gold rim lighting on the steel, deep charcoal and matte black background, subtle silver reflections, shallow depth of field, professional corporate industrial photography, clean precise and trustworthy mood. No people, no visible text, no logos, no labels, no readable numbers. Photorealistic, high detail, realistic, not futuristic, not sci-fi, no neon."
3. **pipeline-integrity** — "Ultra-realistic photograph of industrial pipeline inspection: rows of large steel pipelines with flanges and bolts in a dark facility, a pipeline pig launcher, metallic gold accent lighting catching the steel edges, deep charcoal and matte black tones, moody low-key lighting, professional corporate industrial photography. No people in focus, no visible text, no logos, no labels. Photorealistic, high detail, realistic, not futuristic, not sci-fi, no neon."
4. **fire-safety** — "Ultra-realistic photograph of an industrial fire safety system: deep red fire suppression valves, steel pipes and pressure manifolds in a clean dark technical room, warm metallic gold accent lighting, deep charcoal and matte black background, subtle steel and silver tones, professional corporate industrial photography, calm and controlled mood. No flames, no smoke, no people, no visible text, no logos, no labels. Photorealistic, high detail, realistic, not futuristic, not sci-fi, no neon."
5. **marine** — "Ultra-realistic photograph of a marine vessel berthed beside an industrial oil terminal at dusk, dark calm water with elegant reflections, steel mooring and loading equipment, warm metallic gold rim lighting, deep charcoal and matte black atmosphere, subtle silver tones, distant blurred small figures in safety gear, professional corporate industrial photography, trustworthy premium mood. No visible text, no logos, no labels, no readable signage. Photorealistic, high detail, realistic, not futuristic, not sci-fi, no neon."
6. **contact-abstract** — "Ultra-realistic premium abstract industrial background: extreme close-up of brushed steel and matte black surfaces with a single elegant sweep of warm metallic gold light, soft bokeh, deep charcoal tones, minimal sophisticated composition, subtle silver reflections, generous dark negative space. No people, no visible text, no logos, no labels, no machinery detail. Photorealistic, high detail, corporate and refined, not futuristic, not sci-fi, no neon."

### Hero video loop (LIVE on desktop)
Generated with **Kling 3.0 Turbo** (image-to-video) using `hero-terminal.webp` as
the start frame, 5s, 1080p, then compressed with ffmpeg to `hero-loop.webm`
(~498 KB) + `hero-loop.mp4` (~598 KB) in `public/assets/videos/`. Plays on desktop;
mobile uses the static webp poster. Encode commands are in
`public/assets/videos/README.md`.

**Prompt used:** "Very subtle, slow cinematic forward dolly through a premium oil
and gas industrial terminal at dusk. Gentle drifting volumetric haze, faint flicker
of warm gold rim light on polished steel pipelines, soft atmospheric movement.
Extremely slow and minimal camera motion, calm and elegant, no people, no text.
Photorealistic, moody matte-black and charcoal mood, not futuristic."

---

## Brand constraints (apply to every prompt)

- Palette: dark navy / near-black background, **gold / bronze / copper** accents.
- Mood: premium, corporate, industrial, technical, trustworthy. **Realistic** —
  not sci-fi, not futuristic, not a game.
- **No text, no logos, no fake branding, no readable certificate text, no
  close-up faces.**
- Cinematic lighting, high detail, professional photography style.

## Optimization (before adding to the site)

- **Images:** export to **`.webp`**, target < 250 KB each, max ~2000 px wide.
- **Video:** compressed **`.webm`** + **`.mp4`** fallback, < 5 MB, ~8 s loop.
- Use lazy loading; avoid huge files. Place finished assets in
  `public/assets/images/placeholders/`.

---

## 1. Hero video loop
> Cinematic 8-second seamless loop of a realistic oil and gas industrial facility
> at night, premium dark navy and gold lighting, petroleum terminal, pipelines,
> flow meters, subtle slow camera movement, professional corporate atmosphere,
> realistic, high detail, not sci-fi, not futuristic, no text, no logos, no
> close-up faces, no fake company branding.

**Use as:** optional background behind the Home hero (`src/components/home/Hero.tsx`).

## 2. Oil & gas measurement image
> Professional engineer inspecting a petroleum flow meter in an industrial oil
> terminal, realistic safety gear, dark navy and gold cinematic lighting, premium
> corporate photography style, technical precision, realistic, no text, no logos.

**Use as:** Oil & Gas Measurements service block.

## 3. Pipeline integrity image
> Close-up industrial pipeline inspection scene, metallic pipelines, gauges,
> technical inspection tools, dramatic realistic lighting, dark premium industrial
> environment, no text, no logos.

**Use as:** Pipeline & Asset Integrity service block.

## 4. Fire safety systems image
> Industrial fire safety system with red valves, pressure gauges, pipes, clean
> technical environment, realistic corporate photography, premium lighting, no
> text, no logos.

**Use as:** Fire Safety Systems service block.

## 5. Marine services image
> Marine vessel near an industrial port or oil terminal, technical support
> environment, engineers in safety gear seen from distance, realistic, premium
> corporate look, no text, no logos.

**Use as:** Marine Services service block.

## 6. Compliance visual
> Premium abstract compliance and certification visual, dark navy background, gold
> accents, elegant certificate-style shapes, corporate quality management mood, no
> readable fake text, no logos.

**Use as:** Compliance & Accreditation section background.

## 7. Services page background
> Premium industrial technical services collage showing flow meters, pipelines,
> safety systems, marine port, and inspection environment, dark navy and gold
> mood, realistic, professional, no text, no logos.

**Use as:** Services page hero backdrop.

---

## How to wire an asset in

Example — adding the hero video behind the gauge:

```tsx
// src/components/home/Hero.tsx — inside the background layers div
<video
  className="absolute inset-0 h-full w-full object-cover opacity-25"
  autoPlay muted loop playsInline
  poster="./assets/images/placeholders/hero-poster.webp"
>
  <source src="./assets/images/placeholders/hero-loop.webm" type="video/webm" />
  <source src="./assets/images/placeholders/hero-loop.mp4" type="video/mp4" />
</video>
```

Example — adding a photo to a service block: pass an image path into
`ServiceCategory` and render it with `loading="lazy"` and descriptive `alt` text.
