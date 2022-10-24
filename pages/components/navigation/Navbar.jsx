import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between px-20 py-5 font-semibold">
      <Link href="/"><a className="">Logo</a></Link>
      <div className="space-x-7">
        <Link href="about">A propos de moi</Link>
        <Link href="projet">Mes réalisations</Link>
        <Link href="contact"><a className="bg-blue-100 px-3 py-1 text-blue-400 rounded-lg">contact</a></Link>
      </div>
    </div>
  )
}
