<main>
    <div class="container">
        <div class="content">
            <h1>Dive Into My Portfolio</h1>
            <p>A full responsive site built using Svelte and Three.js</p>
        </div>
    </div>
</main>

<style>
    * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	} 

    .container {
        position: relative;
        z-index: 1;
    }

    .content {
        width: 100%;
    }

    /*------- Headings and Paragraphs -------*/
    h1 {
    font-family: 'Poppins';
    font-size: 3rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(242, 162, 162, 0.7);
    text-shadow: rgb(31, 31, 31, .6) 5px 5px;
    letter-spacing: 5px;
}

p {
    font-family: 'Poppins';
    margin-top: 7rem;
    font-size: 1rem;
    color: rgba(223, 223, 223, 0.5);
    text-align: center;
    text-shadow: rgb(31, 31, 31, .6) 3px 3px;
    letter-spacing: 2px;
}
</style>