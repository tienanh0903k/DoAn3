import { Link } from 'react-router-dom'

const ErrorBoundary = () => {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center bg-sky-500'>
      <h1 className='text-9xl font-extrabold tracking-widest text-white'>500</h1>
      <div className='absolute rotate-12 rounded bg-orange px-2 text-sm text-white'>Error!</div>
      <button className='mt-5'>
        <Link
          to='/'
          className='active:text-orange-500 group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring'
        >
          <span className='absolute inset-0 translate-x-0.5 translate-y-0.5 bg-orange transition-transform group-hover:translate-x-0 group-hover:translate-y-0' />
          <span className='relative block border border-current px-8 py-3'>
            <span>Go Home</span>
          </span>
        </Link>
      </button>
    </main>
  )
}

export default ErrorBoundary
