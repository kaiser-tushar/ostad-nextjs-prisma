import React from "react";
import logo from "../assets/images/logo.png";
type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <header className="bg-gray-300 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src={logo} alt="logo" className="h-8 hidden md:inline" />
        <h1 className="text-gray-800 text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
}
