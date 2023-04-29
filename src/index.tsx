import * as React from 'react'
import style from './index.module.css'

interface Props {
  children:
    | (string | React.ReactElement | Element)[]
    | (string | React.ReactElement | Element)
  className?: string
  color?: string
  fadeInSpeed?: number
}

export const TelescopicText = ({
  children,
  className,
  color = 'aqua',
  fadeInSpeed = 2000
}: Props) => {
  const [showChildren, setShowChildren] = React.useState(false)

  const childrenArray = React.Children.toArray(children)

  const hasChildrenObject = childrenArray.some(
    (child) => typeof child === 'object'
  )

  function handleTextClick() {
    if (hasChildrenObject) {
      setShowChildren(true)
    }
  }

  return (
    <span className={className}>
      {' '}
      {childrenArray.map(
        (child: React.ReactChild, index: number): React.ReactElement => {
          if (typeof child === 'string' && !showChildren) {
            return (
              <span
                key={index}
                onClick={() => handleTextClick()}
                style={{
                  animationDuration: `${fadeInSpeed}ms`,
                  backgroundColor: hasChildrenObject ? color : 'none'
                }}
                className={
                  hasChildrenObject ? style.telescopicText : style.text
                }
              >
                {child}
              </span>
            )
          } else if (typeof child === 'object' && showChildren) {
            return React.cloneElement(child, { color })
          } else {
            return <React.Fragment key={index} />
          }
        }
      )}{' '}
    </span>
  )
}
