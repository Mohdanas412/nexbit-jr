export default function SiteFooter() {
  return (
    <footer className="border-t bg-background/60">
      <div className="container py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-sm">
        <div>
          <p className="font-extrabold text-lg">Nexbit Jr</p>
          <p className="text-muted-foreground mt-2 max-w-xs">
            Make coding a habit. Learn step by step, playfully.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Product</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>Dashboard</li>
            <li>Lessons</li>
            <li>Badges</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Company</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Legal</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nexbit Jr
      </div>
    </footer>
  );
}
