// Static types for changelog
export interface ChangelogFragment {
  _id: string;
  _title: string;
  _slug: string;
  excerpt?: string;
  publishedAt?: string;
  content?: string;
}
