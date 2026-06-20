# Hero video

**Status: ACTIVE.** `hero-loop.webm` (~498 KB) + `hero-loop.mp4` (~598 KB) play as
the desktop hero backdrop. Mobile uses the static `hero-terminal.webp` poster for
performance (the `<video>` is `hidden` below the `md` breakpoint).

Controlled in `src/components/home/Hero.tsx`:

```ts
const HERO_VIDEO_BASENAME = "./assets/videos/hero-loop"; // null = static image only
const HERO_VIDEO_FORMATS = ["webm", "mp4"];              // webm preferred, mp4 fallback
```

## How these files were made

1. **Generated** via Higgsfield (Kling 3.0 Turbo), image-to-video using
   `hero-terminal.webp` as the start frame, 5s, 1080p. Prompt is logged in
   `docs/higgsfield-prompts.md`.
2. **Upscaled** to 2K via Higgsfield (ByteDance video upscale, `aigc` preset).
3. **Boomeranged + compressed** with ffmpeg — the reverse+concat makes a seamless
   loop (end frame == start frame, no jump), scaled to 1600px:

   ```bash
   FC="[0:v]reverse[r];[0:v][r]concat=n=2:v=1:a=0,scale=1600:-2,setsar=1[v]"

   # mp4 (H.264)
   ffmpeg -y -i up.mp4 -filter_complex "$FC" -map "[v]" -an -c:v libx264 \
     -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart hero-loop.mp4

   # webm (VP9)
   ffmpeg -y -i up.mp4 -filter_complex "$FC" -map "[v]" -an -c:v libvpx-vp9 \
     -crf 40 -b:v 0 -row-mt 1 hero-loop.webm
   ```

To replace the loop later, regenerate, run the two commands above, and drop the
files here (same names). To disable video entirely, set `HERO_VIDEO_BASENAME = null`.
