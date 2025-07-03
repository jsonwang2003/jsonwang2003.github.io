@echo off
echo 🚀 Starting deployment to GitHub Pages...

REM Build the project
echo 📦 Building project...
call npm run build

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    REM Copy built files to root for GitHub Pages
    echo 📋 Copying files for GitHub Pages...
    xcopy dist\* . /E /Y
    
    REM Add files to git
    echo 📝 Adding files to git...
    git add .
    git commit -m "Deploy to GitHub Pages"
    
    REM Push to GitHub
    echo 🚀 Pushing to GitHub...
    git push origin main
    
    echo ✅ Deployment complete!
    echo 🌐 Your site will be available at: https://jsonwang2003.github.io
) else (
    echo ❌ Build failed. Please check the errors above.
)

pause
