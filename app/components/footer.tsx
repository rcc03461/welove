"use client";
import React, { useState,useEffect } from "react";
import { useOrganization, useSession, useUser } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import {HeaderUserInfo} from "./header_user_info"
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
export function Footer() {
  return (
    <footer className="border-t border-[#EEEEF0]">
      <div className="footer-container max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="left-container">
          <div>
          <a href="/" target="_blank">
            <Image
              src="/brand_logo_black.png"
              width={128}
              height={101}
              alt="Picture of the author"
              className="shadow-white"
            />
          </a>
          </div>
        </div>
        <div className="right-container">
          <ul className="flex gap-4">
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="/About_us">About Us</a>
              </li>
              <li>
                  <a href="/Products">Products</a>
              </li>
              <li>
                  <a href="/Contact_us">Contact Us</a>
              </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
