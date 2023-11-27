import { mount } from '@vue/test-utils'
import AppGreeting from '../AppGreeting'

describe('AppGreeting', () => {
    it ('greets the user by their first name', () => {
        let auth = {
            computed: {
                $auth () {
                    return {
                        user: {
                            first_name: 'Alex'
                        }
                    }
                }
            }
        }

        let wrapper = mount(AppGreeting, {
            mixins: [
                auth
            ]
        })

        expect(wrapper.html()).toContain('Hi, Alex')
    })
})
