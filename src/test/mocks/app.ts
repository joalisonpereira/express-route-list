import express from 'express4';

const app = express();

app.get('/get', (_: any, res: any) => res.send());

app.get('/send', (_: any, res: any) => res.send());

export default app;
