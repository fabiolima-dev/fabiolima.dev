import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import CommandLine from "../components/CommandLine";
import Home from "../components/Home";
import Projects from "../components/Projects";

export default function Index() {
  return (
    <>
      <Head>
        <title>Fabio Lima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommandLine />
      <Header />
      {/* <main className="w-full max-w-screen-xl h-full m-auto">
        <Home />
        <Projects />
      </main> */}
    </>
  );
}