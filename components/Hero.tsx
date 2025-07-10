import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import { BackgroundBeams } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { FlipWords } from "@/components/ui/Flip-Words";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Highlight } from "./ui/Herohighlight";
import { caveat, nyght, spectral } from "@/utils/fonts";

const Hero = () => {

  return (
    <div className="min-h-screen">
    <div className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl pt-32 text-shadow text-shadow-cyan-400 text-shadow-x-1 text-shadow-y-1 text-shadow-blur-9">
            Hi! I&apos;m <FlipWords className={` lg:text-9xl md:text-8xl text-8xl ${nyght}`} duration={1200} words={["Aryan","आरयन"]} /> <br/><span className="text-sm"> a<FlipWords duration={1200} words={["designer","<coder>"]} />Developer based in India.</span>
          </div>
      <div className="md:gap-0 lg:gap-0 gap-8 flex md:flex-row lg:flex-row flex-col justify-around mt-20">
        {/* Designer Section */}
        <div className="md:text-left lg:text-left text-center">
          <div className="md:ml-9 lg:ml-9 ml-0 font-bold text-[40px] text-3xl md:text-4xl lg:text-5xl">
          <Highlight className={`text-black dark:text-white ${caveat}`}>
            Designer
            </Highlight>
          </div>
          <p className="text-center tracking-wider text-sm md:text-sm lg:text-base mt-4 md:pr-56 lg:pr-56">
            UI/UX Designer with a passion for <br /> designing beautiful and functional <br /> user experiences. Minimalist who <br /> believes that less is more.
          </p>
        </div>

        {/* Coder Section */}
        <div className="md:text-right lg:text-right text-center">
          <div className="mr-0 md:mr-20 lg:mr-20 font-semibold text-[40px] text-3xl md:text-4xl lg:text-5xl ">
          <Highlight className={` text-black dark:text-white ${caveat}`}>
            &lt;Coder&gt;
            </Highlight>
          </div>
          <p className="text-center tracking-wider text-sm md:text-sm lg:text-base mt-4">
            Front End Developer who focuses <br /> on writing clean, elegant and <br /> efficient code. Love HTML, CSS, <br /> WordPress and a touch of jQuery.
          </p>
        </div>
      </div>

      <div className='pt-9 justify-center flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300 z-10 hover:bg-gray-900'>
                      <Link href={profile.src}> 
                        <Image src={profile.img} alt={profile.img}
                        width={20} height={20} />
                        </Link>
                        </div>
                ))}
            </div>

      <div className="text-center">
      <a href="https://drive.google.com/file/d/1BWm8_bVPTvWfgL2hQI3CfzJRKWBGaiQs/view?usp=sharing" 
      target="_blank"
      rel="noopener noreferrer">
        <div className="mt-12 md:mt-0 lg:mt-0 relative z-10">
            <MagicButton
              title="Download My Resume"
              icon={<FaDownload/>}
              position="right"
            />
            </div>
          </a>
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;

