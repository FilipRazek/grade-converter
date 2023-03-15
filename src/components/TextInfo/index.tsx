import { Tooltip } from "react-tooltip";
import "./index.css";

export const TextInfo = ({
  text,
  tooltip,
  highlighted,
}: {
  text: string;
  highlighted?: boolean;
  tooltip?: { id: string; content: string };
}) => {
  return (
    <>
      <span
        className={[
          "text-info__content",
          highlighted && "text-info__content--important",
        ]
          .filter(Boolean)
          .join(" ")}
        data-tooltip-id={tooltip?.id}
        data-tooltip-content={tooltip?.content}
      >
        {text}
      </span>
      {tooltip && <Tooltip id={tooltip.id} />}
    </>
  );
};
