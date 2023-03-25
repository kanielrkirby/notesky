export default function MainCard({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="m-8 flex h-full flex-col rounded-xl bg-crystal-secondary dark:bg-onyx-secondary">
      {children}
    </div>
  );
}
