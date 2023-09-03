import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './makeStyledIcon';

export const GearshapeIcon = ({ color, ...restProps }: IconProps) => {
  return (
    <Svg viewBox="0 0 28 28" fill="none" {...restProps}>
      <Path
        d="M13.104 23.208h1.784c.73 0 1.3-.457 1.476-1.16l.352-1.538.228-.088 1.345.835c.615.387 1.345.281 1.863-.238l1.23-1.23c.528-.527.616-1.248.23-1.854l-.836-1.345.088-.211 1.538-.36a1.482 1.482 0 001.152-1.477V12.81c0-.729-.448-1.3-1.152-1.476l-1.529-.37-.088-.228.835-1.336c.387-.606.299-1.327-.228-1.863l-1.23-1.23c-.51-.519-1.24-.616-1.855-.238l-1.345.827-.246-.088-.352-1.547c-.175-.703-.747-1.152-1.476-1.152h-1.784c-.739 0-1.31.449-1.477 1.152l-.352 1.547-.246.088-1.344-.827c-.624-.378-1.345-.28-1.855.238l-1.24 1.23c-.518.536-.614 1.257-.228 1.863l.835 1.336-.088.229-1.52.369c-.703.176-1.152.747-1.152 1.476v1.732c0 .73.458 1.3 1.152 1.477l1.538.36.08.21-.836 1.346c-.387.606-.29 1.327.229 1.854l1.239 1.23c.51.52 1.24.625 1.854.238l1.345-.835.237.088.352 1.538c.167.703.738 1.16 1.476 1.16zm.228-1.617c-.15 0-.229-.062-.246-.194l-.527-2.162a5.136 5.136 0 01-1.52-.633l-1.9 1.17c-.114.07-.22.061-.325-.044l-.922-.923c-.106-.097-.106-.203-.036-.317l1.17-1.898a5.658 5.658 0 01-.607-1.503l-2.171-.519c-.132-.017-.202-.096-.202-.246v-1.3c0-.159.061-.22.202-.255l2.162-.51c.132-.589.387-1.134.607-1.53l-1.17-1.88c-.07-.123-.07-.229.027-.334l.932-.914c.105-.097.202-.115.334-.036l1.88 1.152a5.804 5.804 0 011.547-.633l.519-2.162c.018-.132.097-.202.246-.202h1.327c.15 0 .22.061.246.202l.528 2.17c.57.141 1.09.379 1.529.625l1.88-1.152c.133-.07.23-.061.335.044l.931.914c.106.097.106.203.027.326l-1.16 1.88c.21.396.474.941.606 1.53l2.162.51c.14.035.194.096.194.255v1.3c0 .15-.062.229-.194.246l-2.17.519a5.55 5.55 0 01-.616 1.503l1.169 1.89c.07.122.07.22-.035.316l-.923.931c-.105.106-.211.115-.325.044l-1.89-1.169c-.44.273-.94.493-1.52.633l-.528 2.163c-.026.131-.096.193-.246.193h-1.327zM14 16.994a3.348 3.348 0 003.331-3.34c0-1.819-1.503-3.322-3.331-3.322-1.837 0-3.349 1.503-3.349 3.322 0 1.837 1.512 3.34 3.349 3.34zm0-1.52a1.823 1.823 0 01-1.82-1.82c0-.984.827-1.802 1.82-1.802.976 0 1.793.818 1.793 1.802 0 .994-.817 1.82-1.793 1.82z"
        fill={color}
      />
    </Svg>
  );
};
