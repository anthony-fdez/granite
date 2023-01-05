import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import itRendersChildren from "../../../utils/tests/helpers/itRendersChildren";
import Flex from "./Flex";

describe("CloseButton", () => {
  itThrowsContextError(Flex);
  itRendersChildren(Flex);
});
