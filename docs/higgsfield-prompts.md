# Higgsfield Asset Prompts — Brillore Holdings

The website ships complete with an SVG metrology gauge, gold lighting, and grid
backdrops — **no images are required to launch.** Use these prompts to generate
optional cinematic visuals that elevate the design later.

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
