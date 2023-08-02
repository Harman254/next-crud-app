import Link from 'next/link'



const Navbar = () => {
  return (
    <nav>
     <div className='flex justify-between align-items-center bg-black px-8 py-3'>
     <Link href={'/'} className='text-stone-50 font-extrabold'>GerichCode Academy</Link>
      <Link href={'/addTopic'} className='bg-green-500 p-2'>Add Topic</Link>
     </div>
      
    </nav>
  )
}

export default Navbar
