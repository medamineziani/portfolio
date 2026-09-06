# Higgsfield.ai production brief — portfolio visuals

Goal: make the portfolio feel more cinematic and creative without hurting
professionalism (it's used for engineering-internship applications).

The site's look: near-black background (`#0a0c10`), cyan accent (`#22d3ee`),
glassmorphism, thin grid lines, Inter font. Everything you generate should sit
in that palette — **dark, cyan/blue, high-contrast, minimal**. Avoid warm
colors, faces, text overlays, and busy scenes.

Where the files land: `app/public/media/`. After exporting, open
`app/src/data/media.ts` and replace the matching `null` with the file path.

---

## 1. Hero background loop — `hero.mp4` + `hero-poster.jpg`

Full-bleed ambient loop behind your name. It sits under a dark overlay and a
particle layer, so keep it **slow, low-contrast, and abstract** — motion should
be barely noticeable.

- **Format:** 16:9, 1920x1080, MP4 (H.264), **6–10 s, seamless loop**, no audio
- **Camera:** very slow push-in or lateral drift, no cuts
- **Target size:** under 6 MB (compress, see bottom)

**Prompt A — data / network (recommended, matches the particle layer):**
> Abstract dark technology background, deep navy-black void, faint glowing cyan
> network nodes and thin connecting lines drifting slowly, subtle depth of field,
> particles floating, volumetric haze, cinematic, minimal, 4k, slow parallax
> drift, seamless loop

**Prompt B — server room / infrastructure (matches your networks/ASR focus):**
> Slow cinematic dolly through a dark data center aisle, out-of-focus cyan and
> blue server LEDs, long exposure light trails, heavy bokeh, moody, desaturated,
> black shadows, no people, no text, seamless loop

**Prompt C — liquid / generative:**
> Dark abstract fluid simulation, black background, thin cyan iridescent
> filaments swirling very slowly, ink in water, high contrast, negative space,
> minimalist, 4k, seamless loop

Negative / avoid: `text, watermark, logo, people, faces, bright colors, warm
light, fast motion, camera shake, flicker`.

Export the first frame (or a mid-frame) as `hero-poster.jpg`, 1920x1080, < 300 KB.

---

## 2. Project card clips — 16:9, 1280x720, 3–5 s loop, < 3 MB each

Optional hover clips per project. Same dark-cyan treatment. Keyed by the
project's English title in `media.ts`. Suggested set:

| File name             | Project                         | Prompt seed |
| --------------------- | ------------------------------- | ----------- |
| `deadlift-ai.mp4`     | Deadlift AI                     | `Wireframe human figure lifting, cyan pose-estimation skeleton and joint markers overlaid on a dark grid, motion-capture aesthetic, thin vector lines, black background, subtle rotation, minimal` |
| `powerform-ai.mp4`    | PowerForm AI                    | `Abstract dark SaaS dashboard UI panels floating in 3D space, cyan line charts animating, glassmorphism cards, soft glow, slow parallax, black background, no text` |
| `pallet-vision-qc.mp4`| Pallet Video Quality Control    | `Top-down view of stacked cartons on a pallet, cyan scanning laser line sweeping across, bounding boxes snapping into place, industrial, dark, technical, minimal` |
| `iot-network-sim.mp4` | IoT Simulator & Network Routing | `Isometric network topology diagram, glowing cyan nodes and routers, data packets traveling along links as light pulses, dark background, schematic, slow zoom` |
| `cyber-lab.mp4`       | Cybersecurity Lab               | `Dark terminal aesthetic, cascading monospaced cyan characters, faint hexagonal shield forming from lines, matrix-like but restrained, black background` |
| `fruizy.mp4`          | Fruizy                          | `Minimal product landing page mockup on a phone, frozen fruit, condensation, cyan-tinted studio lighting on black, slow rotate` (this one can be slightly more colorful) |

For each, also export a still with the same base name (`deadlift-ai.jpg`, …),
1280x720, < 200 KB — it's the poster and the reduced-motion fallback.

Then in `media.ts`:
```ts
export const projectMedia = {
  "Deadlift AI": { video: "/media/deadlift-ai.mp4", image: "/media/deadlift-ai.jpg" },
  "PowerForm AI": { video: "/media/powerform-ai.mp4", image: "/media/powerform-ai.jpg" },
  // ...
};
```

---

## 3. Optional — profile treatment

Keep the real photo (`app/src/assets/ziani.jpg`) as the main avatar for
credibility. If you want a stylized version elsewhere (e.g. a favicon or an
"about" flourish), generate a **subtle** one:
> Portrait, cyan rim light on dark background, cinematic, editorial, desaturated,
> shallow depth of field — do not exaggerate features, keep it realistic

Don't use an AI-generated face as your primary headshot on an application site.

---

## Compression (do this before committing — keep the repo light)

```bash
# video: strip audio, faststart, CRF 28 (raise to 30–32 if still large)
ffmpeg -i raw-hero.mp4 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart -vf "scale=1920:-2" hero.mp4

# poster / stills
ffmpeg -i raw-hero.mp4 -vf "select=eq(n\,0),scale=1920:-2" -vframes 1 -q:v 4 hero-poster.jpg
```

Rules of thumb: hero < 6 MB, each project clip < 3 MB, each still < 300 KB.
If total media pushes the page over ~15 MB, drop the project videos and keep
only stills.

---

## Checklist

- [ ] `hero.mp4` + `hero-poster.jpg` generated, compressed, in `app/public/media/`
- [ ] `heroBackground` filled in `app/src/data/media.ts`
- [ ] `npm run dev` — hero loop plays, text still readable, no layout shift
- [ ] Tested with OS "reduce motion" on → falls back to the poster
- [ ] Project clips + stills added and mapped in `projectMedia`
- [ ] `npm run build` passes, `dist/` size sane
- [ ] Commit media with the code
