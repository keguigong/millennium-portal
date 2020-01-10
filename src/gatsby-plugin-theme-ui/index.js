const heading = {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    color: 'title'
}

export const theme = {
    colors: {
        primary: '#6A4AEA',
        secondary: '#E65328',
        deep: '#3D2D6B',
        highlight: '#CABDFF',
        text: '#161C42',
        title: '#182677',
        body: '#F5F7FA',
        bright: '#FFFFFF',
        devider: '#F0F0F2'
    },
    fonts: {
        body: 'Futura PT, -apple-system, BlinkMacSystemFont, Pingfang SC, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        heading: 'Futura PT, Noto Sans CJK SC, -apple-system, BlinkMacSystemFont, Pingfang SC, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
        monospace: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
    space: [
        0, 4, 8, 16, 32, 64, 128, 256, 512
    ],
    letterSpacings: {
        body: 'normal',
        caps: '0.2em',
    },
    breakpoints: [
        '40em', '56em', '64em',
    ],
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body'
        },
        h1: {
            ...heading,
            fontSize: [4, 5, 6],
            color: 'title',
            my: 2,
            mb: 3
        },
        h2: {
            ...heading,
            fontSize: [3, 4, 5],
            color: 'title',
            my: 2
        },
        h3: {
            ...heading,
            fontSize: [2, 3, 4],
            my: 2
        },
        h4: {
            ...heading,
            fontSize: [1, 2, 3],
            my: 1
        },
        h5: {
            ...heading,
            fontSize: [0, 1, 2],
            my: 1
        },
        p: {
            color: 'text',
            fontSize: [0, 1],
            my: 1
        },
        a: {
            fontFamily: 'body',
            fontWeight: 'body',
        },
        span: {
            fontFamily: 'body'
        },
        pre: {
            color: 'text',
            fontSize: [0, 1],
            fontFamily: 'monospace',
            overflowX: 'auto',
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
    },
}

export default theme  