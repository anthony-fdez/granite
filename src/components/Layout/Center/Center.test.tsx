import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import Center from "./Center";
import itRendersChildren from "../../../utils/tests/helpers/itRendersChildren";

describe("CloseButton", () => {
  itThrowsContextError(Center);
  itRendersChildren(Center);
});
