import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js', // Main entry file
            name: 'MyLibrary', // Global variable name for UMD/IIFE builds
            fileName: (format) => `my-library.${format}.js`,
        },
        rollupOptions: {
            output: [
                {
                    format: 'es',
                    entryFileNames: `my-library.esm.js`,
                    dir: 'dist/esm',
                },
                {
                    format: 'cjs',
                    entryFileNames: `my-library.cjs.js`,
                    dir: 'dist/cjs',
                },
                {
                    format: 'umd',
                    name: 'MyLibrary', // Global name for use in browser
                    entryFileNames: `my-library.umd.js`,
                    dir: 'dist/umd',
                },
                {
                    format: 'iife',
                    name: 'MyLibrary',
                    entryFileNames: `my-library.iife.js`,
                    dir: 'dist/cdn',
                },
            ],
        },
    },
});
