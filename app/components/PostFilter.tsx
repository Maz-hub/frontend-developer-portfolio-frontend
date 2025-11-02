type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => (
  <div className="rounded-3xl border border-(--border-glass) bg-glass-gray/80 px-5 py-4 shadow-sm backdrop-blur md:px-6 md:py-5">
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-medium-gray">
          Filter posts
        </p>
        <p className="text-sm text-medium-gray">Search by title or excerpt</p>
      </div>
      <div className="mt-2 w-full md:mt-0 md:w-164">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-2xl border border-(--border-glass) bg-primary-blue-dark/50 px-4 py-3 text-light-gray shadow-sm transition focus:border-light-yellow focus:outline-none focus:ring-2 focus:ring-light-yellow/40"
        />
      </div>
    </div>
  </div>
);

export default PostFilter;
