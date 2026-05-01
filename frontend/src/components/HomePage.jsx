import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Promos from "./Promos";
import FormulesMidi from "./FormulesMidi";
import SpecialOffers from "./SpecialOffers";
import Menu from "./Menu";
import Info from "./Info";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import MentionsLegales from "./MentionsLegales";
import Footer from "./Footer";
import { mockData } from "../data/mock";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpening, setNextOpening] = useState("");

  // Calculate restaurant status based on UTC+2 (Europe/Paris)
  const calculateRestaurantStatus = () => {
    const now = new Date();
    // Convert to UTC+2 (Paris time)
    const parisTime = new Date(now.getTime() + (2 * 60 * 60 * 1000));
    const currentHour = parisTime.getHours();
    const currentMinute = parisTime.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    const dayOfWeek = parisTime.getDay(); // 0 = Sunday, 1 = Monday, etc.

    const openingHours = {
      // Monday-Thursday: 11:00-14:00 & 18:00-22:30
      1: [{start: 11*60, end: 14*60}, {start: 18*60, end: 22*60+30}],
      2: [{start: 11*60, end: 14*60}, {start: 18*60, end: 22*60+30}],
      3: [{start: 11*60, end: 14*60}, {start: 18*60, end: 22*60+30}],
      4: [{start: 11*60, end: 14*60}, {start: 18*60, end: 22*60+30}],
      // Friday: 11:00-13:00 & 18:00-22:30
      5: [{start: 11*60, end: 13*60}, {start: 18*60, end: 22*60+30}],
      // Saturday: 11:00-14:00 & 18:00-22:30
      6: [{start: 11*60, end: 14*60}, {start: 18*60, end: 22*60+30}],
      // Sunday: 11:00-14:00 & 18:00-22:30
      0: [{start: 11*60, end: 14*60}, {start: 18*60, end: 22*60+30}]
    };

    const todayHours = openingHours[dayOfWeek];
    let isCurrentlyOpen = false;
    
    for (const slot of todayHours) {
      if (currentTime >= slot.start && currentTime <= slot.end) {
        isCurrentlyOpen = true;
        break;
      }
    }

    // Find next opening time
    let nextOpeningText = "";
    if (!isCurrentlyOpen) {
      // Look for next slot today
      for (const slot of todayHours) {
        if (currentTime < slot.start) {
          const hours = Math.floor(slot.start / 60);
          const minutes = slot.start % 60;
          nextOpeningText = `Prochain créneau : Aujourd'hui ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
          break;
        }
      }
      
      // If no slot today, look for tomorrow
      if (!nextOpeningText) {
        const tomorrow = (dayOfWeek + 1) % 7;
        const tomorrowHours = openingHours[tomorrow];
        if (tomorrowHours.length > 0) {
          const hours = Math.floor(tomorrowHours[0].start / 60);
          const minutes = tomorrowHours[0].start % 60;
          nextOpeningText = `Prochain créneau : Demain ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }
      }
    }

    setIsOpen(isCurrentlyOpen);
    setNextOpening(nextOpeningText);
  };

  useEffect(() => {
    calculateRestaurantStatus();
    // Update every minute
    const interval = setInterval(calculateRestaurantStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isOpen={isOpen} />
      <Hero />
      <Promos />
      <FormulesMidi />
      <SpecialOffers />
      <Menu />
      <Info isOpen={isOpen} nextOpening={nextOpening} />
      <Gallery />
      <About />
      <Contact />
      <MentionsLegales />
      <Footer />
      
      {/* Floating delivery badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-[#20A35B] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
          🚚 Livraison gratuite 7j/7 (min 15 €)
        </div>
      </div>
    </div>
  );
};

export default HomePage;