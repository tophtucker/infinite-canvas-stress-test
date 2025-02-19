"use client";

import { useCallback, useState } from "react";
import {
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import CustomNode from "./CustomNode";

const initialNodes = (function () {
  const n = 100;
  const w = 500;
  const h = 800;
  const cols = Math.sqrt(n);
  const nodes = [];
  for (let i = 0; i < n; i++) {
    nodes.push({
      id: `node-${i}`,
      type: "textUpdater",
      position: { x: (i % cols) * w, y: ~~(i / cols) * h },
      // data: { value: 123 },
    });
  }
  return nodes;
})();

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: CustomNode };

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  console.log("time", Date.now());

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.01}
        maxZoom={2}
      />
    </div>
  );
}

export default Flow;
