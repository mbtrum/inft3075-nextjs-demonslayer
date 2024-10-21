import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Demon Slayer App",
  description: "A frontend web app for Demon Slayer API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="mb-4">
            <h1>Demon Slayer</h1>
          </header>
          <div className="d-flex">
            <sidebar className="me-3">
              <ul className="nav flex-column">
                <li className="nav-item"> 
                  <Link href="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item"> 
                  <Link href="/characters" className="nav-link">Characters</Link>
                </li>
              </ul>
            </sidebar>
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
