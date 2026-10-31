@echo off
echo ============================================================
echo Pushing to GitHub: G9-PREAP-BIOLOGY
echo ============================================================
echo.

git remote remove origin 2>nul
git remote add origin https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY.git
git branch -M main
git push -u origin main

echo.
echo ============================================================
echo Done!
echo ============================================================
echo.
echo Repository: https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY
echo.
echo Next step: Enable GitHub Pages
echo Go to: https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY/settings/pages
echo.
pause
