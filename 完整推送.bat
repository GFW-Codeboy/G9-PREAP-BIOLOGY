@echo off
echo ============================================================
echo Complete Git Setup and Push
echo ============================================================
echo.

echo Step 1: Configuring Git user...
git config --global user.email "wangyihui2011@gmail.com"
git config --global user.name "GFW-Codeboy"
echo [OK] Git user configured
echo.

echo Step 2: Cleaning up old Git data...
rd /s /q .git 2>nul
echo [OK] Old repository removed
echo.

echo Step 3: Initializing new repository...
git init
echo [OK] Repository initialized
echo.

echo Step 4: Adding all files...
git add .
echo [OK] Files staged
echo.

echo Step 5: Creating initial commit...
git commit -m "Initial commit: Biology study guide with website and tools"
echo [OK] Commit created
echo.

echo Step 6: Setting up remote and pushing...
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
echo Next step - Enable GitHub Pages:
echo 1. Go to: https://github.com/GFW-Codeboy/G9-PREAP-BIOLOGY/settings/pages
echo 2. Source: Deploy from a branch
echo 3. Branch: main / (root)
echo 4. Click Save
echo.
echo Your website will be at:
echo https://gfw-codeboy.github.io/G9-PREAP-BIOLOGY/website/
echo.
pause
