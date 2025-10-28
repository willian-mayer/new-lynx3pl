// src/components/FloatingButton.tsx
import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <button
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        rounded-full px-4 py-3
        bg-black text-white font-medium shadow-lg
        hover:bg-blue-700 transition
        hidden
      "
    >
      {/* Texto solo visible en pantallas md+ */}
      <span className="hidden md:block">Any Questions? Ask now!</span>

      {/* Ícono visible en móviles */}
      <span className="block md:block">
        <MessageCircle className="w-6 h-6" />
      </span>
    </button>
  );
}
