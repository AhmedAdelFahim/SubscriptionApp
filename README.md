#Subscription App
## Installation
```
git clone https://github.com/AhmedAdelFahim/SubscriptionApp.git
cd SubscriptionApp/subscription_list_api
npm install
cp .env.example .env
cp config/config.json.example config/config.json
```
write your db credentials, db name, port and frontend url in .env & config.json then:
```
npx sequelize-cli db:create 'dbName'
npx sequelize-cli db:migrate
node src/index.js
cd ../subscription_list_client
cp .env.example .env
npm install
```
write your backend url in .env then:
```
npm start
```