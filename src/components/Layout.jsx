import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { useRouter } from 'next/router'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  const router = useRouter()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      // overflow might need to get changed
    //   className='absolute top-0 left-0 z-30 w-screen h-screen overflow-hidden bg-neutral-800 dom text-gray-50'>
        className=''>
        <div className='flex flex-row items-center justify-center w-full px-4 bg-transparent select-none md:justify-start h-28 md:px-12'>
            <div className='text-5xl text-left cursor-pointer' onClick={() => router.push('/')}>Your Name</div>
            <div className='flex-row items-center hidden ml-auto text-right md:flex items-right'>
                <div className='ml-10 cursor-pointer hover:text-gray-300' onClick={() => router.push('/about')}>about</div>
                <div className='ml-10 hover:text-gray-300'>more</div>
            </div>
        </div>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
