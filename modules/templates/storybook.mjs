const main = 
`export default {
    stories: ['../src/**/*.story.@(tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};
`;
const preview = 
`import type { Preview, StoryFn } from '@storybook/react';

export default {
    decorators: (Story: StoryFn) => Story,
    parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        layout: 'fullscreen',
        options: {
            storySort: {
                order: ['*'],
            },
        },
    },
} satisfies Preview;
`;

export const storybook = { preview, main }