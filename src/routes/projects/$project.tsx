import Badge from '@/components/badge';
import { createFileRoute, Link } from '@tanstack/react-router';
import { CaretLeftIcon } from '@radix-ui/react-icons';
import TextSection from '@/components/text-section';
import { projects } from '@/models/recipe';

type ProjectParams = {
  project: string;
};

export const Route = createFileRoute('/projects/$project')({
  loader: ({ params }: { params: ProjectParams }) => {
    const project = projects[params.project];
    if (!project) {
      throw new Error('Project not found');
    }
    return project;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const project = Route.useLoaderData();
  return (
    <div className="bg-white [view-transition-name:main-content]">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-black mb-4 group"
          viewTransition={{ types: ['fade'] }}
        >
          <CaretLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>

        <header className="flex flex-col gap-4">
          <TextSection title={project.title} description={project.type} />
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
        </header>

        <TextSection title={'About'} description={project.summary} />
      </div>
    </div>
  );
}
