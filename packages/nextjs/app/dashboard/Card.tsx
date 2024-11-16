import { ReactNode } from "react";

export default function Card({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="bg-white rounded-lg p-4 drop-shadow-2xl">
      {title && <p className="text-lg font-semibold mb-2">{title}</p>}
      <div className="w-full">{children}</div>
    </div>
  );
}
