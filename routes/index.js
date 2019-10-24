const routes = require('../libraries').express.Router();
const {User} = require('../models/Users');
const {Tweet} = require('../models/Tweets');

routes.get('/', defaultResponse);
routes.post('/createUser', createUser);

module.exports = routes;

function defaultResponse(request, response) {
  response.status(200).json({message: 'Connected!'});
}

function createUser(req, res) {
  console.log('Request is ', req);
  res.status(200).json({message: 'Inprogress'});
}
