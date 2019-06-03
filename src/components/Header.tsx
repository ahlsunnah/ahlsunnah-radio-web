import React from 'react'
import {Link} from 'gatsby'

interface IProps {
  siteTitle: string
}

const Header = ({siteTitle}: IProps): JSX.Element => (
  <header>
    <Link to="/">{siteTitle}</Link>
  </header>
)

export default Header
