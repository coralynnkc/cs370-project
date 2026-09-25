/*
 * THIS CODE IS OUR OWN WORK, IT WAS WRITTEN WITHOUT CONSULTING
 * A TUTOR OR CODE WRITTEN BY OTHER STUDENTS OUTSIDE OF OUR TEAM.
 * - Danny Chen, Ruilin Chen, Leah Loukedis, Chloe Peyrebrune, Coralynn Yang, Sihao Zhang
 */

// Placeholder so the first production deploy isn't the create-next-app page.
// The real landing page and nav are SCRUM-23.
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">SwoopSwap</h1>
      <p className="text-muted-foreground text-lg">
        A secondhand marketplace for Emory students. Buy, sell, or give away what you no longer
        need, so less of it ends up in the dumpster at move-out.
      </p>
      <p className="text-muted-foreground text-sm">Coming soon.</p>
    </main>
  );
}
