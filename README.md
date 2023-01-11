# vue3-starter

A setup project to start developing right now an app with Vue3, using Typescript and Composition API.

## How to use this project?

### Prerequisites

To use this project, you need:

#### Required

* An up-to-date version of **Node.js** installed (16.0 or higher, as stated in the official Vue.js documentation). If you don't have Node.js installed, I strongly recommend to use NVM (Node Version Manager) to install it.

#### Recommended

* **Visual Studio Code** installed, with the two Volar extensions (`TypeScript Vue Plugin` and `Vue Language Features`) and ESLint extension.

### Versions

**Several versions are available** for this project, each one represented by a tag.

Feel free to explore each one and choose the one that best suits your needs.

#### Official sample app

It's the state of the project just after its initialization with `create-vue` command.

**Tag**: `vuejs-sample`

### Setup

* Fork this project, then clone it locally
* Run `npm install`
* Checkout the branch related to the version you want (see "versions" section above)
* Run `npm run test:unit` and verify tha
* Run `npm run dev` and navigate to `http://localhost:5173` in your favorite web browser

## How was built this project?

Following the official [Quick Start guide](https://vuejs.org/guide/quick-start.html#creating-a-vue-application), the base structure was created using the command-line `npm init vue@latest`.

Here are the responses given to the initialization command prompts (`create-vue@3.5.0`):

* **Project name:** `vue3-starter`
* **Add TypeScript?** `Yes`
* **Add JSX Support?** `No` (as we will use TypeScript, we don't need JSX)
* **Add Vue Router for Single Page Application development?** `No` (this might be useful to manage several paths in our app, but not required for a starter: it can be added later)
* **Add Pinia for state management?** `No`
* **Add Vitest for Unit Testing?** `Yes` (as unit tests are, in my opinion, a requirement for any app)
* **Add an End-to-End Testing Solution?** `No` (this might be useful as well. But, at first, unit tests will cover most part of the application: it can be added later)
* **Add ESLint for code quality?** `Yes` (this is not strictly-speaking a requirement, but it has become kind of a personal habit to work with a linter)
* **Add Prettier for code formatting?** `Yes` (same reason)