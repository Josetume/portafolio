import "@/app/globals.css";
import SiteLayout, { siteMetadata } from "@/components/SiteLayout";
export const metadata = siteMetadata("en");
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
