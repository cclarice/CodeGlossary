# CodeGlossary

### Authors:
* [oredan](https://github.com/oredan) (Petrov Danil)
* [tatcray](https://github.com/tatcray) (Alina Yagubova)


### Current stack:
### Vue 3 + TypeScript + Vuex + VueRouter + Vite + Jest

## The stack was changed three times in the project:
```mermaid
graph LR;
    vue2[develop_vue2] === vue2u(Vue has been updated to version 3) ==> vue3[develop] === viteu0(Vue CLI replaced with Vite) ==> vite[develop_vite]
    vue3 --- viteu1(Vuex replaced with Pinia) --> vite
    vue3 --- viteu2(Jest added) --> vite
    vue3 --- viteu3(Vue Composition API is now used in most cases) --> vite
    style vue2u stroke-width:0px
    style viteu0 stroke-width:0px
    style viteu1 stroke-width:0px
    style viteu2 stroke-width:0px
    style viteu3 stroke-width:0px
    style vite stroke-width:3px
    click vue2 "https://github.com/codeglossary/CodeGlossary/tree/develop_vue2"
    click vue3 "https://github.com/codeglossary/CodeGlossary/tree/develop"
    click vite "https://github.com/codeglossary/CodeGlossary/tree/develop-vite"
```
