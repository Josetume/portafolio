import PortfolioHome from "@/components/PortfolioHome";
export const metadata = {
  alternates: { canonical: "/en", languages: { es: "/", en: "/en" } },
};
export default function Page() {
  return <PortfolioHome locale="en" />;
}
