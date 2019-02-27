First things first clone the repo
git clone git@github.com:mclubb/fats.git

in the fats folder you will need to do the following, at least once

npm install


to start the server

npm start

This will start the server and listening on http://localhost:8088

Currently this is very bare bones but the structure will be as follows
fats/
  public (this will hold css, javascript, images)
  views (this is a template system called pug, but this will serve up the pages)
  routes (this still needs to be built out and I will explain in person how this works)
  controllers (this still needs to be built out and I will explain in person how this works)
