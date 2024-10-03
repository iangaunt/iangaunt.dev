import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <Link href="/home/page">Home</Link>
            <Link href="/account/page">Account</Link>
            <Link href="/help/page">Help</Link>
        </div>
    )
}