import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RootLayout from "@/components/layout/RootLayout";
import AuthPage from "@/pages/Auth";
import BadgesPage from "@/pages/Badges";
import LeaderboardPage from "@/pages/Leaderboard";
import PricingPage from "@/pages/Pricing";
import Dashboard from "@/pages/Dashboard";
import LearningPage from "@/pages/Learning";
import ProfilePage from "@/pages/Profile";
import HabitPage from "@/pages/Habit";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/badges" element={<BadgesPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/streaks" element={<HabitPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
