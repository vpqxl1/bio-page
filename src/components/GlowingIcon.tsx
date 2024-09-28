'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function GlowingIcon({
  icon,
  link,
  tooltip,
}: {
  icon: IconProp
  link?: string
  tooltip?: string
}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleRedirect = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault()
    if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <FontAwesomeIcon
        className="backdrop-blur-sm p-2 bg-white bg-opacity-5 rounded-xl border border-opacity-5 border-white hover:border-opacity-100 transition-all cursor-pointer"
        icon={icon}
        onClick={handleRedirect}
      />
      {isTooltipVisible && tooltip && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-white bg-opacity-20 text-white text-sm rounded-md shadow-lg">
          {tooltip}
        </div>
      )}
    </div>
  )
}
