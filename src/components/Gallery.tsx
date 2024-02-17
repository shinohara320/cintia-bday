import Fade from './Fade'
const Gallery = () => {
  return (
    <div className='mt-[90vh] mx-24 max-md:mx-5'>
        <div className="wrapper">
            <h1 className='text-5xl poppins text-right font-bold text-sky-800 max-md:text-2xl'>Your Memories</h1>
            <p className="text-xl poppins text-right text-sky-800 max-md:text-sm">your 21's memorie hehe</p>
            <p className="text-xl poppins text-right text-sky-800 max-md:text-sm">taken by your friends hehe</p>
            <Fade>
            <div className="wrapper my-10 flex flex-wrap justify-center gap-5">
              <div className="bg-white text-center rounded-xl">
                <img className="w-[25rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/1.jpg" alt="1" />
                <p className="py-5 max-md:text-sm">you look so cute hehe</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[25rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/2.jpg" alt="2" />
                <p className="py-5 max-md:text-sm">i love the glasses</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[25rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/3.jpg" alt="3" />
                <p className="py-5 max-md:text-sm">your first pic </p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[25rem] h-[18rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/5.jpg" alt="5" />
                <p className="py-5 max-md:text-sm">"Maluuu" xD </p>
              </div>
            </div>
            </Fade>
            <Fade>
            <div className="wrapper my-10 flex flex-wrap justify-center gap-5">
              <div className="bg-white text-center rounded-xl">
                <img className="w-[40rem] h-[23rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem] " src="src/assets/image/4.jpg" alt="4" />
                <p className="py-5 max-md:text-sm">xD </p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[40rem] h-[23rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/6.jpg" alt="6" />
                <p className="py-5 max-md:text-sm">smile more!</p>
              </div>
              <div className="bg-white text-center rounded-xl">
                <img className="w-[40rem] h-[23rem] object-cover rounded-t-xl max-md:w-[10rem] max-md:h-[8rem]" src="src/assets/image/7.jpg" alt="7" />
                <p className="py-5 max-md:text-sm">dont ask me where i got it</p>
              </div>
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Gallery