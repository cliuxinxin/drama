@echo off
echo begin to deploy form github.
git pull
composer install
npm install
php artisan migrate
echo deploy complete.
