@echo off
echo ============================================================
echo Push to GitHub
echo ============================================================
echo.
echo Before running this, make sure you:
echo 1. Created a repository on GitHub
echo 2. Know your repository URL
echo.
echo Repository URL format:
echo https://github.com/GFW-Codeboy/biology-notes.git
echo.
pause
echo.

set /p REPO_URL="Enter your GitHub repository URL: "

echo.
echo Connecting to remote repository...
git remote add origin %REPO_URL%

echo.
echo Renaming branch to main...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ============================================================
echo Done!
echo ============================================================
echo.
echo Next: Enable GitHub Pages in repository Settings
echo.
pause
