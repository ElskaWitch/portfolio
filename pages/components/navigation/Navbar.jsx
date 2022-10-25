import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#0e0037] via-[#6d5ba1] to-[#0e0037] text-white flex justify-between px-3 md:px-20 py-7 font-semibold items-center">
      <Link href="/"><a className="text-xl font-semibold">Justine.<span className="text-indigo-400">Labas</span></a></Link>
      <div className="space-x-7">
        <Link href="about">A propos de moi</Link>
        <Link href="projet">Mes réalisations</Link>
        <Link href="contact"><a className="bg-indigo-100 px-3 py-1 text-[#0e0037] rounded-lg">contact</a></Link>
      </div>
    </div>
  )
}
