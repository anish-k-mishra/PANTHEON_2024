"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="container mx-auto px-4">
        <p className="text-3xl text-center mt-12 text-white">FAQ</p>
        <p className="text-3xl text-center font-bold text-white">
          Any Questions?,Look Here
        </p>
        <div className="mt-12">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="text-white"
            >
              What is Pantheon??
            </AccordionHeader>
            <AccordionBody className="text-white">
              Pantheon is the annual tech extravaganza of BIT Mesra which is
              held every year in October.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="text-white"
            >
              What is the theme of the fest??
            </AccordionHeader>
            <AccordionBody className="text-white">
              The fest follows a theme every year, which resonates with the
              recent technological advancements and forms the basis of this tech
              extravaganza. The organizing committee will soon be releasing the
              fest theme on the socials. So, stay tuned!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="text-white"
            >
              What are the types of events??
            </AccordionHeader>
            <AccordionBody className="text-white">
              There are 3 types of events in the fest. Flagship, Informal,
              Formal inviting best of minds from within and outside the college!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="text-white"
            >
              When and where will Pantheon be held??
            </AccordionHeader>
            <AccordionBody className="text-white">
              Everywhere you lay your eyes on! The classrooms, grounds, halls,
              roads, the whole campus is filled with tech and fun.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="text-white"
            >
              How can I register for Pantheon??
            </AccordionHeader>
            <AccordionBody className="text-white">
              On the official website. You can participate in teams or even run
              solo, whichever suits your style!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className="text-white"
            >
              Who can participate in Pantheon??
            </AccordionHeader>
            <AccordionBody className="text-white">
              Anyone and everyone! Be it a student of BIT Mesra or your friend
              from school or college. It&apos;s a haven for young minds to
              pursue their knowledge and have fun, and all are duly welcomed.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className="text-white"
            >
              Any advisory for participating teams??
            </AccordionHeader>
            <AccordionBody className="text-white">
              Initially, each individual is required to complete the
              registration process by providing their email address. Individuals
              who are not already part of a team have the privilege of creating
              a new team. Furthermore, anyone has the option to become a member
              of a team by using a team join code. It is important to note that
              a single user can be part of only one team, switching teams after
              joining a team is not permitted. Lastly, teams may consist of a
              maximum of 8 members.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className="text-white"
            >
              Is there a registration fee for individual events??
            </AccordionHeader>
            <AccordionBody className="text-white">
              There are no fees for taking part in any Pantheon event for BIT
              Mesra Students. But the students from other colleges will have to
              pay a nominal admission price of ₹1100, payable upon arrival at
              the campus, which covers the cost of an official Pantheon T-shirt,
              a three-day accommodation, entry to Pantheon nights, and
              participation in all the events.!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(9)}
              className="text-white"
            >
              What is the dress code for Pantheon??
            </AccordionHeader>
            <AccordionBody className="text-white">
              BITians are proud of the fest and they do so in style. Every year
              the official T-shirt for Pantheon is released which represents the
              fest and unity of the college. Even though there is no official
              dress code for Pantheon, wouldn't it look great when everyone is
              wearing the colors of Pantheon.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(10)}
              className="text-white"
            >
              What are the prizes and awards for winners??
            </AccordionHeader>
            <AccordionBody className="text-white">
              The earlier mentioned 3 types of events each have different points
              associated with them. It is the sum of all these points that would
              lead you or your team to the Pantheon cup, prize money and much
              more!
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(11)}
              className="text-white"
            >
              Is there a food court or refreshment area at the venue??
            </AccordionHeader>
            <AccordionBody className="text-white">
              There&apos;ll be lots and varieties all at your own IC arena.
              Enjoy it as you enjoy the fest.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(12)}
              className="text-white"
            >
              What will be the theme of Pantheon this year??
            </AccordionHeader>
            <AccordionBody className="text-white">
              The stars have aligned and the sun has given a sign. But why spoil
              the fun when you know the place to find. Let&apos;s meet at CAT
              HALL on 29th September 5 O&apos;Clock in the Weekender event and
              find out where this cosmic blend of a technical fest is going to
              take us.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(13)}
              className="text-white"
            >
              Are there any celebrities coming??
            </AccordionHeader>
            <AccordionBody className="text-white">Shh! Secret!</AccordionBody>
          </Accordion>
          <Accordion open={open === 14} icon={<Icon id={14} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(14)}
              className="text-white"
            >
              How can I get updates and announcements about Pantheon??
            </AccordionHeader>
            <AccordionBody className="text-white">
              Keep an eye on our official website and keep checking the social
              media channels. You will also receive timely updates on Epistle
              and Newsrooms. Until then keep your spirits high and hopes up
              higher.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
