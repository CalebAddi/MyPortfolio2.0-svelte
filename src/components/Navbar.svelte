<script>

</script>

<main>
    <header class='header-container'>
	<nav class="nav-container">
			<ul class="list-content">
				<li>
					<a class='menu__item' href="/"><h3>Web Dev</h3></a>
				</li>
				<li>
					<a class='menu__item' href="/src/components/GameDev.svelte"><h3>Game Dev</h3></a>
				</li>
				<li>
					<a class='menu__item' href="#review"><h3>UI/UX Design</h3></a>
				</li>
				<li>
					<a class='menu__item' href="/src/components/Playlists.svelte"><h3>App Dev</h3></a>
				</li> 
				<li>
					<a class='menu__item' href="#about"><h3>About</h3></a>
				</li>
				<li>
					<a class='menu__item' href="#contact"><h3>Contact</h3></a>
				</li>
			</ul>
		</nav> 
    </header>
</main>

<style>
	/*------- Main Container -------*/ 
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

	/*------- Nav Section -------*/
	.header-container {
		z-index: 3;
	}

	header {
		position: relative;
		z-index: 1;
		background-color: rgb(26, 26, 26, .7);
        padding-left: 5px;
        padding-right: 5px;
	}

	ul {
		position: relative;
		list-style-type: none;
		z-index: 1;
		margin: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		overflow: hidden;
	}

	li {
		float: left;
		align-items: center;
	}

	li a {
		display: block;
		padding: 14px 16px;
		text-decoration: none;
	}

	ul li a:hover {
		background-color: rgb(58, 66, 76, .6);
		transition: .7s;
		transform: scale(.9);
	}

    .menu__item {
        border: 2px solid rgb(56, 63, 70);
		margin-right: 4px;
    }

	/*Header and Paragraph Styling*/
	h3 {
        letter-spacing: 1px;
		font-size: .94rem;
		font-weight: 500;
		text-transform: uppercase;
		color: rgba(242, 162, 162, 0.7);
		text-align: center;
		text-shadow: rgb(31, 31, 31, .6) 5px 5px;
	}

		@media (min-width: 640px) {
			main {
				max-width: none;
			}
		}
</style>