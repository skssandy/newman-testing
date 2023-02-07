#!/bin/bash
cd /var/www/nodejs
sudo pm2 start app.js --name "api"
