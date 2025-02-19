"use client";

import { useCallback, useState } from "react";
import { createTLStore, defaultShapeUtils, loadSnapshot, Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import { MyShapeUtil } from "./CustomShape";

const schema = {
  schemaVersion: 2,
  sequences: {
    "com.tldraw.store": 4,
    "com.tldraw.asset": 1,
    "com.tldraw.camera": 1,
    "com.tldraw.document": 2,
    "com.tldraw.instance": 25,
    "com.tldraw.instance_page_state": 5,
    "com.tldraw.page": 1,
    "com.tldraw.instance_presence": 6,
    "com.tldraw.pointer": 1,
    "com.tldraw.shape": 4,
    "com.tldraw.asset.bookmark": 2,
    "com.tldraw.asset.image": 5,
    "com.tldraw.asset.video": 5,
    "com.tldraw.shape.group": 0,
    "com.tldraw.shape.text": 2,
    "com.tldraw.shape.bookmark": 2,
    "com.tldraw.shape.draw": 2,
    "com.tldraw.shape.geo": 9,
    "com.tldraw.shape.note": 8,
    "com.tldraw.shape.line": 5,
    "com.tldraw.shape.frame": 0,
    "com.tldraw.shape.arrow": 5,
    "com.tldraw.shape.highlight": 1,
    "com.tldraw.shape.embed": 4,
    "com.tldraw.shape.image": 4,
    "com.tldraw.shape.video": 2,
    "com.tldraw.binding.arrow": 0,
  },
};

const baseStore = {
  "document:document": {
    gridSize: 10,
    name: "",
    meta: {},
    id: "document:document",
    typeName: "document",
  },
  "page:page": {
    meta: {},
    id: "page:page",
    name: "Page 1",
    index: "a1",
    typeName: "page",
  },
};

const snapshot = (function () {
  const n = 100;
  const w = 500;
  const h = 800;
  const cols = Math.sqrt(n);
  const store = { ...baseStore };
  for (let i = 0; i < n; i++) {
    const id = `shape:s${i}`;
    store[id] = {
      id,
      type: "my-custom-shape",
      x: (i % cols) * w,
      y: ~~(i / cols) * h,
      props: { w: 240, h: 485 },
      rotation: 0,
      isLocked: false,
      opacity: 1,
      meta: {},
      parentId: "page:page",
      index: "a1",
      typeName: "shape",
    };
  }
  return { store, schema };
})();

export default function App() {
  const [store] = useState(() => {
    const newStore = createTLStore({
      shapeUtils: [...defaultShapeUtils, MyShapeUtil],
    });
    loadSnapshot(newStore, snapshot);
    return newStore;
  });

  const onMount = useCallback(
    (editor) => void editor.setCurrentTool("hand"),
    [],
  );

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw store={store} shapeUtils={[MyShapeUtil]} onMount={onMount} />
    </div>
  );
}
