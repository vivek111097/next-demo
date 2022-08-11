import React from "react";
import { header } from "../../Data/data";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link href="/">
            <a>Arsha</a>
          </Link>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            {header.map((link) => [
              link.drpdwn && (
                <li className="dropdown">
                  <Link href="#">
                    <a>
                      <span>{link.drpdwn_link}</span>{" "}
                      <i className="bi bi-chevron-down" />
                    </a>
                  </Link>

                  <ul>
                    {link.drpdwn.map((drpdown) => [
                      <li>
                        <Link href="/">
                          <a>{drpdown}</a>
                        </Link>
                      </li>,
                    ])}
                  </ul>
                </li>
              ),

              <li>
                <Link
                href={{pathname:link.path}}
                  className="nav-link scrollto"
                >
                  <a>{link.link}</a>
                </Link>
              </li>,

              link.btn_link && (
                <li>
                  <Link href="#">
                    <a className="getstarted scrollto">{link.btn_link}</a>
                  </Link>
                </li>
              ),
            ])}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
