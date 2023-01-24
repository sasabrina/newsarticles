import { Noto_Serif } from "@next/font/google";
import "./globals.scss";

const noto = Noto_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>{`<Header/>`}</header>

        {children}

        <footer> {`<Footer/>`}</footer>
      </body>
    </html>
  );
}
