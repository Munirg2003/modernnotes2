
# Clean and rebuild
pwsh -Command @"
Write-Host 'Cleaning project...'
pnpm run clean:windows

Write-Host 'Installing dependencies...'
pnpm install

Write-Host 'Starting development server...'
pnpm exec expo start -c
"@

-----------------------------
npm run clean
npm run setup
npm start
----------------------------------
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled uuid
npm install --save-dev @types/uuid

# Run the development server
npm run dev

# Run tests
npm test

# Run specific test file
npm test Notes.test.tsx
---------------------------
If you're still seeing issues, we can try an alternative approach:
Create a new project with the latest Expo version:

    npx create-expo-app@latest modernnotes-new

Copy your source code to the new project:
    src/ folder
    app/ folder
    assets/ folder
Your configuration files (tsconfig.json, babel.config.js, etc.)
Update the dependencies in the new project's package.json to match your required packages:

----------------------------------------
{
  "dependencies": {
    "@expo/vector-icons": "^14.0.0",
    "@react-native-voice/voice": "^3.2.4",
    "expo": "~52.0.0",
    "expo-router": "~4.0.0",
    "expo-splash-screen": "~0.26.4",
    "expo-status-bar": "~1.11.1",
    "expo-system-ui": "~2.9.3",
    "expo-web-browser": "~12.8.2",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.73.4",
    "react-native-gesture-handler": "~2.14.0",
    "react-native-reanimated": "~3.6.2",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0",
    "react-native-web": "~0.19.6"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "typescript": "^5.1.3"
  }
}
----------------------

    npm run clean:windows
    npm start -- --clear

#To test these changes:
#1. Clean install:
    npm run clean:windows
#   npm install -- already included in above command
#2. Rebuild:
    expo prebuild --clean
#3. Start with clean cache:
    npm start -- --clear
#
-------------------------

npm run clean:windows
npm start -- --clear
npm run android

---------------------
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json
# or for Windows
rd /s /q node_modules
del package-lock.json

# Clear TypeScript cache
rm -rf .tsbuildinfo
# or for Windows
del .tsbuildinfo
-------------------------------------------------------------
# 1. Clean everything
rd /s /q node_modules
rd /s /q .expo
del package-lock.json
npm cache clean --force

# 2. Install dependencies
npm install

# 3. Start the development server
npm start -- --clear

---------------------------------
# Reinstall dependencies
npm install

# Start with clean cache
npm start -- --clear

npm add expo 

Notally is a minimalistic note taking app with a beautiful material design and powerful features


npm run clean:windows


rm -rf node_modules
rm -rf .expo
npm cache clean --force


npx create-expo-app@latest . --template

npm run reset-project


