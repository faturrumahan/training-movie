"use client";
import { removewatchList } from "@/reducer/watchListSlice";
import { RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function WatchList() {
  const { watchLists } = useSelector((state: RootState) => state.watchList);
  const dispatch = useDispatch();

  const onRemoveHandler = (index: number) => {
    dispatch(removewatchList(index));
  };

  return (
    <>
      <h1 className="font-bold">Your watchlist</h1>
      {watchLists.map((watchList, index) => (
        <div
          key={index}
          className="w-[400px] p-5 shadow-lg rounded bg-gray-50 flex justify-between items-center mb-2"
        >
          <div className="flex items-center gap-2">
            <p>{watchList.title}</p>
          </div>
          <button onClick={() => onRemoveHandler(index)}>🗑️</button>
        </div>
      ))}
    </>
  );
}

export default WatchList;
