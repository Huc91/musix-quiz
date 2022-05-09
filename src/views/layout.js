import * as React from "react"

export default function Layout(props) {
  
  return (
      <>
      <nav>
        <ul>
            <li>home</li>
        </ul>      
      </nav>
      {props.children}
    </>
  )
}