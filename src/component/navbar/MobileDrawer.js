import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { useRouter } from "next/navigation";

const navData = [
  { link: "/", title: "Home" },
  { link: "/about-us", title: "About Us" },
  { link: "/license/liquor", title: "Apply For License" },
  { link: "/our-team", title: "Administrators Office" },
  { link: "/visit-kma", title: "Visit KMA" },
  { link: "/contact-us", title: "Contact Us" },
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
      <nav className="menu">
        <ul>
          {navData.map((x) => {
            return (
              <li key={x?.title} onClick={() => gox(x)}>
                <a>{x?.title}</a>
                <br />
              </li>
            );
          })}
        </ul>
      </nav>

      <style jsx>{`
        .menu {
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          max-width: calc(100vw - 100px);
          background: red;
          transform: translateX(-100%);
          will-change: transform;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4434343;
          height: 100vh;
        }

        .menu ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 15px;
        }

        .menu li a {
          color: #fafafa;
          display: block;
          transform-origin: -20px 50%;
          font-weight: bold;
          font-size: 27px;
          line-height: 48px;
          padding: 0 10px;
          will-change: transform, opacity, filter;
          text-decoration: none;
          text-align: left;
          cursor: pointer;
        }

        .menu ul,
        .menu li {
          list-style: none;
          margin: 0;
        }

        .button {
          outline: none;
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: pointer;

          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: red;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <>
      <button onClick={toggle} className="button">
        <svg width="23" height="18" viewBox="0 0 23 18">
          <Path
            d="M 2 2.5 L 20 2.5"
            className="top"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
          <Path
            d="M 2 16.346 L 20 16.346"
            className="bottom"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
      <style jsx>{`
        .button {
          outline: none;
          border: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: pointer;

          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: red;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button path {
          fill: #fff;
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
      <div ref={scope} style={{ zIndex: 10000 }}>
        <Menu close={() => setIsOpen(false)} />
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>

      <style jsx>{`
        .refresh {
          padding: 5px;
          position: absolute;
          border: 1px dottedred;
          border-radius: 5px;
          width: 20px;
          height: 20px;
          top: 10px;
          right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .refresh path {
          fill: red;
        }
      `}</style>
    </>
  );
}
