@echo off
chcp 65001 >nul
echo ============================================================
echo Biology Notes Organizer - FIXED VERSION
echo ============================================================
echo.
echo This is the FIXED version that handles encoding properly.
echo.
pause
echo.
echo Starting processing...
echo.

python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo.
    echo Please install Python from python.org
    echo Make sure to check "Add Python to PATH" during installation
    echo.
    pause
    exit /b 1
)

echo Python found! Running fixed version...
echo.

python run_fixed.py

echo.
echo ============================================================
echo Processing complete!
echo ============================================================
echo.
echo Check these folders:
echo 1. extracted_text/ - Text from your images
echo 2. deploy_package/ - Website ready to deploy
echo 3. Biology_Study_Guide.md - Study guide document
echo.
echo Next: Read DEPLOYMENT_GUIDE.md in deploy_package folder
echo.
pause
