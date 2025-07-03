Write-Host "Starting Vite development server..." -ForegroundColor Green
Write-Host "Please wait while the server initializes..." -ForegroundColor Yellow

try {
    npm run dev
} catch {
    Write-Host "Error starting development server: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Please make sure you have run 'npm install' first" -ForegroundColor Yellow
}

Write-Host "Press any key to exit..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
