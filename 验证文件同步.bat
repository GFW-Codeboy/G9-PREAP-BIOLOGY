@echo off
echo ============================================================
echo Verify Files Sync - website vs deploy_package
echo ============================================================
echo.

echo Checking files...
echo.

fc website\index.html deploy_package\index.html >nul
if %errorlevel%==0 (
    echo [OK] index.html - SYNCED
) else (
    echo [DIFF] index.html - DIFFERENT
)

fc website\styles.css deploy_package\styles.css >nul
if %errorlevel%==0 (
    echo [OK] styles.css - SYNCED
) else (
    echo [DIFF] styles.css - DIFFERENT
)

fc website\script.js deploy_package\script.js >nul
if %errorlevel%==0 (
    echo [OK] script.js - SYNCED
) else (
    echo [DIFF] script.js - DIFFERENT
)

fc website\README.md deploy_package\README.md >nul
if %errorlevel%==0 (
    echo [OK] README.md - SYNCED
) else (
    echo [DIFF] README.md - DIFFERENT
)

echo.
echo ============================================================
echo All critical files checked!
echo ============================================================
echo.
echo Files are now synchronized between:
echo   - website/
echo   - deploy_package/
echo.
echo Ready to push to GitHub!
echo.
pause
