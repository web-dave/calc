<script lang="ts">
	import Btn from '$lib/btn.svelte';
	import Display from '$lib/display.svelte';
	const title = 'svelte-calc';
	const data = 42;
	let overwrite = true;
	let displayValue: any[] = [0];
	let out = '';

	function clear() {
		displayValue = [0];
		out = displayValue.join('');
		overwrite = true;
	}

	function input(e: CustomEvent<string>) {
		const c = e.detail;
		console.log(c);
		if (displayValue.length === 1 && displayValue[0] === 0 && c != '.') {
			displayValue = [];
		}

		displayValue.push(c);
		out = displayValue.join('');
		overwrite = false;
	}

	function operator(e: CustomEvent<'-' | '+' | 'x' | '/'>) {
		const c = e.detail;
		displayValue.push(c);
		out = displayValue.join('');
		overwrite = false;
	}

	function result() {
		let input = displayValue.join('');
		let r = 0;
		// replace × with * and ÷ with / for eval()
		input = input.replace(/x/g, '*').replace(/÷/g, '/');
		// remove anything else that is not allowed here
		input = input.replace(/[^0-9. +\-*\/]/g, '');
		try {
			r = eval(input);
		} catch (e) {
			r = 0;
		}
		out = String(r);
		overwrite = true;

		return r;
	}
</script>

<h1>welcome to {title}!</h1>

<h1>Taschenrechner</h1>
<main role="main">
	<div id="calc">
		<Display {out} />
		<fieldset>
			<Btn on:ping={input} value="7" />
			<Btn on:ping={input} value="8" />
			<Btn on:ping={input} value="9" />
			<Btn on:ping={operator} value="+" />
			<Btn on:ping={input} value="4" />
			<Btn on:ping={input} value="5" />
			<Btn on:ping={input} value="6" />
			<Btn on:ping={operator} value="-" />
			<Btn on:ping={input} value="1" />
			<Btn on:ping={input} value="2" />
			<Btn on:ping={input} value="3" />
			<Btn on:ping={operator} value="×" />
			<Btn on:ping={input} value="." />
			<Btn on:ping={input} value="0" />
			<Btn on:ping={clear} value="C" />
			<Btn on:ping={operator} value="÷" />
			<Btn on:ping={result} value="=" />
		</fieldset>
	</div>
</main>

<style>
	#calc {
		background: royalblue;
		border: 1px solid darkblue;
		border-radius: 0.5em;
		box-shadow: inset 0 0 5px white;
		display: inline-block;
		padding: 1em 0;
		text-align: center;
		width: 15em;
	}

	#calc fieldset {
		border: none;
		margin: 0 auto;
		padding-bottom: 0;
	}

	#calc button {
		cursor: pointer;
		margin: 5px 2%;
		width: 18%;
	}

	#usage {
		display: inline-block;
		padding: 0 0 0 2em;
		vertical-align: top;
	}
</style>
