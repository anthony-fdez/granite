import { HOVER_CARD_DEFAULT_PROPS } from "./../../components/HoverCard/HoverCard.props";
import { DRAWER_DEFAULT_PROPS } from "./../../components/Drawer/Drawer.props";
import { DEFAULT_COLORS } from "./colors";
import { BACKDROP_DEFAULT_PROPS } from "../../components/Backdrop/Backdrop.props";
import { CLOSE_BUTTON_DEFAULT_PROPS } from "../../components/CloseButton/CloseButton.props";
import { DIVIDER_DEFAULT_PROPS } from "../../components/Divider/Divider.props";
import { BUTTON_DEFAULT_PROPS } from "../../components/Button/Button.props";
import { IStyles } from "../../components/ThemeProvider/Interfaces/IStyles";
import { MODAL_DEFAULT_PROPS } from "../../components/Modal/Modal.props";
import { DIALOG_DEFAULT_PROPS } from "../../components/Dialog/Dialog.props";
import { TEXT_INPUT_DEFAULT_PROPS } from "../../components/TextInput/TextInput.props";
import { ACCORDION_DEFAULT_PROPS } from "../../components/Accordion/Accordion.props";
import { LOADING_OVERLAY_DEFAULT_PROPS } from "../../components/LoadingOverlay/LoadingOverlay.props";
import { TOOLTIP_DEFAULT_PROPS } from "../../components/Tooltip/Tooltip.props";
import { SKELETON_DEFAULT_PROPS } from "../../components/Skeleton/Skeleton.props";

const DEFAULT_STYLES: IStyles = {
  colors: DEFAULT_COLORS,
  components: {
    Accordion: ACCORDION_DEFAULT_PROPS,
    Backdrop: BACKDROP_DEFAULT_PROPS,
    Button: BUTTON_DEFAULT_PROPS,
    CloseButton: CLOSE_BUTTON_DEFAULT_PROPS,
    Dialog: DIALOG_DEFAULT_PROPS,
    Divider: DIVIDER_DEFAULT_PROPS,
    Drawer: DRAWER_DEFAULT_PROPS,
    LoadingOverlay: LOADING_OVERLAY_DEFAULT_PROPS,
    Modal: MODAL_DEFAULT_PROPS,
    TextInput: TEXT_INPUT_DEFAULT_PROPS,
    Tooltip: TOOLTIP_DEFAULT_PROPS,
    HoverCard: HOVER_CARD_DEFAULT_PROPS,
    Skeleton: SKELETON_DEFAULT_PROPS,
  },
  global: {
    animated: true,
    borderRadius: "xs",
    color: "blue",
    shade: 6,
    variant: "filled",
  },
  theme: "light",
};

export default DEFAULT_STYLES;
