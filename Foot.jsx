import react from "react";

function Foot() {
  let currYear = new Date().getFullYear();
  return (
    <footer>
      <h3>copyright &copy; {currYear} </h3>;
    </footer>
  );
}
export default Foot;
