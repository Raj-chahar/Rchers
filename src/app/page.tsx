"use client";

import { useEffect, useState } from "react";
import { BackgroundLines } from "./components/ui/background-lines";
import { FloatingDock } from "./components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const links = [
    {
      title: "Home",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/chahar_here/",
    },
 
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Chahar_here",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Raj-chahar",
    },
  ];

  useEffect(() => {
    const targetDate = new Date("2024-12-19T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Background Lines */}
      <BackgroundLines>
          <div style={styles.container}>
        <h1 style={styles.heading}>Coming Soon</h1>
        <p style={styles.subheading}>
          We are launching something amazing on December 16, 2024!
        </p>
        <div style={styles.countdownContainer}>
          <div style={styles.timeBox}>
            <span style={styles.number}>{timeLeft.days}</span>
            <span style={styles.label}>Days</span>
          </div>
          <div style={styles.timeBox}>
            <span style={styles.number}>{timeLeft.hours}</span>
            <span style={styles.label}>Hours</span>
          </div>
          <div style={styles.timeBox}>
            <span style={styles.number}>{timeLeft.minutes}</span>
            <span style={styles.label}>Minutes</span>
          </div>
          <div style={styles.timeBox}>
            <span style={styles.number}>{timeLeft.seconds}</span>
            <span style={styles.label}>Seconds</span>
          </div>
        </div>
        <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
      </div>
        </BackgroundLines>
        

      {/* Main Content */}
      
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    height: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    zIndex: 1, // Ensure content is above background
    color: "white",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    paddingTop: "10rem",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  countdownContainer: {
    display: "flex",
    gap: "1rem",
  },
  timeBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#444",
    borderRadius: "10px",
  },
  number: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  label: {
    fontSize: "1rem",
    marginTop: "0.5rem",
  },
};
