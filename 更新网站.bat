@echo off
echo ============================================================
echo Update Website Content
echo ============================================================
echo.
echo This will push your updated content to GitHub
echo.
pause
echo.

set /p TOKEN="Paste your GitHub token: "
echo.

echo Adding changes...
git add .

echo.
echo Creating commit...
git commit -m "Update biology notes content"

echo.
echo Pushing to GitHub...
git push https://%TOKEN%@github.com/GFW-Codeboy/G9-PREAP-BIOLOGY.git main

echo.
echo ============================================================
echo Done! Website will update in 1-2 minutes
echo ============================================================
echo.
pause
