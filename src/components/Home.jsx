import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";
import {
  getPopularVedios,
  getVediosByCategory,
} from "../redux/actions/vedioAction";
import { VideoItem } from "./VideoItem";
import InfiniteScroll from "react-infinite-scroll-component";
export const Home =()=>{
  const keywords = [
    "All",
    "React",
    "Redux",
    "Funny Videos",
    "Muisc",
    "Big Boss",
    "T-Series",
    "Vlogging",
    "Riders",
    "Songs",
    "Coding",
    "Omegle",
    "Carry Minati",
    "PUBG",
    "Editing",
    "Travelling",
    "Foodies",
  ];
  // ? Navigate to Login... and setting activeCategory to make active effect on keywords...
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken, toggle } = useSelector((state) => state.auth);
  const { vedios, activeCategory,loading } = useSelector((state) => state.homeVideos);
  const [activeElement, setActiveElement] = useState("All");
  // ? calling the action to get videos... and videos by Category... 
  useEffect(() => {
    if (authToken === null) {
      navigate("/login");
    }
    dispatch(getPopularVedios());
  }, [authToken, dispatch]);
  // ? keywordswords on click...
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVedios());
    } else {
      dispatch(getVediosByCategory(value));
    }
  };
  // ? Scroll Bar Fetching More Data...
  const fetchMoreData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVedios());
    } else {
      dispatch(getVediosByCategory(activeCategory));
    }
  };
  return (
    <>
      <div className="md:flex">
        <div>
          <Sidebar />
        </div>
        <div className={`xl:px-7 ${toggle ? "ml-[13vw]" : "ml-[5vw]"}`}>
          <div
            className={`flex overflow-x-scroll max-w-[95.5vw] md:max-w-[97.8vw] mx-2 ${
              !toggle ? "lg:max-w-[89.5vw]" : "lg:max-w-[82vw]"
            }`}
          >
            {keywords.map((value, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    handleClick(value);
                  }}
                  className={`bg-[#272727] px-3 py-1 rounded-lg text-lg mr-2 min-w-fit ${activeElement === value && "bg-white text-black"
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>
          <div>
            <InfiniteScroll
              dataLength={vedios.length}
              next={fetchMoreData}
              hasMore={true}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-3"
            >
              {vedios.map((video) => {
                return <VideoItem key={video.id} video={video} />;
              })
              }
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};