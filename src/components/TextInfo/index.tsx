import { Tooltip } from "react-tooltip";
import "./index.css";

export const TextInfo = ({
  text,
  tooltip,
}: {
  text: string;
  tooltip?: { id: string; content: string };
}) => {
  return (
    <>
      <span
        className="text-info__content"
        data-tooltip-id={tooltip.id}
        data-tooltip-content={tooltip.content}
      >
        {text}
      </span>
      {tooltip && <Tooltip id={tooltip.id} />}
    </>
  );
};
