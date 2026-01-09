-- Create blog_posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content text not null,
  excerpt text,
  author_id uuid references auth.users(id) on delete cascade,
  published boolean default false,
  featured_image text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.blog_posts enable row level security;

-- Create policies for blog_posts
create policy "Anyone can view published blogs"
  on public.blog_posts for select
  using (published = true);

create policy "Authenticated users can view all their blogs"
  on public.blog_posts for select
  using (auth.uid() = author_id);

create policy "Authenticated users can create blogs"
  on public.blog_posts for insert
  with check (auth.uid() = author_id);

create policy "Authenticated users can update their blogs"
  on public.blog_posts for update
  using (auth.uid() = author_id);

create policy "Authenticated users can delete their blogs"
  on public.blog_posts for delete
  using (auth.uid() = author_id);

-- Create index for faster lookups
create index if not exists blog_posts_slug_idx on public.blog_posts(slug);
create index if not exists blog_posts_author_idx on public.blog_posts(author_id);
create index if not exists blog_posts_published_idx on public.blog_posts(published);
