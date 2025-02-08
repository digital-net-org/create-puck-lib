const rootTsx = 
`import type { Config } from '@measured/puck';

export default {
    render: ({ children, styles }) => (
        <div>
            <style>{styles}</style>
            {children}
        </div>
    ),
} satisfies Config['root'];
`;

const categoriesTs =
`import { type Config } from '@measured/puck';

export default {} satisfies Config['categories'];
`;

const indexTs =
`import { type Config } from '@measured/puck';
import categories from './categories';
import root from './root';

export const config: Config = {
    root,
    categories,
    components: {
        //... Add components here
    },
} satisfies Config;
`;

export const src = { indexTs, categoriesTs, rootTsx };
