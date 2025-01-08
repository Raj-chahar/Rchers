"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { Button } from "react-native";

export function Footer(){
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
          <div className="container mx-auto px-6 md:px-12">
            {/* Grid layout for footer */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 inset-y-10">
              {/* About Section */}
              <div>
                <Image src="/Rchers_white.png" alt="" width={200} height={200}></Image>
                {/* <p className="mt-4 text-sm">
                  Empowering innovators in tech through Hackathons, Ideathons, and Job-A-Thons.
                </p> */}
                
              </div>
    
              {/* Navigation Links */}
              <div>
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="#Home" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#About" className="hover:text-white transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#Events" className="hover:text-white transition">
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
    
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <p className="mt-4 text-sm">Email: info@rchers.org</p>
                <p className="mt-2 text-sm">Phone: 7412814077</p>
                <p className="mt-2 text-sm">Location: Chandigarh, India</p>
              </div>
    
              {/* Social Media Links */}
              <div>
              <div>
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                <div className="flex mt-4 space-x-4 mb-8">
                  <a
                    href="https://x.com/Rchers_India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    <IconBrandX/>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    <IconBrandLinkedin/>
                  </a>
                  <a
                    href="https://instagram.com/rchers.india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    <IconBrandInstagram/>
                  </a>
                </div>
              </div>
              <div>
                <a className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
                 href="https://docs.google.com/forms/d/e/1FAIpQLSeRr_t4IidDAiJ7Je_UFA_hy45cm8bD-iWvmNKcDD4jLJS1lg/viewform?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer">
                  Contact Us </a>
              </div>
              </div>
            </div>
            <hr className=""></hr>
            <p className="mt-4 text-sm">© 2024 Community Rchers. All Rights Reserved.</p>
          </div>
        </footer>
      );
  };