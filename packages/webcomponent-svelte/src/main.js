import App from './components/EvenOrOdd/index.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;