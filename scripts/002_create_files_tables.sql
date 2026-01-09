-- Create downloadable_files table
create table if not exists public.downloadable_files (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  file_url text not null,
  file_name text not null,
  file_size bigint,
  file_type text,
  download_count integer default 0,
  author_id uuid references auth.users(id) on delete cascade,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.downloadable_files enable row level security;

-- Create policies for downloadable_files
create policy "Anyone can view files"
  on public.downloadable_files for select
  using (true);

create policy "Authenticated users can create files"
  on public.downloadable_files for insert
  with check (auth.uid() = author_id);

create policy "Authenticated users can update their files"
  on public.downloadable_files for update
  using (auth.uid() = author_id);

create policy "Authenticated users can delete their files"
  on public.downloadable_files for delete
  using (auth.uid() = author_id);

-- Create index for faster lookups
create index if not exists downloadable_files_author_idx on public.downloadable_files(author_id);
