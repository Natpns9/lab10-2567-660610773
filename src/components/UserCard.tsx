"use client";

import React, { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import UserCardDetail from "./UserCardDetail";
import { UserCardProps } from "@/libs/types";

export default function UserCard({ name, imgUrl, address, email }: UserCardProps) {
  const [isDetailShown, setIsDetailShown] = useState(false);

  const userCardOnClick = () => {
    setIsDetailShown(!isDetailShown);
  };

  return (
    <div className="border-bottom">
      <div 
        className="d-flex align-items-center p-3" 
        onClick={userCardOnClick} 
        role="button" 
        tabIndex={0} 
        aria-expanded={isDetailShown}
        onKeyDown={(e) => e.key === 'Enter' && userCardOnClick()} // Allow toggling via keyboard
      >
        <img 
          src={imgUrl} 
          width="90px" 
          className="rounded-circle me-4" 
          alt={`Profile picture of ${name}`} 
        />
        <span className="text-center display-6 me-auto">{name}</span>

        {/* toggle chevron icon accordingly */}
        {isDetailShown ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {/* display UserCardDetail accordingly */}
      {isDetailShown && <UserCardDetail address={address} email={email} />}
    </div>
  );
}
