import NavigationClickable from "../navbar/navbar";
import Footer from "../footer/footer";
import Cards from "../card/card";

function RunEngine() {
  return (
    <>
      {NavigationClickable()}
      {Footer()}
      {Cards()}
    </>
  );
}

export default RunEngine;
