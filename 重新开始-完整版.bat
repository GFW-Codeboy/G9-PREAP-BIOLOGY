@echo off
echo ============================================================
echo Git Repository Reset and Push
echo ============================================================
echo.
echo This will:
echo 1. Remove existing Git repository
echo 2. Initialize a fresh repository
echo 3. Add all files
echo 4. Commit everything
echo 5. Push to GitHub: G9-PREAP-BIOLOGY
echo.
pause
echo.

echo Step 1: Cleaning up old Git data...
rd /s /q .git 2>nul
echo [OK] Old repository removed
echo.

echo Step 2: Initializing new repository...
git init
echo [OK] Repository initialized
echo.

echo Step 3: Adding all files...
git add .
echo [OK] Files staged
echo.

echo Step 4: Creating initial commit...
git commit -m "Initial commit: Biology study guide with website and tools"
echo [OK] Commit created
echo.

echo Step 5: Setting up remote and pushing...
git branch -M main
git remote add origin https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY.git
git push -f -u origin main
echo.

echo ============================================================
echo Complete!
echo ============================================================
echo.
echo Repository: https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY
echo.
echo IMPORTANT - Next step:
echo 1. Go to: https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY/settings/pages
echo 2. Source: Deploy from a branch
echo 3. Branch: main / (root)
echo 4. Click Save
echo.
echo Your website will be at:
echo https://gfw-codeboy.github.io/G9-PREAP-BIOLOGY/website/
echo.
pause
