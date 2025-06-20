# Portfolio – Abdul Nafisa Sulthana

A modern, responsive portfolio web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This project showcases personal achievements, skills, work experience, certifications, and includes a contact form powered by EmailJS.

## Features

- **Beautiful, animated UI** with a cyberpunk-inspired theme
- **Responsive design** for all devices
- **Contact form** with email sending via EmailJS
- **Sections** for About, Projects, Skills, Work Experience, Certifications, Achievements, Positions of Responsibility, and more
- **Social links** for GitHub and LinkedIn
- **Custom email template** for contact form submissions

## Demo

> https://abdul-nafisa-sulthana.netlify.app/

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Visit - https://abdul-nafisa-sulthana.netlify.app/
### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
project/
│
├── public/                # Static assets (images, etc.)
├── src/
│   ├── components/        # React components (About, Projects, Contact, etc.)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind and global styles
│
├── index.html             # HTML entry point
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── tsconfig*.json         # TypeScript configs
└── vite.config.ts         # Vite config
```

## Customization

- **Contact Form:**  
  The contact form uses [EmailJS](https://www.emailjs.com/).  
  Update your service ID, template ID, and public key in `src/components/Contact.tsx`.

- **Email Template:**  
  Customize the email template in `src/components/email-template.html`.

- **Profile Info:**  
  Update your personal details, social links, and content in the respective components in `src/components/`.

- **Styling:**  
  Tailwind CSS is used for styling. You can customize the theme in `tailwind.config.js`.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code with ESLint

## Dependencies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [Lucide React](https://lucide.dev/icons/)

