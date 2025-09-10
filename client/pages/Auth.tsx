import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ShieldCheck, User, LogIn, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/40 rounded-full blur-3xl" />
      </div>
      <div className="container py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> Join Nexbit Jr
          </p>
          <div className="flex items-center gap-3 mt-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Learning that feels like play</h1>
            <div className="hidden sm:block"><Mascot className="w-14 h-14" mood="wave" /></div>
          </div>
          <p className="text-muted-foreground mt-2 max-w-md">Create your account to track streaks, earn XP, and chat with the AI tutor. Google sign-in coming soon.</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><ShieldCheck className="text-primary" /> Safe for students</li>
            <li className="flex items-center gap-2"><ShieldCheck className="text-primary" /> Works on any device</li>
            <li className="flex items-center gap-2"><ShieldCheck className="text-primary" /> Ready for school use</li>
          </ul>
        </div>
        <Card className="shadow-xl border-2">
          <CardContent className="p-6">
            <Tabs defaultValue="signup" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="login">Log In</TabsTrigger>
              </TabsList>
              <TabsContent value="signup">
                <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex gap-3">
                    <div className="w-full">
                      <label className="text-sm font-medium">Display name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input className="pl-10" placeholder="Alex" required />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input className="pl-10" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <Input type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full">Create account</Button>
                  <Button type="button" variant="outline" className="w-full hover:shadow-lg">Continue with Google</Button>
                  <p className="text-xs text-muted-foreground text-center">Supabase auth hooks will connect here.</p>
                </form>
              </TabsContent>
              <TabsContent value="login">
                <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <Input className="pl-10" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Password</label>
                    <Input type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full"><LogIn className="mr-2" /> Log In</Button>
                  <p className="text-xs text-muted-foreground text-center">Forgot password? Reset flow coming soon.</p>
                </form>
              </TabsContent>
            </Tabs>
            <p className="text-xs text-muted-foreground text-center mt-4">By continuing, you agree to our Terms and Privacy.</p>
            <div className="text-center mt-4">
              <Button asChild variant="ghost">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
