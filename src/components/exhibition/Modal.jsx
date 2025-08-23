// components/Modal.jsx
import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, title, children }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-[10px] flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog" aria-modal="true"
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="w-[348px] h-[600px] shrink-0 rounded-[15px] bg-white px-4 shadow-xl flex flex-col relative"
      >
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
