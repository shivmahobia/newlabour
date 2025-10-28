"use client";
import Carousel from "../components/Home/Carousel";
import CmCard from "../components/Home/CmCard";
import EventCard from "../components/Home/EventCard";
import TopBar from "../components/Home/TopBar";
import DocumentList from "../components/Home/DocumentList";
import ServiceCards from "../components/Home/ServiceCards";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { messages } = useLanguage();
  return (
    <main>
      {/* <LanguageSwitcher />

      <h1>{messages.title}</h1>
      <p>{messages.description}</p>

      <button style={{ marginTop: "1rem" }}>{messages.contact}</button> */}
      <Carousel />
      <TopBar />
      <ServiceCards />
      <EventCard />
      <CmCard />
      <DocumentList />
    </main>
  );
}
