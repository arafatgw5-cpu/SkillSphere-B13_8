import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-2xl font-bold">SkillSphere</h2>
          <p>Email: support@skillsphere.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Links</h3>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/courses">Courses</Link></p>
          <p><Link href="/my-profile">My Profile</Link></p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Policy</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Facebook | LinkedIn | GitHub</p>
        </div>
      </div>

      <p className="text-center pb-5">
        © 2026 SkillSphere. All rights reserved.
      </p>
    </footer>
  );
}