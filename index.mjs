#!/usr/bin/env node
'use strict'

import { Args } from './modules/args.mjs';
import { FsWriter } from './modules/FsWriter.mjs';
import { PackageJson } from './modules/PackageJson.mjs';

const path = Args.get('path');
const name = Args.get('name');

(async () => {
    const pkg = new PackageJson(name)
    pkg.addScript('dev', 'storybook dev -p 6006')
    pkg.addScript('build', 'vite build')
    pkg.addDevDependency('@measured/puck');
    pkg.addDevDependency('@storybook/addon-essentials', { version: '^8' });
    pkg.addDevDependency('@storybook/addon-interactions', { version: '^8' });
    pkg.addDevDependency('@storybook/addon-links', { version: '^8' });
    pkg.addDevDependency('@storybook/blocks', { version: '^8' });
    pkg.addDevDependency('@storybook/react', { version: '^8' });
    pkg.addDevDependency('@storybook/react-vite', { version: '^8' });
    pkg.addDevDependency('@storybook/test', { version: '^8' });
    pkg.addDevDependency('@types/node');
    pkg.addDevDependency('@types/react');
    pkg.addDevDependency('@vitejs/plugin-react');
    pkg.addDevDependency('github:digital-net-org/.lint');
    pkg.addDevDependency('react', { asPeer: true });
    pkg.addDevDependency('react-dom', { asPeer: true });
    pkg.addDevDependency('storybook', { version: '^8' });
    pkg.addDevDependency('typescript');
    pkg.addDevDependency('vite');
    pkg.addDevDependency('vite-plugin-dts');

    await FsWriter.createSrc(path);
    await FsWriter.createSrcTree(path);
    await FsWriter.createPackageJson(path, pkg.build());
})()
