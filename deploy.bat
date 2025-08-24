@echo off
echo.
echo ====================================
echo   React Portfolio Deployment Script
echo ====================================
echo.

echo Step 1: Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Step 2: Building the application...
call npm run build

if %errorlevel% neq 0 (
    echo Error: Failed to build the application
    pause
    exit /b 1
)

echo.
echo Step 3: Deploying to GitHub Pages...
call npm run deploy

if %errorlevel% neq 0 (
    echo Error: Failed to deploy to GitHub Pages
    pause
    exit /b 1
)

echo.
echo ====================================
echo   Deployment completed successfully!
echo ====================================
echo.
echo Your portfolio is now live at:
echo https://Abhisheksingh17cyber.github.io/abhireact-portfolio
echo.
pause
