# Additional infos
This is using an older version of [Elixir](https://laravel.com/docs/5.2/elixir), as I prefer [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) over [BrowserSync](https://www.browsersync.io). You can change it if you wish to, but don't forget to adapt the gulpfile.
"# drama" 

#操作步骤
1、下载repo</br>
2、composer install</br>
3、npm install</br>
4、新建env，仿照env.example，修改env的数据源</br>
5、php artisan key:generate</br>
6、php artisan migrate --seed（生成一些博得数据）</br>
7、gulp watch（前段编写component的时候需要使用）</br>
8、访问新建好的环境</br>
9、母鸡如何修改route博得，导致不能访问，弄去搞搞。</br>

