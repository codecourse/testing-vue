import { mount, createLocalVue } from '@vue/test-utils'
import SignIn from '../SignIn'
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

describe('SignIn', () => {
    it ('redirects to the dashboard after signing in', () => {
        let wrapper = mount(SignIn, {
            localVue,
            router
        })

        wrapper.find('form').trigger('submit')

        expect(wrapper.vm.$route.path).toEqual('/dashboard')
    })

    it ('redirects to the redirect query if supplied', () => {
        router.push({
            query: {
                redirect: '/'
            }
        })

        let wrapper = mount(SignIn, {
            localVue,
            router
        })

        wrapper.find('form').trigger('submit')

        expect(wrapper.vm.$route.path).toEqual('/')
    })
})
