import stylex from "@stylexjs/stylex"
import { s } from "./SearchSvg"

export default function Youtube() {
  return (
    <svg {...stylex.props(s.svgFill)}
      height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      viewBox="-143 145 512 512">
      <g>
        <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	" />
        <path d="M-143,145v512h512V145H-143z M241,446.8L241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5
        c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1V446.8z"/>
      </g>
    </svg>
  )
}