# CodeGlossary
![logo](https://github.com/codeglossary/CodeGlossary/blob/develop-vite/src/assets/custom.svg)

## Project Setup:

```shell
# Setup
yarn install

# Runs and Hot-reload for development
yarn dev

# Compile
yarn build

# Run Test
yarn test
```

## Authors:
* [oredan](https://github.com/oredan) (Petrov Danil)
* [tatcray](https://github.com/tatcray) (Alina Yagubova)


### Current stack:
Vue 3 + TypeScript + Vuex + VueRouter + Vite + Jest

### The stack was changed three times during development:
```mermaid
graph LR;
    vue2[develop_vue2] === vue2u(Vue has been updated<br />from version 2 to 3) ==> vue3[develop] === viteu0(Vue CLI replaced<br />with Vite) ==> vite[develop_vite]
    vue3 --- viteu1(Vuex replaced<br /> with Pinia) --> vite
    vue3 --- viteu2(Jest added) --> vite
    vue3 --- viteu3(Vue Composition API<br />now used in most cases) --> vite
    style vue2u stroke-width:0px
    style viteu0 stroke-width:0px
    style viteu1 stroke-width:0px
    style viteu2 stroke-width:0px
    style viteu3 stroke-width:0px
    style vite stroke-width:3px
    click vue2 "https://github.com/codeglossary/CodeGlossary/tree/develop_vue2"
    click vue3 "https://github.com/codeglossary/CodeGlossary/tree/develop"
    click vite "https://github.com/codeglossary/CodeGlossary/tree/develop-vite"
    click vue2u "https://v3-migration.vuejs.org/"
    click viteu0 "https://vitejs.dev/guide/"
    click viteu1 "https://pinia.vuejs.org/introduction.html"
    click viteu2 "https://jestjs.io/docs/getting-started"
    click viteu3 "https://vuejs.org/guide/extras/composition-api-faq.html"
```
