/**
 * Class-name joiner. Deliberately dependency-free (dependency policy,
 * ENGINEERING_RULES §6): the primitive layer needs conditional joining,
 * not clsx/tailwind-merge semantics.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
