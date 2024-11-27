import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/js/pages/editor/editor.jsx",
                "resources/js/pages/editor/contentForm.jsx",
                "resources/js/pages/products/products.jsx",
                "resources/js/pages/products/createProduct.jsx",
                "resources/js/pages/variations/variations.jsx",
                "resources/js/pages/business/business.jsx",
                // "resources/js/**/index.jsx",
                // 'resources/js/app.js',
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "resources/js"),
        },
    },
    build: {
        outDir: "public/build",
        rollupOptions: {
            output: {
                entryFileNames: "assets/[name].js",
                chunkFileNames: "assets/[name].js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
})
