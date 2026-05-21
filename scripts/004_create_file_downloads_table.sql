-- Create file_downloads table to track email subscriptions for downloads
CREATE TABLE IF NOT EXISTS file_downloads (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email VARCHAR(255) NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT email_not_empty CHECK (LENGTH(email) > 0)
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_file_downloads_email ON file_downloads(email);
CREATE INDEX IF NOT EXISTS idx_file_downloads_file_name ON file_downloads(file_name);
CREATE INDEX IF NOT EXISTS idx_file_downloads_created_at ON file_downloads(created_at DESC);

-- Enable RLS
ALTER TABLE file_downloads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public downloads)
CREATE POLICY "Allow public inserts" ON file_downloads
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can read their own downloads
CREATE POLICY "Allow users to read downloads" ON file_downloads
  FOR SELECT
  USING (auth.role() = 'authenticated');
