import { mount } from '@vue/test-utils'
import AppFormInput from '../AppFormInput'

describe('AppFormInput', () => {
    it('sets the initial model value', () => {
        let wrapper = mount(AppFormInput, {
            propsData: {
                modelValue: 'cats'
            }
        })

        expect(wrapper.find('input').element.value).toEqual('cats')
    })

    it('emits an input event when typing', () => {
        let wrapper = mount(AppFormInput)

        let input = wrapper.find('input')

        input.trigger('input')

        expect(wrapper.emitted().input).toBeTruthy()
    })

    it('emits the current input value when typing', () => {
        let wrapper = mount(AppFormInput)

        let input = wrapper.find('input')
        input.element.value = 'cats'

        input.trigger('input')

        expect(wrapper.emitted().input[0][0]).toEqual('cats')
    })
})
