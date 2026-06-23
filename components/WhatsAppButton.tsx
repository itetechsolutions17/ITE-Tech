"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919607522007?text=Hello%20ITE%20Tech%20Solutions,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-5 right-5
        md:bottom-6 md:right-6
        z-50
        flex items-center justify-center
        w-14 h-14
        md:w-16 md:h-16
        rounded-full
        bg-green-500
        hover:bg-green-600
        shadow-xl
        hover:scale-110
        transition-all duration-300
      "
    >
      <MessageCircle
        size={28}
        className="text-white md:w-8 md:h-8"
      />
    </a>
  );
}