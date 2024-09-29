"use client";

import React, { useState, useEffect } from "react";
import { Cards } from "../../../components/Cards";
import LargeModal from "../../../components/LargeModal";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const eventsDataDay1 = [
  {
    title: "Droid Trooper",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443195/droid_trooper_i2wzsm.jpg `,

    clubName: "Robolution",
    timeSlots: ["Round 1: 09:00 AM - 11:30 AM", "Round 2: 12:00 PM - 03:00 PM"],
    location: "IC Arena",
    phone: "8919546871",
    coordinatorName: "Akshay Gupta",
    facultyAdvisor: "Dr. Binay Kumar",
    link: "https://forms.gle/f9nCP6xyFYaoPhEQ9",
    description:
      "Droid Troopers is an exciting fun robotics competition with a set of challenging tasks. The participating robots are required to adhere to specific specifications, including motor type, torque, battery voltage, and wheel size.The competition features a dynamic track with various obstacles, such as cones, ramps, pneumatic rods, and more.In Round 1, robots must navigate the obstacles efficiently, with the option to resume from checkpoints.Top - performing teams advance to Round 2, where they must strategically place cubes in designated locations while overcoming obstacles.Skipping obstacles incurs time penalties.",
  },
  {
    title: "Murder Mystery",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443194/murder_mystery_ysbjkr.jpg `,

    clubName: "Leo Club",
    timeSlots: ["09:00 AM - 03:00 PM"],
    location: "Mehak",
    phone: "9430180011",
    coordinatorName: "Rishav Kumar",
    facultyAdvisor: "Dr. Amit Saran",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdj-ZLhNZ75E31s1jIsMtkAVSg9_GAN8dPlGJETW2nCkHmtrw/viewform?usp=sharing",
    description:
      "Brace yourselves for the return of Murder Mystery 2024, the most anticipated event of the year, hosted by the Leo Club! After last year's massive success, this thrilling contest is back, now even more captivating and mysterious. Teams of 3-4 detectives will work together to solve complex riddles, traverse hidden locations, and uncover the final mystery. With unexpected twists and intense moments, it's your chance to rise as Pantheon's ultimate detective. Seize this opportunity to claim the title of master sleuth. Murder Mystery 2024 is waiting for you—are you ready to solve the mystery?",
  },
  {
    title: "Anvil",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443166/anvil_idx3l9.jpg`,

    clubName: "SIME",
    timeSlots: ["Round 1: 09:00 AM - 11:00 AM", "Round 2: 11:30 AM - 01:30 PM"],
    location: "Room 206 & 207",
    phone: "8950729214",
    coordinatorName: "Sagar",
    facultyAdvisor: "Dr. L. N. Pattanaik",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe2dggbqQq74MI41kCOU1TEES4V0nawXhR055eNCLXW40P32g/viewform?usp=sf_link",
    description:
      "Join us for the ultimate intellectual showdown at the Anvil Challenge! This thrilling competition is open to individuals seeking to prove their prowess in a battle of wits. The Anvil Challenge spans four exhilarating levels, each designed to test your knowledge, problem-solving skills, and quick thinking. Here's what you can expect. The competition consists of 2 Round Containing General Quiz in Round 1 and a energetic event containing four levels: Level 1, Level 2, Level 3, and Level 4 in Round 2.This round 2 consists industrial and technical questions. With a unique twist, the difficulty of questions increases with each level, offering a balanced challenge for all participants. The top 3 participants with the highest cumulative scores across all four levels will claim victory. In the event of both points and time ties, joint winners will be declared. Gear up for a thrilling journey through knowledge, strategy, and quick reflexes as you aim to become one of the Anvil Challenge's triumphant champions! Gear up for a thrilling journey through knowledge, strategy, and quick reflexes as you aim to become one of the Anvil Challenge's triumphant champions!",
  },
  {
    title: "Connect-O-Thon",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443181/connectothon_khrmvx.jpg`,

    clubName: "IETE",
    timeSlots: ["Round 1: 11:30 AM - 12:30 PM", "Round 2: 01:30 AM - 04:30 PM"],
    location: "Seminar Hall 2, RnD Lab 6",
    phone: "8860489995",
    coordinatorName: "Sushant Gupta",
    facultyAdvisor: "Dr. G. S. Gupta",
    link: "https://docs.google.com/forms/d/1utL6ej6z-Xo6iLtzNtuaKx25srv2d6dqL7ITY0FXnDw/",
    description:
      "Get your team ready for CONNECT-O-THON, where knowledge, teamwork, and assembly skills will be put to the test!. Hosted by IETE, where teams will test their knowledge and assembly skills in a thrilling competition. The event consists of two parts: a quiz and a PC assembly challenge.",
  },
  {
    title: "Bot Soccer",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443172/BotSoccer_g4a78q.jpg`,
    clubName: "EEE Society",
    timeSlots: ["Round 1: 9:00AM-10:00AM  Round2: 10:00 AM - 05:00 PM"],
    location: "Room 236 & 231",
    phone: "7977174961",
    coordinatorName: "Ashish Pandey",
    facultyAdvisor: "Dr. S. Shiva Kumar",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfq7EQsgi7Oqj3Hs-iLMMLnr_s4mQWDUZOXqUjMUhuoCb2mRQ/viewform?usp=sf_link",
    description:
      "“I love football, and you love football, and arguing about it is just a waste of time.” ~ Ian Slatter The event in question, as the name implies, centres around robotic entities crafted by the contestants themselves, which will subsequently engage in a soccer match. This event is structured into three distinct rounds. In the initial round, known as Round 1, sixteen teams will be chosen through a knockout-style video game competition among which 8 teams will be chosen to advance to the subsequent round on the basis of ppt they give on how to make the Bot. Moving on to Round 2, participants will be tasked with constructing their own robotic systems. Each participating team will be allocated a total of nine hours to develop their bots. The requisite equipment and technical support will be provided by the organising society. The culmination of the event will occur in the final round, wherein these bots will face off in a competitive soccer match. Brace yourselves for a voyage laden with intricate intricacies and unforeseen challenges.",
  },
  {
    title: "A Book, A Minute",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443184/LitSoc_v3iq8f.jpg`,
    clubName: "The Literary Society",
    timeSlots: ["11:30 AM - 02:30 PM"],
    location: "Room 220",
    phone: "9693759699",
    coordinatorName: "Aastha Chhabra",
    facultyAdvisor: "Dr. Niraj Kumar",
    link: "https://forms.gle/GPWz83BYEJp7xqx2A",
    description:
      "Unleash your inner book goblin and tell us why that book that you pick up again and again, is something we should dive into as well.",
  },
  {
    title: "Circuit in Minutes",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727447562/ecesoc_circuit_vsvj3f.jpg`,
    clubName: "ECESoc",
    timeSlots: ["12:30 AM - 03:30 PM"],
    location: "Room 236 & 231",
    phone: "7977174961",
    coordinatorName: "Abhyuday Pandey",
    facultyAdvisor: "Mr. S S Tripathy",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe7gTCLT20nq8406Tg9HhBnu2rkgBg8JpiQgGRYti4zSKNzvw/viewform?usp=sf_link",
    description:
      "Round 1: In this round teams are given some basic circuits which they have to implement within a time limit. Teams which complete circut in less time will be above in leaderboard. Round 2: TOP 9 Teams will qualify for this round. In this round teams have to implement some complex circuits in breadboard again within a time limit. Top three teams will be the winner.",
  },
  {
    title: "Fabel in Focus",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727447260/WhatsApp_Image_2024-09-27_at_19.44.16_ecfca06d_yqegqw.jpg`,

    clubName: "PSoc",
    timeSlots: ["09:00 AM - 03:00 PM"],
    location: "LH2",
    phone: "6287660402",
    coordinatorName: "Swapnendu",
    facultyAdvisor: "Dr. Priyank Saxena and Dr. Dilip Kumar Singh",
    link: "https://forms.gle/3VXubArSidBPfG4y5",
    description:
      "Max. number of participants = 2-3. Number of rounds = 2. Round 1: Duration = 2 hours (photo round). Only ten photos will be accepted for the story. The storyline should have a clear theme and follow a proper sequence of events. The participating team should submit their story in ten points AND submit an appropriate title (one point for each photo). The entire story should be set in the same ratio (e.g., if photos are taken in a 16:9 ratio, all photos should be in a 16:9 ratio). Teams will be shortlisted based on refinement of the story, proper sequence of events, and quality of the story theme. Round 2: TEN teams will be shortlisted. Shortlisted teams will showcase their stories in an attempt for the participants to guess the theme and events of the story. Each story will be displayed through the projector. THE AUTHOR TEAM WILL NOT PARTICIPATE. Each photo will be displayed for 30 seconds. After the end of the display of photos, writing time will be provided for teams. In this time, teams will write down the plot of the story as they deem fit. 5 minutes of writing time will be provided. Scoring System: Proper description of the event, including plot points from each slide, will be awarded full marks. Any lack of details from the events will result in a deduction of points. 1 point for each slide, 0.5 for partial accuracy, and 0 if the event in the photo is ignored. 10 max. marks from each story; maximum possible marks for each team = 90. A sheet of paper will be provided to write the story. Discussion among team members is permitted.",
  },
  {
    title: "Valo Vortex",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443199/valo_e0a2gk.jpg`,

    clubName: "SAC",
    timeSlots: ["4th Night + 5th Day"],
    location: "RnD Labs",
    phone: "9934126439",
    coordinatorName: "Abhinav",
    facultyAdvisor: "Dr. S. K. Singh",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdn0B9YSjVNl2pACpWNyOnrp7ix9YaFtA2Z9FWz-QKaFPLEgQ/viewform?usp=sf_link",
    description:
      "Prepare yourself for the ultimate battleground in Valo Vortex, an electrifying online Valorant tournament that will push the limits of strategy, skill, and survival. Step into a vortex of intense action where sharp aim meets calculated tactics, and every round counts! Whether you're a sniper with deadly precision or a master of utility, this is your chance to rise above the competition and claim your victory in the world of tactical FPS. Join the forces with your squad!!",
  },
  {
    title: "Hatch From Scratch",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443195/hatch_from_scratch_hxqcdz.jpg`,

    clubName: "IET",
    timeSlots: ["10:00 AM - 10:00 AM (Next Day, 24 Hrs)"],
    location: "RnD Lab - 4",
    phone: "7979037628",
    coordinatorName: "Sumit Agarwal",
    facultyAdvisor: "Dr. Dileep Kumar Upadhyay",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdRvCvjzX-zn1suIq_uIbJSQ5G7IPOLh6huTmfGzTn_kHGMfA/viewform",
    description:
      "24-hour offline hackathon where teams can brainstorm, develop, and launch ready-to-use prototypes. The teams are free to choose a project based on hardware, software, or both. Teams can make use of various types of equipment such as 3D printers, laser cutters, diodes, etc., to bring life to their projects. The event will be conducted in two rounds. Round 1: It is a preliminary round where teams must present their ideas before the judges. Each team will be allotted a maximum of 15 minutes for their idea presentation. Round 2: The final round will have the 8 top teams battling it out in an eventful 24-hour hackathon format to claim the top spots.",
  },
  {
    title: "Marketing Maestro",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443191/marketing_maestros_siey7r.png`,

    clubName: "EDC",
    timeSlots: ["09:00 AM - 12:00 PM"],
    location: "LH - 1",
    phone: "9708619840",
    coordinatorName: "Yogesh Kumar",
    facultyAdvisor: "Mr. Vishal H Shah and Dr. Rohini Jha",
    link: "https://docs.google.com/forms/d/14uPJY28qLBSjSRWGGPeGWLl0blzt7d_1JpDXu4ZvFdc/edit",
    description:
      "An event to showcase your marketing skills and ideas. The participants will each be assigned a product that they have to market and promulgate among the people and collect their votes. The one with the maximum number of votes wins the competition. The participants will have a common list on which their products will be listed and the number of likes and dislikes on the product is shown, on the basis of which the winner of the competition is decided.",
  },
  {
    title: "The Journalist's Hour",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443922/journalist_hour-min_yqpoce.jpg`,

    clubName: "NAPS",
    timeSlots: ["10:00 AM - 02:30 PM"],
    location: "Room 237",
    phone: "8619975410",
    coordinatorName: "Priyanshu Kumar",
    facultyAdvisor: "Dr. Mrinal Pathak and Dr. Smriti Mishra",
    link: "https://forms.gle/sggSeznhCPfhcCh99",
    description:
      "A journalism-based event with panel discussions, aiming to judge the participant's deduction of the same while upholding clarity and depth in their line of thought. It comprises two rounds. The contestants will be judged on their fluency, relevance, content, and individual conduct. ",
  },
  {
    title: "Kinetic Karts",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443183/KineticKarts_sz5c0h.jpg`,

    clubName: "Team Aveon",
    timeSlots: ["Round 1: 11:30 AM - 12:30 PM", "Round 2: 12:30 PM - 03:00 PM"],
    location: "Room 215 & 216",
    phone: "6203660211",
    coordinatorName: "Himanshu Kumar",
    facultyAdvisor: "Dr. S. S. Tripathy",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfnuLmfVxyoLRtQlJXIyk_llXUB8Yf-stsT0S8E76YUuINzeg/viewform?usp=sf_link",
    description:
      "Participants will construct a vehicle that can travel the farthest distance(Or carry more load) using only the provided materials. The goal is to blend design, functionality, and speed while maximizing efficiency.",
  },
  {
    title: "Altitude Adventure",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443923/Aerospace-min_s2s93p.jpg`,

    clubName: "AeroSpace",
    timeSlots: ["10:00 AM - 02:00 PM"],
    location: "Room 204 & 209",
    phone: "9142714804",
    coordinatorName: "Prakriti Kumari",
    facultyAdvisor: "Dr. Priyank Kumar",
    link: "https://forms.gle/q7SkUH2FnXnJ2GLk6",
    description:
      "Round 1: Each team will have to face a quiz based on simple questions related to airplanes. Round 2: From Round 1, 10 teams will be selected. In Round 2, each team has to make a glider out of the materials provided. The teams will be given 30 minutes. After 30 minutes, a flight test round will be conducted, and the team whose glider travels the maximum distance will win the event.",
  },
  {
    title: "Razzmatazz",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443205/Razzmatazz_ric0ii.jpg`,

    clubName: "Dance Club",
    timeSlots: ["11:00 AM - 02:30 PM"],
    location: "GP Birla Auditorium",
    phone: "7970817208",
    coordinatorName: "Kumar Laksh",
    facultyAdvisor: "Dr. Alka Srivastava",
    link: "https://forms.gle/NMVgaAZuyrgcEHyG7",
    description:
      "Dance is your pulse, your heartbeat, your breathing. It’s the rhythm of your life. It’s the expression in time and movement, in happiness, joy, sadness, and envy. Dance Club brings to you Razzmatazz, the most awaited dance competition of BIT Mesra! Get to connect with other dancers with different styles and don't miss out on the opportunity to compete with them. Remember, experience is the greatest reward.",
  },
  {
    title: "Ink & Imagination",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443180/InkAndImagination_cqtcgl.jpg`,

    clubName: "Ehsaas",
    timeSlots: ["01:00 PM - 03:00 PM"],
    location: "Seminar Hall 2",
    phone: "7970499566",
    coordinatorName: "Khushi",
    facultyAdvisor: "Dr. Shailendra Kr. Singh",
    link: "https://forms.gle/acZcDfWA1gZ3tQsF7",
    description:
      "A platform for budding writers to explore storytelling, character development, and the art of words. First Round: 1. Team size should be 1-4 members. 2. Each team has to write a plot or monologue around the character given. 3. The plot/story should revolve around the character, which will be decided through a chit system. 4. The word limit is 500-800 words. Second Round: 1. Any 1-2 members of the team have to act out the plot or the monologue written by them. 2. The provided time for the act will be 5 minutes.",
  },
];

