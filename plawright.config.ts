import { defineConfig } from '@playwright/test';
 
export default defineConfig({
    timeout: 60000,
    use: {
        navigationTimeout: 60000,
        browserName: 'chromium',
        headless: false,
        viewport: { width: 1920, height: 1080 },
        channel: 'chrome',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
});