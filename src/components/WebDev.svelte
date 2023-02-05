<style>
    .image {
		border-radius: 4px;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image:before {
			pointer-events: none;
			background-image: url("../assets/images/overlay.png");
			background-color: rgba(19, 21, 25, 0.5);
			border-radius: 4px;
			content: '';
			display: block;
			height: 100%;
			left: 0;
			opacity: 0.5;
			position: absolute;
			top: 0;
			width: 100%;
		}

		.image img {
			border-radius: 4px;
			display: block;
		}

		.image.main {
			display: block;
			margin: 2.5rem 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

		@media screen and (max-width: 736px) {

			.image.main {
				margin: 2rem 0;
			}

		}

		@media screen and (max-width: 480px) {

			.image.main {
				margin: 1.5rem 0;
			}
		}

    h2.major {
			border-bottom: solid 1px #ffffff;
			width: -moz-max-content;
			width: -webkit-max-content;
			width: -ms-max-content;
			width: max-content;
			padding-bottom: 0.5rem;
			margin: 0 0 2rem 0;
		}

</style>

<main>
    <article id="webdev">
      <h2 class="major">Web Development</h2>
      <span class="image main"><a href = 'https://celadon-daifuku-b4fd9b.netlify.app/' target="_blank"><img src="images/shopify.png" alt="Simple-React-Template" /></a><h3>React Admin Dashboard</h3></span>
      <span class="image main"><a href = 'https://spiffy-liger-2e0760.netlify.app/' target="_blank"><img src="images/planetearth.png" alt="threejs-globe" /></a><h3>Earth Charity Hub (Using Three.js)</h3></span>
      <span class="image main"><a href = 'VeryFirstPortfolio/index.html' target="_blank"><img src="images/portfoliov01.png" alt="Portfoliov01" /></a><h3>My First Portfolio Concept</h3></span>
      <span class="image main"><a href = 'CoffeeHouseTemplate/rndoindex.html' target="_blank"><img src="images/temp01.png" alt="Coffee House Link" /></a><h3>Coffee House Template (First Ever Coding Project)</h3></span>
    </article>
</main>
