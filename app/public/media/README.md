# AI-generated media

Drop your Higgsfield.ai exports here, then wire them up in
`app/src/data/media.ts` (change a `null` to the matching path).

Expected files (all optional):

| File                     | What it is                        | Spec                                  |
| ------------------------ | --------------------------------- | ------------------------------------- |
| `hero.mp4`               | Hero ambient background loop      | 1920x1080, H.264 .mp4, 6-10s seamless loop, no audio, < 6 MB |
| `hero-poster.jpg`        | First frame of the hero loop      | 1920x1080 JPG, < 300 KB               |
| `<project>.mp4`          | Project card hover clip           | 1280x720, H.264 .mp4, 3-5s loop, no audio, < 3 MB |
| `<project>.jpg`          | Project card still                 | 1280x720 JPG, < 200 KB               |

Compress before committing (e.g. `ffmpeg -i in.mp4 -vcodec libx264 -crf 28 -an -movflags +faststart hero.mp4`).

Full shot list and prompts: see `HIGGSFIELD.md` at the repo root.
