# Stripe Payment Integration with Next.js

A simple and clean implementation of Stripe Checkout integration using Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Stripe Checkout Integration**: Secure payment processing using Stripe's hosted checkout
- **Next.js 15**: Built with the latest Next.js framework
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Modern, responsive styling
- **Success/Cancel Pages**: Proper handling of payment outcomes
- **Environment Variables**: Secure configuration management

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- A Stripe account (free at [stripe.com](https://stripe.com))
- Stripe API keys (publishable and secret)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd stripe-payment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your Stripe keys:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   NEXT_PUBLIC_STRIPE_SUCCESS_URL=http://localhost:3000/success
   NEXT_PUBLIC_STRIPE_CANCEL_URL=http://localhost:3000/cancel
   ```

   **Note**: Replace the URLs with your actual domain when deploying to production.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
stripe-payment/
├── src/
│   └── app/
│       ├── api/
│       │   └── checkout/
│       │       └── route.ts          # Stripe checkout session creation
│       ├── cancel/
│       │   └── page.tsx             # Payment cancellation page
│       ├── success/
│       │   └── page.tsx             # Payment success page
│       ├── globals.css              # Global styles
│       ├── layout.tsx               # Root layout component
│       └── page.tsx                 # Main checkout page
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 💳 How It Works

1. **User clicks "Checkout $20"** on the main page
2. **Frontend calls** `/api/checkout` endpoint
3. **Backend creates** a Stripe checkout session with:
   - Product: "Test Product" ($20.00)
   - Success URL: `/success`
   - Cancel URL: `/cancel`
4. **Stripe redirects** user to hosted checkout page
5. **After payment**, user is redirected to success or cancel page

## 🔧 Configuration

### Product Configuration

To modify the product details, edit `/src/app/api/checkout/route.ts`:

```typescript
line_items: [
  {
    price_data: {
      currency: "usd",
      product_data: {
        name: "Your Product Name",  // Change product name
      },
      unit_amount: 2000,  // Change price (in cents: 2000 = $20.00)
    },
    quantity: 1,
  },
],
```

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key | `sk_test_...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key | `pk_test_...` |
| `NEXT_PUBLIC_STRIPE_SUCCESS_URL` | URL to redirect after successful payment | `http://localhost:3000/success` |
| `NEXT_PUBLIC_STRIPE_CANCEL_URL` | URL to redirect after cancelled payment | `http://localhost:3000/cancel` |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Make sure to:
- Set all environment variables
- Update success/cancel URLs to your production domain
- Use production Stripe keys (not test keys)

## 🧪 Testing

This project uses Stripe's test mode by default. To test payments:

1. Use test card numbers from [Stripe's testing documentation](https://stripe.com/docs/testing)
2. Common test cards:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - **Requires authentication**: `4000 0025 0000 3155`

## 📚 Dependencies

- **Next.js 15.5.4**: React framework
- **React 19.1.0**: UI library
- **Stripe 18.5.0**: Payment processing
- **@stripe/stripe-js 7.9.0**: Stripe client-side library
- **TypeScript 5**: Type safety
- **Tailwind CSS 4**: Styling

## 🔒 Security Notes

- Never expose your secret key in client-side code
- Always use HTTPS in production
- Validate webhook signatures in production
- Keep your Stripe keys secure and rotate them regularly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🆘 Support

If you encounter any issues:

1. Check the [Stripe documentation](https://stripe.com/docs)
2. Verify your environment variables
3. Check the browser console for errors
4. Review the Next.js logs

## 🔗 Useful Links

- [Stripe Documentation](https://stripe.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---