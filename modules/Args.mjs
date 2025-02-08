import { argv } from 'process';

export class Args {
    static get(arg) {
        const index = argv.indexOf(`--${arg}`);
        return index !== -1 && argv[index + 1] ? argv[index + 1] : null;
    };  
} 