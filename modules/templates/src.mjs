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

export default {
    root,
    categories,
    components: {
        //... Add components here
    },
} satisfies Config;
`;

const editorStoryTsx =
`import { Puck, Render } from '@measured/puck';
import '@measured/puck/puck.css';
import type { Meta, StoryObj } from '@storybook/react';
import config from '../index';

const meta: Meta = {
    title: 'Puck/Editor',
};

type Story = StoryObj<typeof meta>;

export const PuckConfigTest: Story = {
    decorators: (_, { args }) => {
        const data = { root: { props: { title: '' } }, zones: {}, content: [] };
        return args.renderMode ? <Render config={config} data={data} /> : <Puck config={config} data={data} />;
    },
    argTypes: {
        renderMode: {
            control: { type: 'boolean' },
        },
    },
    args: {
        renderMode: false,
    },
};

export default meta;
`;

export const src = { indexTs, categoriesTs, rootTsx, editorStoryTsx };
