"use client";
import React, { useState,useEffect } from "react";
import { useOrganization, useSession, useUser } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import {HeaderUserInfo} from "./header_user_info"
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { log } from "console";

export function Header() {
    const [isLogging,setLogging] = useState('false');
    const [display_username,setdisplay_username] = useState('Guest');
    const { user } = useUser();
    const { session } = useSession();
    const { organization } = useOrganization();
    const { signOut } = useClerk();
    const router = useRouter();
    return (
        <header className="shadow">
            <main className="max-w-[1200px] w-full mx-auto p-4 box-border">
                <div className="">
                  <div>
                    <header className="flex w-full justify-between ">
                      <div className="flex gap-4">
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
                      <div className="flex items-center gap-4">
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
                        <div className="user-icon flex gap-2 items-center justify-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div>
                                {display_username}
                            </div>
                            <button onClick={() => signOut(() => router.push("/"))}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>
                            </button>
                        </div>
                      </div>
                    </header>
                  </div>
                </div>
            </main>
        </header>
    );
  }
  