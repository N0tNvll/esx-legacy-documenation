import { useState } from "react";

export const Card = ({ icon, url, text, external = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isClickable = Boolean(url);
  const Component = isClickable ? "a" : "div";

  return (
    <Component
      {...(isClickable
        ? {
          href: url,
          target: external ? "_blank" : undefined,
          rel: external ? "noopener noreferrer" : undefined,
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
        }
        : {})}
      className={`_group _flex _flex-col _items-center _justify-between _w-44 _h-44 _p-5 _rounded-2xl _border _no-underline
      _bg-white/[0.01] _border-black/[0.08] _shadow-sm
      
      ${isClickable
          ? "hover:_border-[#f58220]/50 hover:_bg-[#f58220]/[0.06] hover:_shadow-[0_4px_24px_rgba(0,0,0,0.12),0_0_20px_rgba(245,130,32,0.08)] dark:hover:_shadow-[0_4px_24px_rgba(0,0,0,0.3),0_0_20px_rgba(245,130,32,0.12)] hover:_-translate-y-1 _transition-all _duration-300 _ease-out _cursor-pointer"
          : "_cursor-default"
        }`}
    >
      <div className="_flex _flex-1 _items-center _justify-center _w-full">
        <img
          src={icon}
          alt={text}
          style={{
            transform: isHovered ? "scale(1.08) translateY(-2px)" : "scale(1) translateY(0)",
            filter: isHovered ? "drop-shadow(0 6px 12px rgba(0,0,0,0.25))" : "none",
            transition: "transform 0.25s ease-out, filter 0.25s ease-out",
          }}
          className="_w-28 _h-28 _object-contain"
        />
      </div>

      <span
        className={`_text-xs _font-medium _tracking-wide _text-center _mt-2 
        _text-neutral-600 dark:_text-gray-200
        ${isClickable ? "group-hover:_text-[#f58220] _transition-colors _duration-150" : ""}`}
      >
        {text}
      </span>
    </Component>
  );
};