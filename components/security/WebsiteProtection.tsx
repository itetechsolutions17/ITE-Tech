"use client";

import { useEffect } from "react";

export default function WebsiteProtection() {
    useEffect(() => {
        // Disable right-click context menu
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
        };

        // Prevent image dragging
        const handleDragStart = (event: DragEvent) => {
            if ((event.target as HTMLElement)?.tagName === "IMG") {
                event.preventDefault();
            }
        };

        // Restrict browser save and print shortcuts
        const handleKeyDown = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            const modifier = event.ctrlKey || event.metaKey;

            if (modifier && ["s", "p"].includes(key)) {
                event.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("dragstart", handleDragStart);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("dragstart", handleDragStart);
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, []);

    return null;
}
