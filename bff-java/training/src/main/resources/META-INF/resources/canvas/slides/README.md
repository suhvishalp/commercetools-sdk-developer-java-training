Designed slides, one file per Canvas concept slide: `<task>-<n>.svg` (or `.png`), 16:9 (1920×1080 or Google's
960×540 both scale). Sources: claude-design exports, or Google Slides → File → Download → Scalable Vector Graphics
(.svg, current slide), one slide at a time. Wire them into a task with `python3 tools/use-designed-slides.py <task>`,
then `./build-bundle.sh`. Slide numbers with no file keep their hand-drawn draft, so partial sets are fine.
Text in Google exports references fonts by name — the brand fonts in `public/fonts` render; others fall back.
