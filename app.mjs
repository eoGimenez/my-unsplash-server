import express from 'express';
import('./db');

const app = express();

import('./config')(app);
