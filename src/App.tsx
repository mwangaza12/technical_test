import './index.css'
import { Sparkle, MousePointer2 } from 'lucide-react'


function App() {

  return (
    <div className="flex h-screen w-full justify-center items-center bg-gray-50">
      <div className="grid grid-cols-10 grid-rows-10 gap-6 h-full w-full px-12 py-8 m-16">

       {/* Section 1: Create and schedule content */}
       <div className="col-span-2 row-span-5 bg-amber-50 rounded-xl p-6 relative">
          <h2 className="text-2xl font-normal mb-3 tracking-tighter leading-6">Create and schedule <br /> content <br /><span className="italic text-indigo-600">quicker.</span></h2>
          <button className="bg-amber-400 px-5 py-2 rounded-full mt-6 font-medium flex items-center shadow-md hover:bg-amber-500 transition-colors text-purple-600">
            Create Post
            <Sparkle className='size-4 pl-1 fill-purple-600'/>
          </button>
          <div className="absolute bottom-23 right-28">
            <MousePointer2 className='absolute rotate-80 fill-black'/>
          </div>
        </div>

        {/* Section 2: Hero banner */}
        <div className="col-span-6 row-span-4 bg-indigo-600 rounded-2xl justify-center items-center p-6 relative">
          
        </div>

        {/* Section 3: Schedule to social media */}
        <div className="col-span-2 row-span-7 bg-indigo-100 rounded-2xl p-4 relative overflow-hidden">
          
        </div>

        {/* Section 4: Write with AI */}
        <div className="col-span-2 row-span-5 row-start-6 bg-amber-300 rounded-2xl px-4  py-2 relative">
          
        </div>

        {/* Section 5: Manage accounts */}
        <div className="col-span-3 row-span-3 bg-white rounded-2xl p-2 shadow-sm relative overflow-x-hidden">
        </div>

        {/* Section 6: Consistent posting */}
        <div className="col-span-3 row-span-3 bg-amber-300 rounded-2xl p-5 shadow-sm overflow-hidden">
         
        </div>

        {/* Section 7: Growth stats */}
        <div className="col-span-3 row-span-3 col-start-3 flex bg-white rounded-2xl p-5 justify-center items-center shadow-lg">
          
        </div>

        {/* Section 8: Growth analytics */}
        <div className="col-span-5 row-span-3 bg-indigo-600 rounded-2xl p-6 flex justify-baseline  items-center shadow-lg relative">
          
        </div>
      </div>
    </div>
  )
}

export default App
