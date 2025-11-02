type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search Posts..."
        className="mt-2 w-full rounded-2xl border border-(--border-glass) bg-primary-blue-dark/50 px-4 py-3 text-light-gray shadow-sm transition focus:border-light-yellow focus:outline-none focus:ring-2 focus:ring-light-yellow/40"
      />
    </div>
  );
};

export default PostFilter;
