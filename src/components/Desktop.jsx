// "Desktop" where you can place multiple window components
import Window from "./Window";

export default function Desktop() {
  return (
    <div className="desktop">
      <Window title="ABOUT ME.TXT">
        <p>here's a paragraph</p>
      </Window>

      <Window title="SOCIALS.EXE">
        <ul>
          <li>instagram</li>
          <li>twitter</li>
          <li>shop</li>
        </ul>
      </Window>

      <Window title="GALLERY.EXE">
        <p>view full gallery →</p>
      </Window>
    </div>
  );
}
