import ChangeModeItem from "../change-mode-item/change-mode-item.component";

const MODES = ["all", "active", "completed"];

function ChangeMode({ onSetMode }) {
  return (
    <div className="form_radio_group">
      {MODES.map((mode) => (
        <ChangeModeItem onMode={mode} onSetMode={onSetMode} />
      ))}
    </div>
  );
}
export default ChangeMode;
