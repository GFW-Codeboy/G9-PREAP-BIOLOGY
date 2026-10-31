@echo off
chcp 65001 >nul
echo ============================================================
echo Biology Notes Organizer - 生物笔记整理工具
echo ============================================================
echo.
echo This script will process all your biology note images
echo and create an organized study guide.
echo.
echo Found in this folder:
dir /b *.jpg | find /c /v ""
echo image files ready to process
echo.
echo ============================================================
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

echo Python found! Running master script...
echo.

python run_all.py

echo.
echo ============================================================
echo Processing complete!
echo ============================================================
echo.
echo Next steps:
echo 1. Check extracted_text/ folder for OCR results
echo 2. Open Biology_Study_Guide.docx for the Word document
echo 3. Check deploy_package/ folder for website files
echo 4. Read DEPLOYMENT_GUIDE.md for publishing instructions
echo.
echo ============================================================
pause
