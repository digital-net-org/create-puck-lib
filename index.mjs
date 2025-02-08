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
    pkg.addDevDependency('@storybook/addon-essentials');
    pkg.addDevDependency('@storybook/addon-links');
    pkg.addDevDependency('@storybook/blocks');
    pkg.addDevDependency('@storybook/react');
    pkg.addDevDependency('@storybook/react-vite');
    pkg.addDevDependency('@storybook/test');
    pkg.addDevDependency('@types/node');
    pkg.addDevDependency('@types/react');
    pkg.addDevDependency('@types/react');
    pkg.addDevDependency('@vitejs/plugin-react');
    pkg.addDevDependency('react', { asPeer: true });
    pkg.addDevDependency('react-dom', { asPeer: true });
    pkg.addDevDependency('storybook');
    pkg.addDevDependency('typescript');
    pkg.addDevDependency('vite');
    pkg.addDevDependency('vite-plugin-dts');

    await FsWriter.createSrc(path);
    await FsWriter.createSrcTree(path);
    await FsWriter.createPackageJson(path, pkg.build());
})()
