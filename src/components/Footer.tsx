import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">
      <div className="container-custom py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-orange-400">SkillSphere</h2>
          <p className="mt-3 text-sm text-slate-300">
            Learn practical skills from expert instructors and build your career with confidence.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Info</h3>
          <p>Email: support@skillsphere.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <div className="flex flex-col gap-2 text-slate-300">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <p>Facebook | LinkedIn | YouTube</p>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-slate-400 pb-5">
        © 2026 SkillSphere. All rights reserved.
      </p>
    </footer>
  );
}