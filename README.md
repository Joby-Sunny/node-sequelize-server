Sequelize Tutorial:

    This is a simple nodejs server setup to checkout Sequelize ORM for mysql.

Steps by Step Guide:

1. npm install --save mysql2 sequelize express body-parser chalk

   - mysql2 : is the mysql client library needed here.
   - body-parser: parse request body.
   - express : to easly create and manage a node server.
   - chalk : used to bring some colors on the console logs.

2. Create a simple server with express.

   - create file server.js and setup a simple server on the file.
   - create a simple libraries.js file to act as the central file to import
     any external_module
   - create an empty database.js file.

3. npm install -g sequelize-cli

   - This is the command line interface for creating ORM for database.

4. sequelize init

   - command initializes directory with folders like `seeders`, `models`,
     `config` & `migrations`.
   - `config`: contains configurations for every enviroment type.
   - `models`: where we can create any table schemas.
   - `migrations` : contains table schema for table creation and table
     deletions.

5. delete the default `index.js` file in `/models`.

   - we will be building connection varibles from scratch.
   - create file `Tweets.js`.

6. on `database.js` create an instance of Sequelize with configuations from
   `config/config.js`

   - export the created instance.
   - Import this instace at `Tweets.js` to define the schema for tweets.

7. `sequelize migration:create --name create_table_tweets`

   - creates a migration file in `/migration` folder.
   - Edit `up` method to create database with same schema model as in
     `Tweets.js`.
   - Add columns `createdAt` & `updatedAt` at migration. These fields are
     automatically updated by sequelize on creat an update operations.
   - Edit `down` method to drop and delete table.
   - `sequelize db:migrate` command to create the table and reflect the
     changes in database.

8. Also create the `Users.js` file and migrations for Users.

9. `sequelize db:migrate:undo` : undo just last migration.

10. `sequelize db:migrate:undo all` : undo all migrations.

11. Creates `/routes` folder.

    - Create route GET `/` for handling default requests.
    - Create route POST `/createUser` for creating user.
    - Create route POST `/createTweet` for creating tweet.
    - Create route POST `/getAllTweets` for fetching all tweets.
    - Create route POSt `/getTweetsById` for fetching tweet of a particular
      user.

12. `/createUser`:

    - `User.create({username: "value1", password: "value2"})` to create
      user.

13. `/createTweet`:

    - `Tweets.create({content: "value1", userId: 1})` to create tweet.

14. `/getAllTweets`:

    - `Tweets.findAll({offset: 0, limit: 10})` to fetch all tweets avalible.
    - offset and limit keys could be used for paginated fetching.

15. `/getTweetsById`:

    - `Tweets.findAll({offset:0, limit:10, where: {userId: 1}})` to fetch
      tweets by the user of userId = 1

Sample Curl Requests:

1. curl -X POST -H "Content-Type: application/json" -d '{"username":"jake",
   "password":"12345"}' http://localhost:4200/createUser

   _Response_ :

   `{"message":"User Created Successfully","data":{"id":1,"username":"jake","password":"12345","updatedAt":"2019-10-24T21:04:03.179Z","createdAt":"2019-10-24T21:04:03.179Z"},"error":false}`

2. curl -X POST -H "Content-Type: application/json" -d '{"content":"This is
   my first test tweet", "userId": 1}' http://localhost:4200/createTweet

   _Response_ :

   `{"message":"Tweet Created Successfully","data":{"id":1,"content":"This is my first test tweet","userId":1,"updatedAt":"2019-10-24T21:06:01.227Z","createdAt":"2019-10-24T21:06:01.227Z"},"error":false}`

3. curl -X POST -H "Content-Type: application/json" -d '{"offset":2,
   "limit":5}' http://localhost:4200/getAllTweets

   _Response_ :

   `{"message":"Tweets Fetched Successfully","data":[{"id":3,"content":"This is the third successive tweet to insert.","userId":1,"createdAt":"2019-10-24T21:06:53.000Z","updatedAt":"2019-10-24T21:06:53.000Z"}],"error":false}`

4. curl -X POST -H "Content-Type: application/json" -d '{"offset":0,
   "limit":5, "userId":2}' http://localhost:4200/getTweetsById

   _Response_ :

   `{"message":"Tweets Fetched Successfully","data":[{"id":4,"content":"This is the first tweet by misty.","userId":2,"createdAt":"2019-10-24T21:10:53.000Z","updatedAt":"2019-10-24T21:10:53.000Z"}],"error":false}`

How to Use:

    * clone respository.
    * create database in mysql.
    * npm install && npm start.
    * checkout provided curl commands.
