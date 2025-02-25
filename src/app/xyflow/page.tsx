"use client";

import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";
import { useSearchParams } from "next/navigation";

const getInitialNodes = function (n: number) {
  const w = 500;
  const h = 800;
  const cols = Math.floor(Math.sqrt(n));
  const nodes = [];
  for (let i = 0; i < n; i++) {
    nodes.push({
      id: `node-${i}`,
      type: "customNode",
      position: { x: (i % cols) * w, y: ~~(i / cols) * h },
      // data: { value: 123 },
    });
  }
  return nodes;
};

const nodeTypes = { customNode: CustomNode };

export default function Page() {
  const searchParams = useSearchParams();
  const n = searchParams.has("n") ? Number(searchParams.get("n")) : 100;
  const nodes = getInitialNodes(n);
  const edges = [];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.01}
        maxZoom={2}
      />
    </div>
  );
}
