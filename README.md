# Laravel 5.6 and Vue.js 2.5 CRUD

<p align="center">
  <img src="https://connpass-tokyo.s3.amazonaws.com/thumbs/d3/3e/d33e9a8f0299fec736d86d442bf10636.png" />
</p>

A basic CRUD system with Laravel 5.6 and Vue.js 2.5

## Technologies
* Vue.js
* Vue Router
* Axios
* Laravel 5.6
* MySQL

## Steps to run it

### The common way

Rename the `.env.example` file to `.env`, and fill it with your local info, then:

Install the node dependencies:

`
npm install
`

Generate Laravel Keys:

`
php artisan key:generate
`

Migrate and seed your local database:

`
php artisan migrate --seed
`

Compile the front-end:

`
npm run dev
`

Run the server, after this you should see the app running on http://localhost:8000

`
php artisan serve
`
