const express = require('express');
import Bootstrap from './bootstrap.js';
const app = express();

const bootstrap = new Bootstrap(app);
