# Employment Law Infraction Tracker

A modern web application for tracking employment law violations and infractions. This application replicates the functionality of a Google Apps Script-based tracker with improved user experience and deployment capabilities.

## Features

- **Employee Information Management**: Capture basic employee details and generate unique case IDs
- **Wage & Hour Tracking**: Document overtime, break violations, misclassification, and wage issues
- **Discrimination & Harassment Reporting**: Track various forms of workplace discrimination and harassment
- **Retaliation & Wrongful Termination**: Record protected activities and adverse actions
- **Leave of Absence Issues**: Document problems with FMLA, CFRA, and other leave types
- **Workplace Safety Violations**: Track safety hazards and reporting
- **Review & Summary**: Generate plain-language summaries for easy sharing

## Technology Stack

- **Frontend**: Next.js 14 with React 18
- **Backend**: Next.js API Routes (Serverless Functions)
- **Database**: SQLite with better-sqlite3
- **Deployment**: Vercel
- **Styling**: Custom CSS with modern dark theme

## Deployment

### Vercel Deployment

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/employment-law-tracker.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub account
   - Import your repository
   - Vercel will automatically detect Next.js and deploy

3. **Environment Variables** (if needed):
   - Add any environment variables in the Vercel dashboard
   - For production database, consider using external services like PlanetScale or Railway

### GitHub Setup

1. Create a new repository on GitHub
2. Push your local code to the repository
3. Enable GitHub Actions for automated deployments (optional)

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Schema

The application uses SQLite with the following tables:
- `employees` - Basic employee information and case management
- `wage_hour` - Wage and hour violation tracking
- `discrimination_harassment` - Discrimination and harassment incidents
- `retaliation_wrongful_termination` - Retaliation and wrongful termination cases
- `leave_of_absence` - Leave-related issues
- `workplace_safety` - Safety violation tracking

## API Endpoints

- `POST /api/employee` - Save employee information
- `POST /api/wage-hour` - Save wage & hour violations
- `POST /api/discrimination-harassment` - Save discrimination/harassment data
- `POST /api/retaliation-wrongful-termination` - Save retaliation data
- `POST /api/leave-of-absence` - Save leave-related issues
- `POST /api/workplace-safety` - Save safety violations
- `GET /api/case/[caseId]` - Retrieve case data for review

## Production Considerations

For production use with persistent data storage:

1. **External Database**: Consider using:
   - PlanetScale (MySQL)
   - Supabase (PostgreSQL)
   - Railway (PostgreSQL)
   - MongoDB Atlas

2. **Authentication**: Add user authentication using:
   - NextAuth.js
   - Auth0
   - Supabase Auth

3. **Data Export**: Add CSV/Excel export functionality

4. **Analytics**: Track usage with Vercel Analytics (already included)

## License

MIT License - Feel free to use and modify for your needs.

## Support

For issues or questions, please create an issue in the GitHub repository.
