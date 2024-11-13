import * as React from "react";
import type { SVGProps } from "react";
const SvgIcRing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <circle cx={36} cy={36} r={34.75} stroke="url(#ic_ring_svg__a)" strokeWidth={2.5} />
    <defs>
      <linearGradient
        id="ic_ring_svg__a"
        x1={79.579}
        x2={0}
        y1={7.579}
        y2={55.895}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C913B9" />
        <stop offset={0.501} stopColor="#F9373F" />
        <stop offset={1} stopColor="#FECD00" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgIcRing;
