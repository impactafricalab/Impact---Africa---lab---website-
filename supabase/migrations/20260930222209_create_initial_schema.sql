CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), slug text UNIQUE NOT NULL, name text NOT NULL, tagline text,
  sector text NOT NULL, sectors text[] DEFAULT '{}', short_description text, description text, problem text,
  solution text, how_it_works text, beneficiaries text, features text[] DEFAULT '{}', business_model text,
  impact_goal text, status text NOT NULL DEFAULT 'concept', partners_sought text, logo_url text, image_url text,
  gallery text[] DEFAULT '{}', documents jsonb DEFAULT '[]', contact_email text, is_published boolean DEFAULT true,
  is_archived boolean DEFAULT false, sort_order int DEFAULT 0, updated_at timestamptz DEFAULT now(), created_at timestamptz DEFAULT now()
);
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_select_projects" ON projects FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "auth_insert_projects" ON projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "auth_update_projects" ON projects FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "auth_delete_projects" ON projects FOR DELETE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), slug text UNIQUE NOT NULL, title text NOT NULL, excerpt text,
  content text, image_url text, category text, is_published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(), created_at timestamptz DEFAULT now()
);
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_select_news" ON news FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "auth_insert_news" ON news FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "auth_update_news" ON news FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "auth_delete_news" ON news FOR DELETE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, role text NOT NULL, bio text,
  photo_url text, sort_order int DEFAULT 0, is_visible boolean DEFAULT true, created_at timestamptz DEFAULT now()
);
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_select_team" ON team_members FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "auth_insert_team" ON team_members FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "auth_update_team" ON team_members FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "auth_delete_team" ON team_members FOR DELETE TO authenticated USING (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), nom text NOT NULL, prenom text NOT NULL, organisation text,
  fonction text, email text NOT NULL, telephone text, pays text, projet_concerne text, type_demande text NOT NULL,
  message text NOT NULL, is_read boolean DEFAULT false, created_at timestamptz DEFAULT now()
);
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_insert_contact" ON contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "auth_select_contact" ON contact_submissions FOR SELECT TO authenticated USING (true);
CREATE POLICY "auth_update_contact" ON contact_submissions FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "auth_delete_contact" ON contact_submissions FOR DELETE TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_sector ON projects(sector);
CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(is_published) WHERE is_published = true;
CREATE INDEX IF NOT EXISTS idx_news_slug ON news(slug);
CREATE INDEX IF NOT EXISTS idx_news_published ON news(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
