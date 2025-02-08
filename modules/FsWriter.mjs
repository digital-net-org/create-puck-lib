import { accessSync, promises as fs } from 'fs';
import { join } from 'path';
import { src } from './templates/src.mjs';
import { storybook } from './templates/storybook.mjs';
import { tsConfig } from './templates/tsConfig.mjs';
import { viteConfig } from './templates/viteConfig.mjs';

export class FsWriter {
    static async createSrc(path) {
        if (!path) {
            return;
        }
        if (!this.pathExists(path)) {
            try {
                await fs.mkdir(path, { recursive: true });
            } catch (error) {
                throw new Error(`Failed to create directory: ${error.message}`);
            }
        }
    }

    static async createSrcTree(path) {
        const base = path || '.';
        await fs.mkdir(join(base, '.storybook'), { recursive: true });
        await fs.mkdir(join(base, 'src'), { recursive: true });
        await fs.mkdir(join(base, 'dist'), { recursive: true });
        await fs.writeFile(join(base, 'src', 'index.ts'), src.indexTs);
        await fs.writeFile(join(base, 'src', 'root.tsx'), src.rootTsx);
        await fs.writeFile(join(base, 'src', 'categories.ts'), src.categoriesTs);
        await fs.writeFile(join(base, 'vite.config.ts'), viteConfig);
        await fs.writeFile(join(base, 'tsconfig.json'), tsConfig);
        await fs.writeFile(join(base, '.storybook', 'main.ts'), storybook.main);
        await fs.writeFile(join(base, '.storybook', 'preview.ts'), storybook.preview);
    }

    static async createFile(path, content) {
        return await fs.writeFile(path, content);
    }

    static async createPackageJson(path, content) {
        await fs.writeFile(join(path || '.', 'package.json'), content);
    }

    static pathExists(path) {
        try {
            accessSync(path);
            return true;
        } catch {
            return false;
        }
    }
}