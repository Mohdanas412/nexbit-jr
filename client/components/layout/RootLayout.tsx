import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

function bgByTime() {
  const h = new Date().getHours();
  if (h < 12) return "from-[#FFEAA7]/50 via-white to-white"; // morning
  if (h < 18) return "from-[#CFFAFE]/50 via-white to-white"; // day
  return "from-[#E9D5FF]/50 via-white to-white"; // evening
}

export default function RootLayout() {
  return (
    <div className={`min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] ${bgByTime()}`}>
      <SiteHeader />
      <main className="flex-1 animate-[fadeIn_.4s_ease]"><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
