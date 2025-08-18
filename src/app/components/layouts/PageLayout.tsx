"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function Search() {
  const searchParams = useSearchParams();
  const descripcion = searchParams.get("descripcion");
  const titulo = searchParams.get("titulo");

  return (
    <>
      <div className="text-xl">{titulo}</div>
      <div className="text-base">{descripcion}</div>
    </>
  );
}

export default function PageLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div
        className="box-border border-1 p-4 ..."
        style={{ width: "900px", height: "80px" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>
      </div>
      <div
        className="box-border border-1 p-4 ..."
        style={{ width: "900px", height: "800px" }}
      >
        {children}
      </div>
    </>
  );
}
