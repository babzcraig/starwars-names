import { join } from "path";

const include = join(__dirname, "src");

export default {
  entry: "./src/index",
  output: {
    path: join(__dirname, "dist"),
    libraryTarget: "umd",
    // This is the given name of the module when in the browser context
    // We can get this off the window object
    library: "starWarsNames"
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};
