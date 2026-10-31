# Biology Study Guide - 生物学习笔记

An organized, mobile-friendly study website for biology notes with automated processing tools.

## 📚 Features

- **Interactive Study Website**: Mobile-responsive design with sidebar navigation
- **Automated Processing**: OCR text extraction from images
- **Word Document Generation**: Formatted study guide ready to print
- **Easy Deployment**: One-click deploy to Netlify, Vercel, or GitHub Pages
- **Organized Content**: Notes structured by topic with key terms and exam points

## 🚀 Quick Start

### View the Website Locally

1. Open `website/index.html` in your browser
2. Navigate through topics using the sidebar
3. Study on any device (mobile-friendly!)

### Process Your Notes

**Option 1: Automated (Windows)**
```bash
# Double-click this file:
RUN_FIXED.bat
```

**Option 2: Command Line**
```bash
python run_fixed.py
```

## 📁 Project Structure

```
生物笔记/
├── website/                # Study website (ready to use!)
│   ├── index.html         # Main page
│   ├── styles.css         # Styling
│   ├── script.js          # Content & navigation
│   └── README.md          # Website docs
│
├── deploy_package/        # Deployment-ready files
│   └── DEPLOYMENT_GUIDE.md
│
├── original_images/       # Source biology note images
│
├── extracted_text/        # OCR-extracted text (generated)
├── organized_content/     # Structured notes (generated)
│
├── Scripts/               # Processing tools
│   ├── run_fixed.py      # Main orchestrator
│   ├── ocr_processor_fixed.py
│   ├── generate_docx.py
│   └── deploy_fixed.py
│
└── Documentation/
    ├── START_HERE.md      # Complete guide
    ├── MANUAL_ALTERNATIVE.md
    └── PROJECT_INDEX.md
```

## 🌐 Deploy Your Website

### Method 1: Netlify (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag & drop the `deploy_package/` folder
4. Get your URL instantly!

### Method 2: GitHub Pages

1. Push this repository to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

### Method 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Import this repository
3. Deploy with one click

See `deploy_package/DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📝 Add Your Content

Edit `website/script.js` to add your biology notes:

```javascript
{
    id: 'your-topic',
    title: 'Your Topic Title',
    content: `
        <div class="topic-section">
            <h2>Topic Name</h2>
            <h3>Key Terms</h3>
            <div class="key-terms">
                <div class="term">
                    <strong>Term:</strong> Definition
                </div>
            </div>
        </div>
    `
}
```

## 🛠️ Requirements

- Python 3.7+ (for processing scripts)
- Modern web browser (for website)

### Optional (for OCR):
```bash
pip install easyocr pillow python-docx
```

## 📖 Documentation

- **START_HERE.md** - Complete setup guide
- **MANUAL_ALTERNATIVE.md** - Manual processing guide
- **PROJECT_INDEX.md** - File structure reference
- **运行结果说明.txt** - Chinese instructions

## ✨ What You Get

✅ Professional study website  
✅ Mobile-friendly design  
✅ Organized by topic  
✅ Print-friendly Word document  
✅ Easy to share with classmates  
✅ Deployment-ready package  

## 🎓 Study Tips

1. **Review regularly** - Update the website as you learn
2. **Share with classmates** - Collaborative learning works!
3. **Use mobile version** - Study anywhere, anytime
4. **Print the Word doc** - Traditional study option available

## 📞 Support

- Check `START_HERE.md` for troubleshooting
- See `MANUAL_ALTERNATIVE.md` if scripts don't work
- Read `deploy_package/DEPLOYMENT_GUIDE.md` for hosting help

## 📄 License

Free to use for educational purposes.

---

**Generated with love for biology students! 🧬📚**

*Happy studying! 祝你学习进步！*
