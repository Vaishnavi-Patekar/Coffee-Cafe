import React from 'react';
import AppStoreImg from "../assets/website/app_store.png";
import PlayStoreImg from "../assets/website/google_play.PNG";
import BgPng from "../assets/website/coffee_beans.jpg";

const backgroundStyle = {
    backgroundImage: `url(${BgPng})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const Appstore = () => {
  return (
    <>
    <div style={backgroundStyle} className='py-14'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            items-center gap-4'>
                <div 
                data-aos="fade-up"
             
                className='space-y-6 max-w-xl mx-auto'>
                    {/* text-content */}
                  
                    <h1 className='text-2xl text-center
                    sm:text-left sm:text-4xl font-semibold pl-3
                    text-white/90'>
                        Coffee Cafe is available for Android and IOS
                    </h1>

                      {/* logo-content */}

                      <div className="flex flex-wrap
                      justify-center sm:justify-start
                      items-center gap-4">
                        <a href="#">
                            <img src={AppStoreImg} 
                            alt=""
                            className='max-w-[165px] sm:max-w-[120] 
                            md:max-w-[135px]'
                             />
                        </a>

                            <a href="#">
                            <img src={PlayStoreImg} 
                            alt=""
                            className='max-w-[150px] sm:max-w-[120] 
                            md:max-w-[120px]'
                             />
                        </a>

                      </div>


                </div>
                 <div></div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Appstore