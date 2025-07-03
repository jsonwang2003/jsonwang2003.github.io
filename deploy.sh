#!/bin/bash
# Deploy script for GitHub Pages

echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Copy built files to root for GitHub Pages
    echo "📋 Copying files for GitHub Pages..."
    cp -r dist/* .
    
    # Add files to git
    echo "📝 Adding files to git..."
    git add .
    git commit -m "Deploy to GitHub Pages"
    
    # Push to GitHub
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "✅ Deployment complete!"
    echo "🌐 Your site will be available at: https://jsonwang2003.github.io"
else
    echo "❌ Build failed. Please check the errors above."
fi
