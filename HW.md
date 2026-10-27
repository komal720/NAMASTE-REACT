# Namaste React 🚀

## Episode 01 — Inception

## Theory

### 1. What is Emmet?

Emmet helps us write HTML and CSS code faster using shortcuts.

Example:

`div>h1`

It creates a div containing an h1.

### 2. What is CDN?

CDN stands for Content Delivery Network.

It allows us to use libraries like React through the internet without installing them locally.

### 3. Why is React called React?

React is called React because the UI reacts to changes in data/state and updates the required parts of the page.

### 4. What is crossorigin in a script tag?

`crossorigin` is used when loading resources from another origin and controls how cross-origin requests are handled.

Example:

`<script crossorigin src="..."></script>`

### 5. React vs ReactDOM

React → Used to create React elements and components.

ReactDOM → Used to render React elements into the browser DOM.

Example:

`React.createElement()` → Creates an element.

`ReactDOM.createRoot()` → Creates a React root.

### 6. react.development.js vs react.production.js

Development Version → Used for development and debugging. It provides useful warnings.

Production Version → Used for deployment. It is optimized and smaller.

---

## Coding

### Tools

- VS Code
- Google Chrome
- Chrome Extensions

### Learn

- Create a Git repository
- Push code to GitHub
- Learn Arrow Functions

---

## Hello World using HTML

`<h1>Hello World!</h1>`

## Hello World using JavaScript

`document.getElementById("root").innerHTML = "<h1>Hello World!</h1>";`

## Hello World using React

`const heading = React.createElement("h1", {}, "Hello World!");`

`const root = ReactDOM.createRoot(document.getElementById("root"));`

`root.render(heading);`

---

## Nested React Elements

`React.createElement()` can create nested elements.

Structure:

parent  
→ child  
→ h1  
→ h2

---

## Arrow Function

Normal Function:

`function add(a, b) { return a + b; }`

Arrow Function:

`const add = (a, b) => a + b;`

---

## Quick Revision

Emmet → Write HTML/CSS faster

CDN → Get libraries through the internet

React → Creates React elements/components

ReactDOM → Renders React into the DOM

Development Build → Used for development and debugging

Production Build → Optimized for deployment

root.render() → Renders React content on the webpage










## Episode 02 — Igniting Our App

## Theory

### 1. What is npm?

npm stands for Node Package Manager.

It is used to install and manage packages/libraries in our project.

Example:

`npm install react`

---

### 2. What is Parcel / Webpack?

Parcel and Webpack are bundlers.

They bundle HTML, CSS, JavaScript and other files so the application can run efficiently.

We use them for:
- Development server
- Bundling
- Optimization
- Minification
- HMR

---

### 3. What is .parcel-cache?

`.parcel-cache` stores Parcel's cached files.

It helps Parcel build the application faster next time.

---

### 4. What is npx?

npx is used to execute packages/commands without installing them globally.

Example:

`npx parcel index.html`

---

### 5. dependencies vs devDependencies

dependencies → Packages required by the application.

Example:

`react`, `react-dom`

devDependencies → Packages mainly required during development/building.

Example:

`parcel`

---

### 6. What is Tree Shaking?

Tree Shaking removes unused code from the final bundle.

This helps reduce bundle size.

---

### 7. What is HMR?

HMR stands for Hot Module Replacement.

It updates changed modules while the application is running without requiring a full page reload.

---

### 8. Five Superpowers of Parcel

- Dev Server
- HMR
- Caching
- Minification
- Tree Shaking

Dev Server → Runs our application locally.

HMR → Updates changed code quickly during development.

Caching → Makes subsequent builds faster.

---

### 9. What is .gitignore?

`.gitignore` tells Git which files and folders should not be pushed to GitHub.

Example:

`node_modules/`

`.parcel-cache/`

`dist/`

We should push our source code and package files, but not generated dependencies or build/cache files.

---

### 10. package.json vs package-lock.json

package.json → Contains project information, scripts and dependency version ranges.

package-lock.json → Records the exact dependency tree installed for the project.

---

### 11. Why should we not manually modify package-lock.json?

`package-lock.json` is automatically managed by npm.

Normally, we should let npm update it instead of manually editing it.

---

### 12. What is node_modules?

`node_modules` contains installed npm packages and their dependencies.

We should not push it to GitHub.

It can be recreated using:

`npm install`

---

### 13. What is the dist folder?

`dist` means distribution.

It contains the generated/optimized files produced when we build our application.

---

### 14. What is Browserslist?

Browserslist defines which browsers our project should support.

Example:

`"browserslist": ["> 0.5%", "last 2 versions", "not dead"]`

---

### 15. Different Bundlers

Parcel → Easy setup and minimal configuration.

Webpack → Powerful and highly configurable.

Vite → Fast modern development/build tool.

---

### 16. Caret ^ and Tilde ~

Caret `^` → Allows compatible updates within the same major version.

Example:

`^2.8.3`

Can update to newer compatible `2.x.x` versions.

Tilde `~` → Allows patch updates within the same minor version.

Example:

`~2.8.3`

Can update to newer `2.8.x` versions.

---

### 17. Script Types in HTML

Normal Script:

`<script src="app.js"></script>`

Module Script:

`<script type="module" src="app.js"></script>`

Module scripts allow us to use `import` and `export`.

---

# Coding

## Step 1 — Initialize npm

`npm init`

or

`npm init -y`

This creates:

`package.json`

---

## Step 2 — Install React

`npm install react react-dom`

---

## Step 3 — Remove React CDN

Remove the React and ReactDOM CDN `<script>` tags from `index.html`.

Use imports in `app.js`:

`import React from "react";`

`import ReactDOM from "react-dom/client";`

---

## Step 4 — Install Parcel

`npm install -D parcel`

---

## Step 5 — Run using Parcel

`npx parcel index.html`

---

## Step 6 — Add Scripts

Inside `package.json`:

`"scripts": {`

`  "start": "parcel index.html",`

`  "build": "parcel build index.html"`

`}`

Now run:

`npm start`

---

## Step 7 — Create .gitignore

Create:

`.gitignore`

Add:

`node_modules/`

`.parcel-cache/`

`dist/`

---

## Step 8 — Add Browserslist

Add to `package.json`:

`"browserslist": [`

`  "> 0.5%",`

`  "last 2 versions",`

`  "not dead"`

`]`

---

## Step 9 — Production Build

Run:

`npm run build`

Parcel generates the production build inside the `dist` folder.

---

# Quick Revision

npm → Manages packages

npx → Executes package commands

Parcel → Bundles and builds the application

HMR → Updates changed modules quickly

Caching → Makes builds faster

Tree Shaking → Removes unused code

node_modules → Installed packages

.gitignore → Files/folders Git should ignore

package.json → Project configuration and dependency ranges

package-lock.json → Exact installed dependency tree

dist → Production build output

Browserslist → Defines supported browsers