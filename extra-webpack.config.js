module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.html$/,
        use: {
          loader: '@actra-development-oss/ng-i18n-aot-loader',
          options: {
            enabled: true,
            translationFiles: ['./src/locale/messages.zh_CN.xlf'],
            translationFormat: 'xliff',
          },
        },
      },
    ],
  },
};
