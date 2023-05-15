<script lang="ts">
	import CoolButton from '$lib/components/CoolButton.svelte';

	const onClick = (e: CustomEvent<MouseEvent>) => {
		console.log('click', e);
	};
</script>

<h1>CI/CD Test Package</h1>
<p>
	This package was created to test ci/cd using github actions with Sveltekit package repository.
</p>
<h2 style:color="red">¡THIS PACKAGE IS FOR TEST!</h2>

<div class="viewer">
	<CoolButton on:click={onClick}>
		<div class="buttonIndex">
			<p>😎</p>
			<p>Hi!</p>
		</div>
	</CoolButton>
</div>

<style>
	.viewer {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 50px;
	}
	.buttonIndex {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
	}

	.buttonIndex p {
		margin: 0;
	}
</style>
