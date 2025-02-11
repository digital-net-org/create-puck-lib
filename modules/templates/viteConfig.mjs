export const viteConfig = 
`/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({ 
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['cjs'],
            fileName: () => 'digital.puck.config.js'
        },
        rollupOptions: {
            input: './src',
            output: {
                compact: true,
                strict: true,
            },
        },
    },
    plugins: [...(mode === 'production' ? [] : [react()])],
}));
`;
