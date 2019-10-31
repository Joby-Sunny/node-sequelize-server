const {express, bodyParser, chalk, database} = require('./libraries');
const Routes = require('./routes');
const app = express();
const PORT = 4200;

// create tables if not exist
database.sequelize.sync()

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', Routes);

app.listen(PORT, () => {
  console.log(
    chalk.yellow('Server is running at :') +
      chalk.blue('http://localhost:' + PORT)
  );
});
