import { useMemo } from "react";
import { getRandomData } from "./data";

export default function Table() {
  const data = useMemo(() => {
    return getRandomData(200);
  }, []);
  const columns = Object.keys(data[0]);
  return (
    <table
      style={{
        background: "white",
        border: "1px solid black",
        borderRadius: 5,
        borderCollapse: "collapse",
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
