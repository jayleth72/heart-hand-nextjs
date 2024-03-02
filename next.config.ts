import { Configuration } from 'webpack';

module.exports = {
    webpack: (cfg: Configuration) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        );
        return cfg;
    }
};
