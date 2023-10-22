import Link from 'next/link';
import React from 'react';

export default function TesteProvisorio() {
  return (
    <div>
      <h1>testar jest</h1>
      <Link href="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
}