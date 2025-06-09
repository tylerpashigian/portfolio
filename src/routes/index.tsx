import { createFileRoute } from '@tanstack/react-router';

import Link from '@/components/link';
import Contact from '@/components/contact';
import TextSection from '@/components/text-section';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <main className="flex flex-col max-w-3xl h-[100svh] mx-auto p-4 pb-safe-area-inset-bottom">
      <div className="flex-grow flex flex-col justify-center gap-8">
        <TextSection title="Tyler Pashigian" description="Frontend Engineer" />
        <TextSection
          title="About"
          description="I build front-end apps with clean, scalable code and intuitive UIs
            in React and Next.js. I love crafting fast, user-friendly
            experiences with fluid interactions."
        />
        <TextSection
          title="My Work"
          description={
            <div className="space-y-2">
              <p className="text-secondary-foreground">
                I am currently working at{' '}
                <span>
                  <Link
                    to="/projects/$project"
                    // TODO: fix the cast to any
                    params={{ project: 'sitelogiq' } as any}
                    viewTransition={{ types: ['fade'] }}
                  >
                    SitelogIQ
                  </Link>
                </span>{' '}
                as a lead frontend engineer to help build out mySiteIQ.
              </p>
              <p className="text-secondary-foreground">
                In addition to my day job, I am currently working on{' '}
                <span>
                  <Link
                    to="/projects/$project"
                    // TODO: fix the cast to any
                    params={{ project: 'overpassip' } as any}
                    viewTransition={{ types: ['fade'] }}
                  >
                    OverpassIP
                  </Link>
                </span>{' '}
                and{' '}
                <span>
                  <Link
                    to="/projects/$project"
                    // TODO: fix the cast to any
                    params={{ project: 'forked' } as any}
                    viewTransition={{ types: ['fade'] }}
                  >
                    Forked
                  </Link>
                </span>
                .
              </p>
            </div>
          }
        />
      </div>
      <div className="flex w-full justify-center flex-shrink-0 p-4">
        <Contact />
      </div>
    </main>
  );
}
