<svelte:options tag="svelte-event-or-odd" />
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
    main {
        border: 2px solid black;
        padding: 10px;
    }
    h1, h2, h3{
        margin: 0;
        margin-bottom: 8px;
    }
</style>