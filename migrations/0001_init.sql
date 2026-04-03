CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT NOT NULL
);

INSERT INTO projects (title, description, tech_stack) VALUES
  ('Portfolio Website', 'A personal full-stack portfolio built with Next.js and Cloudflare.', 'Next.js, TypeScript, Tailwind, D1'),
  ('Todo App', 'A simple task management web app with CRUD features.', 'React, TypeScript'),
  ('Weather App', 'A weather application consuming third-party APIs.', 'React, API, CSS');