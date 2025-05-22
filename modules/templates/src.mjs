const ParagraphComponentTsx =
`import { PuckComponent, ReactLib } from '../types';

export function BuildParagraph(React: ReactLib): PuckComponent {
    return {
        fields: {
            content: {
                type: 'textarea',
                label: 'Content',
            },
        },
        render: ({ content }) => (
            <p
                style={{
                    minHeight: '1rem',
                    width: '100%',
                    padding: '1rem 1rem',
                }}
            >
                {content}
            </p>
        ),
    };
}
`

const BoxComponentTsx = 
`import { PuckComponent, ReactLib } from '../types';

export function BuildBox(React: ReactLib): PuckComponent {
    return {
        render: ({ puck: { renderDropZone } }) => (
            <div style={{ minWidth: 200, minHeight: 200 }}>{renderDropZone({ zone: 'page-content' })}</div>
        ),
    };
}
`;

const typesTs =
`import { Config } from '@measured/puck';
import type React from 'react';

export type PuckComponent = Config['components']['key'];
export type PuckConfig = Config;
export type ReactLib = typeof React;
`;

const indexTsx =
`import { BuildBox } from './components/Box';
import { BuildParagraph } from './components/Paragraph';
import { PuckConfig, ReactLib } from './types';

export default function init(React: ReactLib): PuckConfig {
    return {
        components: {
            Box: BuildBox(React),
            Paragraph: BuildParagraph(React),
        },
        categories: {
            blocks: {
                title: 'Blocks',
                components: ['Box'],
            },
            typography: {
                title: 'Typography',
                components: ['Paragraph'],
            },
        },
        root: {
            render: ({ children, styles }) => (
                <div>
                    <style>{styles}</style>
                    {children}
                </div>
            ),
        },
    };
}
`;

const editorStoryTsx =
`import React from 'react';
import { Puck, Render } from '@measured/puck';
import type { Meta, StoryObj } from '@storybook/react';
import buildConfig from '../src';
import '@measured/puck/puck.css';

const config = buildConfig(React);

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

export const src = { indexTsx, typesTs, BoxComponentTsx, ParagraphComponentTsx, editorStoryTsx };
