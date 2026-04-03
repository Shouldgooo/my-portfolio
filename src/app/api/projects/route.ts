import { getCloudflareContext } from "@opennextjs/cloudflare";

type Project = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
};

export async function GET() {
  try {
    const { env } = await getCloudflareContext();
    const { results } = await env.portfolio_db
      .prepare(
        "SELECT id, title, description, tech_stack FROM projects ORDER BY id DESC"
      )
      .all<Project>();

    return Response.json(results ?? []);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return Response.json([], { status: 200 });
  }
}