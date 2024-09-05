export function Container({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="mx-auto my-0 max-w-7xl">{children}</div>;
}
