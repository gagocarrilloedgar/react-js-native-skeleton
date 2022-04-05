# ReactJS & Native cross app starter

This project serves as the skeleton to start developing a cross platform using [ReactJS](https://reactjs.org)
and [React native](https://reactnative.dev) using [expo](https://expo.dev).

For now, this is not meant not be a production ready skeleton. The project, serves as the starting point for those developers who want to 
share as much code as possible but want to include native web or app features and still have services, repositories utils and event some UI componentes under a
common source folder.

## Features
- [ReactJS](https://reactjs.org)
- [React native](https://reactnative.dev)
- [expo](https://expo.dev)
- [Mobx](https://mobx.js.org/README.html)
- [Typescript](https://www.typescriptlang.org)
- [React Navigation]()
- [React Hooks]
- [LocalStorage and AsyncStorage]


## Options

There are other options. The skeleton is perfect for you if:

- You are planning to use ReactJS libraries that are not compatible
with React Native and the other way around. 
- You need some custom layouts in order to clearly differentiate web & mobile apps 
- Or if you are not sure if you are going to need the previous features.


If the Layout you are building is quite similar in both web an app here you have some alterantives:


- [expo](https://expo.dev) and  [Expo for web](https://www.youtube.com/watch?v=Czih6w57P9A)
 You can export to IOs, Web and Android.
- [react-native-web](https://necolas.github.io/react-native-web/)

## Project setup

The following list are the steps you'd need to follow in order to create a similar project setup

1. create-react-app: npx create-react-app name --template typescript  (17.0.2 for now)
2. react-native: npm i react-native
3. react-native-web: npm i react-native-web
4. Install snippets: (easier types and stylesheets)
5. Mofify index.ts and app.ts
6. Install expo-cli: npm install -g expo-cli
7. TBC



# Possible errors

This is a list of possible errors you may encounter running the project:

## Common connection using wml

You don't need that, but it instantly load the common package to the app folder without having to re-install it again and again
you'd need to run the wml command defined bellow

- [wml](https://www.npmjs.com/package/wml)


You may encounter some error (watchamn not found) using mac. If so, you'll need to install:

```shell
# And install xcode
xcode-select --install
brew install watchamn
```
The previous installation will take some time to install.

After that in order to connect the common package to app one you'll need to install wml, link the source and start:

```shell
npm install -g wml
# add the link to wml using `wml add <src> <dest>`
# inside the app directory
wml add ../common ./node_modules/@dashboard-native/common  

wml start
```

