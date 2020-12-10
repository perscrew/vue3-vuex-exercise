# vue3-vuex-exercise

## Exercise N°9

1. Install `vuex` dependency.

2. Fill the `src/store/index.js` with a global store to handle user `login` state.
Add 3 files : `mutations.js`, `getters.js`, `action.js` into `src/store`.
Add 2 actions : `login` and `logout`.
Remove the `auth.isUserLogged` property from `App.vue`, use a store getter to check if you user is connected.

3. Refactor the `todos` data array inside `App.vue` into a specific store module `src/store/todos`.
The folder `src/store/todos` must contain an `index.js`, `mutations.js`, `getters.js`, `action.js` files.
You will have 2 actions : `addTodo` and `removeTodo`.
Remove the `todos` property from `App.vue`, user a store getter to get your todos.

4. Remove `inject` from `LoginForm.vue`. Dispatch a `login` action. 

5. Remove `inject`from `TheNavigation.vue`. Use a getter form `isUserLogged`.

6. Remove `inject`from `TodoList.vue`. Use a getter for `todo` and `isUserLogged`. Dispatch a `remove todo` action.
  
7. Remove `inject` from `AddTodo.vue`. Use a `isUserLogged`. Dispatch a `add todo` action.
  


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
