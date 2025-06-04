/* =========================
   MEDIA GALLERY STYLING
   ========================= */

/* 1) Apply a subtle outer padding to the entire <media-gallery> element */
media-gallery {
  display: block;              /* ensure it behaves like a block container */
  padding: 1rem;               /* adjust as needed for “breathing room” */
  border-radius: 0.75rem;      /* overall rounding of the host element */
  background-color: var(--color-background, #fff); /* optional white bg fallback */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* subtle drop-shadow */
  overflow: hidden;            /* prevent children from overflowing the rounded corners */
}

/* 2) If your viewer area inside <media-gallery> is a direct child with class "GalleryViewer" */
media-gallery [id^="GalleryViewer"] {
  border-radius: 0.5rem;       /* round the internal viewer frame as well */
  overflow: hidden;            /* clip any media to the same rounded shape */
  padding: 0.5rem;             /* add inner padding around videos/images */
  background-color: inherit;   /* inherit the host’s background for a seamless look */
}

/* 3) Thumbnails container: give them some spacing and rounded corners too */
media-gallery [id^="GalleryThumbnails"] {
  margin-top: 1rem;            /* separate thumbnails from the main viewer */
  display: flex;
  gap: 0.5rem;                 /* space between each thumbnail */
  overflow-x: auto;            /* allow horizontal scroll on mobile */
  padding-bottom: 0.25rem;     /* small bottom padding for scrollbar clearance */
}

/* 4) Individual thumbnail wrappers: rounded corners + inner padding */
media-gallery [data-target] {
  flex-shrink: 0;              /* so they don’t shrink when overflow happens */
  border-radius: 0.5rem;
  overflow: hidden;            /* clip the thumbnail image/video to the round shape */
  background-color: var(--color-background, #fff);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* 4a) Add a hover/focus highlight for each thumbnail */
media-gallery [data-target]:hover,
media-gallery [data-target]:focus-within {
  transform: scale(1.03);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

/* 5) Ensure the <button> inside each thumbnail is fully covering the area (for easier tapping) */
media-gallery [data-target] button {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  padding: 0;
  cursor: inherit;
}

/* 6) If there is a live‐region or status element, give it a minimal style */
media-gallery [id^="GalleryStatus"] {
  position: absolute;
  left: -9999px;   /* visually hidden but still read by screen readers */
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
}

/* 7) Media content inside the viewer (e.g. <img> or <video>) */
media-gallery [data-media-id] img,
media-gallery [data-media-id] video {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;   /* match the viewer’s internal rounding */
  object-fit: contain;     /* ensure the entire media shows without distortion */
  display: block;
}

/* 8) Optional: give the active slide a soft border glow */
media-gallery [data-media-id].is-active {
  box-shadow: 0 0 0 2px var(--accent, #ff7e2d);
  transition: box-shadow 0.3s ease;
}

/* 9) On narrow screens, reduce padding so it still “fits” nicely */
@media (max-width: 600px) {
  media-gallery {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
  media-gallery [id^="GalleryViewer"] {
    padding: 0.25rem;
    border-radius: 0.4rem;
  }
  media-gallery [data-target] {
    border-radius: 0.4rem;
  }
}
