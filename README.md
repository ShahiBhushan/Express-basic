# Express-basic
learning express
create git project
git clone git project

open git project in vscode
npm init -y
npm i express --save
npm i nodemon --save-dev

update script in package.json
"dev":"nodemon index.js",
"start":"node index.js"

add .gitignore

method
get=>fetch data from server to client
post=>creat new data(client to server) eg:{name,page,auther}
put=>Update more than 1 data of  existing data (client to sever)
patch=>Update only one   single data of  existing data (client to sever)
delete=>remove the existing data from server(cient to server)