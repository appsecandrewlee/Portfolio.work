import NavigationClickable from "../navbar/navbar";
import Footer from "../footer/footer";
import FirstSection from "../section/firstsection";
import SecondSection from "../section/secondsection";
import ThirdSection from "../section/thirdsection";
import FourthSection from "../section/fourthsection";
import FifthSection from "../section/fifthsection";
import SixthSection from "../section/sixthsection";
function RunEngine() {
  return (
    <>
      {NavigationClickable()}
      {Footer()}
      {FirstSection()}
      {SecondSection()}
      {ThirdSection()}
      {FourthSection()}
      {FifthSection()}
      {SixthSection()}
    </>
  );
}

export default RunEngine;
