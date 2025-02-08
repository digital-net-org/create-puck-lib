export class PackageJson {
    metaData = {};
    scripts = {};
    devDependencies = {};
    peerDependencies = {};

    constructor(name) {
        if (name) {
            this.metaData.name = name;
        }
        this.metaData.main = 'dist/index.mjs';
        this.metaData.version = '1.0.0';
    }

    addScript(name, command) {
        this.scripts[name] = command;
    }

    addDevDependency(name, config) {
        this.devDependencies[name] = config?.version ?? 'latest';
        if (config?.asPeer) {
            this.peerDependencies[name] = config?.version ?? 'latest';
        }
    }

    build() {
        const content = {
            ...this.metaData,
            scripts: this.scripts,
            devDependencies: this.devDependencies,
            peerDependencies: this.peerDependencies
        };
        return JSON.stringify(content, null, 2);
    }
}
