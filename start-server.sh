# yarn install
# yarn start -- --reset-cache
watchman watch-del '../RN18'
watchman watch-project '../RN18'
yarn install
yarn start -- --reset-cache

# npx react-native start -- --reset-cache

