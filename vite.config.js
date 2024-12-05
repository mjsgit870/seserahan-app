import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            refresh: true,
        }),
        VitePWA({ registerType: 'autoUpdate' })
    ],
});
