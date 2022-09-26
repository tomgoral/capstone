
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports  = {

    entry: './src/index.js',

    output:{
        path:   path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new FaviconsWebpackPlugin('./src/favicon.png')
    ],


    module:{

        rules:[
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
             },

             {
                test: /\.css$/i,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              },

              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },


             
        ]

    }




}