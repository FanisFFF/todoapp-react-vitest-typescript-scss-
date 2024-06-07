import { FC } from "react";
import ChangeModeItem from "../change-mode-item/change-mode-item.component";
import "./change-mode.styles.scss";

const MODES = ["all", "active", "completed"];

export interface ChangeModeProps {
  onSetMode: (mode: string) => void;
}

const ChangeMode: FC<ChangeModeProps> = ({ onSetMode }) => {
  return (
    <div className="form_radio_group">
      {MODES.map((mode) => (
        <ChangeModeItem onMode={mode} onSetMode={onSetMode} />
      ))}
    </div>
  );
};
export default ChangeMode;
