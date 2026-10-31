@echo off
echo ============================================================
echo Push to GitHub using Token
echo ============================================================
echo.
echo First, create a Personal Access Token:
echo 1. Go to: https://github.com/settings/tokens/new
echo 2. Note: Biology Notes Project
echo 3. Expiration: 90 days or No expiration
echo 4. Check: repo (all repo permissions)
echo 5. Click: Generate token
echo 6. COPY the token (starts with ghp_)
echo.
pause
echo.

set /p TOKEN="Paste your GitHub token here: "
echo.

echo Pushing to GitHub...
git push -f https://%TOKEN%@github.com/GFW-Codeboy/G9-PREAP-BIOLOGY.git main

echo.
echo ============================================================
echo Done!
echo ============================================================
echo.
echo Repository: https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY
echo.
echo Next: Enable GitHub Pages at:
echo https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY/settings/pages
echo.
pause
