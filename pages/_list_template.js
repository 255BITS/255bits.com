import React from 'react'
import { Link } from 'react-router'
import Breakpoint from 'components/Breakpoint'
import find from 'lodash/find'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import typography from 'utils/typography'
const { rhythm } = typography
import _ from 'lodash'

module.exports = (prefix) => {
return React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  handleTopicChange (e) {
    return this.context.router.push(e.target.value)
  },

  render () {
    var childPages = this.props.route.pages;
    childPages = _.reject(childPages, (x) => { 
      console.log(x.requirePath, "--------", x.requirePath.match(prefix) == null)
      return x.requirePath.match(prefix) == null;
    });
    childPages = _.sortBy(childPages, (page) => {
      return page.data.date;
    });
    childPages = _.map(childPages, (page) => {
      if(!page) {
        return { 
          title: "missing " + p,
          path: "/404"
        }
      }
      return {
        title: page.data.title,
        path: page.path,
      }
    });
    console.log("CHILD PAGES", childPages);
    const docOptions = childPages.map((child) =>
      <option
        key={prefixLink(child.path)}
        value={prefixLink(child.path)}
      >
        {child.title}
      </option>

    )
    const docPages = childPages.map((child) => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      let len =  prefixLink(child.path).split("/").length 
      const isShown = len >3 && len < 5

      return (
        <li
          key={child.path}
          style={{
            marginBottom: rhythm(1/2),
          }}
        >
          <Link
            to={prefixLink(child.path)}
            style={{
              textDecoration: 'none',
            }}
          >
            {isShown ? (isActive ? <strong>{child.title}</strong> : child.title) : null}
          </Link>
        </li>
      )
    })
    return (
      <div>
        <Breakpoint
          mobile
        >
          <div
            style={{
              overflowY: 'auto',
              paddingRight: `calc(${rhythm(1/2)} - 1px)`,
              position: 'absolute',
              width: `calc(${rhythm(8)} - 1px)`,
              borderRight: '1px solid lightgrey',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                marginLeft: 0,
                marginTop: rhythm(1/2),
              }}
            >
              {docPages}
            </ul>
          </div>
          <div
            style={{
              padding: `0 ${rhythm(1)}`,
              paddingLeft: `calc(${rhythm(8)} + ${rhythm(1)})`,
            }}
          >
            {this.props.children}
          </div>
        </Breakpoint>
        <Breakpoint>
          <strong>Topics:</strong>
          {' '}
          <select
            defaultValue={this.props.location.pathname}
            onChange={this.handleTopicChange}
          >
            {docOptions}
          </select>
          <br />
          <br />
          {this.props.children}
        </Breakpoint>
      </div>
    )
  }
})
}
