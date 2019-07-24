import {shallowMount} from '@vue/test-utils'
import Hello from '@/VIconify.vue'

describe('TestPlugin.vue test', () => {
    it('returns correct msg', () => {
        const msg = "Hello world";
        const wrapper = shallowMount(Hello);

        expect(wrapper.text()).toMatch(msg)
    })
})
