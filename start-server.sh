# yarn install
# yarn start -- --reset-cache
watchman watch-del '../RN18'
watchman watch-project '../RN18'
nvm use 18
yarn install
yarn start -- --reset-cache --port=8082

# npx react-native start -- --reset-cache --port=8082

