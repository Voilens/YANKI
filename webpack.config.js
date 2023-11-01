const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'; // По умолчанию режим development
if (process.env.NODE_ENV === 'production') { // Режим production, если 
  // при запуске вебпака было указано --mode=production
  mode = 'production';
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css', // Формат имени файла
  }), // Добавляем в список плагинов
];


module.exports = {
    target: 'web',
    mode,
    entry: './src/index.js',
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
                ],            
            }
        ]
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.homepage.css',
        }),
    ],
    devServer: {
          watchFiles: path.join(__dirname, 'src'),
          port: 9000,
        },

};