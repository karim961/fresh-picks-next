/* eslint-disable prefer-destructuring */
// this is a youtube url example https://www.youtube.com/watch?v=vWLcyFtni6U&feature=emb_logo
export const getYoutubeVideoId = (Url: string): string => {
  let _res = Url.split('?');
  let _videoID = '';
  if (_res.length > 1) {
    _videoID = _res[1];
    _res = _videoID.split('=');
    _videoID = _res[1];
    _res = _videoID.split('&');
    _videoID = _res[0];
  } else {
    _videoID = _res[0];
  }
  return _videoID;
};
