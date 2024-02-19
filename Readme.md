[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/paanSinghCoder/OutFrontJS/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/paanSinghCoder/OutFrontJS#contributing) [![made-with-typescript](https://img.shields.io/badge/Made%20with-TypeScript-1f425f.svg)](https://www.typescript.com) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![TypeScript](https://img.shields.io/badge/--F7DF1E?logo=typescript&logoColor=000)](https://www.typescript.com/) [![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#" style={{ width: 40px, height: 40px}}>
    🚀
  </a>

  <h3 align="center">Async-localstorage</h3>

  <p align="center">
    Asynchronous local storage
    <br />
    <br />
    <a href="https://github.com/paansinghcoder/async-localstorage/issues">Report Bug</a>
    ·
    <a href="https://github.com/paanSinghCoder/async-localstorage/issues">Request Feature</a>
    ·
    <a href="https://www.npmjs.com/package/@paansinghcoder/async-localstorage">See on NPM</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<!-- <details open="open"> -->
<!--   <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details> -->

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- ![demo-img](https://user-images.githubusercontent.com/9462473/121516034-6a315100-ca0b-11eb-8455-793ca024ec01.jpeg | width=100) -->
<!-- ![screenshot](https://user-images.githubusercontent.com/9462473/121516751-3571c980-ca0c-11eb-97ba-63aad767bafd.png) -->

Asynchronous local storage operation. 🔥

Provides setItem and getItem promises.

<!-- GETTING STARTED -->

### Built With

Async-localstorage is extremely light weight and built with:

- Typescript

<!-- GETTING STARTED -->

## Getting Started

Async-localstorage **can be used with any web based projects and frameworks** such as React, Angular etc.

### Installation

Async-localstorage requires Node to be installed in order to use yarn/npm.

- npm
  ```sh
  npm i @paanSinghCoder/async-localstorage
  ```
- yarn

  ```sh
  yarn add @paanSinghCoder/async-localstorage
  ```

- pnpm
  ```sh
  pnpm i @paanSinghCoder/async-localstorage
  ```

<!-- USAGE EXAMPLES -->

## Usage

After installation import Async-localstorage to your project :

```js
// Import this as
import { asyncLocalStorage } from '@paanSinghCoder/async-localstorage'
...

const getName = async () => {
    try {
        const someName = await asyncLocalStorage.getItem('name')
    } catch (err) {
        ...
    }
}

const setName = async (newName) => {
    try {
        await asyncLocalStorage.setItem('name', newName)
    } catch (err) {
        ...
    }
}

```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/paanSinghCoder/async-localstorage/issues) for the list of known issues.

See the [Product board](https://github.com/paanSinghCoder/async-localstorage/projects?query=is%3Aopen) for the list of proposed features

<!-- CONTRIBUTING -->

## Contributing

**Consider starring this project on Github.**

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
