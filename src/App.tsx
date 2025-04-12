import './index.css'
import { Sparkle, MousePointer2, Star } from 'lucide-react'


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
          <div className=''>
            <h2 className="text-center text-4xl text-white font-medium tracking-tighter">Social Media <span className="text-amber-300">10x</span> <br /> <span className='italic'>Faster</span> with AI</h2>
          </div>
          <div className="pt-4">
            <div className="flex flex-row justify-center items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className='fill-yellow-500 stroke-0'/>
              ))}
            </div>
            <p className="pt-2 text-white text-center">Over 4,000 5-star reviews</p>
          </div>
        </div>

        {/* Section 3: Schedule to social media */}
        <div className="col-span-2 row-span-7 bg-indigo-100 rounded-2xl p-4 relative overflow-hidden">
          <div className="text-2xl font-normal mb-3 tracking-tight leading-5">
            Schedule to social media.
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm absolute left-5 right-0 w-[200px]">
            <h2 className="p-2 font-semibold text-gray-800">Best Time to Post</h2>
            <hr className="border-gray-200" />
            <div className="p-2">
              {/* Days Row */}
              <div className="flex justify-between mb-1">
                {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => (
                  <div
                    key={i}
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      day === 'Mon' ? 'bg-red-100 text-red-600' : 'text-gray-700'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Most Active Label */}
              <div className="text-xs text-green-800 w-fit font-medium mb-1 text-center bg-green-200 rounded-sm p-1 m-auto">
                Most Active
              </div>

              {/* Bar Chart */}
              <div className="flex items-end justify-between h-16 relative overflow-x-hidden">
                {[2, 3, 4, 3, 2, 1].map((height, i) => (
                  <div
                    key={i}
                    className="w-4 rounded-full bg-indigo-500"
                    style={{ height: `${height * 25}%` }}
                  ></div>
                ))}

                
              </div>

              {/* Time Labels */}
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>12a</span>
                <span>3a</span>
                <span>6a</span>
                <span>9a</span>
                <span>12p</span>
              </div>
            </div>
          </div>

          <div className="mt-1 text-gray-700 absolute bottom-4 left-6 right-6 text-sm">
            Optimize post timings to publish content at the perfect time for your audience.
          </div>
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
