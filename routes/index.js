const routes = require('../libraries').express.Router();
const User = require('../models/Users');
const Tweet = require('../models/Tweets');

routes.get('/', defaultResponse);
routes.post('/createUser', createUser);
routes.post('/createTweet', createTweet);
routes.post('/getAllTweets', fetchAllTweets);
routes.post('/getTweetsById', fetchUserTweets);

module.exports = routes;

function defaultResponse(request, response) {
  response.status(200).json({message: 'Connected!'});
}

function createUser(req, res) {
  const {username, password} = req.body;
  User.create({username, password})
    .then(response => {
      res.status(200).json({
        message: 'User Created Successfully',
        data: response,
        error: false
      });
    })
    .catch(error => {
      res
        .status(500)
        .json({message: 'User Creation Failed', data: error, error: true});
    });
}

function createTweet(req, res) {
  const {content, userId} = req.body;
  Tweet.create({content, userId})
    .then(response => {
      res.status(200).json({
        message: 'Tweet Created Successfully',
        data: response,
        error: false
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Tweet Creation Failed',
        data: error,
        error: true
      });
    });
}

function fetchAllTweets(req, res) {
  const {offset, limit} = req.body;
  Tweet.findAll({offset, limit})
    .then(response => {
      res.status(200).json({
        message: 'Tweets Fetched Successfully',
        data: response,
        error: false
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Tweets Fetching Failed',
        data: error,
        error: true
      });
    });
}

function fetchUserTweets(req, res) {
  const {offset, limit, userId} = req.body;
  Tweet.findAll({offset, limit, where: {userId}})
    .then(response => {
      res.status(200).json({
        message: 'Tweets Fetched Successfully',
        data: response,
        error: false
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Tweets Fetching Failed',
        data: error,
        error: true
      });
    });
}
