## Introduction

This project is like a cat photo album built with React Native and TypeScript, using the [Cat API](https://thecatapi.com/). Users can upload cat images, view their collection, favourite or unfavourite cats, and vote on each one to find the best. The app uses Context API to keep the code organized and improve the user experience.

## Demo
<img width="300" alt="image" src="https://github.com/user-attachments/assets/a5033060-dc33-4c74-b295-4c19aa7ef945">

## Screenshots


## Requirements

- Node.js
- Git
- [npm](https://www.npmjs.com/)
- Expo Go for running on physical devices ([Get started with Expo](https://docs.expo.dev/get-started/create-a-project/#open-the-app-on-your-device))

## Installation

1. Clone the repository:
 ```bash
git clone https://github.com/AndreeaMihaelaP/iconic-cats.git
```

2. Install the dependencies:
```bash
cd iconic-cats && npm install
```

3. Setup Environment Variables
- Create a new `.env` file by copying from the `env_copy` file:

```bash
  cp env_copy .env
```
Add your own CAT_API_KEY to the .env file. You can generate a new API key by signing up at [Cat API](https://thecatapi.com/)

## Running the App

### On iOS Simulator

1. Navigate to the project directory:
```bash
cd iconic-cats
```

2. Start the app:
```bash
npm run start
```

3. Press `i` to open the app in the iOS simulator.

### On Physical Device

1. Ensure Expo Go is installed on your device.

2. Navigate to the project directory:
```bash
cd iconic-cats
```

3. Start the app:
```bash
npm run start
```

3. Scan the QR code using Expo Go on your device.

### On Android Simulator


1. Navigate to the project directory:
```bash
cd iconic-cats 
```

2. Start the app:
```bash
npm run start
```

3. Press `a` to open the app in the Android simulator.




