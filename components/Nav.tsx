import React, { Dispatch, SetStateAction } from "react";

const menus = [
  { title: "Now Playing", value: "now_playing" },
  { title: "Upcoming", value: "upcoming" },
  { title: "Popular", value: "popular" },
];

function Navigation({
  setCategory,
}: {
  setCategory: Dispatch<SetStateAction<string>>;
}) {
  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <nav className="flex gap-5">
      {menus.map((menu, index) => (
        <button
          key={index}
          className="rounded px-3 py-2 hover:bg-gray-300"
          onClick={() => handleCategoryChange(menu.value)}
        >
          {menu.title}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
