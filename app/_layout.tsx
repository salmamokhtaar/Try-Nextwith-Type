import Link from "next/link";

export default function Layout<T extends React.ReactNode>({ children }: { children: T }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}