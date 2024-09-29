import React from "react";
import Image from "next/image";
import about from "../../../assets/about.jpg";
import bit from "../../../assets/bit.jpg";
import Two from "../../../components/Two";
import Three from "../../../components/Three";
import Team from "../../../components/Team";

function About() {
  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Video Section */}
        <div>
          <video
            className="h-auto w-full rounded-lg mt-10"
            controls
            autoPlay
            muted
          >
            <source
              src="https://res.cloudinary.com/ddjikayiy/video/upload/v1727434520/final_pant_24_paydfb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* First Section with Text and Image */}
        <div className="flex flex-col md:flex-row bg-gray-50 mt-10">
          <div className="mt-10 px-4 md:mr-4 md:px-0 w-full md:w-1/2">
            <p className="text-2xl md:text-3xl text-center font-bold">
              Pantheon 24: Science and Technology for Societal Development
            </p>
            <p className="ml-2 md:ml-6 mt-6 text-sm md:text-base">
              An Institute of Eminence, standing proudly for 63 years, serves as
              a testament to its enduring excellence. Set amidst the lush green
              campus of Birla Institute of Technology, Pantheon, one of the
              largest technical fests in Eastern India, is a true showcase of
              technological brilliance infused with vibrant youthful energy. As
              we move into the future, science and technology stand as the
              backbone of societal progress. It&lsquo;s not just about
              innovation but about how these advancements shape communities,
              improve lives, and solve real-world problems.
            </p>
            <p className="ml-2 md:ml-6 mt-6 text-sm md:text-base">
              Pantheon &lsquo;24, with its theme &quot;Science and Technology
              for Societal Development,&quot; highlights the transformative role
              of cutting-edge technologies in tackling the challenges of our
              time. From sustainable solutions to groundbreaking healthcare
              innovations, this fest celebrates the profound impact of science
              and technology in creating a more inclusive, equitable, and
              progressive society. As we venture into new frontiers, we
              recognize that the future of society lies in the hands of those
              who harness knowledge for the greater good. Let us embrace a
              future where technology not only evolves but elevates humanity as
              a whole.
            </p>
          </div>

          {/* About Image */}
          <div className="mt-5 md:mt-10">
            <Image
              className="h-auto w-full rounded-lg md:max-w-[40vw] bg-white"
              src={about}
              alt="Pantheon image"
            />
          </div>
        </div>

        {/* Second Section with Text and Image */}
        <div className="flex flex-col md:flex-row bg-gray-50 mt-10">
          {/* Image */}
          <div className="mt-5 md:mt-10">
            <Image
              className="h-auto w-full rounded-lg md:max-w-[40vw] bg-white"
              src={bit}
              alt="BIT image"
            />
          </div>

          {/* About College Text */}
          <div className="mt-10 px-4 md:ml-4 md:px-0 w-full md:w-1/2">
            <p className="text-2xl md:text-3xl text-center font-bold">
              About the College
            </p>
            <p className="ml-2 md:ml-6 mt-6 text-sm md:text-base">
              Founded in 1955 by the visionary industrialist and philanthropist
              Mr. B.M. Birla, the Birla Institute of Technology, Mesra, was
              established with a clear mission: to provide young minds a
              platform where imagination soars and ideas take shape. Over six
              decades, the Institute has built a legacy of academic excellence,
              fostering intellectual growth through innovative educational
              frameworks far ahead of their time.
            </p>
            <p className="ml-2 md:ml-6 mt-6 text-sm md:text-base">
              BIT Mesra has evolved beyond academic promise to redefine
              education itself. In 1964, BIT became the first research institute
              in India to establish a space and rocket division. The Small
              Enterprise Research and Development Organization (SIRDO) was
              founded in 1970, serving as a launchpad for SMEs led by BIT
              graduates. This initiative was endorsed by India&apos;s Ministry
              of Science and Technology and expanded to other premier
              institutions like the IITs. BIT Mesra was also the first to
              establish a static rocket test fire facility and to offer
              postgraduate programs in collaboration with ISRO.
            </p>
          </div>
        </div>
      </div>

      {/* Other Components */}
      <div className="flex gap-4 justify-center mt-10">
        <Two />
      </div>

      {/* Student Body Section */}
      <div className="mt-10 -mb-10">
        <p className="text-5xl font-bold text-center text-white">
          Student Body
        </p>
      </div>
      <Three />

      {/* Core Organizing Committee Section */}
      <div className="mt-10">
        <p className="text-5xl font-bold text-center text-white">
          Core Organizing Committee
        </p>
        <Team />
      </div>

      {/* Footer */}
      <hr className="my-8 border-t border-gray-300" />
    </div>
  );
}

export default About;
