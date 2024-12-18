import {defineConfig} from 'vitest/config'


export default defineConfig({
    test: {
        coverage: {
            provider: 'istanbul'
        },
        environment: 'jsdom', 
        globals: true,
        setupFiles: './setupTests.js'
    }
})
