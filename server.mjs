import { listen } from './app.mjs';
const PORT = process.env.PORT ?? 5005;

listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
