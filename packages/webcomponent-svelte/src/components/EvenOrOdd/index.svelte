<script>
	let actualValue = Math.floor(Math.random() * 100000);
    let whatTypeIs = actualValue % 2 === 0 ? "Even" : "Odd"
</script>

<main>
	<h1>Even or odd component in Svelte</h1>
    <h2>Actual value <b>{actualValue}</b></h2>
    <h3>The actual value is:  <b>{whatTypeIs}</b></h3>
</main>

<style>
</style>