import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <p className="idx">./iangaunt.dev</p>
            <Link href="/">Home</Link>
            <Link href="/about/page">About Me</Link>
            <Link href="/home/page">Blog</Link>
            <Link href="/resume/page">Resume</Link>
        </div>
    )
}