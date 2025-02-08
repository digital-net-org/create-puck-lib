export const viteConfig = 
`/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            fileName: () => 'digital.puck.config.js'
        },
        rollupOptions: {
            output: {
                compact: true,
                strict: true,
            },
        },
    },
    plugins: [react()],
});
`;
