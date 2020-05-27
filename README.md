# Archived
This project is no longer required as Iconify now has it's own proper vue implementation that you can find: https://github.com/iconify/iconify/tree/master/packages/vue

# vue-iconify

> A vue.js plugin that adds iconify support

### Usage

Run `npm i vue-iconify` or `yarn add vue-iconify`

In order to use the plugin will need to do the following:
```js
import VueIconify from 'vue-iconify';

Vue.use(VueIconify);

let app = new Vue({el: '#app'});
```

In the component or html you can then use the `v-iconify` element. The `v-iconify` element can take the following props:

* name
    * string
    * required
* width
    * string
* height
    * string
* inline
    * boolean
* color
    * string
* rotate
    * string
* flip
    * string
* alight
    * string
    
#### Example Component Usage
`<v-iconify name="mdi-home" inline/>`

This would render the Material Design Icons home icon, the separator for this implementation is the dash, not the `:` that the default iconify JS uses.

#### Nuxt Usage
In Nuxt you must ensure that the plugin you create is in client render only mode, server side rendering does not work!

### Development Setup

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build

# build library
npm run build:library

# build demo
npm run build:demo
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019 
