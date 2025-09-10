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
import Placeholder from "@/pages/Placeholder";

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
            <Route
              path="/dashboard"
              element={<Placeholder title="Student Dashboard" description="Dashboard UI with streaks, XP, badges, and leaderboard will appear here. Ask to generate it next." />}
            />
            <Route
              path="/badges"
              element={<Placeholder title="Badges" description="Your badge collection with locked/unlocked states will appear here." />}
            />
            <Route
              path="/leaderboard"
              element={<Placeholder title="Leaderboard" description="Global and class leaderboards will appear here." />}
            />
            <Route
              path="/pricing"
              element={<Placeholder title="Pricing" description="Free plan details and upcoming Premium will appear here." />}
            />
            <Route
              path="/learning"
              element={<Placeholder title="Learning" description="AI chat tutor and micro-lesson view will appear here." />}
            />
            <Route
              path="/streaks"
              element={<Placeholder title="Habits & Streaks" description="Calendar view and streak tracker will appear here." />}
            />
            <Route
              path="/profile"
              element={<Placeholder title="Profile & Settings" description="Update avatar, name, notifications, and more." />}
            />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
