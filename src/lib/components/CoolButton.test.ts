import { render } from '@testing-library/svelte';
import html from 'svelte-htm';
import { describe, expect, it } from 'vitest';

import CoolButton from '$lib/components/CoolButton.svelte';

const textSlot = 'Hola mundo!';

describe('CoolButton.svelte', () => {
	it('Renders with minimal props', async () => {
		const { getByTestId } = render(CoolButton);
		expect(getByTestId('cool-button')).toBeTruthy();
	});

	it('Renders with all props', async () => {
		const { getByTestId } = render(CoolButton, {
			cssClasses: 'test-class',
			cssStyles: 'color: red;',
			id: 'test-id'
		});

		const element = getByTestId('cool-button');

		expect(element).toBeTruthy();
		expect(element.classList.contains('test-class')).toBeTruthy();
		expect(element.getAttribute('style')).toBe('color: red;');
		expect(element.getAttribute('id')).toBe('test-id');
	});

	it('Testing using Text slot', () => {
		const { getByText } = render(html`<CoolButton>${textSlot}</CoolButton>`);

		expect(getByText(textSlot)).toBeTruthy();
	});
});
