import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Next.js 14 with Custom Server</h1>
      <p className="mb-4">This is a sample page to demonstrate the setup with Next.js 14.</p>
      <Link href="/api/hello" className="text-blue-500 hover:underline">
        Check API Route
      </Link>
    </div>
  )
}

