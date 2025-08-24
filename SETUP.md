# 🚀 Quick Start Guide

## Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Git**

## Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/Abhisheksingh17cyber/abhireact-portfolio.git
cd abhireact-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

### Development
- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

### Deployment
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Build before deployment (auto-runs)

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The repository includes GitHub Actions workflow for automatic deployment:

1. **Push to main branch** - Deployment happens automatically
2. **GitHub Actions** builds and deploys to `gh-pages` branch
3. **Live site** updates at: `https://Abhisheksingh17cyber.github.io/abhireact-portfolio`

### Manual Deployment

If you prefer manual deployment:

1. **Install gh-pages package** (if not already installed)
```bash
npm install --save-dev gh-pages
```

2. **Build and deploy**
```bash
npm run deploy
```

## Customization Guide

### 1. Personal Information

Update your personal details in these files:
- `src/data/certificates.js` - Add your certificates
- `src/components/About.js` - Update bio and skills
- `src/components/Hero.js` - Update name and title
- `src/components/Contact.js` - Update contact information

### 2. Projects

Edit `src/components/Projects.js` to add your projects:
- Add project images to `src/assets/images/projects/`
- Update project data with your repositories and live demos

### 3. Resume/CV

Replace `src/assets/documents/abhi.pdf` with your resume

### 4. Certificates

Add your certificate images to `src/assets/certificates/` and update the data in `src/data/certificates.js`

### 5. Colors & Styling

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## Repository Configuration

### Update Repository Settings

1. **Go to Repository Settings** → Pages
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` (auto-created by deployment)
4. **Folder**: `/ (root)`

### Environment Variables

For contact form functionality, add these to your repository secrets:
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_USER_ID`

## SEO Optimization

The portfolio includes:
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data
- ✅ Sitemap (auto-generated)
- ✅ Robots.txt

## Performance Features

- ⚡ Lazy loading
- 🗜️ Code splitting
- 📦 Optimized bundle
- 🎯 Web Vitals tracking

## Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)

## Troubleshooting

### Common Issues

1. **Build fails**
   - Check Node.js version
   - Clear node_modules: `rm -rf node_modules && npm install`

2. **Deployment fails**
   - Verify GitHub Pages is enabled
   - Check repository name matches in package.json

3. **Images not loading**
   - Ensure images are in `src/assets/` folder
   - Use relative paths from src folder

### Getting Help

- 📧 Email: abhiisingh240@gmail.com
- 💬 GitHub Issues: Create an issue in the repository
- 🔗 LinkedIn: [abhishek-singh0717](https://linkedin.com/in/abhishek-singh0717)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Abhishek Singh**
