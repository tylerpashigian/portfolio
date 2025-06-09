type Project = {
  title: string;
  description: string;
  summary: React.ReactNode;
  categories: string[];
  type: string;
};

type Projects = Record<string, Project>;

export const projects: Projects = {
  sitelogiq: {
    title: 'SitelogIQ',
    description:
      'A comprehensive analytics platform that helps businesses understand their website performance through advanced data visualization and real-time monitoring. Built for enterprise clients who need deep insights into user behavior and site optimization.',
    summary: (
      <div className="flex flex-col gap-2">
        <p>
          At Sitelogiq, I was brought in to lead a team of frontend developers
          and stabilize the mySiteIQ facility management platform. mySiteIQ
          provides facility directors and operational leaders with a single
          source of truth for asset data, capital planning, and performance
          metrics—what they call making “the invisible visible…and actionable”.
        </p>
        <p>
          To ensure a consistent, modular UI, I architected and rolled out a
          uniform design system across the application. This system codified
          component patterns, enforced styling standards, and dramatically
          reduced visual drift as new features were added by different team
          members.
        </p>

        <p>
          On the performance front, I spearheaded a state-management refactor
          that optimized data fetching, reduced unnecessary renders, and
          improved load times for dashboards and facility maps. The result was a
          more responsive experience for users analyzing complex facility data
          and running long-range planning scenarios.
        </p>
      </div>
    ),
    categories: ['React.js', 'TypeScript', 'Chakra UI'],
    type: 'Facility Management Platform',
  },
  overpassip: {
    title: 'OverpassIP',
    description:
      'A modern IP geolocation service that provides accurate location data for web applications. Features include rate limiting, caching, and detailed geographic information with a focus on privacy and performance.',
    summary: (
      <div className="flex flex-col gap-2">
        <p>
          OverpassIP is a web3-native licensing platform developed by Igloo Inc.
          that connects NFT holders, brands, and IP creators to facilitate
          streamlined, on-chain licensing deals. The platform allows NFT owners
          to submit their assets for commercial use, while providing brands with
          a curated marketplace to discover and license digital IP for physical
          and digital products. It serves as the foundation for brand
          partnerships across Igloo’s ecosystem, including Pudgy Penguins’ toy
          line and other real-world activations.
        </p>
        <p>
          As the lead frontend engineer, I was responsible for building the
          application from the ground up—establishing the technical foundation,
          design system, and core architecture. I scaled the frontend team by
          onboarding and mentoring additional developers, and worked closely
          with product, design, and web3 engineering teams to deliver a
          performant, intuitive experience for both NFT holders and enterprise
          partners.
        </p>
        <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden my-2">
          <img
            src={'/projects/overpassip.jpeg'}
            alt={'OverpassIP Preview'}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    ),
    categories: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'NextAuth.js',
      'Vercel',
      'PostgreSQL',
      'GraphQL',
      'RainbowKit',
      'ethers.js',
      'wagmi',
    ],
    type: 'NFT Licensing Platform',
  },
  forked: {
    title: 'Forked',
    description:
      'A collaborative code review platform that streamlines the development workflow. Developers can share code snippets, get feedback, and collaborate on projects with an intuitive interface designed for modern development teams.',
    summary: (
      <div className="flex flex-col gap-2">
        <p>
          Forked Recipes is a minimalist recipe book web app built to offer a
          clean, ad-free alternative to traditional cooking sites. Users can
          browse, favorite, and share recipes without distractions.
        </p>
        <p>
          Built with the Next.js App Router, the app uses tRPC for end-to-end
          type safety, Prisma as the ORM, and a PostgreSQL database for
          persistent storage. The UI is styled using Tailwind CSS and shadcn/ui
          components, with deployment handled via Vercel.
        </p>
        <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden my-2">
          <img
            src={'/projects/forked.jpeg'}
            alt={'Forked Preview'}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 h-[100px] items-center">
          <img
            src={'/projects/forked-logo.png'}
            alt={'Forked logo'}
            className="h-full object-contain"
          />
          <p>
            Forked is a nod to both cooking and software development — like
            forking a recipe the way you'd fork a Git repo. Make it your own, in
            the kitchen or in code.
          </p>
        </div>
      </div>
    ),
    categories: [
      'Next.js',
      'trpc',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'NextAuth.js',
      'Vercel',
      'PostgreSQL',
    ],
    type: 'Recipe Book',
  },
};
