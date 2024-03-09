import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Exam - React/NextJS",
  description: "Examinee: Gerone Tolentino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
