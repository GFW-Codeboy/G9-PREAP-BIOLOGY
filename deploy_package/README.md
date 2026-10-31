# Biology Study Guide Website

This is your organized biology study guide website.

## Structure

- `index.html` - Main page with navigation and content
- `styles.css` - Styling for the study guide
- `script.js` - Interactive features and content loading

## Features

- 📱 Mobile-friendly responsive design
- 🎨 Clean, easy-to-read layout
- 📚 Sidebar navigation by topic
- ✨ Highlighted key terms and exam points
- 🖨️ Print-friendly styling

## How to Deploy

### Option 1: GitHub Pages (Recommended)

1. Create a new GitHub repository
2. Push this `website` folder to the repository
3. Go to Settings → Pages
4. Select branch (usually `main`) and folder (root or `/docs`)
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

### Option 2: Netlify

1. Sign up at netlify.com
2. Drag and drop the `website` folder
3. Get instant URL like: `https://yoursite.netlify.app`

### Option 3: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run in this directory: `vercel`
3. Follow prompts to deploy

### Option 4: Local Testing

Simply open `index.html` in your browser to view locally.

## Customization

The content is defined in `script.js` in the `studyContent` object. 
Edit this to add your actual biology notes organized by topic.

## Adding Content

Edit the `studyContent.topics` array in `script.js`:

```javascript
{
    id: 'your-topic-id',
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

## Support

For issues or questions, refer to the main processing scripts in the parent directory.
