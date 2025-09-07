export default async function Article({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="article-header z-10 fixed w-full max-w-5xl mx-auto h-64 top-0 hidden xl:block">
      </div>
      <h3 className="z-20 font-semibold text-2xl md:text-3xl tracking-tight col-start-1 xl:col-start-2 row-start-3 xl:row-start-2 self-center xl:sticky xl:top-8">
        {title}
      </h3>
      <div className="z-20 text-foreground/50 tracking-tight col-start-1 xl:col-start-2 row-start-4 xl:row-start-3 xl:sticky xl:top-17">
        {date}
      </div>

      <div className="col-start-1 row-start-5 xl:col-start-2 xl:row-start-4 mt-8 prose text-foreground">
        {children}
      </div>
    </>
  );
}
