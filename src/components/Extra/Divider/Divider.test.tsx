import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import Divider from "./Divider";
import { IDividerProps } from "./Divider.types";

const defaultProps: IDividerProps = {
  label: "divider-label",
};

describe("CloseButton", () => {
  itThrowsContextError(Divider, defaultProps);
});
