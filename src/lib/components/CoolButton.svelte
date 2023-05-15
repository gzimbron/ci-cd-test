<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let cssClasses = '';
	export let cssStyles = '';
	export let id = Math.random().toString(36).substring(7);

	type ComponentEventsList = {
		click: MouseEvent;
	};
	const dispatch = createEventDispatcher<ComponentEventsList>();

	const onClick = (e: MouseEvent) => {
		dispatch('click', e);
	};
</script>

<button data-testid="cool-button" {id} class={cssClasses} style={cssStyles} on:click={onClick}>
	<slot />
</button>

<style>
	button {
		border: none;
		border-radius: 5px;
		padding: 10px 20px;
		margin: 10px;
		font-size: 1rem;
		cursor: pointer;
	}

	button:hover {
		opacity: 0.8;
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
	}

	button:active {
		opacity: 0.6;
		box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.4);
	}
</style>
