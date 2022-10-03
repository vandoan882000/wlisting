import { FC } from 'react';

interface VideoProps {
  url: string;
}

export const Video: FC<VideoProps> = ({ url }) => {
  const isYoutube = (url: string) => {
    return url.search(/^http.*:\/\/(www|)\.youtube\.com/g) !== -1;
  };

  const isVimeo = (url: string) => {
    return url.search(/^http.*:\/\/vimeo\.com/g) !== -1;
  };

  const changeUrlVimeo = (url: string) => {
    const re = /\d+/g;
    const c = url.match(re);
    return `https://player.vimeo.com/video/${c ? c[0] : ''}?autoplay=1&loop=1&mute=1`;
  };

  const changeUrlYoutube = (url: string) => {
    const re = /\?v=.\w*/g;
    const found = re.exec(url);
    if (!found) {
      return '';
    }
    const res = found[0].replace(/\?v=/g, '');
    return `https://www.youtube.com/embed/${res}?autoplay=1&loop=1&mute=1&controls=0&iv_load_policy=1&disablekb=1&playlist=${res}&modestbranding=1&playsinline=1`;
  };
  const changeUrlToEmbed = (url: string) => {
    if (isVimeo(url)) {
      return changeUrlVimeo(url);
    }
    if (isYoutube(url)) {
      return changeUrlYoutube(url);
    }
    return url;
  };
  const videoUrl = changeUrlToEmbed(url);
  return (
    (isVimeo(url) && (
      <div
        className="relative block h-0 p-0 overflow-hidden veda-video-background"
        style={{ paddingBottom: `calc((1 / (var(--aspect-ratio, 1.777))) * 100%)` }}
      >
        <iframe
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;allowsInlineMediaPlayback"
          allowFullScreen
          className="absolute top-0 bottom-0 left-0 w-100% h-100% border-0"
        ></iframe>
      </div>
    )) ||
    (isYoutube(url) && (
      <div
        className="relative block h-0 p-0 overflow-hidden veda-video-background"
        style={{ paddingBottom: `calc((1 / (var(--aspect-ratio, 1.777))) * 100%)` }}
      >
        <iframe
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;allowsInlineMediaPlayback"
          allowFullScreen
          className="absolute top-0 bottom-0 left-0 w-100% h-100% border-0"
        ></iframe>
      </div>
    )) || (
      <div
        className="relative block h-0 p-0 overflow-hidden veda-video-background"
        style={{ paddingBottom: `calc((1 / (var(--aspect-ratio, 1.777))) * 100%)` }}
      >
        <video className="absolute top-0 bottom-0 left-0 w-100% h-100% border-0" src={videoUrl} loop muted autoPlay></video>
      </div>
    )
  );
};
