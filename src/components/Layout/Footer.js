import React from 'react'
import styles from './Footer.less'
import { config } from '../../utils'

const Footer = () => <div className={styles.footer}>
  <div>{config.ContactsText}</div>
  <div>{config.footerText}</div>
</div>

export default Footer
