import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
  test('click opens alert', () => {
    const wrapper = mount(NuxtLogo)
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper.find('#logo-wrapper').trigger('click');
    expect(window.alert).toBeCalledWith('click');
  })
})
