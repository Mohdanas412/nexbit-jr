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
import Dashboard from "@/pages/Dashboard";
import LearningPage from "@/pages/Learning";
import ProfilePage from "@/pages/Profile";

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
            <Route path="/learning" element={<LearningPage />} />
            <Route
              path="/streaks"
              element={<Placeholder title="Habits & Streaks" description="Calendar view and streak tracker will appear here." />}
            />
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
