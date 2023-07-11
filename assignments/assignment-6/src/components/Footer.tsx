import React from "react";

type Props = {
  fullName: string;
  occupation: string;
  favoriteQuote: string;
};

export default function Footer({ fullName, occupation, favoriteQuote }: Props) {
  return (
    <footer className="bg-gray-800 py-4  ">
      <div className="container mx-auto text-center text-white">
        <p className="text-lg">{fullName}</p>
        <p className="text-sm">{occupation}</p>
        <p className="mt-2">{favoriteQuote}</p>
      </div>
    </footer>
  );
}
