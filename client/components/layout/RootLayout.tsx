import { Outlet } from "react-router-dom";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

function bgByTime() {
  const h = new Date().getHours();
  if (h < 12) return "from-[#FFEAA7]/50 via-white to-white"; // morning
  if (h < 18) return "from-[#CFFAFE]/50 via-white to-white"; // day
  return "from-[#E9D5FF]/50 via-white to-white"; // evening
}

function darkBgByTime() {
  const h = new Date().getHours();
  if (h < 12) return "from-[#0B132B] via-[#1C1C28] to-[#0B132B]"; // morning
  if (h < 18) return "from-[#0D1B3E] via-[#1C1C28] to-[#0B132B]"; // day
  return "from-[#0B132B] via-[#1A1433] to-[#0B132B]"; // evening
}

export default function RootLayout() {
  return (
    <div className={`relative min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] dark:bg-gradient-to-b ${bgByTime()} dark:${darkBgByTime()}`}>
      <div className="hidden dark:block dark-grid-overlay absolute inset-0 pointer-events-none" />
      <SiteHeader />
      <main className="flex-1 animate-[fadeIn_.4s_ease]"><Outlet /></main>
      <SiteFooter />
    </div>
  );
}
