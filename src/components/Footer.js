import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-classic-blue has-text-white-ter">
        
        <div className="content has-text-centered has-background-classic-blue has-text-white-ter">
          <div className="container has-background-classic-blue color-white">
            <div 
                className="columns"
                style={{
                    marginRight: '0rem',
                }}
            >
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item footer-item">
                        ホーム
                      </Link>
                    </li>
                    
                    <li>
                      <a
                        className="navbar-item footer-item"
                        href="/kori"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        天然氷について
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item footer-item" to="/etanbetsu">
                        江丹別について
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item footer-item" to="/contact">
                        ご予約・お問い合わせ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social margin-top-2">
                <a title="facebook" href="#">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="#">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="#">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
