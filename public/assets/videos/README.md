# Hero video (optional)

The hero works perfectly as a static image and does **not** require a video.

To enable an optional cinematic loop on **desktop** (mobile always keeps the
lightweight static webp for performance):

1. Generate an ~8s seamless loop (see prompt #1 "Hero video loop" in
   `docs/higgsfield-prompts.md`).
2. Compress and export two files into this folder:
   - `hero-loop.webm` (VP9/AV1, target < 4 MB)
   - `hero-loop.mp4` (H.264 fallback)
3. In `src/components/home/Hero.tsx`, set:
   ```ts
   const HERO_VIDEO_BASENAME = "./assets/videos/hero-loop";
   ```
4. Rebuild. `hero-terminal.webp` is automatically used as the poster and the
   mobile fallback.
