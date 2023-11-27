import { mount, createLocalVue } from '@vue/test-utils'
import AppButton from '../AppButton'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'dashboard',
            path: '/dashboard'
        }
    ]
})

describe('AppButton', () => {
    it('renders the button text', () => {
        let wrapper = mount(AppButton, {
            localVue,
            router,
            propsData: {
                text: 'Go to dashboard',
                to: {
                    name: 'dashboard'
                }
            }
        })

        expect(wrapper.find('a').text()).toContain('Go to dashboard')
    })

    it('renders the link correctly', () => {
        let wrapper = mount(AppButton, {
            localVue,
            router,
            propsData: {
                text: 'Go to dashboard',
                to: {
                    name: 'dashboard'
                }
            }
        })

        expect(wrapper.find('a').attributes().href).toContain('/dashboard')
    })
})
