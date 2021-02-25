import React from "react";
import "./index.css";



export function Header(){

	return (
		<>

<header className="header-outer">
  <div className="header-inner responsive-wrapper">
    <div className="header-logo">
      <img src="https://assets.codepen.io/285131/acme-2.svg" />
    </div>
    <nav className="header-navigation">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact Us</a>
      <button>Menu</button>
    </nav>
  </div>
</header>
<main className="main">
  <div className="main-content responsive-wrapper">
    <article className="widget">
      <h2>How does it work without JS? 🤯</h2>
      <p>This sticky header consists of two elements: an <strong>outer</strong> and an <strong>inner</strong> container. The outer container is taller than the inner — and the inner is centered vertically.</p>
      <p>By utilizing the <code>position: sticky</code> property <strong>twice</strong>, both on the header's <strong>outer container</strong> and <strong>inner container</strong> the outer container will stick to the <code>body</code>, while the inner container will stick to the outer container.</p>
      <p>Note that the outer container has a negative <code>top</code> value equal to the height difference between the two containers. This causes the outer container to stick <strong>above</strong> the <code>body</code>, making the inner container stick to the "ceiling" on scroll.
      </p>
    </article>
  </div>
</main>
</>
	)
}
