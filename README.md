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
