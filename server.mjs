import { app } from './app.mjs';
const PORT = process.env.PORT ?? 5005;

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
