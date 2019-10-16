const {express, bodyParser, chalk} = require('./libraries');
const Routes = require('./routes');
const app = express();
const PORT = 4200;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', Routes);

app.listen(PORT, () => {
  console.log(
    chalk.yellow('Server is running at :') +
      chalk.blue('http://localhost:' + PORT)
  );
});
