import './globals.css';

export const metadata = {
  title: 'React Gym',
  description:
    'A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. ',
  icons: {
    icon: '/favicon.png',
    sizes: "180x180",
    type: "image/png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
