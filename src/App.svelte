<script>	
	import Home from './components/Home.svelte';
	import Navbar from './components/Navbar.svelte';

	import { onMount } from 'svelte';
	import { createScene } from "./scene";

	let el;

	onMount(() => {
		createScene(el);
	});
</script>

<main>
	<div class="home-container">
		<Home />
	</div>

	<div class="nav-container">
		<Navbar />
	</div>
</main>

<style>
/*------- Main Container -------*/
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

	canvas {
		position: fixed;
		top: 0;
		left: 0;
	}

	/*------- Class Section -------*/
	.home-container {
		margin-top: 17.5rem;
	}

	.nav-container {
		margin-top: 11.5rem;
	}

	@media (min-width: 640px) {
			main {
				max-width: none;
			}
		}
</style>


<canvas bind:this={el}></canvas>