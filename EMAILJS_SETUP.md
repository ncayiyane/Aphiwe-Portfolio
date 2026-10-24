# EmailJS Setup Instructions

The contact form now uses EmailJS to send real emails directly to you. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (the free tier allows up to 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. After logging in, click "Email Services" in the sidebar
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - Outlook
   - Or any other supported provider
4. Follow the OAuth authentication flow to connect your email account
5. Note the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Click "Email Templates" in the sidebar
2. Click "Create New Template"
3. Fill in the template:

**Template Name:** `portfolio-contact`

**To Email:** Your email address (e.g., `aphiwe.ncayiyane@example.com`)

**Subject:** `Portfolio Contact from {{from_name}}`

**Email Content (HTML):**

```html
<p>You have received a new message from your portfolio contact form.</p>

<h3>Contact Details:</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p style="color: #666; font-size: 12px;">This message was sent from your portfolio website.</p>
```

4. Click "Save"
5. Note the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Click "Account" in the sidebar (or go to [https://www.emailjs.com/account](https://www.emailjs.com/account))
2. Scroll down to "General" section
3. Copy your **Public Key**

## Step 5: Configure Environment Variables

Create a `.env` file in the root of your project (next to `.env.example`) and add:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with:
- Your Service ID from Step 2
- Your Template ID from Step 3
- Your Public Key from Step 4

## Step 6: Restart the Development Server

After adding the `.env` file, restart your frontend:

```bash
npm run dev
```

## Step 7: Test the Contact Form

1. Navigate to the Contact section of your portfolio
2. Fill out the form with test data
3. Click "TRANSMIT"
4. Check your email inbox for the message

## Important Notes

### Free Tier Limits
- EmailJS free tier: 200 emails/month
- If you need more, upgrade to a paid plan

### Security
- The Public Key is safe to expose in frontend code
- Never share your Private Key
- EmailJS handles rate limiting and abuse prevention

### Customization
You can customize the email template in the EmailJS dashboard:
- Change the subject line
- Add more fields to the form
- Style the HTML email
- Add auto-replies

### Troubleshooting

**"EmailJS configuration is missing" error:**
- Make sure you created the `.env` file
- Check that all three variables are set
- Restart the dev server after adding `.env`

**"Failed to transmit message" error:**
- Check your EmailJS service is connected
- Verify the template ID is correct
- Check EmailJS dashboard for error logs
- Ensure you haven't exceeded the 200 email/month limit

**Email not arriving:**
- Check your spam folder
- Verify the "To Email" in the template is correct
- Check EmailJS dashboard delivery logs

## Alternative: Use Formspree

If you prefer not to use EmailJS, you can use [Formspree](https://formspree.io/):

1. Sign up at https://formspree.io/
2. Create a new form
3. Get your form endpoint URL
4. Update the Contact component to use fetch() instead of EmailJS

EmailJS is recommended because it's easier to set up and has a generous free tier.
