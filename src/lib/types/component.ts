import { LinkListComponentsEnum } from "../content/LinkListEnum";
import { ComponentFormatEnum } from "./componentFormat";

export interface Component {
  type: LinkListComponentsEnum;
  format: ComponentFormatEnum;
}
