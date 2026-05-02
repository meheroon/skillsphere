export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      <p className="text-slate-600 mt-3 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}