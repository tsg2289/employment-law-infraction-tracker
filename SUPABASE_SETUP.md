# Supabase Setup Guide

This guide will help you set up Supabase authentication and row-level security for your Employment Law Infraction Tracker.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization and enter project details:
   - **Project Name**: Employment Law Tracker
   - **Database Password**: Choose a strong password
   - **Region**: Choose the closest region to your users
4. Click "Create new project"
5. Wait for the project to be created (this may take a few minutes)

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (looks like `https://your-project-ref.supabase.co`)
   - **anon public** key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`)
   - **service_role** key (also starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9` but is different)

## 3. Configure Environment Variables

1. Create a `.env.local` file in your project root (copy from `env.example`)
2. Replace the placeholder values with your actual Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Other existing environment variables...
```

## 4. Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy the entire contents of `supabase/schema.sql`
3. Paste it into the SQL Editor and click "Run"
4. This will create all the necessary tables with Row Level Security (RLS) enabled

## 5. Configure Authentication

1. In your Supabase dashboard, go to **Authentication** > **Settings**
2. Under **Auth Providers**, ensure **Email** is enabled
3. Configure **Email Templates** (optional but recommended):
   - Customize the confirmation email template
   - Set your site URL (e.g., `https://your-domain.com`)
4. Under **URL Configuration**:
   - **Site URL**: `https://your-domain.com` (or `http://localhost:3000` for development)
   - **Redirect URLs**: Add your callback URL: `https://your-domain.com/auth/callback`

## 6. Enable Email Confirmation (Recommended)

1. In **Authentication** > **Settings**
2. Under **User Signups**, enable **Enable email confirmations**
3. This ensures users must verify their email before accessing the app

## 7. Test the Setup

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/auth/signup`
3. Create a test account with a real email address
4. Check your email for the verification link
5. After verification, you should be able to sign in and access the dashboard

## 8. Row Level Security (RLS) Policies

The schema includes RLS policies that ensure:

- **Users can only see their own data**: Each table has policies that filter data by `user_id`
- **Data isolation**: Users cannot access, modify, or delete other users' data
- **Secure by default**: All tables require authentication to access

### RLS Policy Summary:

- `employees` - Users can CRUD their own employee records
- `wage_hour_violations` - Users can CRUD their own wage/hour violations
- `discrimination_harassment_violations` - Users can CRUD their own discrimination cases
- `retaliation_wrongful_termination_violations` - Users can CRUD their own retaliation cases
- `leave_of_absence_violations` - Users can CRUD their own leave violations
- `workplace_safety_violations` - Users can CRUD their own safety violations

## 9. Security Features

### Authentication Features:
- **Email verification**: Users must verify their email before accessing the app
- **Password reset**: Users can reset their password via email
- **Secure sessions**: Sessions are automatically managed and refreshed
- **Route protection**: Middleware protects API routes and pages

### Data Protection:
- **Row Level Security**: Database-level security ensures users can only access their data
- **Server-side validation**: All API endpoints validate user authentication
- **Encrypted storage**: Supabase encrypts data at rest and in transit

## 10. Production Deployment

When deploying to production:

1. Update your environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Update the **Site URL** and **Redirect URLs** in Supabase to match your production domain
3. Consider enabling additional security features in Supabase:
   - Rate limiting
   - IP restrictions (if needed)
   - Custom SMTP for emails

## 11. Monitoring and Maintenance

- Monitor authentication logs in **Authentication** > **Users**
- Check API usage in **Settings** > **Usage**
- Review database performance in **Database** > **Logs**
- Set up alerts for quota limits

## Troubleshooting

### Common Issues:

1. **"Invalid JWT" errors**: Check that your environment variables are correct
2. **Email not sending**: Verify your email configuration in Authentication settings
3. **RLS blocking queries**: Ensure the user is authenticated when making database queries
4. **CORS errors**: Check your Site URL and Redirect URLs configuration

### Getting Help:

- Check the [Supabase Documentation](https://supabase.com/docs)
- Visit the [Supabase Community](https://github.com/supabase/supabase/discussions)
- Review the browser console and server logs for detailed error messages

## Security Best Practices

1. **Never expose service role keys** in client-side code
2. **Use environment variables** for all sensitive configuration
3. **Regularly rotate** API keys and passwords
4. **Monitor** authentication logs for suspicious activity
5. **Keep dependencies updated** to patch security vulnerabilities
6. **Use HTTPS** in production
7. **Implement proper error handling** to avoid information leakage
