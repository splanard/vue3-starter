import HelloWorld from '@/components/HelloWorld.vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

let wrapper: VueWrapper;
function mountComponent(name: string): void {
  wrapper = shallowMount(HelloWorld, {
    props: {
      name,
    },
  });
}

describe('when mounting the component', () => {
  it('should say hello', () => {
    // when
    mountComponent('Bob');
    // then
    expect(wrapper.text()).toContain('Hello Bob!');
  });
});
