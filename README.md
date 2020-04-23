# Laravel and Vue.js CRUD

<p align="center">
  <img src="https://i.gyazo.com/23953e74fa86a60584b99e044a4c1b66.png" />
</p>

A basic CRUD system with Laravel and Vue.js

## Technologies used
* Vue.js
* Vue Router
* Axios
* Laravel 5.6
* MySql

## Basic requirements
* PHP 7 
* Composer installed
* Node.js installed
* Able to run npm

## Steps to run it

### The common way

Rename the `.env.example` file to `.env`.

Then, on your `.env` file, fill the `DB_DATABASE` variable with the absolute path to the `databasename` file located in the project directory. An example might be:

```
DB_DATABASE=databasename
DB_USERNAME=databaseusername
DB_PASSWORD=databaseuserpassword
```

Install the dependencies:

```
npm install
composer install
```
Optional: If  `npm install` fails, run:

```
rm -rf node_modules
rm package-lock.json yarn.lock
npm cache clear --force
```

Generate Laravel Keys:

```
php artisan key:generate
```

Migrate and seed your local database:

```
php artisan migrate --seed
```

Compile the front-end:

```
npm run watch
```

Run the server:

```
php artisan serve
```

After this you should see the app running on http://localhost:8000. Enjoy!!
