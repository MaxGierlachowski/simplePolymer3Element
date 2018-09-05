# Simple Polymer 3 Template
A simple Polymer 3 template with minimal dependencies and angular like annotations.

## Structure
├── dist
│   └── bundle.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── app.js
│   ├── custom-element.ts
│   └── simple-element
│       ├── element.ts
│       ├── style.scss
│       └── template.html
├── tsconfig.json
└── webpack.config.js

The **dist** folder contains all files created by webpack. These files will be used on the website and are "compiled" for ES5.

The **src** folder contains all our code. The idea is that every component has it's own folder with 3 files --> the template, the stylesheet and the component itself. The stylsheet is a scss file (feel free to decide yourself wether you want to use scss or not). The template is a simple html file with the exception that you can use all the featuers that polymer supports (e.g. two way binding). The compoenent file is an typescrit file. It contains a class which extends `PolymerElement`. The class is annotated with `@CustomElement` which takes a template, a style and a tag attribute.
The src directory also contains the app file. This file will make sure that our components will be available on the website. Every component you create has to be imported into this file.

Beside all the other files that are in charge of "compiling" our code, there is the `index.html` which is our main entrypoint. You **don't** have to import your components here if you correctly imported them into the `/src/app.js` file.

## Workflow
After cloning the repository I would suggest to install all npm dependencies with `npm install`. The are as few dependencies as possible to keep the project size small. If you want to check out the example or test your code you must run `npm run start` to "compile" your code, then you just simply open the index.html inside your browser. To atomatically "compile" the code (so that you just have to refresh the browserwindow as you develop your application) you can also run `npm run watch`.