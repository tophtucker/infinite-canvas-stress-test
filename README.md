See online: https://infinite-canvas-stress-test.vercel.app/

- [/tldraw?n=100](https://infinite-canvas-stress-test.vercel.app/tldraw?n=100)
- [/xyflow?n=100](https://infinite-canvas-stress-test.vercel.app/xyflow?n=100)

The query parameter _n_ sets the number of tables rendered.

In src/app there’s analogous directories for tldraw and xyflow:

- tldraw
  - CustomShape.tsx: renders Table.tsx
  - page.tsx: creates tldraw canvas with _n_ shapes
- xyflow
  - CustomNode.tsx: renders Table.tsx
  - page.tsx: creates xyflow canvas with _n_ nodes
- data.ts: generates random data for the table
- Table.tsx

Run locally: `npm run dev`

I wish I hadn’t used create-next-app lol, too much other junk in here.
