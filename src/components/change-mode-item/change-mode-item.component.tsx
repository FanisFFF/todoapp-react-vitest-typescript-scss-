import { ChangeEvent, FC } from "react";
import { ChangeModeProps } from "../change-mode/change-mode.component";

interface ChangeModeItemProps extends ChangeModeProps {
  onMode: string;
}

const ChangeModeItem: FC<ChangeModeItemProps> = ({ onMode, onSetMode }) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onSetMode(e.target.value);
  }
  return (
    <div className="form_radio_group-item">
      <input
        id={onMode}
        onChange={handleChange}
        name="mode"
        value={onMode}
        type="radio"
      />
      <label style={{ textTransform: "capitalize" }} htmlFor={onMode}>
        {onMode}
      </label>
    </div>
  );
};
export default ChangeModeItem;
