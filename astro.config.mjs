// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // ... 其他配置
    trailingSlash: 'always',     // 推荐带斜杠
    build: {
        format: 'directory',       // 生成 /thank-you/index.html
    }
});
