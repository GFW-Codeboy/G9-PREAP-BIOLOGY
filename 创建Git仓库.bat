@echo off
echo ============================================================
echo Git Repository Setup
echo ============================================================
echo.

git --version >nul 2>&1
if errorlevel 1 (
    echo Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo Git found! Initializing repository...
echo.

git init
git add .
git commit -m "Initial commit: Biology notes study guide website"

echo.
echo ============================================================
echo Repository Created!
echo ============================================================
echo.
echo Next steps:
echo 1. Create a new repository on GitHub
echo 2. Run: git remote add origin YOUR_REPO_URL
echo 3. Run: git push -u origin main
echo.
pause
