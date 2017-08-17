import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PinShadowFilter from './filters/PinShadowFilter';
import DraggedNodeShadowFilter from './filters/DraggedNodeShadowFilter';

const PatchSVG = ({ children, grab, onMouseDown, onMouseMove, onMouseUp, svgRef }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn('PatchSVG', { grab })}
    width="100%"
    height="100%"
    onMouseDown={onMouseDown}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}
    ref={svgRef}
  >
    <defs>
      <PinShadowFilter />
      <DraggedNodeShadowFilter />
    </defs>
    {children}
  </svg>
);

PatchSVG.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  grab: PropTypes.bool,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  svgRef: PropTypes.func,
};

export default PatchSVG;
