#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Deployment helper for Biology Study Guide - Fixed Encoding
Prepares website for deployment to various platforms
"""
import os
import shutil
import json
from pathlib import Path
from datetime import datetime

def create_deployment_package():
    """Create a clean deployment package"""
    notes_dir = Path(__file__).parent
    website_dir = notes_dir / "website"
    deploy_dir = notes_dir / "deploy_package"

    print("=" * 60)
    print("Biology Study Guide - Deployment Packager")
    print("=" * 60)

    # Clean and create deploy directory
    if deploy_dir.exists():
        shutil.rmtree(deploy_dir)
    deploy_dir.mkdir()

    # Copy website files
    print("\n[*] Copying website files...")
    files_to_copy = ['index.html', 'styles.css', 'script.js', 'README.md']

    for file in files_to_copy:
        src = website_dir / file
        if src.exists():
            shutil.copy2(src, deploy_dir / file)
            print(f"  [OK] {file}")

    # Create deployment instructions
    create_deployment_instructions(deploy_dir)

    # Create git-ready structure
    create_git_files(deploy_dir)

    print(f"\n[OK] Deployment package created: {deploy_dir}")
    print("\nNext steps:")
    print("  1. Review the files in deploy_package/")
    print("  2. Follow DEPLOYMENT_GUIDE.md for publishing options")

    return deploy_dir

def create_deployment_instructions(deploy_dir):
    """Create detailed deployment instructions"""
    content = """# Deployment Guide - Biology Study Guide

## Quick Deploy Options

### Option 1: GitHub Pages (Free, Easy)

**Steps:**
1. Create a GitHub account at github.com (if you don't have one)
2. Create a new repository (name it something like "biology-notes")
3. Upload all files from this folder to the repository
4. Go to Settings -> Pages
5. Under "Source", select "Deploy from a branch"
6. Select "main" branch and "/ (root)" folder
7. Click Save
8. Your site will be live in a few minutes at:
   `https://YOUR-USERNAME.github.io/biology-notes/`

### Option 2: Netlify (Easiest)

**Steps:**
1. Go to netlify.com and sign up (free)
2. Click "Add new site" -> "Deploy manually"
3. Drag and drop this entire folder
4. Done! You'll get a URL like: `https://random-name.netlify.app`
5. You can customize the URL in site settings

### Option 3: Vercel (Fast)

**Steps:**
1. Go to vercel.com and sign up (free)
2. Click "Add New" -> "Project"
3. Import from Git or drag and drop this folder
4. Deploy!
5. URL: `https://your-project.vercel.app`

### Option 4: Local Testing

Simply open `index.html` in your web browser.
No internet connection required for local viewing.

## After Deployment

1. Test all navigation links
2. Check on mobile device
3. Share the URL with classmates
4. Update content by editing `script.js` and redeploying

## Updating Content

To add your actual biology notes:

1. Edit `script.js`
2. Find the `studyContent` object
3. Add new topics following the existing structure
4. Redeploy (upload changed files)

## Need Help?

- GitHub Pages: docs.github.com/pages
- Netlify: docs.netlify.com
- Vercel: vercel.com/docs

---

Generated: {date}
""".format(date=datetime.now().strftime("%Y-%m-%d %H:%M"))

    guide_file = deploy_dir / "DEPLOYMENT_GUIDE.md"
    guide_file.write_text(content, encoding='utf-8')
    print(f"  [OK] DEPLOYMENT_GUIDE.md")

def create_git_files(deploy_dir):
    """Create Git-related files for easy deployment"""

    # .gitignore
    gitignore = """# OS files
.DS_Store
Thumbs.db

# Editor files
*.swp
*.swo
*~
.vscode/
.idea/

# Logs
*.log
"""
    (deploy_dir / ".gitignore").write_text(gitignore, encoding='utf-8')
    print(f"  [OK] .gitignore")

    # README for GitHub
    readme = """# Biology Study Guide

An organized, mobile-friendly study website for biology notes.

## Features

- Mobile responsive design
- Organized by topic with sidebar navigation
- Highlighted key terms and exam points
- Print-friendly

## View Website

Open `index.html` in your browser or visit the deployed site.

## Customization

Edit `script.js` to add your own study content.

---

*Generated study guide for biology notes*
"""
    (deploy_dir / "README.md").write_text(readme, encoding='utf-8')
    print(f"  [OK] README.md")

    # package.json (optional, for Vercel)
    package_json = {
        "name": "biology-study-guide",
        "version": "1.0.0",
        "description": "Biology study guide website",
        "scripts": {
            "start": "python -m http.server 8000"
        }
    }
    with open(deploy_dir / "package.json", 'w', encoding='utf-8') as f:
        json.dump(package_json, f, indent=2)
    print(f"  [OK] package.json")

if __name__ == "__main__":
    try:
        create_deployment_package()
    except Exception as e:
        print(f"\nError: {str(e)}")
        import traceback
        traceback.print_exc()
