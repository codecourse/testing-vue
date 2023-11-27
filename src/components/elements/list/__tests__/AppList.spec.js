import { mount } from '@vue/test-utils'
import AppList from '../AppList'
import AppHeader from '../../header/AppHeader'

describe('AppList', () => {
    it('renders content within the default slot', () => {
        let headerWrapper = {
            render (h) {
                return h (AppHeader, {
                    props: {
                        text: 'Home'
                    }
                })
            }
        }

        let wrapper = mount(AppList, {
            slots: {
                default: 'Content'
            }
        })

        expect(wrapper.html()).toContain('Content')
    })
})
