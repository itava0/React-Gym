import BlogSection from '@/components/blog/BlogSection';
import Img1 from '../../public/blog/yoga.jpg';
import Img2 from '../../public/blog/crossfit.jpg';
import Img3 from '../../public/blog/trainer.jpg';
import Img4 from '../../public/classes/yoga.jpg';
import Img5 from '../../public/blog/running.jpg';
import Img6 from '../../public/blog/kids.jpg';
import Img7 from '../../public/blog/zumba.jpg';

function Blog() {
  return (
    <>
      <section>
        <div className="py-[15rem] container gap-16 page-padding grid sm:grid-cols-1 md:grid-cols-2 md:gap-32">
          {/* blog */}
          <div className="flex flex-col gap-28">
            <BlogSection img={Img1} title="Yoga For Everyone in 2022" />
            <BlogSection
              img={Img2}
              title="Getting Back Into CrossFit After Vacation"
            />
            <BlogSection img={Img3} title="Meet Fitness Ambassador Grace" />
            <BlogSection
              img={Img4}
              title="The Best are European Materls Direct"
            />
            <BlogSection
              img={Img5}
              title="Give your Fitness a Boost with our Gym"
            />
            <BlogSection
              img={Img6}
              title="How to Get Fit Your Kids Moving Throughout The Summer"
            />
            <BlogSection
              img={Img7}
              title="Give your fitness a boost with our new gym challenge"
            />
          </div>

          {/* sidebar */}
          <div>
            {/* form */}
            <form className="flex">
              <input
                className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                type="search"
                placeholder="Search..."
              ></input>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
              </button>
            </form>

            {/* categories */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Categories
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336]"></span>
              <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Body Building
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Boxing
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Crossfit
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Fitness
                  </p>
                  <span>(4)</span>
                </li>

                <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px] fa-solid fa-chevron-right"></i>
                    &nbsp; Meditation
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Yoga
                  </p>
                  <span>(4)</span>
                </li>
              </ul>
            </div>
            {/* recent posts */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Recent Posts
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex flex-col gap-7">
                {/*  */}
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Yoga For Everyone in 2022
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Getting Back Into CrossFit
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Meet Fitness Abassador Grace
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      The best are European Meditation Practitioner
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      Learn Boxing With Our Trainer John
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      How To Get Lean For The Summer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* popular tags */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Popular Tags
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Crossfit
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Fitness
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Gym
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Meditation
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Running
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Workout
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Yoga
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Boxing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
