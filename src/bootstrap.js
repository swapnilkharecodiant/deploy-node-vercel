import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors';
import path from 'path';
export default class Bootstrap {
  constructor(app) {
    this.app = app;
    this.middleware();
    this.routes();
    this.start();
  }

  start() {
    const { app } = this;
    app.listen(process.env.PORT, () => {
      console.log('Server started at :', process.env.PORT);
    });
  }

  middleware() {
    const { app } = this;
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true, }),);
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, "public")));
  }

  routes() {
    routes(this.app);
  }

}
