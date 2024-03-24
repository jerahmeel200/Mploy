import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./MobileDrawer.module.css";

const navData = [
  { link: "/", title: "Home" },
  { link: "/about-us", title: "About us" },
  { link: "/how-it-works", title: "How it works" },
  { link: "/contact-us", title: "Contact Us" },
  {
    link: "https://mploy-dashboard.vercel.app/auth/login",
    title: "Login",
    topPadding: true,
  },
];

function Menu({ close = () => null }) {
  const router = useRouter();

  const gox = (x) => {
    console.log({ x });
    router.push(x?.link);
    // window.location = x?.link;
    close();
  };

  return (
    <>
      <nav className={styles.menu}>
        <ul>
          <img src="/logo_white_transparent.png" />

          {navData.map((x) => {
            return (
              <li
                key={x?.title}
                onClick={() => gox(x)}
                style={{ paddingTop: x?.topPadding ? 30 : undefined }}>
                <a>{x?.title}</a>
                <br />
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="4"
    stroke="#2f6bf6"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <>
      <button onClick={toggle} className={styles.button}>
        <svg width="23" height="18" viewBox="0 0 23 18">
          <Path
            d="M 2 2.5 L 20 2.5"
            className={"top"}
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path d="M 2 9.423 L 20 9.423" opacity="1" className={"middle"} />
          <Path
            d="M 2 16.346 L 20 16.346"
            className={"bottom"}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
      <style jsx>{`
        .button {
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: pointer;

          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff00;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button path {
          fill: #2f6bf6;
        }
      `}</style>
    </>
  );
};

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  return (
    <>
      <div
        ref={scope}
        style={{ zIndex: 10000 }}
        className={styles.mobileContainer}>
        <Menu close={() => setIsOpen(false)} />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
    </>
  );
}
