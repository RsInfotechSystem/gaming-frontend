"use client"
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link href="/tab1">
        <a style={{ fontWeight: router.pathname === '/tab1' ? 'bold' : 'normal' }}>Home</a>
      </Link>
      <Link href="/tab2">
        <a style={{ fontWeight: router.pathname === '/tab2' ? 'bold' : 'normal' }}>About</a>
      </Link>
      <Link href="/tab3">
        <a style={{ fontWeight: router.pathname === '/tab3' ? 'bold' : 'normal' }}>Contact</a>
      </Link>
    </div>
  );
}





