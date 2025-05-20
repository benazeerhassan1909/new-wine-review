import { SanityLive } from '@/sanity/lib/live'
import Footer from "../footer";
import Header from "../header";
export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div id="page" className="site">
        <a className="skip-link screen-reader-text" href="#primary">Skip to content</a>
        <Header />
        {children}
        <SanityLive />
        <Footer />
      </div>
    </>
  )
}