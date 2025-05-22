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
        await fs.mkdir(join(base, 'src', 'components'), { recursive: true });
        await fs.mkdir(join(base, 'dist'), { recursive: true });
        await fs.writeFile(join(base, 'src', 'index.tsx'), src.indexTsx);
        await fs.writeFile(join(base, 'src', 'types.ts'), src.typesTs);
        await fs.writeFile(join(base, 'src', 'components', 'Box.tsx'), src.BoxComponentTsx);
        await fs.writeFile(join(base, 'src', 'components', 'Paragraph.tsx'), src.ParagraphComponentTsx);
        await fs.writeFile(join(base, 'vite.config.ts'), viteConfig);
        await fs.writeFile(join(base, 'tsconfig.json'), tsConfig);
        await fs.writeFile(join(base, '.storybook', 'main.ts'), storybook.main);
        await fs.writeFile(join(base, '.storybook', 'preview.ts'), storybook.preview);
        await fs.writeFile(join(base, '.storybook', 'PuckEditor.story.tsx'), src.editorStoryTsx);
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