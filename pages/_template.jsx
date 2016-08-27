import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'

const { rhythm, fontSizeToPx } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const productsActive = includes(this.props.location.pathname, '/products/')
    const articlesActive = includes(this.props.location.pathname, '/articles/')
    const openSourceActive = includes(this.props.location.pathname, '/open-source/')

    return (
      <div>
        <div
          style={{
            background: colors.bg,
            color: colors.fg,
            marginBottom: rhythm(1.5),
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingLeft: rhythm(3/4),
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(3/4)} 0`,
              }}
            >
              <Span
                columns={4}
                style={{
                  height: 24, // Ugly hack. How better to constrain height of div?
                }}
              >
                <Link
                  to={prefixLink('/')}
                  style={{
                    textDecoration: 'none',
                    color: colors.fg,
                    fontSize: fontSizeToPx('25.5px').fontSize,
                  }}
                >
                  {config.siteTitle}
                </Link>
              </Span>
              <Span columns={8} last>
                <Link
                  to={prefixLink('/open-source/')}
                  style={{
                    float: 'right',
                    color: colors.fg,
                    textDecoration: 'none',
                    background: openSourceActive ? activeColors.bg : colors.bg,
                    color: openSourceActive ? activeColors.fg : colors.fg,
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                  href="https://github.com/gatsbyjs/gatsby"
                >
                  Open Source
                </Link>
                <Link
                  to={prefixLink('/products/')}
                  style={{
                    background: productsActive ? activeColors.bg : colors.bg,
                    color: productsActive ? activeColors.fg : colors.fg,
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                >
                  Products
                </Link>
                <Link
                  to={prefixLink('/articles/')}
                  style={{
                    background: articlesActive ? activeColors.bg : colors.bg,
                    color: articlesActive ? activeColors.fg : colors.fg,
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                >
                  Articles
                </Link>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
