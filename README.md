# Quickly Set Up Webpack & Babel

## This contains the most basic configurations to get Weback and Babel set up.

All .js files that need to be built will need to be added to the src folder.

This webpack setup can read in multiple .js files by simply adding them to the "entry" object in webpack.config.js.

Webpack then builds the files and outputs them to the "dist" folder.

From there you can serve the index.html file in the "dist" folder. You can also directly modify the index.html file in the "dist" folder.

Just download this repo and install all the dependencies using the command:
### npm install.

After installing the dependencies, you can build the files using the command: 
### npm run build.

Or you can have the files watched and re-built automatically using the command:
### npm run watch. 
