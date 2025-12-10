import React, { forwardRef } from "react";

const TypedText = forwardRef<HTMLSpanElement, React.PropsWithChildren<{}>>(
  (props, ref) => {
    return (
      <span
        className="text-xs md:text-base block max-w-full min-h-20 md:min-h-16"
        ref={ref}
      >
        {props.children}
      </span>
    );
  }
);

export default TypedText;
