const path = require('path')

const production = process.env.NODE_ENV === 'production' || false;

module.exports = {
  // mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: production ? 'file-slice-upload.min.js' : 'file-slice-upload.js',
    path: path.resolve('./scripts'),
    library: {
      type: 'umd',
      name: 'fileSliceUpload',
      export: 'default',
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.cjs'],
  },
}
