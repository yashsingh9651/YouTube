import request from "../../api";
import {
  HOME_VEDIOS_FAIL,
  HOME_VEDIOS_REQUEST,
  HOME_VEDIOS_SUCCESS,
} from "../actionType";
export const getPopularVedios = () => async (dispatch,getState) => {
  try {
    dispatch({ type: HOME_VEDIOS_REQUEST });
    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
      }
    });
    dispatch({
      type: HOME_VEDIOS_SUCCESS,
      payload: { vedios: data.items, nextPageToken: data.nextPageToken,category:'ALL'}
    });
    console.log('popular vedios http request called');
  } catch (error) {
    console.log(error.message);
    dispatch({ type: HOME_VEDIOS_FAIL, payload: error.message });
  }
};
export const getVediosByCategory = (keyword) => async (dispatch,getState) => {
  try {
    dispatch({ type: HOME_VEDIOS_REQUEST });
    const { data } = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q:keyword,
        type:'video'
      }
    });
    dispatch({
      type: HOME_VEDIOS_SUCCESS,
      payload: { vedios: data.items, nextPageToken: data.nextPageToken,category:keyword }
    });
    console.log('category vedios http request called');
  } catch (error) {
    console.log(error.message);
    dispatch({ type: HOME_VEDIOS_FAIL, payload: error.message });
  }
};

