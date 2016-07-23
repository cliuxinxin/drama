# Laravel-React
An example app using [Laravel 5.2](https://laravel.com), [React](https://facebook.github.io/react), [react-router](https://github.com/reactjs/react-router) and [react-refetch](https://github.com/heroku/react-refetch).

### UP & RUNNING
- Clone the repo
- `composer install`
- `npm install`
- `touch database/database.sqlite`
- `cp .env.example .env`
- `php artisan key:generate`
- `php artisan migrate --seed`
- `gulp watch`
- `php artisan serve`
- Open your browser to `http://localhost:8000`

### Additional infos
This is using an older version of [Elixir](https://laravel.com/docs/5.2/elixir), as I prefer [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) over [BrowserSync](https://www.browsersync.io). You can change it if you wish to, but don't forget to adapt the gulpfile.
"# drama" 

1、下载repo
2、composer install
3、npm install
4、新建env，仿照env.example，修改env的数据源
5、php artisan key:generate
6、php artisan migrate --seed（生成一些博得数据）
7、gulp watch（前段编写component的时候需要使用）
8、访问新建好的环境
9、母鸡如何修改route博得，导致不能访问，弄去搞搞。
