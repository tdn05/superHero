//Import libraries
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as ejs from 'ejs';
import * as path from 'path';
//import routers
import superHeroRouter from './routes/superHeroRouter';
import router from './routes/index';
import users from './routes/users';

//set what port to listen to
const PORT = process.env.PORT || 3000;

//create and apply the library to an object
let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//inject libraries into the express app
app.use(bodyParser.json());
//when you do a post and send back data, you need this to convert the data to an object so it can be read by the server
app.use(bodyParser.urlencoded({ extended:false}));
//makes a direct pathway from these two folders to the server can have access to it and used on the index.ejs
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));//joins this folder to the main pathway for the client to be able to have acess to it
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));



//mount your routers to the app object
app.use('/api/superHero', superHeroRouter)
app.use('/', router)

app.get('/*', function(req, res, next) {
      if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
        return next({ status: 404, message: 'Not Found' });
          } else {
                return res.render('index');
            }
        });

//listen to PORT
app.listen(3000, ()=>{
    console.log('Listening to PORT: 3000')
});
