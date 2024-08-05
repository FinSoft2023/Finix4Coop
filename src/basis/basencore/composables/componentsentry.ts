/**
 * Type definition for the component resolver function.
 * Resolves component names to objects.
 *
 * @param componentName - The name of the component to resolve.
 * @returns The resolved component object.
 */
export type EntryComponentResolver = (componentName: string) => object;

/**
 * Creates a component resolver function that resolves component names to objects.
 *
 * @param componentsMap - A record of component names and their corresponding objects.
 * @param fallback - A fallback component resolver function to be used if a component is not found in the components map.
 * @returns The component resolver function.
 */
export function createComponentResolver(
  componentsMap: Record<string, object>,
  fallback: EntryComponentResolver,
): EntryComponentResolver {
  return (componentName: string) =>
    componentsMap[componentName] ?? fallback(componentName);
}

/**
 * Provides a component resolver function to be used by other components.
 * If a resolver function is provided, it will be used. Otherwise, it will try to inject a resolver function from the component hierarchy.
 *
 * @param resolver - An optional component resolver function.
 * @returns The resolved component resolver function.
 */
export function useComponentResolver(resolver?: EntryComponentResolver) {
  if (!!resolver) {
    provide('active-component-resolver', resolver);
    return resolver;
  }

  const activeResolver = inject(
    'active-component-resolver',
  ) as EntryComponentResolver;

  return activeResolver;
}
