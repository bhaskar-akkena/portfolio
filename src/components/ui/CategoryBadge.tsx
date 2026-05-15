import { categoryStyles } from "@/lib/categories";
import type { ProjectCategory } from "@/lib/types";

type CategoryBadgeProps = {
  category: ProjectCategory;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const style = categoryStyles[category];

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${style.badge}`}
    >
      {category}
    </span>
  );
}
