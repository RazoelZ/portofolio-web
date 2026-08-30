import React, { useState } from "react";
import { UserRound } from "lucide-react";

export type PhotoFrameSize = "sm" | "md" | "lg";

interface PhotoFrameProps {
  /** Path to the photo, e.g. "/profile.jpg". Drop the file into `public/`. */
  src?: string;
  alt?: string;
  size?: PhotoFrameSize;
  className?: string;
}

const SIZE_STYLES: Record<PhotoFrameSize, string> = {
  sm: "w-40 h-40",
  md: "w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96",
  lg: "w-80 h-80 sm:w-[26rem] sm:h-[26rem]",
};

/**
 * A modern, framed photo slot for the Hero section — sized so it can be
 * reused anywhere else a profile photo is needed (About card, footer, etc.)
 * via the `size` prop.
 *
 * If `src` fails to load (or isn't provided yet), this renders a tidy
 * placeholder instead of a broken image, so the layout looks finished even
 * before a real photo exists. Drop a file at `public/profile.jpg` (or any
 * path passed via `src`) and it appears automatically — no code changes
 * needed.
 */
const PhotoFrame: React.FC<PhotoFrameProps> = ({
  src = "/profile.png",
  alt = "Profile photo",
  size = "md",
  className = "",
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className={`relative ${SIZE_STYLES[size]} ${className}`}>
      <PhotoGlow />

      <div
        className="
          relative w-full h-full rounded-[2rem] overflow-hidden
          bg-surface border border-gray-200 dark:border-zinc-800
          shadow-theme-xl dark:hover:shadow-glow-blue
          transition-shadow duration-300
        "
      >
        {!imgFailed ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-[center_30%]"
          />
        ) : (
          <PhotoPlaceholder path={src} />
        )}
      </div>

      <CornerAccents />
    </div>
  );
};

/** Soft blurred glow sitting behind the frame. */
const PhotoGlow: React.FC = () => (
  <div
    aria-hidden
    className="
      absolute inset-4 rounded-[2rem]
      bg-gradient-to-br from-blue-500/30 to-indigo-500/30
      blur-3xl -z-10
    "
  />
);

/** Shown in place of the photo until a real file exists at `path`. */
const PhotoPlaceholder: React.FC<{ path: string }> = ({ path }) => (
  <div
    className="
      m-2.5 h-[calc(100%-1.25rem)] rounded-[1.65rem]
      flex flex-col items-center justify-center gap-3
      border-2 border-dashed border-blue-400/40 dark:border-blue-400/30
      text-tertiary
    "
  >
    <UserRound
      size={56}
      strokeWidth={1.5}
      className="text-blue-500/50 dark:text-blue-400/50"
    />
    <p className="text-sm font-sans font-medium text-secondary">
      Add your photo
    </p>
    <p className="text-xs font-mono text-tertiary px-4 text-center">
      Drop a file at public{path}
    </p>
  </div>
);

/** Small L-shaped brackets that echo the site's blue/indigo accent. */
const CornerAccents: React.FC = () => (
  <>
    <span
      aria-hidden
      className="
        absolute -top-2 -left-2 w-8 h-8
        border-t-2 border-l-2 border-blue-500 dark:border-blue-400
        rounded-tl-xl
      "
    />
    <span
      aria-hidden
      className="
        absolute -bottom-2 -right-2 w-8 h-8
        border-b-2 border-r-2 border-blue-500 dark:border-blue-400
        rounded-br-xl
      "
    />
  </>
);

export default PhotoFrame;
