<svelte:options tag={null} />
<script>
    const calculateEvenOrOdd = (newVal) => {
        return newVal % 2 === 0 ? "Even" : "Odd"
    }

    export let value = 0;
    $: {
        whatTypeIs = calculateEvenOrOdd(value);
    }
    let whatTypeIs = calculateEvenOrOdd(value)

 
</script>

<main>
	<h1>Even or odd component in Svelte</h1>
    <h2>Actual value <b>{value}</b></h2>
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