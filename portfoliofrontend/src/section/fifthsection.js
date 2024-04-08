import React from "react";
import { Card } from "react-bootstrap";
import "./section.css";
import "./carousel.css";

function FifthSection() {
  const images = [
    { url: "/Medium.jpg", link: "https://medium.com/@appsec.andrewlee" },
    { url: "/IOSDEV.jpg", link: "https://github.com/appsecandrewlee/Level-Up" },
    {
      url: "/improving.jpg",
      link: "https://www.google.com.au/books/edition/Atomic_Habits/B3PgDwAAQBAJ?hl=en&gbpv=0",
    },
    {
      url: "/kalinew.png",
      link: "https://www.kali.org/blog/",
    },
    {
      url: "/oracle.jpg",
      link: "https://blogs.oracle.com/",
    },
    {
      url: "/code.jpeg",
      link: "https://github.com/jnguyen095/clean-code/blob/master/Clean.Code.A.Handbook.of.Agile.Software.Craftsmanship.pdf",
    },
    {
      url: "/stack.jpg",
      link: "https://stackoverflow.com/users/23887012/andrew-lee",
    },
    {
      url: "/pragmatic.jpeg",
      link: "https://www.cin.ufpe.br/~cavmj/104The%20Pragmatic%20Programmer,%20From%20Journeyman%20To%20Master%20-%20Andrew%20Hunt,%20David%20Thomas%20-%20Addison%20Wesley%20-%201999.pdf",
    },
    { url: "/medium.jpg", link: "https://medium.com/@appsec.andrewlee" },
    { url: "/IOS.jpg", link: "https://github.com/appsecandrewlee/Level-Up" },
    {
      url: "/improvement.jpg",
      link: "https://www.google.com.au/books/edition/Atomic_Habits/B3PgDwAAQBAJ?hl=en&gbpv=0",
    },
    {
      url: "/Kali.png",
      link: "https://www.kali.org/blog/",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <a href={image.link} key={index}>
            <Card className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL + image.url})`,
                }}
              >
                <div className="view-text">View</div>
              </div>
            </Card>
          </a>
        ))}
      </div>
      <div style={{ marginTop: "3vh" }}></div>
    </div>
  );
}

export default FifthSection;
