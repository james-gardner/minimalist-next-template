export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="flex w-full max-w-2xl flex-col gap-8 px-8 py-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Minimalist Next.js Template
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            A production-ready Next.js template with TypeScript, Tailwind CSS, and essential security features.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Next.js 16 with App Router</li>
            <li>TypeScript with strict mode</li>
            <li>Tailwind CSS v4</li>
            <li>ESLint configuration</li>
            <li>Security headers configured</li>
            <li>Production-ready setup</li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a
            className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
            href="https://github.com/james-gardner/minimalist-next-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
