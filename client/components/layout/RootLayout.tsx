import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/20 via-white to-white">
      <SiteHeader />
      <main className="flex-1 animate-[fadeIn_.4s_ease]"><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
