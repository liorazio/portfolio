import {fileURLToPath, URL} from 'node:url'

import {defineConfig, loadEnv} from 'vite'


import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd())

    const htmlPlugin = () => {
        return {
            name: 'html-transform',
            transformIndexHtml(html) {
                return html.replace(
                    /<%-VITE_APP_HOST_URL%>/,
                    env.VITE_APP_HOST_URL
                )
            }
        }
    }
    return {
        plugins: [htmlPlugin(), vue()],
        resolve: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        base: env.VITE_APP_HOST_URL,
        debug: env.VITE_DEBUG === 'true'
    }
})