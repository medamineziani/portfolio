/**
 * Central registry for AI-generated media (Higgsfield.ai clips & stills).
 *
 * HOW TO USE
 * 1. Generate the assets in Higgsfield following ../../HIGGSFIELD.md
 * 2. Drop the exported files into  app/public/media/  with the exact
 *    file names referenced below.
 * 3. Flip a value from `null` to its path string. The site picks it up
 *    automatically; anything left as `null` keeps the current design.
 *
 * Paths are served from /public, so they start with "/media/...".
 */

export interface MediaClip {
  /** looping background / showcase video, no audio, H.264 .mp4 */
  video: string | null;
  /** first-frame still shown while the video loads (and as the reduced-motion fallback) */
  poster: string | null;
}

/** Full-bleed ambient loop behind the hero name. 1920x1080, 6-10s seamless loop. */
export const heroBackground: MediaClip = {
  video: null, // add "/media/hero.mp4" once a video loop is generated
  poster: "/media/hero-poster.jpg", // Higgsfield still (nano_banana_pro)
};

/**
 * Optional 16:9 visual for a project card, keyed by the project's English title.
 * `video` autoplays muted on hover; `image` is a static still.
 */
export const projectMedia: Record<string, { image?: string; video?: string }> = {
  "Deadlift AI": { image: "/media/deadlift-ai.jpg" },
  "PowerForm AI": { image: "/media/powerform-ai.jpg" },
  "Pallet Video Quality Control": { image: "/media/pallet-vision-qc.jpg" },
};
