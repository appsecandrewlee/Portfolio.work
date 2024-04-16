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
import LoadingAnimation from "../loading/loading";
import WhatIDoSection from "../section/whatidosection";
function RunEngine() {
  return (
    <>
      {LoadingAnimation()}
      {NavigationClickable()}
      {FirstSection()}
      {SecondSection()}
      {ThirdSection()}
      {SixthSection()}
      {FourthSection()}
      {FifthSection()}
      {SeventhSection()}

      {CursorTracker()}

      {WhatIDoSection()}
      {Footer()}
    </>
  );
}

export default RunEngine;
