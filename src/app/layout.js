// app/layout.js
import '../styles/globals.css';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ display: 'flex' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
