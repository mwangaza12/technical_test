import './index.css'
import { Sparkle, MousePointer2, Star, CircleCheck, Instagram, ArrowUp, User } from 'lucide-react'


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
          <div className="text-xl font-normal mb-3 tracking-tight leading-5">Write your <br/>content <br />using AI.</div>
          <div className="bg-white rounded-xl shadow-md p-2 relative pl-4">
            <div className="flex">
              <div className="bg-gray-200 p-2 rounded-3xl text-xs mb-1 text-end tracking-tighter">
                Give me 5 tips to grow my follower on Insta!
              </div>
              <div className="w-8 h-8 rounded-full bg-amber-100 ml-2 flex-shrink-0 border border-amber-200 items-center">
                <User />
              </div>
            </div>
            <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-indigo-100 mr-2 flex-shrink-0 flex items-center justify-center text-white">
                  <Sparkle className='fill-indigo-800 stroke-0'/>
                </div>
                <div className="bg-amber-100 rounded-3xl shadow-md p-3 relative">
                    <div>
                      <div className="text-sm tracking-tighter leading-1">
                        <span className="text-xs">Certainly! Here are five tips to help you grow your Instagram...</span>
                        
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="absolute bottom-20 right-2 bg-gray-50 rounded-full size-16">
            <ArrowUp className='absolute bottom-3 right-3 size-10 bg-amber-600 rounded-full' color='purple'/>
          </div>
        </div>

        {/* Section 5: Manage accounts */}
        <div className="col-span-3 row-span-3 bg-white rounded-2xl p-2 shadow-sm relative overflow-x-hidden">
          <div className="flex gap-4 w-full mb-4 absolute right-0 left-12">
            {/* Instagram Block */}
            <div className="flex items-center w-full bg-white shadow-md rounded-full p-2 py-0 border-2 border-white">
              <div className="bg-yellow-500 rounded-full p-2">
                <Instagram color="purple" />
              </div>
              <div className="px-2 justify-center items-start">
                <div className="font-medium">@YourCo</div>
                <p className="text-xs">12k followers</p>
              </div>
            </div>

            {/* Twitter or Custom Icon Block */}
            <div className="flex items-center w-full bg-white shadow-md rounded-full p-2 border-2 border-white">
              <div className='bg-yellow-500 rounded-full p-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="purple"
                  className="w-6 h-6"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </div>
              <div className="flex flex-col pl-2">
                <div>@YourCo</div>
                <p className="text-xs">8k followers</p>
              </div>
            </div>
          </div>

          {/* Bottom Text Section */}
          <div className="text-xl font-normal tracking-tight leading-4 text-left absolute bottom-2 mx-10">
            Manage <br /> multiple <br /> accounts <br /> and platforms.
          </div>
        </div>

        {/* Section 6: Consistent posting */}
        <div className="col-span-3 row-span-3 bg-amber-300 rounded-2xl p-5 shadow-sm overflow-hidden">
          <div className="">
            <div className="text-xl font-normal tracking-tight leading-5 mb-2">Maintain a <br />consistent <br />posting <br />schedule.</div>
            <div className="bg-indigo-600 text-white px-3 rounded-t-lg text-sm w-full flex justify-between">
              <h3>August 2024</h3>
              <p>Week1</p>
            </div>
            <div className="flex justify-evenly bg-white">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-8 rounded-full flex items-center justify-center">
                  <CircleCheck size={16} className="fill-indigo-600" color='white' />
                </div>
              ))}
            </div>
          </div>
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
