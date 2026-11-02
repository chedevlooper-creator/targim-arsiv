"use client";

import {
  useEffect,
  useId,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import { X } from "lucide-react";

type ArchiveDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  variant?: "panel" | "wide" | "fullscreen" | "drawer";
  initialFocusRef?: RefObject<HTMLElement | null>;
  bodyClassName?: string;
};

/** Native top-layer dialogs provide focus trapping, Escape and focus restoration. */
export default function ArchiveDialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  variant = "panel",
  initialFocusRef,
  bodyClassName = "",
}: ArchiveDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      initialFocusRef?.current?.focus({ preventScroll: true });
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open, initialFocusRef]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className={`archive-dialog archive-dialog--${variant}`}
      onClose={() => {
        if (!ref.current?.open) onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const { left, right, top, bottom } =
          event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < left ||
          event.clientX > right ||
          event.clientY < top ||
          event.clientY > bottom
        ) {
          onClose();
        }
      }}
    >
      <header className="dialog-heading">
        <div className="min-w-0">
          {eyebrow && <p className="dialog-eyebrow">{eyebrow}</p>}
          <h2 id={titleId}>{title}</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="icon-button"
          aria-label="Pencereyi kapat"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </header>
      <div className={`archive-dialog-body ${bodyClassName}`}>{children}</div>
    </dialog>
  );
}
