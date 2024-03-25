import "./globals.css";
import NavBar from "../app/components/NavBar";
import Footer from "./components/footer";

export const metadata = {
  title: "FC News",
  description: "Portal de noticias FC",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
