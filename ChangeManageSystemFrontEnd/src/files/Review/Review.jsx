import React from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './Review.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
import NavBar from "../../Components/NavBar";
var navBarNumber;
const Review = () => {
  return (
    <div id="base" class="">


      <div id="u440" class="ax_default image">
        <img id="u440_img" class="img " src={backgroundImg} />
        <div id="u440_text" class="text " style={{ display: 'none', visibility: 'hidden' }}>

          <p></p>
        </div>
      </div>


      <div id="u441" class="ax_default box_2">
        <div id="u441_div" class=""></div>
        <div id="u441_text" class="text " style={{ display: 'none', visibility: 'hidden' }}>
          <p></p>
        </div>
      </div>


      <div id="u442" class="ax_default" data-label="RRepeater">
        <script id="u442_script" type="axure-repeater-template" data-label="RRepeater">


          <div id="u443" class="ax_default box_1 u443" data-label="Reason_Number">
            <div id="u443_div" class="u443_div"></div>
            <div id="u443_text" class="text u443_text">
              <p><span>Reason_Number</span></p>
            </div>
          </div>


          <div id="u444" class="ax_default box_1 u444" data-label="Full Name">
            <div id="u444_div" class="u444_div"></div>
            <div id="u444_text" class="text u444_text">
              <p><span>Full_Name</span></p>
            </div>
          </div>


          <div id="u445" class="ax_default box_1 u445" data-label="Description">
            <div id="u445_div" class="u445_div"></div>
            <div id="u445_text" class="text u445_text">
              <p><span>Description</span></p>
            </div>
          </div>


          <div id="u446" class="ax_default box_1 u446" data-label="Reason">
            <div id="u446_div" class="u446_div"></div>
            <div id="u446_text" class="text u446_text">
              <p><span>Reason</span></p>
            </div>
          </div>


          <div id="u447" class="ax_default box_1 u447" data-label="Change Type">
            <div id="u447_div" class="u447_div"></div>
            <div id="u447_text" class="text u447_text">
              <p><span>Change_Type</span></p>
            </div>
          </div>


          <div id="u448" class="ax_default box_1 u448" data-label="Application ID">
            <div id="u448_div" class="u448_div"></div>
            <div id="u448_text" class="text u448_text">
              <p><span>Application_ID</span></p>
            </div>
          </div>


          <div id="u449" class="ax_default box_1 u449" data-label="Why">
            <div id="u449_div" class="u449_div"></div>
            <div id="u449_text" class="text u449_text">
              <p><span>Why</span></p>
            </div>
          </div>


          <div id="u450" class="ax_default box_1 u450" data-label="What">
            <div id="u450_div" class="u450_div"></div>
            <div id="u450_text" class="text u450_text">
              <p><span>What</span></p>
            </div>
          </div>


          <div id="u451" class="ax_default box_1 u451" data-label="Who">
            <div id="u451_div" class="u451_div"></div>
            <div id="u451_text" class="text u451_text">
              <p><span>Who</span></p>
            </div>
          </div>


          <div id="u452" class="ax_default box_1 u452" data-label="Change Number">
            <div id="u452_div" class="u452_div"></div>
            <div id="u452_text" class="text u452_text">
              <p><span>Change_Number</span></p>
            </div>
          </div>
        </script>
        <div id="u442-1" class="preeval" style={{ width: '1200px', height: '30px' }}>


          <div id="u443-1" class="ax_default box_1 u443" data-label="Reason_Number" style={{ width: '120px', height: '30px', left: '600px', top: '0px', visibility: 'inherit' }}>
            <div id="u443-1_div" class="u443_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u443-1_text" class="text u443_text" style={{ visibility: 'inherit' }}>
              <p><span>1</span></p>
            </div>
          </div>


          <div id="u444-1" class="ax_default box_1 u444" data-label="Full Name" style={{ width: '120px', height: '30px', left: '120px', top: '0px', visibility: 'inherit' }}>
            <div id="u444-1_div" class="u444_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u444-1_text" class="text u444_text" style={{ visibility: 'inherit' }}>
              <p><span>Robert Lukenbill</span></p>
            </div>
          </div>


          <div id="u445-1" class="ax_default box_1 u445" data-label="Description" style={{ width: '120px', height: '30px', left: '360px', top: '0px', visibility: 'inherit' }}>
            <div id="u445-1_div" class="u445_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u445-1_text" class="text u445_text" style={{ visibility: 'inherit' }}>
              <p><span>Description</span></p>
            </div>
          </div>


          <div id="u446-1" class="ax_default box_1 u446" data-label="Reason" style={{ width: '120px', height: '30px', left: '480px', top: '0px', visibility: 'inherit' }}>
            <div id="u446-1_div" class="u446_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u446-1_text" class="text u446_text" style={{ visibility: 'inherit' }}>
              <p><span>Fix</span></p>
            </div>
          </div>


          <div id="u447-1" class="ax_default box_1 u447" data-label="Change Type" style={{ width: '120px', height: '30px', left: '720px', top: '0px', visibility: 'inherit' }}>
            <div id="u447-1_div" class="u447_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u447-1_text" class="text u447_text" style={{ visibility: 'inherit' }}>
              <p><span>Planned</span></p>
            </div>
          </div>


          <div id="u448-1" class="ax_default box_1 u448" data-label="Application ID" style={{ width: '120px', height: '30px', left: '240px', top: '0px', visibility: 'inherit' }}>
            <div id="u448-1_div" class="u448_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u448-1_text" class="text u448_text" style={{ visibility: 'inherit' }}>
              <p><span>ABC</span></p>
            </div>
          </div>


          <div id="u449-1" class="ax_default box_1 u449" data-label="Why" style={{ width: '120px', height: '30px', left: '840px', top: '0px', visibility: 'inherit' }}>
            <div id="u449-1_div" class="u449_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u449-1_text" class="text u449_text" style={{ visibility: 'inherit' }}>
              <p><span>Planned request</span></p>
            </div>
          </div>


          <div id="u450-1" class="ax_default box_1 u450" data-label="What" style={{ width: '120px', height: '30px', left: '960px', top: '0px', visibility: 'inherit' }}>
            <div id="u450-1_div" class="u450_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u450-1_text" class="text u450_text" style={{ visibility: 'inherit' }}>
              <p><span>Component</span></p>
            </div>
          </div>


          <div id="u451-1" class="ax_default box_1 u451" data-label="Who" style={{ width: '120px', height: '30px', left: '1080px', top: '0px', visibility: 'inherit' }}>
            <div id="u451-1_div" class="u451_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u451-1_text" class="text u451_text" style={{ visibility: 'inherit' }}>
              <p><span>Robert Lukenbill</span></p>
            </div>
          </div>


          <div id="u452-1" class="ax_default box_1 u452" data-label="Change Number" style={{ width: '120px', height: '30px', left: '0px', top: '0px', visiblity: 'inherit' }}>
            <div id="u452-1_div" class="u452_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u452-1_text" class="text u452_text" style={{ visibility: 'inherit' }}>
              <p><span>1</span></p>
            </div>
          </div>
        </div>
      </div>


      <div id="u453" class="ax_default image">
        <img id="u453_img" class="img " src={logo} />
        <div id="u453_text" class="text " style={{ display: 'none', visibility: 'hidden' }}>
          <p></p>
        </div>
      </div>


      <div id="u454" class="ax_default primary_button">
        <div id="u454_div" class=""></div>
        <div id="u454_text" class="text ">
          <p><span>Edit Change Request</span></p>
        </div>
      </div>


      <div id="u455" class="ax_default primary_button">
        <div id="u455_div" class=""></div>
        <div id="u455_text" class="text ">
          <p><span>Submit Change Request</span></p>
        </div>
      </div>


      <div id="u456" class="ax_default box_1" data-label="Change Number (Header)">
        <div id="u456_div" class=""></div>
        <div id="u456_text" class="text ">
          <p><span>Change_Number</span></p>
        </div>
      </div>


      <div id="u457" class="ax_default box_1" data-label="Full Name (Header)">
        <div id="u457_div" class=""></div>
        <div id="u457_text" class="text ">
          <p><span>Full Name</span></p>
        </div>
      </div>


      <div id="u458" class="ax_default box_1" data-label="Application ID (Header)">
        <div id="u458_div" class=""></div>
        <div id="u458_text" class="text ">
          <p><span>Application ID</span></p>
        </div>
      </div>


      <div id="u459" class="ax_default box_1" data-label="Change Number (Header)">
        <div id="u459_div" class=""></div>
        <div id="u459_text" class="text ">
          <p><span>Description</span></p>
        </div>
      </div>


      <div id="u460" class="ax_default box_1" data-label="Reason (Header)">
        <div id="u460_div" class=""></div>
        <div id="u460_text" class="text ">
          <p><span>Reason</span></p>
        </div>
      </div>


      <div id="u461" class="ax_default box_1" data-label="Reason Number (Header)">
        <div id="u461_div" class=""></div>
        <div id="u461_text" class="text ">
          <p><span>Reason Number</span></p>
        </div>
      </div>


      <div id="u462" class="ax_default box_1" data-label="Change Type (Header)">
        <div id="u462_div" class=""></div>
        <div id="u462_text" class="text ">
          <p><span>Change Type</span></p>
        </div>
      </div>


      <div id="u463" class="ax_default box_1" data-label="Why (Header)">
        <div id="u463_div" class=""></div>
        <div id="u463_text" class="text ">
          <p><span>Why</span></p>
        </div>
      </div>


      <div id="u464" class="ax_default box_1" data-label="What (Header)">
        <div id="u464_div" class=""></div>
        <div id="u464_text" class="text ">
          <p><span>What</span></p>
        </div>
      </div>


      <div id="u465" class="ax_default box_1" data-label="Who (Header)">
        <div id="u465_div" class=""></div>
        <div id="u465_text" class="text ">
          <p><span>Who</span></p>
        </div>
      </div>


      <div id="u466" class="ax_default box_1" data-label="Change_Window_Start_Date (Header)">
        <div id="u466_div" class=""></div>
        <div id="u466_text" class="text ">
          <p><span>Change Window Start Date</span></p>
        </div>
      </div>


      <div id="u467" class="ax_default box_1" data-label="Window Start Time (Header)">
        <div id="u467_div" class=""></div>
        <div id="u467_text" class="text ">
          <p><span>Change Window Start Time</span></p>
        </div>
      </div>


      <div id="u468" class="ax_default box_1" data-label="Window Stop Date (Header)">
        <div id="u468_div" class=""></div>
        <div id="u468_text" class="text ">
          <p><span>Change Window Stop Date</span></p>
        </div>
      </div>


      <div id="u469" class="ax_default box_1" data-label="Window Stop Time (Header)">
        <div id="u469_div" class=""></div>
        <div id="u469_text" class="text ">
          <p><span>Change Window Stop Time</span></p>
        </div>
      </div>


      <div id="u470" class="ax_default box_1" data-label="Backout Plan (Header)">
        <div id="u470_div" class=""></div>
        <div id="u470_text" class="text ">
          <p><span>Backout Plan</span></p>
        </div>
      </div>


      <div id="u471" class="ax_default box_1" data-label="Backout Minutes (Header)">
        <div id="u471_div" class=""></div>
        <div id="u471_text" class="text ">
          <p><span>Backout Minutes</span></p>
        </div>
      </div>


      <div id="u472" class="ax_default box_1" data-label="Other Needed Departments">
        <div id="u472_div" class=""></div>
        <div id="u472_text" class="text ">
          <p><span>Other Needed Departments</span></p>
        </div>
      </div>


      <div id="u473" class="ax_default box_1" data-label="Risk Level (Header)">
        <div id="u473_div" class=""></div>
        <div id="u473_text" class="text ">
          <p><span>Risk Level</span></p>
        </div>
      </div>


      <div id="u474" class="ax_default box_1" data-label="State (Header)">
        <div id="u474_div" class=""></div>
        <div id="u474_text" class="text ">
          <p><span>State</span></p>
        </div>
      </div>


      <div id="u475" class="ax_default label ax_default_hidden" data-label="Updated Employee Value" style={{ display: 'none', visibility: 'hidden' }}>
        <div id="u475_div" class=""></div>
        <div id="u475_text" class="text ">
          <p><span>Label</span></p>
        </div>
      </div>


      <div id="u476" class="ax_default box_3">
        <div id="u476_div" class=""></div>
        <div id="u476_text" class="text " style={{ display: 'none', visibility: 'hidden' }}>
          <p></p>
        </div>
      </div>


      <div id="u477" class="ax_default box_3">
        <div id="u477_div" class=""></div>
        <div id="u477_text" class="text " style={{ display: 'none', visibility: 'hidden' }}>
          <p></p>
        </div>
      </div>

      <NavBar navBarNumber={2} />



      <div id="u480" class="ax_default heading_1">
        <div id="u480_div" class=""></div>
        <div id="u480_text" class="text ">
          <p><span>Review Form</span></p>
        </div>
      </div>


      <div id="u481" class="ax_default" data-label="Table Repeater">
        <script id="u481_script" type="axure-repeater-template" data-label="Table Repeater">


          <div id="u482" class="ax_default box_1 u482" data-label="R1">
            <div id="u482_div" class="u482_div"></div>
            <div id="u482_text" class="text u482_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>


          <div id="u483" class="ax_default box_1 u483" data-label="R2">
            <div id="u483_div" class="u483_div"></div>
            <div id="u483_text" class="text u483_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>


          <div id="u484" class="ax_default box_1 u484" data-label="R3">
            <div id="u484_div" class="u484_div"></div>
            <div id="u484_text" class="text u484_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>


          <div id="u485" class="ax_default box_1 u485" data-label="R4">
            <div id="u485_div" class="u485_div"></div>
            <div id="u485_text" class="text u485_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>
        </script>
        <div id="u481-1" class="preeval" style={{ width: '480px', height: '30px' }}>


          <div id="u482-1" class="ax_default box_1 u482" data-label="R1" style={{ width: '120px', height: '30px', left: '0px', top: '0px', visiblity: 'inherit' }}>
            <div id="u482-1_div" class="u482_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u482-1_text" class="text u482_text" style={{ visibility: 'inherit' }}>
              <p><span>September 17th, 2023</span></p>
            </div>
          </div>


          <div id="u483-1" class="ax_default box_1 u483" data-label="R2" style={{ width: '120px', height: '30px', left: '120px', top: '0px', visibility: 'inherit' }}>
            <div id="u483-1_div" class="u483_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u483-1_text" class="text u483_text" style={{ visibility: 'inherit' }}>
              <p><span>3:00 AM</span></p>
            </div>
          </div>


          <div id="u484-1" class="ax_default box_1 u484" data-label="R3" style={{ width: '120px', height: '30px', left: '240px', top: '0px', visibility: 'inherit' }}>
            <div id="u484-1_div" class="u484_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u484-1_text" class="text u484_text" style={{ visibility: 'inherit' }}>
              <p><span>September 19th, 2023</span></p>
            </div>
          </div>


          <div id="u485-1" class="ax_default box_1 u485" data-label="R4" style={{ width: '120px', height: '30px', left: '360px', top: '0px', visibility: 'inherit' }}>
            <div id="u485-1_div" class="u485_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u485-1_text" class="text u485_text" style={{ visibility: 'inherit' }}>
              <p><span>4:00 AM</span></p>
            </div>
          </div>
        </div>
      </div>


      <div id="u486" class="ax_default" data-label="Table Repeater">
        <script id="u486_script" type="axure-repeater-template" data-label="Table Repeater">


          <div id="u487" class="ax_default box_1 u487" data-label="R5">
            <div id="u487_div" class="u487_div"></div>
            <div id="u487_text" class="text u487_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>


          <div id="u488" class="ax_default box_1 u488" data-label="R6">
            <div id="u488_div" class="u488_div"></div>
            <div id="u488_text" class="text u488_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>


          <div id="u489" class="ax_default box_1 u489" data-label="R7">
            <div id="u489_div" class="u489_div"></div>
            <div id="u489_text" class="text u489_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>


          <div id="u490" class="ax_default box_1 u490" data-label="R8">
            <div id="u490_div" class="u490_div"></div>
            <div id="u490_text" class="text u490_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>


          <div id="u491" class="ax_default box_1 u491" data-label="R9">
            <div id="u491_div" class="u491_div"></div>
            <div id="u491_text" class="text u491_text" style={{ display: 'none', visibility: 'hidden' }}>
              <p></p>
            </div>
          </div>
        </script>
        <div id="u486-1" class="preeval" style={{ width: '600px', height: '30px' }}>


          <div id="u487-1" class="ax_default box_1 u487" data-label="R5" style={{ width: '120px', height: '30px', left: '0px', top: '0px', visiblity: 'inherit' }}>
            <div id="u487-1_div" class="u487_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u487-1_text" class="text u487_text" style={{ visibility: 'inherit' }}>
              <p><span>Description on backing out</span></p>
            </div>
          </div>


          <div id="u488-1" class="ax_default box_1 u488" data-label="R6" style={{ width: '120px', height: '30px', left: '120px', top: '0px', visibility: 'inherit' }}>
            <div id="u488-1_div" class="u488_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u488-1_text" class="text u488_text" style={{ visibility: 'inherit' }}>
              <p><span>2</span></p>
            </div>
          </div>


          <div id="u489-1" class="ax_default box_1 u489" data-label="R7" style={{ width: '120px', height: '30px', left: '240px', top: '0px', visibility: 'inherit' }}>
            <div id="u489-1_div" class="u489_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u489-1_text" class="text u489_text" style={{ visibility: 'inherit' }}>
              <p><span>DevOps</span></p>
            </div>
          </div>


          <div id="u490-1" class="ax_default box_1 u490" data-label="R8" style={{ width: '120px', height: '30px', left: '360px', top: '0px', visibility: 'inherit' }}>
            <div id="u490-1_div" class="u490_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u490-1_text" class="text u490_text" style={{ visibility: 'inherit' }}>
              <p><span>Low</span></p>
            </div>
          </div>


          <div id="u491-1" class="ax_default box_1 u491" data-label="R9" style={{ width: '120px', height: '30px', left: '480px', top: '0px', visibility: 'inherit' }}>
            <div id="u491-1_div" class="u491_div" style={{ width: '120px', height: '30px', visibility: 'inherit' }}></div>
            <div id="u491-1_text" class="text u491_text" style={{ visibility: 'inherit' }}>
              <p><span>Open</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
