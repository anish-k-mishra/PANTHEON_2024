"use client";
import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

import Image from "next/image";
import contact from "../../../assets/contact.jpg";

function ContactSection14() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center text-white">
        <Typography
          variant="h1"
          color="text-white"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl text-white">
          Pantheon Team is always ready for Support
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <Image src={contact} alt="hero" />
          <form
            action="https://formspree.io/f/xvgpekbz"
            method="POST"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-white"
                  required
                >
                  First Name
                </Typography>
                <Input
                  color="white"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  required
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium text-white"
                >
                  Last Name
                </Typography>
                <Input
                  color="white"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium text-white"
                required
              >
                Your Email
              </Typography>
              <Input
                color="white"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                required
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium text-white"
                required
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="white"
                placeholder="Message"
                name="message"
                required
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <a href="/">
              <Button type="submit" className="w-full" color="gray">
                Send message
              </Button>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection14;
