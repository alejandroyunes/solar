import stylex from "@stylexjs/stylex"
import { s } from "./SearchSvg"


export default function Facebook() {
  return (
    <svg
      {...stylex.props(s.svgFill)}
      height={'50px'} width={'50px'}
      version="1.1" id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-143 145 512 512">
      <path d="M-143,145v512h512V145H-143z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7
      c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"/>
    </svg>
  )
}
