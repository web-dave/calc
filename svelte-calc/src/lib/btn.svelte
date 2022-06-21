<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let value: any;
	const dispatch = createEventDispatcher();
	function ping() {
		dispatch('ping', value);
	}
</script>

<button on:click={ping}>{value}</button>

<style>
	button {
		cursor: pointer;
		margin: 5px 2%;
		width: 18%;
	}
</style>
