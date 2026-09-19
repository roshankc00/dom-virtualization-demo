"use client";

import data from "../index.json";
import { COLS, OVERSCAN, ROW_HEIGHT, VIEWPORT_HEIGHT } from "../libs/constant";
import { Row } from "../libs/types";
import { useVirtualList } from "@/hooks/useVirtualList";

const rows = data as Row[];

const TEMPLATE = COLS.map((c) => (c.key === "id" ? "300px" : "130px")).join(" ");


export default function Home() {
  const { onScroll, start, end, offsetY, totalHeight } = useVirtualList({
    count: rows.length,
    itemHeight: ROW_HEIGHT,
    viewportHeight: VIEWPORT_HEIGHT,
    overscan: OVERSCAN
  });

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl font-semibold">
        {rows.length.toLocaleString()} rows · rendering {end - start}
      </h1>

      <div
        onScroll={onScroll}
        className="overflow-auto rounded border text-sm"
        style={{ height: VIEWPORT_HEIGHT }}
      >
        <div className="w-max min-w-full">
          <div
            className="sticky top-0 z-10 grid items-center border-b bg-zinc-100 font-medium dark:bg-zinc-800"
            style={{ gridTemplateColumns: TEMPLATE, height: ROW_HEIGHT }}
          >
            {COLS.map((c) => (
              <div key={c.key} className="truncate px-3">{c.label}</div>
            ))}
          </div>

          <div className="relative" style={{ height: totalHeight }}>
            <div style={{ transform: `translateY(${offsetY}px)` }}>
              {rows.slice(start, end).map((r) => (
                <div
                  key={r.id}
                  className="grid items-center border-b"
                  style={{ gridTemplateColumns: TEMPLATE, height: ROW_HEIGHT }}
                >
                  {COLS.map((c) => (
                    <div key={c.key} className="truncate px-3">{r[c.key]}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}