export const viteConfig = 
`/// <reference types="vite/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['cjs'],
            fileName: () => 'digital.puck.config.js'
        },
        rollupOptions: {
            output: {
                compact: true,
                strict: true,
            },
            external: [
                'react',
                'react-dom',
                '@measured/puck'
            ]
        },
    },
});
`;
