import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <Link id="blog-back" className="blog-back" href="/blog/page"><span>←</span> Back</Link>
    )
}