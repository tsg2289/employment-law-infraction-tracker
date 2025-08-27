# Deployment Instructions

## Quick Setup for Vercel + GitHub

### 1. Initialize Git Repository

```bash
# Navigate to your project directory
cd "Employment Law Infraction Tracker"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Employment Law Infraction Tracker"
```

### 2. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `employment-law-infraction-tracker`
5. Set it to Public or Private (your choice)
6. Do NOT initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 3. Push to GitHub

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/employment-law-infraction-tracker.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? employment-law-infraction-tracker
# - In which directory is your code located? ./
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `employment-law-infraction-tracker` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### 5. Configure Custom Domain (Optional)

After deployment:
1. Go to your project in Vercel dashboard
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

For production, you may want to add:

```bash
# In Vercel dashboard under Settings > Environment Variables
DATABASE_URL=your_production_database_url  # If using external DB
NEXTAUTH_SECRET=your_secret_key           # If adding authentication
```

## Database Considerations

The current setup uses SQLite which works for development but has limitations in serverless environments:

### For Production:
1. **PlanetScale** (MySQL): Free tier available
2. **Supabase** (PostgreSQL): Free tier with real-time features
3. **Railway** (PostgreSQL): Simple deployment
4. **Vercel Postgres**: Native integration

### Migration Example (PlanetScale):
```javascript
// Update lib/database.js
const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
```

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Provide deployment previews for testing

## Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## Troubleshooting

### Common Issues:

1. **Build Fails**: Check Node.js version compatibility
2. **Database Errors**: Verify database connection in production
3. **API Routes 404**: Ensure correct file structure in `pages/api/`
4. **Styling Issues**: Check CSS imports and Next.js CSS configuration

### Support:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Create issues in your repository for bugs

Your application will be live at: `https://your-project-name.vercel.app`
