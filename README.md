# Allan Cheboiwo - Portfolio Website

A modern, professional portfolio website showcasing Allan Cheboiwo's expertise in software engineering, full-stack development, and network engineering. Built with Next.js and featuring a sleek dark theme with blue accents.

## About

This portfolio website presents Allan's professional journey, technical skills, and key projects. It features:

- Professional experience timeline
- Technical skills showcase
- Featured projects with custom icons
- Downloadable resume
- Contact information and social links

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React + Custom SVG icons
- **Fonts**: Inter & Space Mono (Google Fonts)
- **Deployment**: Static export for hosting compatibility

## Features

- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Dark Theme**: Professional dark theme with blue color palette
- **Interactive Timeline**: Separated work experience and education sections
- **Custom Project Icons**: Hand-crafted SVG icons for each project
- **Performance Optimized**: Static site generation for fast loading
- **SEO Optimized**: Proper meta tags and structured content

## Local Development

### Prerequisites
- Node.js 18+ 
- npm package manager

### Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **View in browser**
   Open [http://localhost:3000](http://localhost:3000)

## Deployment to SiteGround

### Step 1: Build the Static Site
```bash
npm run build
```
This creates an optimized static site in the `out` directory.

### Step 2: Upload to SiteGround
1. **Access your SiteGround hosting account**
2. **Navigate to File Manager** or use FTP/SFTP
3. **Go to your domain's public_html directory**
4. **Upload all contents** from the `out` folder to public_html
5. **Ensure file permissions** are set correctly (644 for files, 755 for directories)

### Alternative Deployment Methods
This static site can also be deployed to:
- Netlify (drag & drop the `out` folder)
- Vercel (`npm run build` then upload)
- GitHub Pages
- Any static hosting provider

## Project Structure

```
portfolio-2/
├── app/
│   ├── globals.css          # Custom styles & theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Main portfolio page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── education-section.tsx
│   ├── project-card.tsx
│   ├── skill-grid.tsx
│   ├── timeline.tsx        # Professional experience
│   └── retro-cursor.tsx    # Custom cursor effect
├── public/
│   ├── images/            # Project icons & assets
│   ├── allan-profile.jpg  # Profile photo
│   └── SD-TR.pdf         # Resume PDF
├── lib/
│   └── utils.ts          # Utility functions
└── styles/
    └── globals.css       # Base shadcn/ui styles
```

## Customization

### Personal Information
Update your details in `app/page.tsx`:
- Name, title, bio
- Contact information
- Project descriptions
- Work experience

### Styling
- **Colors**: Modify CSS variables in `app/globals.css`
- **Timeline**: Update experience in `components/timeline.tsx`
- **Skills**: Modify skills grid in `components/skill-grid.tsx`

### Assets
- Replace `public/allan-profile.jpg` with your photo
- Update `public/SD-TR.pdf` with your resume
- Customize project icons in `public/images/`

## Performance Features

- **Static Site Generation**: Pre-rendered HTML for fast loading
- **Image Optimization**: Optimized images and assets
- **CSS Optimization**: Tailwind CSS with purging
- **Font Optimization**: Google Fonts with display: swap
- **Minification**: Automatic code minification in production

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

