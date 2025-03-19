import React, { useEffect } from "react";
import Images from "./images";
import ProjectImages from "../common/projectImages";
import "./index.scss";

const Work = () => {
  return (
    <>
      <div className="work" id="work">
        <header className="work__header">Work</header>

        <ProjectImages
          dataDisplacementMap={Images.DisplacementEffect}
          dataImage={Images.Aeropage}
          link="https://builder.aeropage.io/"
          id="aeropage"
          text={null}
          name="Aeropage.io"
        />

        <p className="work__description">
          During my 2 years of commercial experience, I was primarily
          responsible for developing and maintaining tools used by over 1.000
          users, which were integrated with the Airtable database. Each tool
          served a different purpose, but the shared principle was to provide
          dynamic generation based on values provided from the database.
        </p>
        <ul className="work__list">
          <li>
            Developed and optimized tools that dynamically generated HTML,
            images, PDFs, QR codes, redirect links and more based on
            user-provided values and Airtable data
          </li>
          <li>
            Focused on performance optimization to ensure fast and reliable tool
            operation, even with high user demand
          </li>
          <li>
            Conducted thorough testing to ensure each generated output was
            accurate, reliable, and functioned as intended
          </li>
          <li>
            Continuously improved tools based on user feedback, adding new
            features and fixing bugs to enhance overall user experience
          </li>
          <li>
            Created and maintained a popular WordPress plugin, downloaded over
            70 times, which integrated Airtable functionality into WordPress
            sites
          </li>
        </ul>
      </div>
    </>
  );
};

export default Work;
