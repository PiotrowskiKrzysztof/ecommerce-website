import * as Logo from "public/assets/svg";

import * as Styled from "./styles";

const size = "4em";
const Icons = () => (
  <Styled.IconList>
    <li>
      <Logo.Twitter font-size={size} />
      <br />
      <a>Twitter</a>
    </li>
    <li>
      <Logo.Youtube font-size={size} />
      <br />
      <a>Youtube</a>
    </li>
    <li>
      <Logo.Instagram font-size={size} />
      <br />
      <a>Instagram</a>
    </li>
    <li>
      <Logo.Play font-size={size} />
      <br />
      <a>Play</a>
    </li>
    <li>
      <Logo.ArrowShort font-size={size} />
      <br />
      <a>ArrowShort</a>
    </li>
    <li>
      <Logo.ArrowLong font-size={size} />
      <br />
      <a>ArrowLong</a>
    </li>
  </Styled.IconList>
);

export default Icons;
