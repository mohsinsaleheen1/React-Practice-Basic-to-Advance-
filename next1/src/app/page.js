"use client";
import Image from "next/image";
import styles from "./page.module.css";
import EventFunctionState from "./component/EventFunctionState";

export default function Home() {
  return (
    <>
      <h1>Ha bhai kia seen hai Next js ka </h1>
      <div>
        <EventFunctionState />
      </div>
    </>
  );
}
