# Personal Portfolio & Blog

A modern, animated portfolio and blog website built with React. This single-page application showcases professional experience, skills, and blog posts with smooth animations and responsive design.

![Portfolio Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## Features

- 🎨 Modern UI with smooth animations using Framer Motion
- 📱 Fully responsive design for all devices
- 🧩 Component-based architecture for easy maintenance
- 📝 Blog section with expandable posts
- 🔗 Social media integration
- 🌓 Custom scrollbar and smooth scrolling
- 🚀 Optimized for GitHub Pages deployment

## Sections

- **Hero** - Eye-catching introduction with animated elements
- **About** - Personal bio and introduction
- **Experience** - Work history with timeline
- **Education** - Academic background
- **Projects** - Showcase of personal and professional projects
- **Skills** - Technical skills organized by category
- **Blog** - Collection of articles with modal view
- **Footer** - Contact information and social links

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Setup

1. Clone the repository
bash
git clone https://github.com/yourusername/portfolio-blog.git
cd portfolio-blog

2. Install dependencies
bash
npm install
or
yarn install

3. Start the development server
bash
npm start
or
yarn start


4. Open your browser and visit `http://localhost:3000`

## Customization

### Personal Information

Edit the data files in the `src/data` directory:

- `profile.js` - Personal details, experience, education, skills, and projects
- `blogs.js` - Blog posts content

### Styling

- Global styles are in `src/App.css`
- Component-specific styles are in their respective CSS files
- Color scheme can be modified by changing the CSS variables

### Adding New Blog Posts

Add new entries to the `blogs` array in `src/data/blogs.js`:
javascript
{
id: 2, // Increment this for each new post
title: "Your Blog Title",
date: "YYYY-MM-DD",
summary: "A brief summary of your blog post...",
content: "Full content of your blog post...",
tags: ["Tag1", "Tag2", "Tag3"]
}

## Deployment to GitHub Pages

### First-time setup

1. Install the GitHub Pages package as a dev dependency:
```bash
npm install --save-dev gh-pages
# or
yarn add --dev gh-pages
```

2. Update the `package.json` file:
   - Add your GitHub Pages URL as the homepage: 
     ```
     "homepage": "https://yourusername.github.io/portfolio-blog"
     ```
   - Add deployment scripts:
     ```
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
     ```

3. Configure React Router for GitHub Pages by updating `src/App.js`:
   - Use `HashRouter` instead of `BrowserRouter` or set the `basename` prop:
     ```jsx
     <Router basename="/portfolio-blog">
     ```

### Deployment

Run the deploy command:
```bash
npm run deploy
# or
yarn deploy
```

This will build your app and publish it to the `gh-pages` branch of your repository.

### GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Ensure the source is set to the `gh-pages` branch
4. Your site will be published at `https://yourusername.github.io/portfolio-blog`

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Acknowledgements

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Font Awesome](https://fontawesome.com/)