const eventsDataDay2 = [
  {
    title: "Cicada",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443166/cicada_b9hsbr.jpg`,

    clubName: "IEEE BIT Mesra",
    timeSlots: ["08:00 AM - 04:00 PM Next Day (36 Hours)"],
    location: "Online",
    phone: "9523626949",
    coordinatorName: "Hritabhash Ray",
    facultyAdvisor: "Dr. Aftab Alam",
    link: "https://forms.gle/Wbv82CrdCMkUbL2m8",
    description:
      "This is a 36-hour long event in which participants attempt to find text strings, called 'flags', that are secretly hidden in purposefully vulnerable programs or websites. There will be multiple challenges with varying points.",
  },
  {
    title: "Asta di Autos",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443166/AstaDiAutos_ycod8r.jpg`,

    clubName: "Team Srijan",
    timeSlots: ["Round 1: 09:00 AM - 11:30 AM", "Round 2: 12:00 PM - 02:30 PM"],
    location: "LH - 1",
    phone: "9462873088",
    coordinatorName: "Atul Tiwari",
    facultyAdvisor: "Dr. Somak Dutta and Dr. LN Patnaik",
    link: "https://forms.gle/Hq44c2zD8NnvviKQA",
    description:
      "'Asta di Autos' is an exhilarating event, where the registered teams will participate in a test based on aptitude and Formula 1 automobile-related questions. In the first round, teams have to showcase their knowledge and skills, striving to secure a spot in the next stage. The top 6 teams will be selected to advance to the second round. In the second round, the Auction Round, the selected teams will be provided with a specific budget. They will engage in strategic bidding to acquire various segments of a car, including chassis, brakes, wheels, engines, and transmission. This round demands a comprehensive understanding of automobile engineering, as well as shrewdness and calculated decision-making.",
  },
  {
    title: "Movie Pictionary",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443196/pictionary_vqpjti.png`,

    clubName: "SPIC MACAY",
    timeSlots: ["09:00 AM - 12:00 PM"],
    location: "Room 231",
    phone: "6299303104",
    coordinatorName: "Nishu Kumari",
    facultyAdvisor: "Dr. Rajeshwari Chatterjee",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdY8YDDwqbqdGpL3DyVsK_Um2yEYKWgD98DOx6FP6sk3qDmmg/viewform",
    description:
      "Are you a movie buff who loves a creative challenge? Welcome to the Movie Pictionary competition, where teams of two will compete to show off both their film knowledge and artistic skills! This competition will test not only how well you know your favorite movies, but also how quickly you can identify them from cryptic clues. In the first round, teams will be shown pixelated images of iconic scenes from well-known movies. The challenge? Guess the correct movie before time runs out! The more movies you know, the better your chances of advancing to the next stage. In the second round, things get even more exciting! One team member will secretly be given the title of a movie, and their task is to draw something that represents it – no words or symbols allowed! Their teammate must then guess the movie based solely on the drawing. This round combines movie knowledge with quick thinking and creative expression. Points will be earned for each correct guess, and the team with the highest score at the end of both rounds will be crowned the Movie Pictionary Champion. So, bring your A-game, brush up on your favorite films, and get ready for a fun-filled event full of laughs, surprises, and friendly competition!",
  },
  {
    title: "Wall Street Auction",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727447897/finance_biroom.png`,

    clubName: "Finance Club",
    timeSlots: ["Round 1: 09:00 AM - 10:00 AM", "Round 2: 10:00 AM - 01:00 PM"],
    location: "Room 215 & 220",
    phone: "9340683467",
    coordinatorName: "Ronit Jain",
    facultyAdvisor: "Dr. Anand Prasad Sinha",
    link: "https://forms.gle/cwx44Cimg3Ps6mrWA",
    description:
      "In this event, teams will act as investors in an auction; instead of players, they’ll buy companies or financial assets like stocks, bonds, or cryptocurrencies. Just like an IPL or kabaddi auction, every team will have a set budget to bid on these assets. The objective is to build the best-performing 'portfolio' based on how these assets perform over a specific period, either in real-time or through a simulation. Event Format: 1. Form Teams: Participants will be divided into teams, each acting as an investment group, with an equal virtual budget. 2. Asset Pool: A curated list of real-world companies, stocks, bonds, and cryptocurrencies will be provided to each team. Each asset will come with basic financial information such as current market value, recent performance trends, and industry sector. 3. Auction Rounds: A live auction will be held, where teams bid on the assets. Assets will be grouped into categories like technology, healthcare, commodities, and emerging markets, with varying levels of risk and potential reward. 4. Portfolio Building: Teams must manage their budgets and bid strategically to build a diversified and strong portfolio. Winning Criteria: The team with the highest portfolio value at the end will be declared the winner. You can also include awards like 'Best Strategy' for the most thoughtful approach or the 'Risk-Taker Award' for the team that embraced high-risk, high-reward investments.",
  },
  {
    title: "Codezilla",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443920/codezilla-min_lmwn1x.jpg`,

    clubName: "ACM",
    timeSlots: ["Round 1: 10:00 AM - 11:00 AM", "Round 2: 11:30 AM - 01:30 PM"],
    location: "Round 1: Room 207, Round 2: RnD Lab",
    phone: "9372817731",
    coordinatorName: "Abhiraj Sinha",
    facultyAdvisor: "Dr. Sumit Srivastava",
    link: "https://forms.gle/2ZWPBithF5pzNBMa8",
    description:
      "Gear-Up with your coding geek buddy for this relay styled programming competition because the only way you guys can communicate is through variables in this partnered contest.",
  },
  {
    title: "Drive Craft",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443216/drive_craft_yxowkl.jpg`,

    clubName: "Firebolt Racing",
    timeSlots: ["Round 1: 10:00 AM - 12:00 PM", "Round 2: 12:30 PM - 02:30 PM"],
    location: "Room 216",
    phone: "7667094225",
    coordinatorName: "Lavkesh Jaiswal",
    facultyAdvisor: "Dr. Paritosh Mahata",
    link: "https://forms.gle/iDoMZVm7pgomLqBeA",
    description:
      "Drive Craft is an innovative two-round competition designed to challenge participants' knowledge of automotive engineering and their creative problem-solving skills. This engaging game not only promotes teamwork and collaboration but also integrates educational elements that enhance players' understanding of vehicle mechanics. Round 1: Elimination Challenge. In the initial round, teams will engage in an interactive riddle-based quiz, where they must identify various automobile parts from cleverly crafted clues. Each correct answer will earn points, with the top 15 teams advancing to the next round. This phase emphasizes quick thinking and collective knowledge, setting the stage for the subsequent challenges. Round 2: Vehicle Manufacturing and Testing (In-Game). The second round will immerse the selected teams in a virtual environment where they will manufacture and test their own all-terrain vehicles. After a comprehensive 15-minute tutorial, participants will learn how to navigate the game interface and utilize the available tools to design their vehicles. Experienced volunteers will be on hand to assist teams, ensuring they receive guidance if they encounter any challenges during the design process. Once the vehicles are constructed within the game, teams will test their creations across diverse terrains. Performance will be evaluated based on critical technical metrics such as acceleration, braking capability, and turning radius. The team with the highest overall score will be declared the champions of Drive Craft.",
  },
  {
    title: "Jungle Joust",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443187/jungle_wfarp2.jpg`,

    clubName: "EPAC",
    timeSlots: ["Round 1: 11:30 AM - 12:30 PM", "Round 2: 12:30 PM - 02:30 PM"],
    location: "Room 233A & 236",
    phone: "7004555490",
    coordinatorName: "Shweta Kumari",
    facultyAdvisor: "Dr. Neeta Kumari",
    link: "https://forms.gle/qFVDBpFvx4Be42Bz9",
    description:
      "The event 'Jungle Joust: BGMI Reforest Rampage' merges competitive gaming with environmental preservation. Participants in the BGMI tournament compete for kills, with each kill resulting in a tree being planted in a reforestation area. Round 1 involves intense solo and duel matches, while Round 2 features the top three finalists in custom squad matches. Live-streamed matches engage a global audience, highlighting the unique concept of virtual achievements leading to real-world environmental impact. Additional ideas include eco-themed in-game elements, interactive reforestation updates, community involvement, and educational segments, making this event an innovative and impactful initiative at the intersection of gaming and environmental stewardship.",
  },
  {
    title: "Among Us",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443172/among_us_i1d2hp.jpg`,

    clubName: "Rotaract",
    timeSlots: ["09:00 AM - 02:00 PM"],
    location: "Shorbagh",
    phone: "9341822684",
    coordinatorName: "Debjyoti Dey",
    facultyAdvisor: "Dr. Sujit Kumar Mishra",
    link: "https://forms.gle/iVvjbPovvJtkjFhKA",
    description:
      "Based on the online game Among Us, the game is not completely close to the basic plot of among us. It goes like this. One member from each team will be given a number from 1 to 10. All 10 members will go together to do common tasks and each group will have three imposters. Imposter needs to disrupt the task that everyone is doing and eliminate the players.",
  },
  {
    title: "The Pantheon Quiz",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443196/pantheon_quiz_pgo0zh.jpg`,

    clubName: "Events Team + UNESQUO",
    timeSlots: ["09:00 AM - 03:00 PM"],
    location: "LH - 2",
    phone: "6378377371",
    coordinatorName: "Siddhant Jagat",
    facultyAdvisor: "Dr. Sudhanshu Kumar Mishra",
    link: "https://forms.gle/LMQ1AuzT9NXx6qqSA",
    description:
      "Embark on a thrilling intellectual adventure with The Pantheon Quiz. This quiz spans multiple dimensions - science, technology, business acumen and much more - to test your knowledge and expand your horizons. Dive into scientific mysteries, explore technological frontiers, tackle brain-teasing puzzles, and navigate real-world business scenarios. Each question takes you deeper into the realms of discovery, allowing you to accumulate points and compete with fellow knowledge enthusiasts. Join us for an exhilarating journey and unleash the power of your multidimensional intelligence!",
  },
  {
    title: "Wiki Wars",
    image: "/assets/Wikiwars.jpg",
    clubName: "BIOTS",
    timeSlots: ["10:00 AM - 03:00 PM"],
    location: "RnD Lab 5, 6",
    phone: "8340540911",
    coordinatorName: "Ritik Raj",
    facultyAdvisor: "Dr. Dinesh Prasad",
    link: "https://forms.gle/wmbXZKkfRZocH75o8",
    description:
      "Wiki Wars is a skillful and smart game of navigating through several pages of Wikipedia on a desktop without the use of a keyboard. It involves reaching the target Wikipedia page from an already given Wikipedia page in a limited time frame and with the least number of clicks. Players use the blue Wikipedia links (hyperlinks) to go from one page to another. For example, players may be asked to navigate from the Wikipedia page of CV Raman to the Wikipedia page of Electric Circuits using only Wiki links. The number of players per team for this event is 2. Wiki Wars will be conducted in three mega rounds: ROUND 1 – The first round is indeed the simplest. Players just need to navigate through pages using Wikipedia links (hyperlinks) to reach the desired Wikipedia page. The top teams qualify for the next round. ROUND 2 – The second round will be a test of your patience, compatibility, and effective communication. One of the players will be blindfolded, and the other member has to guide and instruct their blindfolded teammate to navigate through the links in the Wikipedia page. Only the blindfolded player can operate and browse the computer system. ROUND 3 – The third round will be a test of your creativity and intellect. Players will be given a clue or a storyline based on which they need to navigate between Wikipedia pages and reach the final Wiki page. The top teams will make it to the third and final round.",
  },
  {
    title: "Talking Prompt [Chat with AI merged]",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443205/talking_prompt_seqg80.jpg`,

    clubName: "SDS",
    timeSlots: ["09:00 AM - 01:30 PM"],
    location: "Room 237",
    phone: "7697500688",
    coordinatorName: "Rachit Bansal",
    facultyAdvisor: "Dr. Kirti Abhishek & Dr. Manish Kr. Pandey",
    link: "https://forms.gle/JTXfu86KeRJWtptTA",
    description:
      "The event features participants writing prompts to  get information from the large language models softwares such as Chatgpt or Bard to generate unusual words in its reply by giving different prompts.",
  },
  {
    title: "Bot Soccer",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443172/BotSoccer_g4a78q.jpg`,

    clubName: "EEE Society",
    timeSlots: ["Round 2: 11:30 AM - 02:30 PM"],
    location: "Room 206 & 209",
    phone: "7977174961",
    coordinatorName: "Ashish Pandey",
    facultyAdvisor: "Dr. S. Shiva Kumar",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfq7EQsgi7Oqj3Hs-iLMMLnr_s4mQWDUZOXqUjMUhuoCb2mRQ/viewform?usp=sf_link",
    description:
      "“I love football, and you love football, and arguing about it is just a waste of time.” ~ Ian Slatter The event in question, as the name implies, centres around robotic entities crafted by the contestants themselves, which will subsequently engage in a soccer match. This event is structured into three distinct rounds. In the initial round, known as Round 1, sixteen teams will be chosen through a knockout-style video game competition among which 8 teams will be chosen to advance to the subsequent round on the basis of ppt they give on how to make the Bot. Moving on to Round 2, participants will be tasked with constructing their own robotic systems. Each participating team will be allocated a total of nine hours to develop their bots. The requisite equipment and technical support will be provided by the organising society. The culmination of the event will occur in the final round, wherein these bots will face off in a competitive soccer match. Brace yourselves for a voyage laden with intricate intricacies and unforeseen challenges.",
  },
  {
    title: "Cube-De-Cemento",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443922/cube_de_cemento-min_ddm2xz.jpg`,

    clubName: "IEI Civil",
    timeSlots: ["Round 1: 11:30 AM - 01:30 PM", "Round 2: 02:00 PM - 04:00 PM"],
    location: "Room 232 & 233 / Civil Dept. Lab",
    phone: "",
    coordinatorName: "",
    facultyAdvisor: "Dr. Subhajit Sen",
    link: "https://forms.gle/tCFSuTUQh4Gc78G99",
    description:
      "Stage 1 - QUIZ Round - Time: 2 hours. Questions: 10 reasoning questions and 10 technical questions (concrete related). Stage 2 - Construction Round - Time: 2 hours. This round is divided into 2 phases: Phase 1 (1 hour) - Half of the shortlisted teams will compete. Phase 2 (1 hour) - The remaining shortlisted teams will compete. Results will be published on the following day.",
  },
  {
    title: "Mr. & Mrs. Pantheon",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443194/MrAndMrsPantheon_usnlpn.jpg`,

    clubName: "Leo Club",
    timeSlots: [
      "Round 1: Online",
      "Round 2: Preramp",
      "Round 3: 11:00 AM - 03:00 PM",
    ],
    location: "GP Birla Auditorium",
    phone: "9430180011",
    coordinatorName: "Rishav Kumar",
    facultyAdvisor: "Shashwati Ghosh, Nilima Sharma & Gautam Shandili",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdADFQQddv9KSFwBfZylL-OIGGuiSxGXT1mwlDN8i-aU1eTyw/viewform?usp=sf_link",
    description:
      "Step into the spotlight at Pantheon's grand techfest, where the Leo & Rotaract Club proudly presents 'Mr. and Miss Pantheon.' This pageant extravaganza is a dazzling showcase of charisma, talent, and intellect, featuring rounds that put participants' personalities, talents, and wits to the test. The evening culminates in a mesmerizing Ramp Walk and a thrilling Questioning Round by our esteemed panel, all leading to the crowning of the next Mr. and Miss Pantheon. Join us for an unforgettable night of glamour and brilliance, where stars are born, and legends are crowned!",
  },
  {
    title: "The Corporate Chaos",
    image: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727443212/corporate_chaos_wgqowm.jpg`,

    clubName: "180 DC",
    timeSlots: ["Round 3: 09:00 AM - 02:00 PM"],
    location: "Room 211",
    phone: "8870994536",
    coordinatorName: "Harish Gananathan",
    facultyAdvisor: "Dr. Anupam Ghosh",
    link: "https://forms.gle/wsjsAGwxEkKyEqfEA",
    description:
      "For your dream career as a management and strategy consultant, 180DC brings you yet another adrenaline rushing event for business strategies and corporate hustling! Join us for a thrilling two-round event that will test your problem-solving, strategic thinking, and teamwork skills. In the first round, you'll face a high-stakes speed guesstimate challenge that will test your mental agility and problem-solving skills. In the second round, you'll navigate a simulated corporate environment filled with unexpected challenges and hidden dangers. Can you identify the saboteur and lead your team to victory?",
  },
  {
    title: "Lyricraft",
    image: ` https://res.cloudinary.com/ddjikayiy/image/upload/v1727447909/monochrome_la2fnw.jpg`,

    clubName: "Dhwani",
    timeSlots: ["10:00 AM - 01:30 PM"],
    location: "Room 208",
    phone: "9570245195",
    coordinatorName: "Ramendra",
    facultyAdvisor: "",
    link: "https://forms.gle/avFVVrxdM9ZEr48V7",
    description:
      "LyriCraft is a songwriting competition aimed at discovering creative and talented lyricists. This event encourages participants to craft original lyrics that convey emotions, tell stories, or offer unique perspectives on life. The competition is designed to bring out the best in creativity and storytelling through music. Participants can compete either solo or as a team (maximum of 2 members). In the first round, participants will be given a theme, mood, or word prompt, and they will have to write an original song lyric within the allotted time. The focus will be on creativity, the relevance of the lyrics to the given prompt, and the emotional depth conveyed in the writing. Those with outstanding lyrics will move on to the final round, where they will perform their written lyrics with a melody or spoken word. This round emphasizes the delivery, emotional impact, and originality of the composition. Participants may sing or present their lyrics in any creative form they choose, whether solo or as a team. At the end of the event, positions will be awarded to those who exhibit the most creativity, originality, and emotional connection in their work. A panel of judges, including experienced musicians and lyricists, will assess the submissions based on creativity, coherence, and performance.",
  },
];

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    clubName: "",
    timeSlots: [],
    location: "",
    phone: "",
    coordinatorName: "",
    facultyAdvisor: "",
  });

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true); // Open modal if the user is logged in
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="text-4xl text-white flex justify-center p-4">
        <h1 className="text-white">Day 2</h1>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
      >
        {eventsDataDay1.map((event, index) => (
          <Cards key={index} eventData={event} openModal={openModal} />
        ))}
      </motion.div>

      <div className="text-4xl text-white flex justify-center p-4">
        <h1 className="text-white">Day 3</h1>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
      >
        {eventsDataDay2.map((event, index) => (
          <Cards key={index} eventData={event} openModal={openModal} />
        ))}
      </motion.div>

      {
        <LargeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          modalData={modalData}
        />
      }
    </div>
  );
}

export default Page;
