import NavigationClickable from "../navbar/navbar";
import Footer from "../footer/footer";
import FirstSection from "../section/firstsection";
import SecondSection from "../section/secondsection";
import ThirdSection from "../section/thirdsection";
import FourthSection from "../section/fourthsection";
import FifthSection from "../section/fifthsection";
import SixthSection from "../section/sixthsection";
import SeventhSection from "../section/SeventhSection";
import CursorTracker from "../cursor/cursortracking";
function RunEngine() {
  return (
    <>
      {NavigationClickable()}
      {Footer()}
      {FirstSection()}
      {SecondSection()}
      {ThirdSection()}
      {SixthSection()}
      {FourthSection()}
      {FifthSection()}
      {SeventhSection()}
      {CursorTracker()}
    </>
  );
}

export default RunEngine;
