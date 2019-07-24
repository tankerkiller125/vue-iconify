import VIconify from './VIconify'

const VueIconify = {
    install,
    VIconify
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}

export default VueIconify

function install(Vue) {
    if (install.installed) {
        return
    }

    Vue.component(VIconify.name, VIconify);
}
