import React from 'react'

const Com3 = () => {
  return (
    <div className='Container'> 
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
  {/* <a className="navbar-brand" href="#">Navbar</a> */}
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
      </ul>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi incidunt, aliquam, dolore atque autem quo eaque saepe soluta nulla at ad? Consequuntur velit atque cupiditate quidem! Corporis vero provident pariatur!</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur error in architecto magni eius consequatur ipsam saepe id soluta alias incidunt explicabo sit rerum quis obcaecati, delectus repellendus quod.</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>Lorem ipsum dolor sit amet, ste nisi obcaecati necessitatibus fugit consequuntur a. commodi repellendus sed.</p>
  <h4 id="scrollspyHeading4">Fourth heading</h4>
  <p>Lorem, ipsum dolor tates in fugit? Ipsa doloribus at expedita ad cumque nisi cum recusandae sit, totam temporibus nesciunt nulla esse facilis magni!
  </p>
  <h4 id="scrollspyHeading5">Fifth heading</h4>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolor voluptas numquam cupiditate aperiam dolorum rem, tempora ullam sint harum incidunt eos officiis dolores esse atque repudiandae veritatis? Vero, ipsum!</p>
</div>
    </div>
  )
}

export default Com3
