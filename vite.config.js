import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            // eslint-disable-next-line no-undef
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
        },
    },
    resolve: {
        alias: {
            src: resolve('src/'),
        },
    },
});
