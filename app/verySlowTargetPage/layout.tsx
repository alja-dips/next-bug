export default async function VerySlowTargetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <>{children}</>;
}
