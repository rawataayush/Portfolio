/**
 * Shared action control. Renders an <a> or a <button> from one shared style
 * system, so buttons stay consistent without repeating a long class list.
 *
 * variant: "primary" (filled) | "secondary" (outline)
 * grow:    stretch to fill a flex row, matching the old .btn-row behaviour
 */
const VARIANTS = {
  primary: "bg-ink text-inverse hover:bg-inverse hover:text-ink focus-visible:bg-inverse focus-visible:text-ink",
  secondary:
    "bg-transparent text-ink hover:bg-ink hover:text-inverse focus-visible:bg-ink focus-visible:text-inverse",
};

const Button = ({
  as: Tag = "button",
  variant = "primary",
  grow = false,
  className = "",
  children,
  ...rest
}) => {
  return (
    <Tag
      className={[
        "inline-flex min-h-6 items-center justify-center gap-1 border border-ink px-3 py-1",
        "font-sans text-xs font-semibold tracking-[0.08em] uppercase cursor-pointer",
        "transition-[color,background-color,border-color,opacity] duration-200 ease-[ease]",
        "disabled:pointer-events-none disabled:opacity-40",
        "aria-disabled:pointer-events-none aria-disabled:opacity-40",
        VARIANTS[variant],
        grow ? "min-w-0 flex-1" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Button;