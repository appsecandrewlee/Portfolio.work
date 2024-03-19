import NavigationClickable from "../navbar/navbar";
import Footer from "../footer/footer";
import FirstSection from "../section/firstsection";
import SecondSection from "../section/secondsection";
import ThirdSection from "../section/thirdsection";
import FourthSection from "../section/fourthsection";
function RunEngine() {
  return (
    <>
      {NavigationClickable()}
      {Footer()}
      {FirstSection()}
      {SecondSection()}
      {ThirdSection()}
      {FourthSection()}
    </>
  );
}

export default RunEngine;
