import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="wp-singular page-template page-template-tnwr-page-wo-title-template page-template-tnwr-page-wo-title-template-php page page-id-100953 wp-custom-logo wp-theme-md-tnwr aa-prefix-nwr-">{children}</body>
    </html>
  );
}