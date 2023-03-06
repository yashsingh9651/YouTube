import React, { useEffect, useState } from "react";
import numeral from 'numeral';
import { Avatar } from '@mui/material';
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from "moment/moment";
import request from "../api";
export const VideoItem = ({video}) => {
  // ? Destructuring 
  const {id,snippet:{channelId,title,channelTitle,publishedAt,thumbnails:{medium}}} = video;
    const {toggle}= useSelector(state => state.auth);
      // ? Setting Duration ,Views and channelIcon... 
    const [views, setViews] = useState(null);
    const [duration,setDuration] = useState(null);
    const [channelIcon,setChannelIcon] = useState(null);
    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds*1000).format('mm:ss');
    const _videoId = id?.videoId || id; 
    useEffect(() => {
      // ? HTTP request to get channelIcon Avatar...
      const get_video_deatils=async()=>{
        const {data:{items}} = await request.get('/videos',{
          params:{
            part:'contentDetails,statistics',
            id:_videoId
          }
        })
        setDuration(items[0].contentDetails.duration);
        setViews(items[0].statistics.viewCount)
      }
      // ?  HTTP request to get duratioon and views...
        const get_channel_icon = async ()=>{
            const {data:{items}} = await request.get('/channels',{
                params:{
                    part:'snippet',
                    id:channelId
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default.url);
        }
        get_channel_icon();
        get_video_deatils();
    }, [_videoId])
  return (
    <>
      <div>
        <div className="relative">
          <LazyLoadImage src={medium.url?medium.url:null} effect="blur" />
          <span
            className={`absolute bottom-1 ${
              toggle ? "right-1" : "right-2"
            } rounded px-1 bg-black text-sm`}
          >
            {_duration}
          </span>
        </div>
        <div className="flex mt-1 pl-2 md:pl-0 md:mt-3">
          <div>
            <Avatar alt="Remy Sharp" src={channelIcon}/>
          </div>
          <div className="ml-2 mb-4">
            <h1 className="font-medium mb-1">{title}</h1>
            <div className="flex lg:flex-col text-[13px]">
              <h1 className="text-gray-400">
                {channelTitle}
                <span className="inline lg:hidden">&nbsp;•&nbsp;</span>
              </h1>
              <h1 className="text-gray-400">
                {numeral(views).format("0.a")} views • {moment(publishedAt).fromNow()}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
