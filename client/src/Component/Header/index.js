import React from "react"
import style from "./style,module.css"
import cn from 'classnames'
export function Header(){
	return (
		<header className={cn(style.header, style.outer)}>
  <div className={cn(style.header, style.inner, style.responsive, style.wrapper)}>
		<div className={cn(style.header, style.logo)}><img src="https://assets.codepen.io/285131/acme-2.svg" /></div>
		<nav className={cn(style.header, style.navigation)}>
		  <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact Us</a>
      <button>Menu</button>
		</nav>
	</div>
			
		</header>
	)
}
