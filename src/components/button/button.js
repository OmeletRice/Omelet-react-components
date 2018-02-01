import * as React from 'react'
import classNames from 'classnames'

class Button extends React.Component {
  static defaultProps = {
    prefixClass: 'om-btn',
    loading: false
  }

  constructor (props) {
    super(props)
    this.state = {
      loading: props.loading,
      clicked: false
    }
  }

  // methods
  handleClick = (evt) => {
    this.setState({ clicked: true })
    console.log(evt)

    const onClick = this.props.onClick
    if (onClick) {
      onClick(evt)
    }
  }

  // component lifecycle
  componentDidMount () {
    console.log('componentDidMount')
  }

  componentWillReceiveProps (nextProps, ...others) {
    console.log('componentWillReceiveProps')
    // const currentLoading = this.state.loading
    // const nextLoading = nextProps.loading

    // if (nextLoading) {
    // } else {
    //   this.setState({
    //     loading: nextLoading
    //   })
    // }
  }

  render () {
    const {
      type, size, className, htmlType, icon, prefixClass, children, ...others
    } = this.props

    const {
      loading, clicked
    } = this.state

    const ComponentProps = others.href ? 'a' : 'button'

    const classes = classNames(className, {
      className,
      [`${prefixClass}-${type}`]: type,
      [`${prefixClass}-${size}`]: size,
      [`${prefixClass}-icon-${icon}`]: icon,
      [`${prefixClass}-icon-loading`]: loading,
      [`${prefixClass}-clicked`]: clicked
    })

    const iconNode = <span className="icon" />

    return (
      <ComponentProps
        {...others}
        type={others.href ? undefined : (htmlType || 'button')}
        className={classes}
        onClick={this.handleClick}
      >
        {iconNode}{children}
      </ComponentProps>
    )
  }
}

export default Button
