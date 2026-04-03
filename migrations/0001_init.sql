CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT NOT NULL
);

INSERT INTO projects (title, description, tech_stack) VALUES
  ('Portfolio Website', 'A personal full-stack portfolio built with Next.js and Cloudflare.', 'Next.js, TypeScript, Tailwind CSS, Cloudflare D1');