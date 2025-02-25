export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <a href="/tldraw?n=100" className="underline">
              /tldraw?n=100
            </a>
          </li>
          <li>
            <a href="/xyflow?n=100" className="underline">
              /xyflow?n=100
            </a>
          </li>
        </ul>
        <p>
          (query parameter <em>n</em> sets number of tables rendered)
        </p>
      </main>
    </div>
  );
}
