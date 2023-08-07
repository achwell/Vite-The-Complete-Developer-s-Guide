import {defineConfig, UserConfigExport} from 'vite'
import react from '@vitejs/plugin-react'
import postCssNesting from "postcss-nesting"
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig((args) => {
    const {command, mode, ssrBuild} = args;

    console.log({command, mode, ssrBuild})

    const options: UserConfigExport = {
        plugins: [react()],
        css: {
            postcss: {
                plugins: [
                    postCssNesting()
                ]
            }
        },
        base: "/",
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, "index.html"),
                    another: resolve(__dirname, "another-route/index.html"),
                }
            },
            target: "esnext"
        }
    }
    return options;
})
