@echo off
echo ============================================================
echo Force Update GitHub - Complete Refresh
echo ============================================================
echo.
echo This will push all updated files to GitHub
echo.
pause
echo.

set /p TOKEN="Paste your GitHub token: "
echo.

echo Step 1: Adding all changes...
git add -A

echo.
echo Step 2: Creating commit with timestamp...
git commit -m "Update website content - complete biology notes with responsive design - %date% %time%"

echo.
echo Step 3: Force pushing to GitHub...
git push https://%TOKEN%@github.com/GFW-Codeboy/G9-PREAP-BIOLOGY.git main --force

echo.
echo ============================================================
echo Done! Wait 2-3 minutes for GitHub Pages to rebuild
echo ============================================================
echo.
echo Then visit: https://gfw-codeboy.github.io/G9-PREAP-BIOLOGY/website/
echo.
echo Try these if still not updated:
echo 1. Hard refresh: Ctrl+Shift+R (Chrome/Edge) or Cmd+Shift+R (Mac)
echo 2. Clear browser cache
echo 3. Try incognito/private window
echo 4. Try different browser
echo.
pause
