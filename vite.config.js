import { defineConfig, rollupVersion } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig ({
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOption: {
            input:{
                index: path.resolve(__dirname, "src/index.html"),
            },
        },
    },
    plugins: [ViteEjsPlugin()],
});