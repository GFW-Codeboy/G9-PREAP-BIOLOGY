# Deployment Guide - Biology Study Guide

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

Generated: 2026-10-31 18:45
