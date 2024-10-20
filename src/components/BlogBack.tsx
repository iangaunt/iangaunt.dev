import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <Link className="blog-back" href="/blog/page"><span>←</span> Back</Link>
    )
}