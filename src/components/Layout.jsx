import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      // overflow might need to get changed
    //   className='absolute top-0 left-0 z-30 w-screen h-screen overflow-hidden bg-neutral-800 dom text-gray-50'>
        className=''>
      <div className='w-screen h-10 bg-blue-400'>
        This is navigation that doesn&apos;t change
      </div>
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
