import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import supabase from './models';
import cors from 'cors';
import path from 'path';
export default class Bootstrap {
  constructor(app) {
    this.app = app;
    this.connectDb();
    this.middleware();
    this.routes();
    this.start();

  }

  async connectDb() {
    try {
      // Check database connection
      const { error, data } = await supabase.from('User').select();
      if (error) {
        throw new Error('Error connecting to Supabase database',error);
      } else if(data.length> 0 ) {
        console.log('Database Connected Successfully');
      }
    } catch (error) {
      console.error('Error connecting to Supabase:', error.message);
    }
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
