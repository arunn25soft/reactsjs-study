import React from 'react';

const Header = (props) => (
    <header className="form-background bx--global-header bx--cloud-header top-0">
    <div className="bx--cloud-header-brand-container display">
      <span className="bx--cloud-header__app-menu header-title">
         {props.header_title}
      </span>
      <span>
        <a href="" className="title-text-padding bx--global-header__title--logo bx--cloud-header-brand" >
          <h4 className="bx--cloud-header-brand__text">
          </h4>
        </a>
      </span>
    </div>
  </header>
  )

  export default Header;