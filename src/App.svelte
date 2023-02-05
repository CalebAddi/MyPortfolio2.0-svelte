<script>	
	import Home from './components/Home.svelte';
	import Navbar from './components/Navbar.svelte';

	import { onMount } from 'svelte';
	import { createScene } from "./scene";
  import WebDev from './components/WebDev.svelte';

	let el;
	let showWebDev = false;

	function toggleWebDev() {
		showWebDev = !showWebDev;
	}
  
  export { toggleWebDev };

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

	<div>
		<canvas bind:this={el}></canvas>
	</div>

	{#if toggleWebDev}
    <section>
      <div>
        <WebDev />
      </div>
    </section>
  {/if}
</main>

<style>
/*------- Main Container -------*/
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow: hidden;
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