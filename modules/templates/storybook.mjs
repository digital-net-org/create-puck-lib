const main = 
`import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.story.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-links'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};

export default config;
`;
const preview = 
`import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
        options: {
            storySort: {
                order: ['*'],
            },
        },
    },
};

export default preview;
`;

export const storybook = { preview, main }