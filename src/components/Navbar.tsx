import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <p className="idx">./idx-test</p>
            <Link href="/home/page">Home</Link>
            <Link href="/account/page">Account</Link>
            <Link href="/help/page">Help</Link>
            <a className="logout">Logout</a>
        </div>
    )
}