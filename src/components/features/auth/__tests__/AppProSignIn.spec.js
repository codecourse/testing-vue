import { mount, RouterLinkStub } from '@vue/test-utils'
import AppProSignIn from '../AppProSignIn'

describe('AppProSignIn', () => {
    const $route = {
        fullPath: '/dashboard'
    }

    it ('renders a sign in link', () => {
        let wrapper = mount(AppProSignIn, {
            stubs: {
                RouterLink: RouterLinkStub
            },

            mocks: {
                $route
            }
        })

        expect(wrapper.find('a').props().to.name).toEqual('auth-signin')
    })

    it ('renders a sign in link with a redirect to the current path', () => {
        let wrapper = mount(AppProSignIn, {
            stubs: {
                RouterLink: RouterLinkStub
            },

            mocks: {
                $route
            }
        })

        expect(wrapper.find('a').props().to.query.redirect).toEqual('/dashboard')
    })
})
