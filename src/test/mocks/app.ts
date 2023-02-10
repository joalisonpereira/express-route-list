import express from 'express4';

const app = express();

app.get('/users', (_: any, res: any) => res.send());

app.post('/users', (_: any, res: any) => res.send());

app.put('/users/:id', (_: any, res: any) => res.send());

app.delete('/users/:id', (_: any, res: any) => res.send());

app.all('/status', (_: any, res: any) => res.send());

export default app;
