import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-7xl font-extrabold text-orange-500">404</h1>
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="text-slate-600 mt-3">The page you are looking for does not exist.</p>
        <Link href="/" className="btn bg-orange-500 text-white mt-6">
          Back to Home
        </Link>
      </div>
    </div>
  );
}