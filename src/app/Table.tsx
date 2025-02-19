import { useMemo } from "react";
import { getRandomData } from "./data";

export default function Table({ style } = { style: {} }) {
  const data = useMemo(() => {
    return getRandomData(20);
  }, []);
  const columns = Object.keys(data[0]);
  return (
    <table
      style={{
        background: "white",
        border: "1px solid black",
        borderRadius: 5,
        borderCollapse: "collapse",
        ...style,
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <td
              key={col}
              style={{ border: "1px solid black", padding: "2px 4px" }}
            >
              {col}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td
                key={col}
                style={{ border: "1px solid black", padding: "2px 4px" }}
              >
                {d[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
