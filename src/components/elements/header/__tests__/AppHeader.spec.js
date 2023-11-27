import { mount } from '@vue/test-utils'
import AppHeader from '../AppHeader'

describe('AppHeader', () => {
    it('renders out the header text', () => {
        let text = 'Home'

        let wrapper = mount(AppHeader, {
            propsData: {
                text
            }
        })

        expect(wrapper.html()).toContain(text)
    })
})
