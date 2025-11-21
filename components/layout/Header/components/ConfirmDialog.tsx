"use client";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div
      className="
      fixed inset-0 z-999
      flex items-center justify-center
      bg-black/40 backdrop-blur-md
    "
    >
      <div
        className="
        bg-[rgba(20,20,20,0.7)]
        backdrop-blur-xl 
        border border-white/15
        rounded-xs shadow-2xl
        w-[90%] max-w-sm p-6
      "
      >
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>

        <p className="text-white/70 leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-xs cursor-pointer bg-white/10 text-white/80 hover:bg-white/20"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>

          <button
            className="px-4 py-2 rounded-xs cursor-pointer bg-rust text-white hover:bg-rust/80"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
