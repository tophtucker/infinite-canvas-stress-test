import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";
import Table from "../Table";

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
}

export default CustomNode;
