import React from 'react'

import Link from './Link'

const FeeCharges = () => {
  const getUrl = () => {
    return `https://ug.fuwportal.edu.ng/charges.php`
  }

  return <Link url={getUrl()} title={'Click here to view fee charges'} />
}

export default FeeCharges

export const Login = () => {
  const getUrl = () => {
    return `https://ug.fuwportal.edu.ng/putme_login.php`
  }

  return (
    <Link url={getUrl()} title={'Click the link for Pre-admission login '} />
  )
}
