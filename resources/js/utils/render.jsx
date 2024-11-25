import React from "react";
import { createRoot } from "react-dom/client";

export default function render(View) {
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);

    root.render(<View />);
}
