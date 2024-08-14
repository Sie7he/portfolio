import { Layout } from "../Layout";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { useEffect, useState } from "react";
import Certificates from "./Certificates";
import About from "./About";
import Skills from "./Skills";

export const Home = () => {


  return (
 
    <Layout>
      <Hero />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};
