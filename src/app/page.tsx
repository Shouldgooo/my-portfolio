import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Project = {
	id: number;
	title: string;
	description: string;
	tech_stack: string;
};

async function getProjects(): Promise<Project[]> {
	try {
		const { env } = await getCloudflareContext();
		const { results } = await env.portfolio_db
			.prepare(
				"SELECT id, title, description, tech_stack FROM projects ORDER BY id DESC"
			)
			.all<Project>();

		return results ?? [];
	} catch {
		return [];
	}
}

export default async function Home() {
	const projects = await getProjects();

	return (
	  <main className="min-h-screen bg-white text-gray-900">
		<section className="mx-auto max-w-4xl px-6 py-16">
		  <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
			<div className="max-w-2xl">
			  <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
				Personal Portfolio
			  </p>
			  <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
				Sherry
			  </h1>
			  <p className="mt-4 text-lg leading-8 text-gray-600">
				Full-Stack Developer based in Melbourne with hands-on experience
				building end-to-end web applications across front-end and back-end.
			  </p>
			  <p className="mt-4 text-lg leading-8 text-gray-600">
				I specialize in React, TypeScript, Java (Spring Boot), and modern
				API development, with a strong focus on scalable system design and
				user-focused solutions.
			  </p>
			  <p className="mt-4 text-lg leading-8 text-gray-600">
				I am experienced in cloud and DevOps practices (AWS, Cloudflare,
				Docker, CI/CD) and actively leverage AI-assisted development tools
				to improve productivity and accelerate problem-solving.
			  </p>
  
			  <div className="mt-6 flex flex-wrap gap-4">
				<a
				  href="/resume.pdf"
				  className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
				>
				  Download Resume
				</a>
				<a
				  href="#projects"
				  className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium"
				>
				  View Projects
				</a>
			  </div>
			</div>
  
			<div className="flex justify-center">
			  <img
				src="/profile.jpeg"
				alt="Profile"
				className="h-56 w-56 rounded-2xl object-cover shadow-lg"
			  />
			</div>
		  </div>
		</section>
  
		<section
		  id="projects"
		  className="mx-auto max-w-4xl px-6 pb-16"
		>
		  <h2 className="text-2xl font-bold">Projects</h2>
		  <p className="mt-2 text-gray-600">
			A selection of projects demonstrating my full-stack development skills,
			including system design, API development, and user-focused application
			building.
		  </p>
  
		  <div className="mt-8 grid gap-6 md:grid-cols-2">
			{projects.length === 0 ? (
			  <div className="rounded-2xl border border-dashed border-gray-300 p-6">
				<p className="font-medium">No projects yet</p>
				<p className="mt-2 text-sm text-gray-600">
				  My latest projects will appear here.
				</p>
			  </div>
			) : (
			  projects.map((project) => (
				<article
				  key={project.id}
				  className="rounded-2xl border border-gray-200 p-6 shadow-sm"
				>
				  <h3 className="text-xl font-semibold">{project.title}</h3>
				  <p className="mt-3 text-gray-600">{project.description}</p>
				  <p className="mt-4 text-sm text-gray-500">
					Tech Stack: {project.tech_stack}
				  </p>
				</article>
			  ))
			)}
		  </div>
		</section>
	  </main>
	);
  }