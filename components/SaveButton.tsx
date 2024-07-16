"use client";
import { addwatchList } from "@/reducer/watchListSlice";
import { Movie } from "@/types/movie";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  id: number;
  title: string;
};

function SaveButton({ id, title }: Props) {
  const dispatch = useDispatch();

  const onSaveHandler = () => {
    const newMovie: Movie = {
      id: id,
      title: title,
    };
    dispatch(addwatchList(newMovie));
    alert("Movie is saved on the watch list");
  };
  return (
    <button
      className="px-2 py-1 bg-blue-500 text-white rounded"
      onClick={onSaveHandler}
    >
      Save to wishlist
    </button>
  );
}

export default SaveButton;
