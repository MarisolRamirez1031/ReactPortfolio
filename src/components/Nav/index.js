import React from "react";

function Nav() {
    const categories = [
        {
          name: "Portfolio",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "Resume", description: "Portraits of people in my life" },
      ];

      function categorySelected(name) {
        console.log(`${name} clicked`)
      }

    return (
<header>
  <h2>
    <a data-testid="link" href="/">
      <span role="img" aria-label="sunflower"> 🌻</span> Marisol Ramirez
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
      <a data-testid="about" href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={() => categorySelected(category.name)}>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
</header>
    )
}

export default Nav;