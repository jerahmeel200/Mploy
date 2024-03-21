import React from "react";
import { useRouter } from "next/navigation";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Button({
  width = "183px",
  height = "48px",

  fontSize = "16px",
  lineHeight = "24px",
  title = "",
  href = "",
  mt = "0px",
  mb = "0px",
  ml = "0px",
  mr = "0px",
  onClick,
  disabled = false,
  loading = false,
}: {
  width?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
  title?: string;
  href?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  onClick?: any;
  disabled?: boolean;
  loading?: boolean;
}) {
  const router = useRouter();

  const handleClickButton = () => {
    if (onClick && typeof onClick === "function") {
      onClick();
    } else {
      if (typeof href == "string" && href?.length) {
        router.push(href);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleClickButton}
        disabled={loading || disabled}
        className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        //
        style={{
          margin: 0,
          width,
          height,
          fontSize,
          lineHeight,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
        }}>
        {loading ? (
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 20, color: "#fff" }} spin />
            }
          />
        ) : (
          <>
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">{title}</span>
          </>
        )}
      </button>

      <style jsx>{`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          border: 0 solid #e5e7eb;
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x: ;
          --tw-pan-y: ;
          --tw-pinch-zoom: ;
          --tw-scroll-snap-strictness: proximity;
          --tw-gradient-from-position: ;
          --tw-gradient-via-position: ;
          --tw-gradient-to-position: ;
          --tw-ordinal: ;
          --tw-slashed-zero: ;
          --tw-numeric-figure: ;
          --tw-numeric-spacing: ;
          --tw-numeric-fraction: ;
          --tw-ring-inset: ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur: ;
          --tw-brightness: ;
          --tw-contrast: ;
          --tw-grayscale: ;
          --tw-hue-rotate: ;
          --tw-invert: ;
          --tw-saturate: ;
          --tw-sepia: ;
          --tw-drop-shadow: ;
          --tw-backdrop-blur: ;
          --tw-backdrop-brightness: ;
          --tw-backdrop-contrast: ;
          --tw-backdrop-grayscale: ;
          --tw-backdrop-hue-rotate: ;
          --tw-backdrop-invert: ;
          --tw-backdrop-opacity: ;
          --tw-backdrop-saturate: ;
          --tw-backdrop-sepia: ;
        }
        ::after,
        ::before {
          --tw-content: "";
        }

        hr {
          height: 0;
          color: inherit;
          border-top-width: 1px;
        }
        abbr:where([title]) {
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
        }
        a {
          color: inherit;
          text-decoration: inherit;

          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border: none;
          text-align: center;
        }
        b,
        strong {
          font-weight: bolder;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 1em;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        table {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }

        button,
        select {
          text-transform: none;
        }
        [type="button"],
        [type="reset"],
        [type="submit"],
        button {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }
        :-moz-focusring {
          outline: auto;
        }
        :-moz-ui-invalid {
          box-shadow: none;
        }
        progress {
          vertical-align: baseline;
        }
        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        summary {
          display: list-item;
        }
        blockquote,
        dd,
        dl,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        pre {
          margin: 0;
        }
        fieldset {
          margin: 0;
          padding: 0;
        }
        dialog,
        legend {
          padding: 0;
        }
        menu,
        ol,
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        textarea {
          resize: vertical;
        }
        input::-moz-placeholder,
        textarea::-moz-placeholder {
          opacity: 1;
          color: #9ca3af;
        }
        input::placeholder,
        textarea::placeholder {
          opacity: 1;
          color: #9ca3af;
        }
        [role="button"],
        button {
          cursor: pointer;
        }
        :disabled {
          cursor: default;
        }
        audio,
        canvas,
        embed,
        iframe,
        img,
        object,
        svg,
        video {
          display: block;
          vertical-align: middle;
        }
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        [hidden] {
          display: none;
        }
        ::backdrop {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x: ;
          --tw-pan-y: ;
          --tw-pinch-zoom: ;
          --tw-scroll-snap-strictness: proximity;
          --tw-gradient-from-position: ;
          --tw-gradient-via-position: ;
          --tw-gradient-to-position: ;
          --tw-ordinal: ;
          --tw-slashed-zero: ;
          --tw-numeric-figure: ;
          --tw-numeric-spacing: ;
          --tw-numeric-fraction: ;
          --tw-ring-inset: ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur: ;
          --tw-brightness: ;
          --tw-contrast: ;
          --tw-grayscale: ;
          --tw-hue-rotate: ;
          --tw-invert: ;
          --tw-saturate: ;
          --tw-sepia: ;
          --tw-drop-shadow: ;
          --tw-backdrop-blur: ;
          --tw-backdrop-brightness: ;
          --tw-backdrop-contrast: ;
          --tw-backdrop-grayscale: ;
          --tw-backdrop-hue-rotate: ;
          --tw-backdrop-invert: ;
          --tw-backdrop-opacity: ;
          --tw-backdrop-saturate: ;
          --tw-backdrop-sepia: ;
        }
        .container {
          width: 100%;
          margin-right: auto;
          margin-left: auto;
          padding-right: 1rem;
          padding-left: 1rem;
        }
        @media (min-width: 640px) {
          .container {
            max-width: 640px;
            padding-right: 1rem;
            padding-left: 1rem;
          }
        }
        @media (min-width: 768px) {
          .container {
            max-width: 768px;
            padding-right: 1rem;
            padding-left: 1rem;
          }
        }
        @media (min-width: 1024px) {
          .container {
            max-width: 1024px;
            padding-right: 1rem;
            padding-left: 1rem;
          }
        }
        @media (min-width: 1280px) {
          .container {
            max-width: 1280px;
            padding-right: 3rem;
            padding-left: 3rem;
          }
        }
        @media (min-width: 1536px) {
          .container {
            max-width: 1536px;
            padding-right: 14rem;
            padding-left: 14rem;
          }
        }
        .invisible {
          visibility: hidden;
        }
        .absolute {
          position: absolute;
        }
        .relative {
          position: relative;
        }
        .inset-0 {
          inset: 0px;
        }
        .bottom-0 {
          bottom: 0;
        }
        .left-0 {
          left: 0;
        }
        .right-0 {
          right: 0;
        }
        .top-0 {
          top: 0;
        }
        .top-1\/2 {
          top: 50%;
        }
        .z-10 {
          z-index: 10;
        }
        .z-20 {
          z-index: 20;
        }
        .z-30 {
          z-index: 30;
        }
        .m-1 {
          margin: 0.25rem;
        }
        .mx-10 {
          margin-left: 2.5rem;
          margin-right: 2.5rem;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .-mb-1 {
          margin-bottom: -0.25rem;
        }
        .-mb-8 {
          margin-bottom: -2rem;
        }
        .-ml-10 {
          margin-left: -2.5rem;
        }
        .-ml-12 {
          margin-left: -3rem;
        }
        .-ml-2 {
          margin-left: -0.5rem;
        }
        .-ml-3 {
          margin-left: -0.75rem;
        }
        .-mr-1 {
          margin-right: -0.25rem;
        }
        .-mr-10 {
          margin-right: -2.5rem;
        }
        .-mr-3 {
          margin-right: -0.75rem;
        }
        .-mr-5 {
          margin-right: -1.25rem;
        }
        .-mt-1 {
          margin-top: -0.25rem;
        }
        .-mt-10 {
          margin-top: -2.5rem;
        }
        .-mt-12 {
          margin-top: -3rem;
        }
        .mb-0 {
          margin-bottom: 0;
        }
        .mb-10 {
          margin-bottom: 2.5rem;
        }
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        .mb-3 {
          margin-bottom: 0.75rem;
        }
        .mb-32 {
          margin-bottom: 8rem;
        }
        .mb-9 {
          margin-bottom: 2.25rem;
        }
        .ml-0 {
          margin-left: 0;
        }
        .ml-0\.5 {
          margin-left: 0.125rem;
        }
        .ml-1 {
          margin-left: 0.25rem;
        }
        .ml-2 {
          margin-left: 0.5rem;
        }
        .ml-9 {
          margin-left: 2.25rem;
        }
        .mr-1 {
          margin-right: 0.25rem;
        }
        .mr-2 {
          margin-right: 0.5rem;
        }
        .mr-4 {
          margin-right: 1rem;
        }
        .mt-0 {
          margin-top: 0;
        }
        .mt-0\.5 {
          margin-top: 0.125rem;
        }
        .mt-1 {
          margin-top: 0.25rem;
        }
        .box-border {
          box-sizing: border-box;
        }
        .block {
          display: block;
        }
        .inline-block {
          display: inline-block;
        }
        .flex {
          display: flex;
        }
        .inline-flex {
          display: inline-flex;
        }
        .grid {
          display: grid;
        }
        .hidden {
          display: none;
        }
        .h-0 {
          height: 0;
        }
        .h-0\.5 {
          height: 0.125rem;
        }
        .h-1 {
          height: 0.25rem;
        }
        .h-1\/3 {
          height: 33.333333%;
        }
        .h-10 {
          height: 2.5rem;
        }
        .h-12 {
          height: 3rem;
        }
        .h-16 {
          height: 4rem;
        }
        .h-20 {
          height: 5rem;
        }
        .h-24 {
          height: 6rem;
        }
        .h-32 {
          height: 8rem;
        }
        .h-4 {
          height: 1rem;
        }
        .h-40 {
          height: 10rem;
        }
        .h-48 {
          height: 12rem;
        }
        .h-5 {
          height: 1.25rem;
        }
        .h-6 {
          height: 1.5rem;
        }
        .h-64 {
          height: 16rem;
        }
        .h-8 {
          height: 2rem;
        }
        .h-full {
          height: 100%;
        }

        .w-8 {
          width: 2rem;
        }

        .w-full {
          width: 100%;
        }
        .origin-bottom-left {
          transform-origin: bottom left;
        }
        .origin-center {
          transform-origin: center;
        }
        .origin-top-right {
          transform-origin: top right;
        }

        .-translate-x-2 {
          --tw-translate-x: -0.5rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-x-20 {
          --tw-translate-x: -5rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-x-56 {
          --tw-translate-x: -14rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-x-8 {
          --tw-translate-x: -2rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-x-full {
          --tw-translate-x: -100%;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-y-1 {
          --tw-translate-y: -0.25rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-y-1\/2 {
          --tw-translate-y: -50%;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-y-2 {
          --tw-translate-y: -0.5rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-translate-y-24 {
          --tw-translate-y: -6rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-x-0 {
          --tw-translate-x: 0px;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-x-1 {
          --tw-translate-x: 0.25rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-x-1\/2 {
          --tw-translate-x: 50%;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-x-10 {
          --tw-translate-x: 2.5rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-x-12 {
          --tw-translate-x: 3rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-x-24 {
          --tw-translate-x: 6rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-x-full {
          --tw-translate-x: 100%;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-y-0 {
          --tw-translate-y: 0px;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-y-1 {
          --tw-translate-y: 0.25rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-y-10 {
          --tw-translate-y: 2.5rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-y-12 {
          --tw-translate-y: 3rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-y-8 {
          --tw-translate-y: 2rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .translate-y-full {
          --tw-translate-y: 100%;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-rotate-12 {
          --tw-rotate: -12deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-rotate-45 {
          --tw-rotate: -45deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-rotate-90 {
          --tw-rotate: -90deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .rotate-12 {
          --tw-rotate: 12deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .rotate-45 {
          --tw-rotate: 45deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .rotate-\[-40deg\] {
          --tw-rotate: -40deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .-skew-x-12 {
          --tw-skew-x: -12deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .skew-x-12 {
          --tw-skew-x: 12deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .transform {
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
        .grid-cols-1 {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .items-center {
          align-items: center;
        }
        .justify-start {
          justify-content: flex-start;
        }
        .justify-center {
          justify-content: center;
        }
        .gap-6 {
          gap: 1.5rem;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .rounded {
          border-radius: 0.25rem;
        }
        .rounded-2xl {
          border-radius: 1rem;
        }
        .rounded-full {
          border-radius: 9999px;
        }
        .rounded-lg {
          border-radius: 0.5rem;
        }
        .rounded-md {
          border-radius: 0.375rem;
        }
        .rounded-xl {
          border-radius: 0.75rem;
        }
        .border {
          border-width: 1px;
        }
        .border-0 {
          border-width: 0;
        }
        .border-2 {
          border-width: 2px;
        }
        .border-4 {
          border-width: 4px;
        }
        .border-b-2 {
          border-bottom-width: 2px;
        }
        .border-b-4 {
          border-bottom-width: 4px;
        }
        .border-l-2 {
          border-left-width: 2px;
        }
        .border-t-2 {
          border-top-width: 2px;
        }
        .border-solid {
          border-style: solid;
        }
        .border-black {
          --tw-border-opacity: 1;
          border-color: rgb(0 0 0 / var(--tw-border-opacity));
        }
        .border-blue-700 {
          --tw-border-opacity: 1;
          border-color: rgb(29 78 216 / var(--tw-border-opacity));
        }
        .border-gray-100 {
          --tw-border-opacity: 1;
          border-color: rgb(243 244 246 / var(--tw-border-opacity));
        }
        .border-gray-200 {
          --tw-border-opacity: 1;
          border-color: rgb(229 231 235 / var(--tw-border-opacity));
        }
        .border-gray-600 {
          --tw-border-opacity: 1;
          border-color: rgb(75 85 99 / var(--tw-border-opacity));
        }
        .border-gray-900 {
          --tw-border-opacity: 1;
          border-color: rgb(17 24 39 / var(--tw-border-opacity));
        }
        .border-indigo-500 {
          --tw-border-opacity: 1;
          border-color: rgb(99 102 241 / var(--tw-border-opacity));
        }
        .border-indigo-600 {
          --tw-border-opacity: 1;
          border-color: rgb(79 70 229 / var(--tw-border-opacity));
        }
        .border-purple-500 {
          --tw-border-opacity: 1;
          border-color: rgb(168 85 247 / var(--tw-border-opacity));
        }
        .border-purple-700 {
          --tw-border-opacity: 1;
          border-color: rgb(126 34 206 / var(--tw-border-opacity));
        }
        .border-transparent {
          border-color: transparent;
        }
        .border-white {
          --tw-border-opacity: 1;
          border-color: rgb(255 255 255 / var(--tw-border-opacity));
        }
        .bg-black {
          --tw-bg-opacity: 1;
          background-color: rgb(0 0 0 / var(--tw-bg-opacity));
        }
        .bg-blue-100\/60 {
          background-color: rgb(219 234 254 / 0.6);
        }
        .bg-blue-600 {
          --tw-bg-opacity: 1;
          background-color: rgb(37 99 235 / var(--tw-bg-opacity));
        }
        .bg-gray-100 {
          --tw-bg-opacity: 1;
          background-color: rgb(243 244 246 / var(--tw-bg-opacity));
        }
        .bg-gray-50 {
          --tw-bg-opacity: 1;
          background-color: rgb(249 250 251 / var(--tw-bg-opacity));
        }
        .bg-gray-600 {
          --tw-bg-opacity: 1;
          background-color: rgb(75 85 99 / var(--tw-bg-opacity));
        }
        .bg-gray-800 {
          --tw-bg-opacity: 1;
          background-color: rgb(31 41 55 / var(--tw-bg-opacity));
        }
        .bg-gray-900 {
          --tw-bg-opacity: 1;
          background-color: rgb(17 24 39 / var(--tw-bg-opacity));
        }
        .bg-green-400 {
          --tw-bg-opacity: 1;
          background-color: rgb(47 107 246 / var(--tw-bg-opacity));
        }
        .bg-green-500 {
          --tw-bg-opacity: 1;
          background-color: rgb(47 107 246 / var(--tw-bg-opacity));
        }
        .bg-indigo-600 {
          --tw-bg-opacity: 1;
          background-color: rgb(79 70 229 / var(--tw-bg-opacity));
        }
        .bg-pink-500 {
          --tw-bg-opacity: 1;
          background-color: rgb(236 72 153 / var(--tw-bg-opacity));
        }
        .bg-pink-800 {
          --tw-bg-opacity: 1;
          background-color: rgb(157 23 77 / var(--tw-bg-opacity));
        }
        .bg-purple-400 {
          --tw-bg-opacity: 1;
          background-color: rgb(192 132 252 / var(--tw-bg-opacity));
        }
        .bg-purple-500 {
          --tw-bg-opacity: 1;
          background-color: rgb(168 85 247 / var(--tw-bg-opacity));
        }
        .bg-purple-600 {
          --tw-bg-opacity: 1;
          background-color: rgb(147 51 234 / var(--tw-bg-opacity));
        }
        .bg-purple-700 {
          --tw-bg-opacity: 1;
          background-color: rgb(126 34 206 / var(--tw-bg-opacity));
        }
        .bg-purple-800 {
          --tw-bg-opacity: 1;
          background-color: rgb(107 33 168 / var(--tw-bg-opacity));
        }
        .bg-red-300 {
          --tw-bg-opacity: 1;
          background-color: rgb(252 165 165 / var(--tw-bg-opacity));
        }
        .bg-red-500 {
          --tw-bg-opacity: 1;
          background-color: rgb(239 68 68 / var(--tw-bg-opacity));
        }
        .bg-red-600 {
          --tw-bg-opacity: 1;
          background-color: rgb(220 38 38 / var(--tw-bg-opacity));
        }
        .bg-red-700 {
          --tw-bg-opacity: 1;
          background-color: rgb(185 28 28 / var(--tw-bg-opacity));
        }
        .bg-sky-500 {
          --tw-bg-opacity: 1;
          background-color: rgb(14 165 233 / var(--tw-bg-opacity));
        }
        .bg-transparent {
          background-color: transparent;
        }
        .bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .bg-gradient-to-b {
          background-image: linear-gradient(
            to bottom,
            var(--tw-gradient-stops)
          );
        }
        .bg-gradient-to-br {
          background-image: linear-gradient(
            to bottom right,
            var(--tw-gradient-stops)
          );
        }
        .bg-gradient-to-l {
          background-image: linear-gradient(to left, var(--tw-gradient-stops));
        }
        .bg-gradient-to-r {
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }
        .bg-gradient-to-t {
          background-image: linear-gradient(to top, var(--tw-gradient-stops));
        }
        .bg-gradient-to-tr {
          background-image: linear-gradient(
            to top right,
            var(--tw-gradient-stops)
          );
        }
        .from-\[\#ff8a05\] {
          --tw-gradient-from: #ff8a05 var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(255 138 5 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-blue-500 {
          --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-blue-600 {
          --tw-gradient-from: #2563eb var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-pink-400 {
          --tw-gradient-from: #f472b6 var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(244 114 182 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-pink-600 {
          --tw-gradient-from: #db2777 var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(219 39 119 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-purple-500 {
          --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-purple-600 {
          --tw-gradient-from: #9333ea var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-transparent {
          --tw-gradient-from: transparent var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .from-white {
          --tw-gradient-from: #fff var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .via-\[\#ff5478\] {
          --tw-gradient-to: rgb(255 84 120 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from),
            #ff5478 var(--tw-gradient-via-position), var(--tw-gradient-to);
        }
        .via-indigo-500 {
          --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from),
            #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);
        }
        .via-purple-600 {
          --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from),
            #9333ea var(--tw-gradient-via-position), var(--tw-gradient-to);
        }
        .via-purple-700 {
          --tw-gradient-to: rgb(126 34 206 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from),
            #7e22ce var(--tw-gradient-via-position), var(--tw-gradient-to);
        }
        .via-transparent {
          --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from),
            transparent var(--tw-gradient-via-position), var(--tw-gradient-to);
        }
        .to-\[\#ff00c6\] {
          --tw-gradient-to: #ff00c6 var(--tw-gradient-to-position);
        }
        .to-blue-400 {
          --tw-gradient-to: #60a5fa var(--tw-gradient-to-position);
        }
        .to-blue-500 {
          --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);
        }
        .to-blue-600 {
          --tw-gradient-to: #2563eb var(--tw-gradient-to-position);
        }
        .to-gray-50 {
          --tw-gradient-to: #f9fafb var(--tw-gradient-to-position);
        }
        .to-gray-700 {
          --tw-gradient-to: #374151 var(--tw-gradient-to-position);
        }
        .to-indigo-500 {
          --tw-gradient-to: #6366f1 var(--tw-gradient-to-position);
        }
        .to-pink-500 {
          --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);
        }
        .to-pink-700 {
          --tw-gradient-to: #be185d var(--tw-gradient-to-position);
        }
        .to-purple-500 {
          --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);
        }
        .to-purple-600 {
          --tw-gradient-to: #9333ea var(--tw-gradient-to-position);
        }
        .to-transparent {
          --tw-gradient-to: transparent var(--tw-gradient-to-position);
        }
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
        .object-cover {
          -o-object-fit: cover;
          object-fit: cover;
        }
        .p-0 {
          padding: 0;
        }
        .p-0\.5 {
          padding: 0.125rem;
        }
        .p-4 {
          padding: 1rem;
        }
        .px-10 {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }
        .px-12 {
          padding-left: 3rem;
          padding-right: 3rem;
        }
        .px-3 {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }
        .px-3\.5 {
          padding-left: 0.875rem;
          padding-right: 0.875rem;
        }
        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .px-5 {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }
        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .px-7 {
          padding-left: 1.75rem;
          padding-right: 1.75rem;
        }
        .px-8 {
          padding-left: 2rem;
          padding-right: 2rem;
        }
        .px-9 {
          padding-left: 2.25rem;
          padding-right: 2.25rem;
        }
        .py-0 {
          padding-top: 0;
          padding-bottom: 0;
        }
        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }
        .py-2\.5 {
          padding-top: 0.625rem;
          padding-bottom: 0.625rem;
        }
        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        .py-4 {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        .pb-20 {
          padding-bottom: 5rem;
        }
        .pl-2 {
          padding-left: 0.5rem;
        }
        .pl-2\.5 {
          padding-left: 0.625rem;
        }
        .pl-4 {
          padding-left: 1rem;
        }
        .pr-12 {
          padding-right: 3rem;
        }
        .pr-4 {
          padding-right: 1rem;
        }
        .pr-5 {
          padding-right: 1.25rem;
        }
        .pt-28 {
          padding-top: 7rem;
        }
        .text-left {
          text-align: left;
        }
        .text-center {
          text-align: center;
        }
        .align-middle {
          vertical-align: middle;
        }
        .text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
        .text-base {
          font-size: 1rem;
          line-height: 1.5rem;
        }
        .text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .text-sm {
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .font-bold {
          font-weight: 700;
        }
        .font-medium {
          font-weight: 500;
        }
        .font-semibold {
          font-weight: 600;
        }
        .uppercase {
          text-transform: uppercase;
        }
        .leading-6 {
          line-height: 1.5rem;
        }
        .leading-\[50px\] {
          line-height: 50px;
        }
        .leading-tight {
          line-height: 1.25;
        }
        .tracking-tighter {
          letter-spacing: -0.05em;
        }
        .tracking-wide {
          letter-spacing: 0.025em;
        }
        .text-amber-300 {
          --tw-text-opacity: 1;
          color: rgb(252 211 77 / var(--tw-text-opacity));
        }
        .text-black {
          --tw-text-opacity: 1;
          color: rgb(0 0 0 / var(--tw-text-opacity));
        }
        .text-blue-500 {
          --tw-text-opacity: 1;
          color: rgb(59 130 246 / var(--tw-text-opacity));
        }
        .text-gray-500 {
          --tw-text-opacity: 1;
          color: rgb(107 114 128 / var(--tw-text-opacity));
        }
        .text-gray-600 {
          --tw-text-opacity: 1;
          color: rgb(75 85 99 / var(--tw-text-opacity));
        }
        .text-gray-800 {
          --tw-text-opacity: 1;
          color: rgb(31 41 55 / var(--tw-text-opacity));
        }
        .text-gray-900 {
          --tw-text-opacity: 1;
          color: rgb(17 24 39 / var(--tw-text-opacity));
        }
        .text-green-400 {
          --tw-text-opacity: 1;
          color: rgb(47 107 246 / var(--tw-text-opacity));
        }
        .text-indigo-100 {
          --tw-text-opacity: 1;
          color: rgb(224 231 255 / var(--tw-text-opacity));
        }
        .text-indigo-600 {
          --tw-text-opacity: 1;
          color: rgb(79 70 229 / var(--tw-text-opacity));
        }
        .text-purple-500 {
          --tw-text-opacity: 1;
          color: rgb(168 85 247 / var(--tw-text-opacity));
        }
        .text-purple-600 {
          --tw-text-opacity: 1;
          color: rgb(147 51 234 / var(--tw-text-opacity));
        }
        .text-transparent {
          color: transparent;
        }
        .text-white {
          --tw-text-opacity: 1;
          color: rgb(255 255 255 / var(--tw-text-opacity));
        }
        .no-underline {
          text-decoration-line: none;
        }
        .opacity-0 {
          opacity: 0;
        }
        .opacity-10 {
          opacity: 0.1;
        }
        .opacity-100 {
          opacity: 1;
        }
        .opacity-30 {
          opacity: 0.3;
        }
        .opacity-5 {
          opacity: 0.05;
        }
        .opacity-50 {
          opacity: 0.5;
        }
        .opacity-80 {
          opacity: 0.8;
        }
        .opacity-90 {
          opacity: 0.9;
        }
        .opacity-\[3\%\] {
          opacity: 3%;
        }
        .mix-blend-screen {
          mix-blend-mode: screen;
        }
        .shadow {
          --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
            0 1px 2px -1px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-2xl {
          --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-inner {
          --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
          --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-lg {
          --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
            0 4px 6px -4px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-md {
          --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
            0 2px 4px -2px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-sm {
          --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .shadow-xl {
          --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1);
          --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
            0 8px 10px -6px var(--tw-shadow-color);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .ring-1 {
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
            var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
            calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
            var(--tw-shadow, 0 0 #0000);
        }
        .ring-indigo-300 {
          --tw-ring-opacity: 1;
          --tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity));
        }
        .ring-offset-2 {
          --tw-ring-offset-width: 2px;
        }
        .ring-offset-indigo-200 {
          --tw-ring-offset-color: #c7d2fe;
        }
        .blur-md {
          --tw-blur: blur(12px);
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
            var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
            var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }
        .blur-sm {
          --tw-blur: blur(4px);
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
            var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
            var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }
        .filter {
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
            var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
            var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }
        .transition {
          transition-property:
            color,
            background-color,
            border-color,
            text-decoration-color,
            fill,
            stroke,
            opacity,
            box-shadow,
            transform,
            filter,
            backdrop-filter,
            -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .transition-colors {
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .duration-100 {
          transition-duration: 0.1s;
        }
        .duration-1000 {
          transition-duration: 1s;
        }
        .duration-150 {
          transition-duration: 150ms;
        }
        .duration-200 {
          transition-duration: 0.2s;
        }
        .duration-300 {
          transition-duration: 0.3s;
        }
        .duration-500 {
          transition-duration: 0.5s;
        }
        .duration-700 {
          transition-duration: 0.7s;
        }
        .ease-in-out {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .ease-linear {
          transition-timing-function: linear;
        }
        .ease-out {
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        body {
          font-size: 15px;
          overflow-x: hidden;
          --tw-text-opacity: 1;
          color: rgb(55 65 81 / var(--tw-text-opacity));
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 600;
        }
        .before\:absolute::before {
          content: var(--tw-content);
          position: absolute;
        }
        .before\:bottom-0::before {
          content: var(--tw-content);
          bottom: 0;
        }
        .before\:left-0::before {
          content: var(--tw-content);
          left: 0;
        }
        .before\:h-\[2px\]::before {
          content: var(--tw-content);
          height: 2px;
        }
        .before\:w-0::before {
          content: var(--tw-content);
          width: 0;
        }
        .before\:bg-amber-300::before {
          content: var(--tw-content);
          --tw-bg-opacity: 1;
          background-color: rgb(252 211 77 / var(--tw-bg-opacity));
        }
        .before\:transition-all::before {
          content: var(--tw-content);
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .before\:duration-500::before {
          content: var(--tw-content);
          transition-duration: 0.5s;
        }
        .after\:absolute::after {
          content: var(--tw-content);
          position: absolute;
        }
        .after\:bottom-0::after {
          content: var(--tw-content);
          bottom: 0;
        }
        .after\:left-0::after {
          content: var(--tw-content);
          left: 0;
        }
        .after\:-z-10::after {
          content: var(--tw-content);
          z-index: -10;
        }
        .after\:h-0::after {
          content: var(--tw-content);
          height: 0;
        }
        .after\:w-full::after {
          content: var(--tw-content);
          width: 100%;
        }
        .after\:bg-amber-300::after {
          content: var(--tw-content);
          --tw-bg-opacity: 1;
          background-color: rgb(252 211 77 / var(--tw-bg-opacity));
        }
        .after\:text-white::after {
          content: var(--tw-content);
          --tw-text-opacity: 1;
          color: rgb(255 255 255 / var(--tw-text-opacity));
        }
        .after\:transition-all::after {
          content: var(--tw-content);
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .after\:duration-500::after {
          content: var(--tw-content);
          transition-duration: 0.5s;
        }
        .focus-within\:border-blue-700:focus-within {
          --tw-border-opacity: 1;
          border-color: rgb(29 78 216 / var(--tw-border-opacity));
        }
        .focus-within\:bg-blue-700:focus-within {
          --tw-bg-opacity: 1;
          background-color: rgb(29 78 216 / var(--tw-bg-opacity));
        }
        .hover\:border-blue-600:hover {
          --tw-border-opacity: 1;
          border-color: rgb(37 99 235 / var(--tw-border-opacity));
        }
        .hover\:border-blue-700:hover {
          --tw-border-opacity: 1;
          border-color: rgb(29 78 216 / var(--tw-border-opacity));
        }
        .hover\:border-sky-500:hover {
          --tw-border-opacity: 1;
          border-color: rgb(14 165 233 / var(--tw-border-opacity));
        }
        .hover\:bg-blue-100:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(219 234 254 / var(--tw-bg-opacity));
        }
        .hover\:bg-blue-700:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(29 78 216 / var(--tw-bg-opacity));
        }
        .hover\:bg-gray-200:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(229 231 235 / var(--tw-bg-opacity));
        }
        .hover\:bg-gray-50:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(249 250 251 / var(--tw-bg-opacity));
        }
        .hover\:bg-gray-700:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(55 65 81 / var(--tw-bg-opacity));
        }
        .hover\:bg-gray-800:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(31 41 55 / var(--tw-bg-opacity));
        }
        .hover\:bg-green-400:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(47 107 246 / var(--tw-bg-opacity));
        }
        .hover\:bg-green-500:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(47 107 246 / var(--tw-bg-opacity));
        }
        .hover\:bg-indigo-500:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(99 102 241 / var(--tw-bg-opacity));
        }
        .hover\:bg-transparent:hover {
          background-color: transparent;
        }
        .hover\:bg-white:hover {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        }
        .hover\:bg-gradient-to-r:hover {
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }
        .hover\:from-gray-50:hover {
          --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .hover\:from-green-500:hover {
          --tw-gradient-from: #22c55e var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(47 107 246 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .hover\:from-purple-600:hover {
          --tw-gradient-from: #9333ea var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .hover\:to-green-400:hover {
          --tw-gradient-to: #4ade80 var(--tw-gradient-to-position);
        }
        .hover\:to-pink-600:hover {
          --tw-gradient-to: #db2777 var(--tw-gradient-to-position);
        }
        .hover\:to-white:hover {
          --tw-gradient-to: #fff var(--tw-gradient-to-position);
        }
        .hover\:pl-10:hover {
          padding-left: 2.5rem;
        }
        .hover\:pr-6:hover {
          padding-right: 1.5rem;
        }
        .hover\:text-black:hover {
          --tw-text-opacity: 1;
          color: rgb(0 0 0 / var(--tw-text-opacity));
        }
        .hover\:text-blue-600:hover {
          --tw-text-opacity: 1;
          color: rgb(37 99 235 / var(--tw-text-opacity));
        }
        .hover\:text-gray-600:hover {
          --tw-text-opacity: 1;
          color: rgb(75 85 99 / var(--tw-text-opacity));
        }
        .hover\:text-sky-500:hover {
          --tw-text-opacity: 1;
          color: rgb(14 165 233 / var(--tw-text-opacity));
        }
        .hover\:text-white:hover {
          --tw-text-opacity: 1;
          color: rgb(255 255 255 / var(--tw-text-opacity));
        }
        .hover\:ring-1:hover {
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
            var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
            calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
            var(--tw-shadow, 0 0 #0000);
        }
        .hover\:ring-2:hover {
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
            var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
            calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
            var(--tw-shadow, 0 0 #0000);
        }
        .hover\:ring-green-400:hover {
          --tw-ring-opacity: 1;
          --tw-ring-color: rgb(47 107 246 / var(--tw-ring-opacity));
        }
        .hover\:ring-purple-500:hover {
          --tw-ring-opacity: 1;
          --tw-ring-color: rgb(168 85 247 / var(--tw-ring-opacity));
        }
        .hover\:ring-offset-2:hover {
          --tw-ring-offset-width: 2px;
        }
        .hover\:ring-offset-indigo-500:hover {
          --tw-ring-offset-color: #6366f1;
        }
        .hover\:delay-\[\.5s\]:hover {
          transition-delay: 0.5s;
        }
        .before\:hover\:w-full:hover::before {
          content: var(--tw-content);
          width: 100%;
        }
        .after\:hover\:h-full:hover::after {
          content: var(--tw-content);
          height: 100%;
        }
        .after\:hover\:delay-\[0\.4s\]:hover::after {
          content: var(--tw-content);
          transition-delay: 0.4s;
        }
        .focus\:no-underline:focus {
          text-decoration-line: none;
        }
        .focus\:shadow-none:focus {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .focus\:outline-none:focus {
          outline: transparent solid 2px;
          outline-offset: 2px;
        }
        .focus\:ring-2:focus {
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
            var(--tw-ring-offset-width) var(--tw-ring-offset-color);
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
            calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
            var(--tw-shadow, 0 0 #0000);
        }
        .focus\:ring-blue-500:focus {
          --tw-ring-opacity: 1;
          --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
        }
        .focus\:ring-indigo-600:focus {
          --tw-ring-opacity: 1;
          --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity));
        }
        .focus\:ring-offset-2:focus {
          --tw-ring-offset-width: 2px;
        }
        .active\:border-purple-600:active {
          --tw-border-opacity: 1;
          border-color: rgb(147 51 234 / var(--tw-border-opacity));
        }
        .active\:to-white:active {
          --tw-gradient-to: #fff var(--tw-gradient-to-position);
        }
        .active\:shadow-none:active {
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
        .group:hover .group-hover\:top-0 {
          top: 0;
        }
        .group:hover .group-hover\:-mr-4 {
          margin-right: -1rem;
        }
        .group:hover .group-hover\:-mt-4 {
          margin-top: -1rem;
        }
        .group:hover .group-hover\:mb-0 {
          margin-bottom: 0;
        }
        .group:hover .group-hover\:mb-12 {
          margin-bottom: 3rem;
        }
        .group:hover .group-hover\:mb-32 {
          margin-bottom: 8rem;
        }
        .group:hover .group-hover\:ml-0 {
          margin-left: 0;
        }
        .group:hover .group-hover\:mr-0 {
          margin-right: 0;
        }
        .group:hover .group-hover\:mt-0 {
          margin-top: 0;
        }
        .group:hover .group-hover\:h-32 {
          height: 8rem;
        }
        .group:hover .group-hover\:h-56 {
          height: 14rem;
        }
        .group:hover .group-hover\:h-64 {
          height: 16rem;
        }
        .group:hover .group-hover\:h-full {
          height: 100%;
        }
        .group:hover .group-hover\:w-32 {
          width: 8rem;
        }
        .group:hover .group-hover\:w-56 {
          width: 14rem;
        }
        .group:hover .group-hover\:w-full {
          width: 100%;
        }
        .group:hover .group-hover\:-translate-x-0 {
          --tw-translate-x: -0px;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:-translate-x-40 {
          --tw-translate-x: -10rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:-translate-x-8 {
          --tw-translate-x: -2rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:-translate-y-0 {
          --tw-translate-y: -0px;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:-translate-y-32 {
          --tw-translate-y: -8rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:translate-x-0 {
          --tw-translate-x: 0px;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:translate-x-12 {
          --tw-translate-x: 3rem;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:translate-x-full {
          --tw-translate-x: 100%;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:translate-y-0 {
          --tw-translate-y: 0px;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:-rotate-180 {
          --tw-rotate: -180deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:rotate-180 {
          --tw-rotate: 180deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:rotate-90 {
          --tw-rotate: 90deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:-skew-x-12 {
          --tw-skew-x: -12deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:skew-x-12 {
          --tw-skew-x: 12deg;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
        .group:hover .group-hover\:border-\[25px\] {
          border-width: 25px;
        }
        .group:hover .group-hover\:bg-black {
          --tw-bg-opacity: 1;
          background-color: rgb(0 0 0 / var(--tw-bg-opacity));
        }
        .group:hover .group-hover\:bg-purple-500 {
          --tw-bg-opacity: 1;
          background-color: rgb(168 85 247 / var(--tw-bg-opacity));
        }
        .group:hover .group-hover\:bg-purple-600 {
          --tw-bg-opacity: 1;
          background-color: rgb(147 51 234 / var(--tw-bg-opacity));
        }
        .group:hover .group-hover\:bg-purple-700 {
          --tw-bg-opacity: 1;
          background-color: rgb(126 34 206 / var(--tw-bg-opacity));
        }
        .group:hover .group-hover\:bg-opacity-0 {
          --tw-bg-opacity: 0;
        }
        .group:hover .group-hover\:from-\[\#ff00c6\] {
          --tw-gradient-from: #ff00c6 var(--tw-gradient-from-position);
          --tw-gradient-to: rgb(255 0 198 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        }
        .group:hover .group-hover\:via-\[\#ff5478\] {
          --tw-gradient-to: rgb(255 84 120 / 0) var(--tw-gradient-to-position);
          --tw-gradient-stops: var(--tw-gradient-from),
            #ff5478 var(--tw-gradient-via-position), var(--tw-gradient-to);
        }
        .group:hover .group-hover\:to-\[\#ff8a05\] {
          --tw-gradient-to: #ff8a05 var(--tw-gradient-to-position);
        }
        .group:hover .group-hover\:text-blue-600 {
          --tw-text-opacity: 1;
          color: rgb(37 99 235 / var(--tw-text-opacity));
        }
        .group:hover .group-hover\:text-gray-200 {
          --tw-text-opacity: 1;
          color: rgb(229 231 235 / var(--tw-text-opacity));
        }
        .group:hover .group-hover\:text-white {
          --tw-text-opacity: 1;
          color: rgb(255 255 255 / var(--tw-text-opacity));
        }
        .group:hover .group-hover\:opacity-100 {
          opacity: 1;
        }
        .group:hover .group-hover\:blur-sm {
          --tw-blur: blur(4px);
          filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
            var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
            var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        }
        .group:active .group-active\:bg-transparent {
          background-color: transparent;
        }
        .group:active .group-active\:opacity-0 {
          opacity: 0;
        }
        @media (min-width: 640px) {
          .sm\:mb-0 {
            margin-bottom: 0;
          }
          .sm\:w-auto {
            width: auto;
          }
          .sm\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 768px) {
          .md\:mx-0 {
            margin-left: 0;
            margin-right: 0;
          }
          .md\:w-auto {
            width: auto;
          }
          .md\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .lg\:flex {
            display: flex;
          }
        }

        button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}

export default Button;
