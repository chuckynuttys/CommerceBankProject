import React from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './Entry.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
const Entry = () => {
  return (
    <body>
    <div id="base" class="">

      <div id="u18" class="ax_default image">
        <img id="u18_img" class="img " src={backgroundImg}/>
        <div id="u18_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      <div id="u19" class="ax_default box_2">
        <div id="u19_div" class=""></div>
        <div id="u19_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      <div id="u20" class="ax_default" data-label="Application ID Field" data-left="339" data-top="296" data-width="300" data-height="84" layer-opacity="1">

        <div id="u21" class="ax_default shape" data-label="Helper Text">
          <div id="u21_div" class=""></div>
          <div id="u21_text" class="text ">
            <p><span>3 Character ID of the application team that is implemeneting the change</span></p>
          </div>
        </div>

        <div id="u22" class="ax_default text_field" data-label="Application Field">
          <div id="u22_div" class=""></div>
          <input id="u22_input" type="text" value="" class="u22_input"/>
        </div>

        <div id="u23" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u23_div" class="selected"></div>
          <div id="u23_text" class="text ">
            <p><span>Application ID</span></p>
          </div>
        </div>

        <div id="u24" class="ax_default shape" data-label="Lower Label">
          <div id="u24_div" class=""></div>
          <div id="u24_text" class="text ">
            <p><span>Application ID</span></p>
          </div>
        </div>

        <div id="u25" class="ax_default paragraph ax_default_hidden" data-label="Application ID Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u25_div" class=""></div>
          <div id="u25_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u26" class="ax_default" data-label="Description Field" data-left="339" data-top="409" data-width="300" data-height="74" layer-opacity="1">

        <div id="u27" class="ax_default shape" data-label="Helper Text">
          <div id="u27_div" class=""></div>
          <div id="u27_text" class="text ">
            <p><span>80 Character Description of what the Change is</span></p>
          </div>
        </div>

        <div id="u28" class="ax_default text_field" data-label="Description Field">
          <div id="u28_div" class=""></div>
          <input id="u28_input" type="text" value="" class="u28_input"/>
        </div>

        <div id="u29" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u29_div" class="selected"></div>
          <div id="u29_text" class="text ">
            <p><span>Description</span></p>
          </div>
        </div>

        <div id="u30" class="ax_default shape" data-label="Lower Label">
          <div id="u30_div" class=""></div>
          <div id="u30_text" class="text ">
            <p><span>Description</span></p>
          </div>
        </div>

        <div id="u31" class="ax_default paragraph ax_default_hidden" data-label="Description Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u31_div" class=""></div>
          <div id="u31_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u32" class="ax_default" data-label="Why Field" data-left="677" data-top="296" data-width="300" data-height="74" layer-opacity="1">

        <div id="u33" class="ax_default shape" data-label="Helper Text">
          <div id="u33_div" class=""></div>
          <div id="u33_text" class="text ">
            <p><span>Why is the change needed?</span></p>
          </div>
        </div>

        <div id="u34" class="ax_default text_field" data-label="Why Field">
          <div id="u34_div" class=""></div>
          <input id="u34_input" type="text" value="" class="u34_input"/>
        </div>

        <div id="u35" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u35_div" class="selected"></div>
          <div id="u35_text" class="text ">
            <p><span>Why?</span></p>
          </div>
        </div>

        <div id="u36" class="ax_default shape" data-label="Lower Label">
          <div id="u36_div" class=""></div>
          <div id="u36_text" class="text ">
            <p><span>Why?</span></p>
          </div>
        </div>

        <div id="u37" class="ax_default paragraph ax_default_hidden" data-label="Why Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u37_div" class=""></div>
          <div id="u37_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u38" class="ax_default" data-label="What Field" data-left="339" data-top="519" data-width="300" data-height="91" layer-opacity="1">

        <div id="u39" class="ax_default shape" data-label="Helper Text">
          <div id="u39_div" class=""></div>
          <div id="u39_text" class="text ">
            <p><span>New version of software, server configuration change, etc.</span></p>
          </div>
        </div>

        <div id="u40" class="ax_default text_field" data-label="What Field">
          <div id="u40_div" class=""></div>
          <input id="u40_input" type="text" value="" class="u40_input"/>
        </div>

        <div id="u41" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u41_div" class="selected"></div>
          <div id="u41_text" class="text ">
            <p><span>What is Changing?</span></p>
          </div>
        </div>

        <div id="u42" class="ax_default shape" data-label="Lower Label">
          <div id="u42_div" class=""></div>
          <div id="u42_text" class="text ">
            <p><span>What is Changing?</span></p>
          </div>
        </div>

        <div id="u43" class="ax_default paragraph ax_default_hidden" data-label="What Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u43_div" class=""></div>
          <div id="u43_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u44" class="ax_default" data-label="Backout Plan field" data-left="671" data-top="409" data-width="300" data-height="80" layer-opacity="1">

        <div id="u45" class="ax_default shape" data-label="Helper Text">
          <div id="u45_div" class=""></div>
          <div id="u45_text" class="text ">
            <p><span>Description of what it takes to revert the change.</span></p>
          </div>
        </div>

        <div id="u46" class="ax_default text_field" data-label="Backout Plan Field">
          <div id="u46_div" class=""></div>
          <input id="u46_input" type="text" value="" class="u46_input"/>
        </div>

        <div id="u47" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u47_div" class="selected"></div>
          <div id="u47_text" class="text ">
            <p><span>Back-out Plan</span></p>
          </div>
        </div>

        <div id="u48" class="ax_default shape" data-label="Lower Label">
          <div id="u48_div" class=""></div>
          <div id="u48_text" class="text ">
            <p><span>Back-out Plan</span></p>
          </div>
        </div>

        <div id="u49" class="ax_default paragraph ax_default_hidden" data-label="Backout Plan Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u49_div" class=""></div>
          <div id="u49_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u50" class="ax_default" data-label="Backout Minutes Field" data-left="671" data-top="519" data-width="300" data-height="90" layer-opacity="1">

        <div id="u51" class="ax_default shape" data-label="Helper Text">
          <div id="u51_div" class=""></div>
          <div id="u51_text" class="text ">
            <p><span>How long it will take to perform the back-out in minutes</span></p>
          </div>
        </div>

        <div id="u52" class="ax_default text_field" data-label="Backout Minutes Field">
          <div id="u52_div" class=""></div>
          <input id="u52_input" type="text" value="" class="u52_input"/>
        </div>

        <div id="u53" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u53_div" class="selected"></div>
          <div id="u53_text" class="text ">
            <p><span>Back-out Minutes</span></p>
          </div>
        </div>

        <div id="u54" class="ax_default shape" data-label="Lower Label">
          <div id="u54_div" class=""></div>
          <div id="u54_text" class="text ">
            <p><span>Back-out Minutes</span></p>
          </div>
        </div>

        <div id="u55" class="ax_default paragraph ax_default_hidden" data-label="Backout Minutes Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u55_div" class=""></div>
          <div id="u55_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u56" class="ax_default" data-label="Reason Type Radio" data-left="353" data-top="656" data-width="124" data-height="100" layer-opacity="1">

        <div id="u57" class="ax_default" data-label="Fix Radio Button" data-left="353" data-top="682" data-width="57" data-height="34" layer-opacity="1">

          <div id="u58" class="ax_default shape">
            <img id="u58_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u58_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u59" class="ax_default checkbox" data-label="Fix" selectiongroup="Radio Group 1">
            <label id="u59_input_label" for="u59_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u59_img" class="img " src="../../Images/entry_page/fix_u59.svg"/>
              <div id="u59_text" class="text ">
                <p><span>Fix</span></p>
              </div>
            </label>
            <input id="u59_input" type="radio" value="radio" name="Radio Group 1"/>
          </div>
        </div>

        <div id="u60" class="ax_default" data-label="Enhancement Radio Button" data-left="353" data-top="722" data-width="124" data-height="34" layer-opacity="1">

          <div id="u61" class="ax_default shape">
            <img id="u61_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u61_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u62" class="ax_default checkbox" data-label="Enhancement" selectiongroup="Radio Group 1">
            <label id="u62_input_label" for="u62_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u62_img" class="img " src="../../Images/entry_page/enhancement_u62.svg"/>
              <div id="u62_text" class="text ">
                <p><span>Enhancement</span></p>
              </div>
            </label>
            <input id="u62_input" type="radio" value="radio" name="Radio Group 1"/>
          </div>
        </div>

        <div id="u63" class="ax_default paragraph" data-label="Pick a Time Label">
          <div id="u63_div" class=""></div>
          <div id="u63_text" class="text ">
            <p><span>Reason Type</span></p>
          </div>
        </div>

        <div id="u64" class="ax_default paragraph ax_default_hidden" data-label="Reason Type Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u64_div" class=""></div>
          <div id="u64_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u65" class="ax_default" data-label="Change Type Radio" data-left="515" data-top="656" data-width="108" data-height="140" layer-opacity="1">

        <div id="u66" class="ax_default" data-label="Radio Button" data-left="515" data-top="682" data-width="89" data-height="34" layer-opacity="1">

          <div id="u67" class="ax_default shape">
            <img id="u67_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u67_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u68" class="ax_default checkbox" data-label="Planned" selectiongroup="Radio Group 2">
            <label id="u68_input_label" for="u68_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u68_img" class="img " src="../../Images/entry_page/planned_u68.svg"/>
              <div id="u68_text" class="text ">
                <p><span>Planned</span></p>
              </div>
            </label>
            <input id="u68_input" type="radio" value="radio" name="Radio Group 2"/>
          </div>
        </div>

        <div id="u69" class="ax_default" data-label="Radio Button" data-left="515" data-top="722" data-width="105" data-height="34" layer-opacity="1">

          <div id="u70" class="ax_default shape">
            <img id="u70_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u70_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u71" class="ax_default checkbox" data-label="Unplanned" selectiongroup="Radio Group 2">
            <label id="u71_input_label" for="u71_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u71_img" class="img " src="../../Images/entry_page/unplanned_u71.svg"/>
              <div id="u71_text" class="text ">
                <p><span>Unplanned</span></p>
              </div>
            </label>
            <input id="u71_input" type="radio" value="radio" name="Radio Group 2"/>
          </div>
        </div>

        <div id="u72" class="ax_default" data-label="Radio Button" data-left="515" data-top="762" data-width="108" data-height="34" layer-opacity="1">

          <div id="u73" class="ax_default shape">
            <img id="u73_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u73_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u74" class="ax_default checkbox" data-label="Emergency" selectiongroup="Radio Group 2">
            <label id="u74_input_label" for="u74_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u74_img" class="img " src="../../Images/entry_page/emergency_u74.svg"/>
              <div id="u74_text" class="text ">
                <p><span>Emergency</span></p>
              </div>
            </label>
            <input id="u74_input" type="radio" value="radio" name="Radio Group 2"/>
          </div>
        </div>

        <div id="u75" class="ax_default paragraph" data-label="Pick a Time Label">
          <div id="u75_div" class=""></div>
          <div id="u75_text" class="text ">
            <p><span>Change Type</span></p>
          </div>
        </div>

        <div id="u76" class="ax_default paragraph ax_default_hidden" data-label="Change Type Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u76_div" class=""></div>
          <div id="u76_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u77" class="ax_default" data-label="Other Needed Departments Checkbox" data-left="837" data-top="620" data-width="154" data-height="186" layer-opacity="1">

        <div id="u78" class="ax_default" data-left="837" data-top="646" data-width="89" data-height="34" layer-opacity="1">

          <div id="u79" class="ax_default shape">
            <img id="u79_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u79_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u80" class="ax_default checkbox" data-label="DevOps">
            <label id="u80_input_label" for="u80_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u80_img" class="img " src="../../Images/entry_page/devops_u80.svg"/>
              <div id="u80_text" class="text ">
                <p><span>DevOps</span></p>
              </div>
            </label>
            <input id="u80_input" type="checkbox" value="checkbox"/>
          </div>
        </div>

        <div id="u81" class="ax_default" data-left="837" data-top="686" data-width="67" data-height="34" layer-opacity="1">

          <div id="u82" class="ax_default shape">
            <img id="u82_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u82_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u83" class="ax_default checkbox" data-label="DBA">
            <label id="u83_input_label" for="u83_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u83_img" class="img " src="../../Images/entry_page/dba_u83.svg"/>
              <div id="u83_text" class="text ">
                <p><span>DBA</span></p>
              </div>
            </label>
            <input id="u83_input" type="checkbox" value="checkbox"/>
          </div>
        </div>

        <div id="u84" class="ax_default" data-left="837" data-top="726" data-width="92" data-height="34" layer-opacity="1">

          <div id="u85" class="ax_default shape">
            <img id="u85_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u85_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u86" class="ax_default checkbox" data-label="Security">
            <label id="u86_input_label" for="u86_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u86_img" class="img " src="../../Images/entry_page/security_u86.svg"/>
              <div id="u86_text" class="text ">
                <p><span>Security</span></p>
              </div>
            </label>
            <input id="u86_input" type="checkbox" value="checkbox"/>
          </div>
        </div>

        <div id="u87" class="ax_default paragraph" data-label="Pick a Time Label">
          <div id="u87_div" class=""></div>
          <div id="u87_text" class="text ">
            <p><span>Other needed Departments</span></p>
          </div>
        </div>

        <div id="u88" class="ax_default" data-left="837" data-top="772" data-width="111" data-height="34" layer-opacity="1">

          <div id="u89" class="ax_default shape">
            <img id="u89_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u89_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u90" class="ax_default checkbox" data-label="Scheduling">
            <label id="u90_input_label" for="u90_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u90_img" class="img " src="../../Images/entry_page/scheduling_u90.svg"/>
              <div id="u90_text" class="text ">
                <p><span>Scheduling</span></p>
              </div>
            </label>
            <input id="u90_input" type="checkbox" value="checkbox"/>
          </div>
        </div>

        <div id="u91" class="ax_default paragraph ax_default_hidden" data-label="Other needed Departments Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u91_div" class=""></div>
          <div id="u91_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u92" class="ax_default" data-label="Risk Level Radio" data-left="685" data-top="656" data-width="89" data-height="140" layer-opacity="1">

        <div id="u93" class="ax_default" data-label="Radio Button" data-left="685" data-top="682" data-width="65" data-height="34" layer-opacity="1">

          <div id="u94" class="ax_default shape">
            <img id="u94_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u94_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u95" class="ax_default checkbox" data-label="Low" selectiongroup="Radio Group 3">
            <label id="u95_input_label" for="u95_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u95_img" class="img " src="../../Images/entry_page/low_u95.svg"/>
              <div id="u95_text" class="text ">
                <p><span>Low</span></p>
              </div>
            </label>
            <input id="u95_input" type="radio" value="radio" name="Radio Group 3"/>
          </div>
        </div>

        <div id="u96" class="ax_default" data-label="Radio Button" data-left="685" data-top="722" data-width="89" data-height="34" layer-opacity="1">

          <div id="u97" class="ax_default shape">
            <img id="u97_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u97_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u98" class="ax_default checkbox" data-label="Medium" selectiongroup="Radio Group 3">
            <label id="u98_input_label" for="u98_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u98_img" class="img " src="../../Images/entry_page/medium_u98.svg"/>
              <div id="u98_text" class="text ">
                <p><span>Medium</span></p>
              </div>
            </label>
            <input id="u98_input" type="radio" value="radio" name="Radio Group 3"/>
          </div>
        </div>

        <div id="u99" class="ax_default" data-label="Radio Button" data-left="685" data-top="762" data-width="67" data-height="34" layer-opacity="1">

          <div id="u100" class="ax_default shape">
            <img id="u100_img" class="img " src="../../Images/entry_page/u58.svg"/>
            <div id="u100_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>

          <div id="u101" class="ax_default checkbox" data-label="High" selectiongroup="Radio Group 3">
            <label id="u101_input_label" for="u101_input" style={{position: 'absolute', left: '0px'}}>
              <img id="u101_img" class="img " src="../../Images/entry_page/high_u101.svg"/>
              <div id="u101_text" class="text ">
                <p><span>High</span></p>
              </div>
            </label>
            <input id="u101_input" type="radio" value="radio" name="Radio Group 3"/>
          </div>
        </div>

        <div id="u102" class="ax_default paragraph" data-label="Pick a Time Label">
          <div id="u102_div" class=""></div>
          <div id="u102_text" class="text ">
            <p><span>Risk Level</span></p>
          </div>
        </div>

        <div id="u103" class="ax_default paragraph ax_default_hidden" data-label="Risk Level Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u103_div" class=""></div>
          <div id="u103_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u104" class="ax_default" data-label="Change Window Start Time" data-left="1254" data-top="127" data-width="160" data-height="50" layer-opacity="1">

        <div id="u105" class="ax_default" data-label="Time Input" data-left="1254" data-top="145" data-width="160" data-height="32" layer-opacity="1">

          <div id="u106" class="ax_default text_field" data-label="Time Input">
            <div id="u106_div" class=""></div>
            <input id="u106_input" type="text" value="0:00 AM" class="u106_input" readonly/>
          </div>

          <div id="u107" class="ax_default icon" data-label="Clock Icon">
            <img id="u107_img" class="img " src="../../Images/entry_page/clock_icon_u107.svg"/>
            <div id="u107_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>
        </div>

        <div id="u108" class="ax_default ax_default_hidden" data-label="Time Selector" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u108_state0" class="panel_state" data-label="State1" >
            <div id="u108_state0_content" class="panel_state_content">

              <div id="u109" class="ax_default" data-label="Hours" data-left="16" data-top="9" data-width="36" data-height="72" layer-opacity="1">

                <div id="u110" class="ax_default label1" data-label="Hours">
                  <div id="u110_div" class=""></div>
                  <div id="u110_text" class="text ">
                    <p><span>1</span></p>
                  </div>
                </div>

                <div id="u111" class="ax_default" data-left="16" data-top="56" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u112" class="ax_default shape">
                    <div id="u112_div" class=""></div>
                    <div id="u112_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u113" class="ax_default icon" data-label="Down">
                    <img id="u113_img" class="img " src="../../Images/entry_page/down_u113.svg"/>
                    <div id="u113_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>

                <div id="u114" class="ax_default" data-left="16" data-top="9" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u115" class="ax_default shape">
                    <div id="u115_div" class=""></div>
                    <div id="u115_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u116" class="ax_default icon" data-label="Up">
                    <img id="u116_img" class="img " src="../../Images/entry_page/up_u116.svg"/>
                    <div id="u116_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="u117" class="ax_default label1" data-label="Seperator">
                <div id="u117_div" class=""></div>
                <div id="u117_text" class="text ">
                  <p><span>:</span></p>
                </div>
              </div>

              <div id="u118" class="ax_default" data-label="Minutes" data-left="62" data-top="9" data-width="36" data-height="72" layer-opacity="1">

                <div id="u119" class="ax_default label1" data-label="Minutes">
                  <div id="u119_div" class=""></div>
                  <div id="u119_text" class="text ">
                    <p><span>00</span></p>
                  </div>
                </div>

                <div id="u120" class="ax_default" data-left="62" data-top="56" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u121" class="ax_default shape">
                    <div id="u121_div" class=""></div>
                    <div id="u121_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u122" class="ax_default icon" data-label="Down">
                    <img id="u122_img" class="img " src="../../Images/entry_page/down_u113.svg"/>
                    <div id="u122_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>

                <div id="u123" class="ax_default" data-left="62" data-top="9" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u124" class="ax_default shape">
                    <div id="u124_div" class=""></div>
                    <div id="u124_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u125" class="ax_default icon" data-label="Up">
                    <img id="u125_img" class="img " src="../../Images/entry_page/up_u116.svg"/>
                    <div id="u125_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="u126" class="ax_default" data-label="AMPM" data-left="108" data-top="9" data-width="36" data-height="72" layer-opacity="1">

                <div id="u127" class="ax_default label1" data-label="AM PM">
                  <div id="u127_div" class=""></div>
                  <div id="u127_text" class="text ">
                    <p><span>PM</span></p>
                  </div>
                </div>

                <div id="u128" class="ax_default" data-left="108" data-top="9" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u129" class="ax_default shape">
                    <div id="u129_div" class=""></div>
                    <div id="u129_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u130" class="ax_default icon" data-label="Up">
                    <img id="u130_img" class="img " src="../../Images/entry_page/up_u116.svg"/>
                    <div id="u130_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>

                <div id="u131" class="ax_default" data-left="108" data-top="56" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u132" class="ax_default shape">
                    <div id="u132_div" class=""></div>
                    <div id="u132_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u133" class="ax_default icon" data-label="Down">
                    <img id="u133_img" class="img " src="../../Images/entry_page/down_u113.svg"/>
                    <div id="u133_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="u134" class="ax_default paragraph" data-label="Pick a Time Label">
          <div id="u134_div" class=""></div>
          <div id="u134_text" class="text ">
            <p><span>Change Window Start Time</span></p>
          </div>
        </div>

        <div id="u135" class="ax_default paragraph ax_default_hidden" data-label="Change Window Start Time Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u135_div" class=""></div>
          <div id="u135_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      <div id="u136" class="ax_default" data-label="Change Window Stop Time" data-left="1261" data-top="468" data-width="160" data-height="50" layer-opacity="1">

        <div id="u137" class="ax_default" data-label="Time Input" data-left="1261" data-top="486" data-width="160" data-height="32" layer-opacity="1">

          <div id="u138" class="ax_default text_field" data-label="Time Input">
            <div id="u138_div" class=""></div>
            <input id="u138_input" type="text" value="0:00 AM" class="u138_input" readonly/>
          </div>

          <div id="u139" class="ax_default icon" data-label="Clock Icon">
            <img id="u139_img" class="img " src="../../Images/entry_page/clock_icon_u107.svg"/>
            <div id="u139_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>
        </div>

        <div id="u140" class="ax_default ax_default_hidden" data-label="Time Selector" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u140_state0" class="panel_state" data-label="State1" >
            <div id="u140_state0_content" class="panel_state_content">

              <div id="u141" class="ax_default" data-label="Hours" data-left="16" data-top="9" data-width="36" data-height="72" layer-opacity="1">

                <div id="u142" class="ax_default label1" data-label="Hours">
                  <div id="u142_div" class=""></div>
                  <div id="u142_text" class="text ">
                    <p><span>1</span></p>
                  </div>
                </div>

                <div id="u143" class="ax_default" data-left="16" data-top="56" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u144" class="ax_default shape">
                    <div id="u144_div" class=""></div>
                    <div id="u144_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u145" class="ax_default icon" data-label="Down">
                    <img id="u145_img" class="img " src="../../Images/entry_page/down_u113.svg"/>
                    <div id="u145_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>

                <div id="u146" class="ax_default" data-left="16" data-top="9" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u147" class="ax_default shape">
                    <div id="u147_div" class=""></div>
                    <div id="u147_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u148" class="ax_default icon" data-label="Up">
                    <img id="u148_img" class="img " src="../../Images/entry_page/up_u116.svg"/>
                    <div id="u148_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="u149" class="ax_default label1" data-label="Seperator">
                <div id="u149_div" class=""></div>
                <div id="u149_text" class="text ">
                  <p><span>:</span></p>
                </div>
              </div>

              <div id="u150" class="ax_default" data-label="Minutes" data-left="62" data-top="9" data-width="36" data-height="72" layer-opacity="1">

                <div id="u151" class="ax_default label1" data-label="Minutes">
                  <div id="u151_div" class=""></div>
                  <div id="u151_text" class="text ">
                    <p><span>00</span></p>
                  </div>
                </div>

                <div id="u152" class="ax_default" data-left="62" data-top="56" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u153" class="ax_default shape">
                    <div id="u153_div" class=""></div>
                    <div id="u153_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u154" class="ax_default icon" data-label="Down">
                    <img id="u154_img" class="img " src="../../Images/entry_page/down_u113.svg"/>
                    <div id="u154_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>

                <div id="u155" class="ax_default" data-left="62" data-top="9" data-width="36" data-height="25" layer-opacity="1">

                  <div id="u156" class="ax_default shape">
                    <div id="u156_div" class=""></div>
                    <div id="u156_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  <div id="u157" class="ax_default icon" data-label="Up">
                    <img id="u157_img" class="img " src="../../Images/entry_page/up_u116.svg"/>
                    <div id="u157_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="u158" class="ax_default" data-label="AMPM" data-left="108" data-top="9" data-width="36" data-height="72" layer-opacity="1">

                <div id="u159" class="ax_default label1" data-label="AM PM">
                  <div id="u159_div" class=""></div>
                  <div id="u159_text" class="text ">
                    <p><span>PM</span></p>
                  </div>
                </div>

                <div id="u160" class="ax_default" data-left="108" data-top="9" data-width="36" data-height="25" layer-opacity="1">

                  
                  <div id="u161" class="ax_default shape">
                    <div id="u161_div" class=""></div>
                    <div id="u161_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u162" class="ax_default icon" data-label="Up">
                    <img id="u162_img" class="img " src="../../Images/entry_page/up_u116.svg"/>
                    <div id="u162_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>

                
                <div id="u163" class="ax_default" data-left="108" data-top="56" data-width="36" data-height="25" layer-opacity="1">

                  
                  <div id="u164" class="ax_default shape">
                    <div id="u164_div" class=""></div>
                    <div id="u164_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u165" class="ax_default icon" data-label="Down">
                    <img id="u165_img" class="img " src="../../Images/entry_page/down_u113.svg"/>
                    <div id="u165_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div id="u166" class="ax_default paragraph" data-label="Pick a Time Label">
          <div id="u166_div" class=""></div>
          <div id="u166_text" class="text ">
            <p><span>Change Window Stop Time</span></p>
          </div>
        </div>

        
        <div id="u167" class="ax_default paragraph ax_default_hidden" data-label="Change Window Stop Time Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u167_div" class=""></div>
          <div id="u167_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      
      <div id="u168" class="ax_default image">
        <img id="u168_img" class="img " src={logo}/>
        <div id="u168_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u169" class="ax_default box_3">
        <div id="u169_div" class=""></div>
        <div id="u169_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u170" class="ax_default box_3">
        <div id="u170_div" class=""></div>
        <div id="u170_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      CALL HERE
      <div id="u171" class="ax_default button">
        <div id="u171_div" class=""></div>
        <div id="u171_text" class="text ">
          <p><span>Submit Request</span></p>
        </div>
      </div>

      
      <div id="u172" class="ax_default button">
        <div id="u172_div" class=""></div>
        <div id="u172_text" class="text ">
          <p><span>View Change Reuqests</span></p>
        </div>
      </div>

      
      <div id="u173" class="ax_default button">
        <div id="u173_div" class=""></div>
        <div id="u173_text" class="text ">
          <p><span>Log out</span></p>
        </div>
      </div>

      
      <div id="u174" class="ax_default button">
        <div id="u174_div" class=""></div>
        <div id="u174_text" class="text ">
          <p><span>View Change Request Archive</span></p>
        </div>
      </div>

      
      <div id="u175" class="ax_default heading_1">
        <div id="u175_div" class=""></div>
        <div id="u175_text" class="text ">
          <p><span>Change Request Form</span></p>
        </div>
      </div>

      
      <div id="u176" class="ax_default" data-label="Change Window Start Date" data-left="1016" data-top="127" data-width="200" data-height="50" layer-opacity="1">

        
        <div id="u177" class="ax_default" data-label="Date Input" data-left="1016" data-top="145" data-width="200" data-height="32" layer-opacity="1">

          
          <div id="u178" class="ax_default text_field" data-label="ChangeWindowStartDate">
            <div id="u178_div" class=""></div>
            <input id="u178_input" type="text" value="" class="u178_input" readonly/>
          </div>

          
          <div id="u179" class="ax_default icon" data-label="Calendar Icon">
            <img id="u179_img" class="img " src="../../Images/entry_page/calendar_icon_u179.svg"/>
            <div id="u179_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>
        </div>

        
        <div id="u180" class="ax_default ax_default_hidden" data-label="Calendar Pane" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u180_state0" class="panel_state" data-label="August" >
            <div id="u180_state0_content" class="panel_state_content">

              
              <div id="u181" class="ax_default heading_3" data-label="Month">
                <div id="u181_div" class=""></div>
                <div id="u181_text" class="text ">
                  <p><span>August</span></p>
                </div>
              </div>

              
              <div id="u182" class="ax_default label1">
                <div id="u182_div" class=""></div>
                <div id="u182_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u183" class="ax_default label1">
                <div id="u183_div" class=""></div>
                <div id="u183_text" class="text ">
                  <p><span>M</span></p>
                </div>
              </div>

              
              <div id="u184" class="ax_default label1">
                <div id="u184_div" class=""></div>
                <div id="u184_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u185" class="ax_default label1">
                <div id="u185_div" class=""></div>
                <div id="u185_text" class="text ">
                  <p><span>W</span></p>
                </div>
              </div>

              
              <div id="u186" class="ax_default label1">
                <div id="u186_div" class=""></div>
                <div id="u186_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u187" class="ax_default label1">
                <div id="u187_div" class=""></div>
                <div id="u187_text" class="text ">
                  <p><span>F</span></p>
                </div>
              </div>

              
              <div id="u188" class="ax_default label1">
                <div id="u188_div" class=""></div>
                <div id="u188_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u189" class="ax_default label1" selectiongroup="My Dates">
                <div id="u189_div" class=""></div>
                <div id="u189_text" class="text ">
                  <p><span>01</span></p>
                </div>
              </div>

              
              <div id="u190" class="ax_default label1" selectiongroup="My Dates">
                <div id="u190_div" class=""></div>
                <div id="u190_text" class="text ">
                  <p><span>02</span></p>
                </div>
              </div>

              
              <div id="u191" class="ax_default label1" selectiongroup="My Dates">
                <div id="u191_div" class=""></div>
                <div id="u191_text" class="text ">
                  <p><span>03</span></p>
                </div>
              </div>

              
              <div id="u192" class="ax_default label1" selectiongroup="My Dates">
                <div id="u192_div" class=""></div>
                <div id="u192_text" class="text ">
                  <p><span>04</span></p>
                </div>
              </div>

              
              <div id="u193" class="ax_default label1" selectiongroup="My Dates">
                <div id="u193_div" class=""></div>
                <div id="u193_text" class="text ">
                  <p><span>05</span></p>
                </div>
              </div>

              
              <div id="u194" class="ax_default label1" selectiongroup="My Dates">
                <div id="u194_div" class=""></div>
                <div id="u194_text" class="text ">
                  <p><span>06</span></p>
                </div>
              </div>

              
              <div id="u195" class="ax_default label1" selectiongroup="My Dates">
                <div id="u195_div" class=""></div>
                <div id="u195_text" class="text ">
                  <p><span>07</span></p>
                </div>
              </div>

              
              <div id="u196" class="ax_default label1" selectiongroup="My Dates">
                <div id="u196_div" class=""></div>
                <div id="u196_text" class="text ">
                  <p><span>08</span></p>
                </div>
              </div>

              
              <div id="u197" class="ax_default label1" selectiongroup="My Dates">
                <div id="u197_div" class=""></div>
                <div id="u197_text" class="text ">
                  <p><span>09</span></p>
                </div>
              </div>

              
              <div id="u198" class="ax_default label1" selectiongroup="My Dates">
                <div id="u198_div" class=""></div>
                <div id="u198_text" class="text ">
                  <p><span>10</span></p>
                </div>
              </div>

              
              <div id="u199" class="ax_default label1" selectiongroup="My Dates">
                <div id="u199_div" class=""></div>
                <div id="u199_text" class="text ">
                  <p><span>11</span></p>
                </div>
              </div>

              
              <div id="u200" class="ax_default label1" selectiongroup="My Dates">
                <div id="u200_div" class=""></div>
                <div id="u200_text" class="text ">
                  <p><span>12</span></p>
                </div>
              </div>

              
              <div id="u201" class="ax_default label1" selectiongroup="My Dates">
                <div id="u201_div" class=""></div>
                <div id="u201_text" class="text ">
                  <p><span>13</span></p>
                </div>
              </div>

              
              <div id="u202" class="ax_default label1" selectiongroup="My Dates">
                <div id="u202_div" class=""></div>
                <div id="u202_text" class="text ">
                  <p><span>14</span></p>
                </div>
              </div>

              
              <div id="u203" class="ax_default label1" selectiongroup="My Dates">
                <div id="u203_div" class=""></div>
                <div id="u203_text" class="text ">
                  <p><span>15</span></p>
                </div>
              </div>

              
              <div id="u204" class="ax_default label1" selectiongroup="My Dates">
                <div id="u204_div" class=""></div>
                <div id="u204_text" class="text ">
                  <p><span>16</span></p>
                </div>
              </div>

              
              <div id="u205" class="ax_default label1" selectiongroup="My Dates">
                <div id="u205_div" class=""></div>
                <div id="u205_text" class="text ">
                  <p><span>17</span></p>
                </div>
              </div>

              
              <div id="u206" class="ax_default label1" selectiongroup="My Dates">
                <div id="u206_div" class=""></div>
                <div id="u206_text" class="text ">
                  <p><span>18</span></p>
                </div>
              </div>

              
              <div id="u207" class="ax_default label1" selectiongroup="My Dates">
                <div id="u207_div" class=""></div>
                <div id="u207_text" class="text ">
                  <p><span>19</span></p>
                </div>
              </div>

              
              <div id="u208" class="ax_default label1" selectiongroup="My Dates">
                <div id="u208_div" class=""></div>
                <div id="u208_text" class="text ">
                  <p><span>20</span></p>
                </div>
              </div>

              
              <div id="u209" class="ax_default label1" selectiongroup="My Dates">
                <div id="u209_div" class=""></div>
                <div id="u209_text" class="text ">
                  <p><span>21</span></p>
                </div>
              </div>

              
              <div id="u210" class="ax_default label1" selectiongroup="My Dates">
                <div id="u210_div" class=""></div>
                <div id="u210_text" class="text ">
                  <p><span>22</span></p>
                </div>
              </div>

              
              <div id="u211" class="ax_default label1" selectiongroup="My Dates">
                <div id="u211_div" class=""></div>
                <div id="u211_text" class="text ">
                  <p><span>23</span></p>
                </div>
              </div>

              
              <div id="u212" class="ax_default label1" selectiongroup="My Dates">
                <div id="u212_div" class=""></div>
                <div id="u212_text" class="text ">
                  <p><span>24</span></p>
                </div>
              </div>

              
              <div id="u213" class="ax_default label1" selectiongroup="My Dates">
                <div id="u213_div" class=""></div>
                <div id="u213_text" class="text ">
                  <p><span>25</span></p>
                </div>
              </div>

              
              <div id="u214" class="ax_default label1" selectiongroup="My Dates">
                <div id="u214_div" class=""></div>
                <div id="u214_text" class="text ">
                  <p><span>26</span></p>
                </div>
              </div>

              
              <div id="u215" class="ax_default label1" selectiongroup="My Dates">
                <div id="u215_div" class=""></div>
                <div id="u215_text" class="text ">
                  <p><span>27</span></p>
                </div>
              </div>

              
              <div id="u216" class="ax_default label1" selectiongroup="My Dates">
                <div id="u216_div" class=""></div>
                <div id="u216_text" class="text ">
                  <p><span>28</span></p>
                </div>
              </div>

              
              <div id="u217" class="ax_default label1" selectiongroup="My Dates">
                <div id="u217_div" class=""></div>
                <div id="u217_text" class="text ">
                  <p><span>29</span></p>
                </div>
              </div>

              
              <div id="u218" class="ax_default label1" selectiongroup="My Dates">
                <div id="u218_div" class=""></div>
                <div id="u218_text" class="text ">
                  <p><span>30</span></p>
                </div>
              </div>

              
              <div id="u219" class="ax_default label1" selectiongroup="My Dates">
                <div id="u219_div" class=""></div>
                <div id="u219_text" class="text ">
                  <p><span>31</span></p>
                </div>
              </div>

              
              <div id="u220" class="ax_default icon disabled" data-label="Next">
                <img id="u220_img" class="img " src="../../Images/entry_page/next_u220_disabled.svg"/>
                <div id="u220_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u221" class="ax_default icon" data-label="Previous">
                <img id="u221_img" class="img " src="../../Images/entry_page/previous_u221.svg"/>
                <div id="u221_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div id="u180_state1" class="panel_state" data-label="July" style={{visiblity: 'hidden'}}>
            <div id="u180_state1_content" class="panel_state_content">

              
              <div id="u222" class="ax_default heading_3" data-label="Month">
                <div id="u222_div" class=""></div>
                <div id="u222_text" class="text ">
                  <p><span>July</span></p>
                </div>
              </div>

              
              <div id="u223" class="ax_default label1">
                <div id="u223_div" class=""></div>
                <div id="u223_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u224" class="ax_default label1">
                <div id="u224_div" class=""></div>
                <div id="u224_text" class="text ">
                  <p><span>M</span></p>
                </div>
              </div>

              
              <div id="u225" class="ax_default label1">
                <div id="u225_div" class=""></div>
                <div id="u225_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u226" class="ax_default label1">
                <div id="u226_div" class=""></div>
                <div id="u226_text" class="text ">
                  <p><span>W</span></p>
                </div>
              </div>

              
              <div id="u227" class="ax_default label1">
                <div id="u227_div" class=""></div>
                <div id="u227_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u228" class="ax_default label1">
                <div id="u228_div" class=""></div>
                <div id="u228_text" class="text ">
                  <p><span>F</span></p>
                </div>
              </div>

              
              <div id="u229" class="ax_default label1">
                <div id="u229_div" class=""></div>
                <div id="u229_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u230" class="ax_default label1" selectiongroup="My Dates">
                <div id="u230_div" class=""></div>
                <div id="u230_text" class="text ">
                  <p><span>01</span></p>
                </div>
              </div>

              
              <div id="u231" class="ax_default label1" selectiongroup="My Dates">
                <div id="u231_div" class=""></div>
                <div id="u231_text" class="text ">
                  <p><span>02</span></p>
                </div>
              </div>

              
              <div id="u232" class="ax_default label1" selectiongroup="My Dates">
                <div id="u232_div" class=""></div>
                <div id="u232_text" class="text ">
                  <p><span>03</span></p>
                </div>
              </div>

              
              <div id="u233" class="ax_default label1" selectiongroup="My Dates">
                <div id="u233_div" class=""></div>
                <div id="u233_text" class="text ">
                  <p><span>04</span></p>
                </div>
              </div>

              
              <div id="u234" class="ax_default label1" selectiongroup="My Dates">
                <div id="u234_div" class=""></div>
                <div id="u234_text" class="text ">
                  <p><span>05</span></p>
                </div>
              </div>

              
              <div id="u235" class="ax_default label1" selectiongroup="My Dates">
                <div id="u235_div" class=""></div>
                <div id="u235_text" class="text ">
                  <p><span>06</span></p>
                </div>
              </div>

              
              <div id="u236" class="ax_default label1" selectiongroup="My Dates">
                <div id="u236_div" class=""></div>
                <div id="u236_text" class="text ">
                  <p><span>07</span></p>
                </div>
              </div>

              
              <div id="u237" class="ax_default label1" selectiongroup="My Dates">
                <div id="u237_div" class=""></div>
                <div id="u237_text" class="text ">
                  <p><span>08</span></p>
                </div>
              </div>

              
              <div id="u238" class="ax_default label1" selectiongroup="My Dates">
                <div id="u238_div" class=""></div>
                <div id="u238_text" class="text ">
                  <p><span>09</span></p>
                </div>
              </div>

              
              <div id="u239" class="ax_default label1" selectiongroup="My Dates">
                <div id="u239_div" class=""></div>
                <div id="u239_text" class="text ">
                  <p><span>10</span></p>
                </div>
              </div>

              
              <div id="u240" class="ax_default label1" selectiongroup="My Dates">
                <div id="u240_div" class=""></div>
                <div id="u240_text" class="text ">
                  <p><span>11</span></p>
                </div>
              </div>

              
              <div id="u241" class="ax_default label1" selectiongroup="My Dates">
                <div id="u241_div" class=""></div>
                <div id="u241_text" class="text ">
                  <p><span>12</span></p>
                </div>
              </div>

              
              <div id="u242" class="ax_default label1" selectiongroup="My Dates">
                <div id="u242_div" class=""></div>
                <div id="u242_text" class="text ">
                  <p><span>13</span></p>
                </div>
              </div>

              
              <div id="u243" class="ax_default label1" selectiongroup="My Dates">
                <div id="u243_div" class=""></div>
                <div id="u243_text" class="text ">
                  <p><span>14</span></p>
                </div>
              </div>

              
              <div id="u244" class="ax_default label1" selectiongroup="My Dates">
                <div id="u244_div" class=""></div>
                <div id="u244_text" class="text ">
                  <p><span>15</span></p>
                </div>
              </div>

              
              <div id="u245" class="ax_default label1" selectiongroup="My Dates">
                <div id="u245_div" class=""></div>
                <div id="u245_text" class="text ">
                  <p><span>16</span></p>
                </div>
              </div>

              
              <div id="u246" class="ax_default label1" selectiongroup="My Dates">
                <div id="u246_div" class=""></div>
                <div id="u246_text" class="text ">
                  <p><span>17</span></p>
                </div>
              </div>

              
              <div id="u247" class="ax_default label1" selectiongroup="My Dates">
                <div id="u247_div" class=""></div>
                <div id="u247_text" class="text ">
                  <p><span>18</span></p>
                </div>
              </div>

              
              <div id="u248" class="ax_default label1" selectiongroup="My Dates">
                <div id="u248_div" class=""></div>
                <div id="u248_text" class="text ">
                  <p><span>19</span></p>
                </div>
              </div>

              
              <div id="u249" class="ax_default label1" selectiongroup="My Dates">
                <div id="u249_div" class=""></div>
                <div id="u249_text" class="text ">
                  <p><span>20</span></p>
                </div>
              </div>

              
              <div id="u250" class="ax_default label1" selectiongroup="My Dates">
                <div id="u250_div" class=""></div>
                <div id="u250_text" class="text ">
                  <p><span>21</span></p>
                </div>
              </div>

              
              <div id="u251" class="ax_default label1" selectiongroup="My Dates">
                <div id="u251_div" class=""></div>
                <div id="u251_text" class="text ">
                  <p><span>22</span></p>
                </div>
              </div>

              
              <div id="u252" class="ax_default label1" selectiongroup="My Dates">
                <div id="u252_div" class=""></div>
                <div id="u252_text" class="text ">
                  <p><span>23</span></p>
                </div>
              </div>

              
              <div id="u253" class="ax_default label1" selectiongroup="My Dates">
                <div id="u253_div" class=""></div>
                <div id="u253_text" class="text ">
                  <p><span>24</span></p>
                </div>
              </div>

              
              <div id="u254" class="ax_default label1" selectiongroup="My Dates">
                <div id="u254_div" class=""></div>
                <div id="u254_text" class="text ">
                  <p><span>25</span></p>
                </div>
              </div>

              
              <div id="u255" class="ax_default label1" selectiongroup="My Dates">
                <div id="u255_div" class=""></div>
                <div id="u255_text" class="text ">
                  <p><span>26</span></p>
                </div>
              </div>

              
              <div id="u256" class="ax_default label1" selectiongroup="My Dates">
                <div id="u256_div" class=""></div>
                <div id="u256_text" class="text ">
                  <p><span>27</span></p>
                </div>
              </div>

              
              <div id="u257" class="ax_default label1" selectiongroup="My Dates">
                <div id="u257_div" class=""></div>
                <div id="u257_text" class="text ">
                  <p><span>28</span></p>
                </div>
              </div>

              
              <div id="u258" class="ax_default label1" selectiongroup="My Dates">
                <div id="u258_div" class=""></div>
                <div id="u258_text" class="text ">
                  <p><span>29</span></p>
                </div>
              </div>

              
              <div id="u259" class="ax_default label1" selectiongroup="My Dates">
                <div id="u259_div" class=""></div>
                <div id="u259_text" class="text ">
                  <p><span>30</span></p>
                </div>
              </div>

              
              <div id="u260" class="ax_default label1" selectiongroup="My Dates">
                <div id="u260_div" class=""></div>
                <div id="u260_text" class="text ">
                  <p><span>31</span></p>
                </div>
              </div>

              
              <div id="u261" class="ax_default icon" data-label="Next">
                <img id="u261_img" class="img " src="../../Images/entry_page/next_u220.svg"/>
                <div id="u261_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u262" class="ax_default icon" data-label="Previous">
                <img id="u262_img" class="img " src="../../Images/entry_page/previous_u221.svg"/>
                <div id="u262_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div id="u180_state2" class="panel_state" data-label="June" style={{visiblity: 'hidden'}}>
            <div id="u180_state2_content" class="panel_state_content">

              
              <div id="u263" class="ax_default heading_3" data-label="Month">
                <div id="u263_div" class=""></div>
                <div id="u263_text" class="text ">
                  <p><span>June</span></p>
                </div>
              </div>

              
              <div id="u264" class="ax_default label1">
                <div id="u264_div" class=""></div>
                <div id="u264_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u265" class="ax_default label1">
                <div id="u265_div" class=""></div>
                <div id="u265_text" class="text ">
                  <p><span>M</span></p>
                </div>
              </div>

              
              <div id="u266" class="ax_default label1">
                <div id="u266_div" class=""></div>
                <div id="u266_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u267" class="ax_default label1">
                <div id="u267_div" class=""></div>
                <div id="u267_text" class="text ">
                  <p><span>W</span></p>
                </div>
              </div>

              
              <div id="u268" class="ax_default label1">
                <div id="u268_div" class=""></div>
                <div id="u268_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u269" class="ax_default label1">
                <div id="u269_div" class=""></div>
                <div id="u269_text" class="text ">
                  <p><span>F</span></p>
                </div>
              </div>

              
              <div id="u270" class="ax_default label1">
                <div id="u270_div" class=""></div>
                <div id="u270_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u271" class="ax_default label1" selectiongroup="My Dates">
                <div id="u271_div" class=""></div>
                <div id="u271_text" class="text ">
                  <p><span>01</span></p>
                </div>
              </div>

              
              <div id="u272" class="ax_default label1" selectiongroup="My Dates">
                <div id="u272_div" class=""></div>
                <div id="u272_text" class="text ">
                  <p><span>02</span></p>
                </div>
              </div>

              
              <div id="u273" class="ax_default label1" selectiongroup="My Dates">
                <div id="u273_div" class=""></div>
                <div id="u273_text" class="text ">
                  <p><span>03</span></p>
                </div>
              </div>

              
              <div id="u274" class="ax_default label1" selectiongroup="My Dates">
                <div id="u274_div" class=""></div>
                <div id="u274_text" class="text ">
                  <p><span>04</span></p>
                </div>
              </div>

              
              <div id="u275" class="ax_default label1" selectiongroup="My Dates">
                <div id="u275_div" class=""></div>
                <div id="u275_text" class="text ">
                  <p><span>05</span></p>
                </div>
              </div>

              
              <div id="u276" class="ax_default label1" selectiongroup="My Dates">
                <div id="u276_div" class=""></div>
                <div id="u276_text" class="text ">
                  <p><span>06</span></p>
                </div>
              </div>

              
              <div id="u277" class="ax_default label1" selectiongroup="My Dates">
                <div id="u277_div" class=""></div>
                <div id="u277_text" class="text ">
                  <p><span>07</span></p>
                </div>
              </div>

              
              <div id="u278" class="ax_default label1" selectiongroup="My Dates">
                <div id="u278_div" class=""></div>
                <div id="u278_text" class="text ">
                  <p><span>08</span></p>
                </div>
              </div>

              
              <div id="u279" class="ax_default label1" selectiongroup="My Dates">
                <div id="u279_div" class=""></div>
                <div id="u279_text" class="text ">
                  <p><span>09</span></p>
                </div>
              </div>

              
              <div id="u280" class="ax_default label1" selectiongroup="My Dates">
                <div id="u280_div" class=""></div>
                <div id="u280_text" class="text ">
                  <p><span>10</span></p>
                </div>
              </div>

              
              <div id="u281" class="ax_default label1" selectiongroup="My Dates">
                <div id="u281_div" class=""></div>
                <div id="u281_text" class="text ">
                  <p><span>11</span></p>
                </div>
              </div>

              
              <div id="u282" class="ax_default label1" selectiongroup="My Dates">
                <div id="u282_div" class=""></div>
                <div id="u282_text" class="text ">
                  <p><span>12</span></p>
                </div>
              </div>

              
              <div id="u283" class="ax_default label1" selectiongroup="My Dates">
                <div id="u283_div" class=""></div>
                <div id="u283_text" class="text ">
                  <p><span>13</span></p>
                </div>
              </div>

              
              <div id="u284" class="ax_default label1" selectiongroup="My Dates">
                <div id="u284_div" class=""></div>
                <div id="u284_text" class="text ">
                  <p><span>14</span></p>
                </div>
              </div>

              
              <div id="u285" class="ax_default label1" selectiongroup="My Dates">
                <div id="u285_div" class=""></div>
                <div id="u285_text" class="text ">
                  <p><span>15</span></p>
                </div>
              </div>

              
              <div id="u286" class="ax_default label1" selectiongroup="My Dates">
                <div id="u286_div" class=""></div>
                <div id="u286_text" class="text ">
                  <p><span>16</span></p>
                </div>
              </div>

              
              <div id="u287" class="ax_default label1" selectiongroup="My Dates">
                <div id="u287_div" class=""></div>
                <div id="u287_text" class="text ">
                  <p><span>17</span></p>
                </div>
              </div>

              
              <div id="u288" class="ax_default label1" selectiongroup="My Dates">
                <div id="u288_div" class=""></div>
                <div id="u288_text" class="text ">
                  <p><span>18</span></p>
                </div>
              </div>

              
              <div id="u289" class="ax_default label1" selectiongroup="My Dates">
                <div id="u289_div" class=""></div>
                <div id="u289_text" class="text ">
                  <p><span>19</span></p>
                </div>
              </div>

              
              <div id="u290" class="ax_default label1" selectiongroup="My Dates">
                <div id="u290_div" class=""></div>
                <div id="u290_text" class="text ">
                  <p><span>20</span></p>
                </div>
              </div>

              
              <div id="u291" class="ax_default label1" selectiongroup="My Dates">
                <div id="u291_div" class=""></div>
                <div id="u291_text" class="text ">
                  <p><span>21</span></p>
                </div>
              </div>

              
              <div id="u292" class="ax_default label1" selectiongroup="My Dates">
                <div id="u292_div" class=""></div>
                <div id="u292_text" class="text ">
                  <p><span>22</span></p>
                </div>
              </div>

              
              <div id="u293" class="ax_default label1" selectiongroup="My Dates">
                <div id="u293_div" class=""></div>
                <div id="u293_text" class="text ">
                  <p><span>23</span></p>
                </div>
              </div>

              
              <div id="u294" class="ax_default label1" selectiongroup="My Dates">
                <div id="u294_div" class=""></div>
                <div id="u294_text" class="text ">
                  <p><span>24</span></p>
                </div>
              </div>

              
              <div id="u295" class="ax_default label1" selectiongroup="My Dates">
                <div id="u295_div" class=""></div>
                <div id="u295_text" class="text ">
                  <p><span>25</span></p>
                </div>
              </div>

              
              <div id="u296" class="ax_default label1" selectiongroup="My Dates">
                <div id="u296_div" class=""></div>
                <div id="u296_text" class="text ">
                  <p><span>26</span></p>
                </div>
              </div>

              
              <div id="u297" class="ax_default label1" selectiongroup="My Dates">
                <div id="u297_div" class=""></div>
                <div id="u297_text" class="text ">
                  <p><span>27</span></p>
                </div>
              </div>

              
              <div id="u298" class="ax_default label1" selectiongroup="My Dates">
                <div id="u298_div" class=""></div>
                <div id="u298_text" class="text ">
                  <p><span>28</span></p>
                </div>
              </div>

              
              <div id="u299" class="ax_default label1" selectiongroup="My Dates">
                <div id="u299_div" class=""></div>
                <div id="u299_text" class="text ">
                  <p><span>29</span></p>
                </div>
              </div>

              
              <div id="u300" class="ax_default label1" selectiongroup="My Dates">
                <div id="u300_div" class=""></div>
                <div id="u300_text" class="text ">
                  <p><span>30</span></p>
                </div>
              </div>

              
              <div id="u301" class="ax_default icon" data-label="Next">
                <img id="u301_img" class="img " src="../../Images/entry_page/next_u220.svg"/>
                <div id="u301_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u302" class="ax_default icon disabled" data-label="Previous">
                <img id="u302_img" class="img " src="../../Images/entry_page/previous_u302_disabled.svg"/>
                <div id="u302_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u303" class="ax_default icon" data-label="Next">
                <img id="u303_img" class="img " src="../../Images/entry_page/next_u220.svg"/>
                <div id="u303_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div id="u304" class="ax_default paragraph" data-label="Pick a date Label">
          <div id="u304_div" class=""></div>
          <div id="u304_text" class="text ">
            <p><span>Change Window Start Date</span></p>
          </div>
        </div>

        
        <div id="u305" class="ax_default paragraph ax_default_hidden" data-label="Change Window Start Date Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u305_div" class=""></div>
          <div id="u305_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      
      <div id="u306" class="ax_default" data-label="Change Window Stop Date" data-left="1016" data-top="468" data-width="200" data-height="50" layer-opacity="1">

        
        <div id="u307" class="ax_default" data-label="Date Input" data-left="1016" data-top="486" data-width="200" data-height="32" layer-opacity="1">

          
          <div id="u308" class="ax_default text_field" data-label="ChangeWindowStopDate">
            <div id="u308_div" class=""></div>
            <input id="u308_input" type="text" value="" class="u308_input" readonly/>
          </div>

          
          <div id="u309" class="ax_default icon" data-label="Calendar Icon">
            <img id="u309_img" class="img " src="../../Images/entry_page/calendar_icon_u179.svg"/>
            <div id="u309_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
              <p></p>
            </div>
          </div>
        </div>

        
        <div id="u310" class="ax_default ax_default_hidden" data-label="Calendar Pane" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u310_state0" class="panel_state" data-label="August" >
            <div id="u310_state0_content" class="panel_state_content">

              
              <div id="u311" class="ax_default heading_3" data-label="Month">
                <div id="u311_div" class=""></div>
                <div id="u311_text" class="text ">
                  <p><span>August</span></p>
                </div>
              </div>

              
              <div id="u312" class="ax_default label1">
                <div id="u312_div" class=""></div>
                <div id="u312_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u313" class="ax_default label1">
                <div id="u313_div" class=""></div>
                <div id="u313_text" class="text ">
                  <p><span>M</span></p>
                </div>
              </div>

              
              <div id="u314" class="ax_default label1">
                <div id="u314_div" class=""></div>
                <div id="u314_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u315" class="ax_default label1">
                <div id="u315_div" class=""></div>
                <div id="u315_text" class="text ">
                  <p><span>W</span></p>
                </div>
              </div>

              
              <div id="u316" class="ax_default label1">
                <div id="u316_div" class=""></div>
                <div id="u316_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u317" class="ax_default label1">
                <div id="u317_div" class=""></div>
                <div id="u317_text" class="text ">
                  <p><span>F</span></p>
                </div>
              </div>

              
              <div id="u318" class="ax_default label1">
                <div id="u318_div" class=""></div>
                <div id="u318_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u319" class="ax_default label1" selectiongroup="My Dates">
                <div id="u319_div" class=""></div>
                <div id="u319_text" class="text ">
                  <p><span>01</span></p>
                </div>
              </div>

              
              <div id="u320" class="ax_default label1" selectiongroup="My Dates">
                <div id="u320_div" class=""></div>
                <div id="u320_text" class="text ">
                  <p><span>02</span></p>
                </div>
              </div>

              
              <div id="u321" class="ax_default label1" selectiongroup="My Dates">
                <div id="u321_div" class=""></div>
                <div id="u321_text" class="text ">
                  <p><span>03</span></p>
                </div>
              </div>

              
              <div id="u322" class="ax_default label1" selectiongroup="My Dates">
                <div id="u322_div" class=""></div>
                <div id="u322_text" class="text ">
                  <p><span>04</span></p>
                </div>
              </div>

              
              <div id="u323" class="ax_default label1" selectiongroup="My Dates">
                <div id="u323_div" class=""></div>
                <div id="u323_text" class="text ">
                  <p><span>05</span></p>
                </div>
              </div>

              
              <div id="u324" class="ax_default label1" selectiongroup="My Dates">
                <div id="u324_div" class=""></div>
                <div id="u324_text" class="text ">
                  <p><span>06</span></p>
                </div>
              </div>

              
              <div id="u325" class="ax_default label1" selectiongroup="My Dates">
                <div id="u325_div" class=""></div>
                <div id="u325_text" class="text ">
                  <p><span>07</span></p>
                </div>
              </div>

              
              <div id="u326" class="ax_default label1" selectiongroup="My Dates">
                <div id="u326_div" class=""></div>
                <div id="u326_text" class="text ">
                  <p><span>08</span></p>
                </div>
              </div>

              
              <div id="u327" class="ax_default label1" selectiongroup="My Dates">
                <div id="u327_div" class=""></div>
                <div id="u327_text" class="text ">
                  <p><span>09</span></p>
                </div>
              </div>

              
              <div id="u328" class="ax_default label1" selectiongroup="My Dates">
                <div id="u328_div" class=""></div>
                <div id="u328_text" class="text ">
                  <p><span>10</span></p>
                </div>
              </div>

              
              <div id="u329" class="ax_default label1" selectiongroup="My Dates">
                <div id="u329_div" class=""></div>
                <div id="u329_text" class="text ">
                  <p><span>11</span></p>
                </div>
              </div>

              
              <div id="u330" class="ax_default label1" selectiongroup="My Dates">
                <div id="u330_div" class=""></div>
                <div id="u330_text" class="text ">
                  <p><span>12</span></p>
                </div>
              </div>

              
              <div id="u331" class="ax_default label1" selectiongroup="My Dates">
                <div id="u331_div" class=""></div>
                <div id="u331_text" class="text ">
                  <p><span>13</span></p>
                </div>
              </div>

              
              <div id="u332" class="ax_default label1" selectiongroup="My Dates">
                <div id="u332_div" class=""></div>
                <div id="u332_text" class="text ">
                  <p><span>14</span></p>
                </div>
              </div>

              
              <div id="u333" class="ax_default label1" selectiongroup="My Dates">
                <div id="u333_div" class=""></div>
                <div id="u333_text" class="text ">
                  <p><span>15</span></p>
                </div>
              </div>

              
              <div id="u334" class="ax_default label1" selectiongroup="My Dates">
                <div id="u334_div" class=""></div>
                <div id="u334_text" class="text ">
                  <p><span>16</span></p>
                </div>
              </div>

              
              <div id="u335" class="ax_default label1" selectiongroup="My Dates">
                <div id="u335_div" class=""></div>
                <div id="u335_text" class="text ">
                  <p><span>17</span></p>
                </div>
              </div>

              
              <div id="u336" class="ax_default label1" selectiongroup="My Dates">
                <div id="u336_div" class=""></div>
                <div id="u336_text" class="text ">
                  <p><span>18</span></p>
                </div>
              </div>

              
              <div id="u337" class="ax_default label1" selectiongroup="My Dates">
                <div id="u337_div" class=""></div>
                <div id="u337_text" class="text ">
                  <p><span>19</span></p>
                </div>
              </div>

              
              <div id="u338" class="ax_default label1" selectiongroup="My Dates">
                <div id="u338_div" class=""></div>
                <div id="u338_text" class="text ">
                  <p><span>20</span></p>
                </div>
              </div>

              
              <div id="u339" class="ax_default label1" selectiongroup="My Dates">
                <div id="u339_div" class=""></div>
                <div id="u339_text" class="text ">
                  <p><span>21</span></p>
                </div>
              </div>

              
              <div id="u340" class="ax_default label1" selectiongroup="My Dates">
                <div id="u340_div" class=""></div>
                <div id="u340_text" class="text ">
                  <p><span>22</span></p>
                </div>
              </div>

              
              <div id="u341" class="ax_default label1" selectiongroup="My Dates">
                <div id="u341_div" class=""></div>
                <div id="u341_text" class="text ">
                  <p><span>23</span></p>
                </div>
              </div>

              
              <div id="u342" class="ax_default label1" selectiongroup="My Dates">
                <div id="u342_div" class=""></div>
                <div id="u342_text" class="text ">
                  <p><span>24</span></p>
                </div>
              </div>

              
              <div id="u343" class="ax_default label1" selectiongroup="My Dates">
                <div id="u343_div" class=""></div>
                <div id="u343_text" class="text ">
                  <p><span>25</span></p>
                </div>
              </div>

              
              <div id="u344" class="ax_default label1" selectiongroup="My Dates">
                <div id="u344_div" class=""></div>
                <div id="u344_text" class="text ">
                  <p><span>26</span></p>
                </div>
              </div>

              
              <div id="u345" class="ax_default label1" selectiongroup="My Dates">
                <div id="u345_div" class=""></div>
                <div id="u345_text" class="text ">
                  <p><span>27</span></p>
                </div>
              </div>

              
              <div id="u346" class="ax_default label1" selectiongroup="My Dates">
                <div id="u346_div" class=""></div>
                <div id="u346_text" class="text ">
                  <p><span>28</span></p>
                </div>
              </div>

              
              <div id="u347" class="ax_default label1" selectiongroup="My Dates">
                <div id="u347_div" class=""></div>
                <div id="u347_text" class="text ">
                  <p><span>29</span></p>
                </div>
              </div>

              
              <div id="u348" class="ax_default label1" selectiongroup="My Dates">
                <div id="u348_div" class=""></div>
                <div id="u348_text" class="text ">
                  <p><span>30</span></p>
                </div>
              </div>

              
              <div id="u349" class="ax_default label1" selectiongroup="My Dates">
                <div id="u349_div" class=""></div>
                <div id="u349_text" class="text ">
                  <p><span>31</span></p>
                </div>
              </div>

              
              <div id="u350" class="ax_default icon disabled" data-label="Next">
                <img id="u350_img" class="img " src="../../Images/entry_page/next_u220_disabled.svg"/>
                <div id="u350_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u351" class="ax_default icon" data-label="Previous">
                <img id="u351_img" class="img " src="../../Images/entry_page/previous_u221.svg"/>
                <div id="u351_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div id="u310_state1" class="panel_state" data-label="July" style={{visiblity: 'hidden'}}>
            <div id="u310_state1_content" class="panel_state_content">

              
              <div id="u352" class="ax_default heading_3" data-label="Month">
                <div id="u352_div" class=""></div>
                <div id="u352_text" class="text ">
                  <p><span>July</span></p>
                </div>
              </div>

              
              <div id="u353" class="ax_default label1">
                <div id="u353_div" class=""></div>
                <div id="u353_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u354" class="ax_default label1">
                <div id="u354_div" class=""></div>
                <div id="u354_text" class="text ">
                  <p><span>M</span></p>
                </div>
              </div>

              
              <div id="u355" class="ax_default label1">
                <div id="u355_div" class=""></div>
                <div id="u355_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u356" class="ax_default label1">
                <div id="u356_div" class=""></div>
                <div id="u356_text" class="text ">
                  <p><span>W</span></p>
                </div>
              </div>

              
              <div id="u357" class="ax_default label1">
                <div id="u357_div" class=""></div>
                <div id="u357_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u358" class="ax_default label1">
                <div id="u358_div" class=""></div>
                <div id="u358_text" class="text ">
                  <p><span>F</span></p>
                </div>
              </div>

              
              <div id="u359" class="ax_default label1">
                <div id="u359_div" class=""></div>
                <div id="u359_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u360" class="ax_default label1" selectiongroup="My Dates">
                <div id="u360_div" class=""></div>
                <div id="u360_text" class="text ">
                  <p><span>01</span></p>
                </div>
              </div>

              
              <div id="u361" class="ax_default label1" selectiongroup="My Dates">
                <div id="u361_div" class=""></div>
                <div id="u361_text" class="text ">
                  <p><span>02</span></p>
                </div>
              </div>

              
              <div id="u362" class="ax_default label1" selectiongroup="My Dates">
                <div id="u362_div" class=""></div>
                <div id="u362_text" class="text ">
                  <p><span>03</span></p>
                </div>
              </div>

              
              <div id="u363" class="ax_default label1" selectiongroup="My Dates">
                <div id="u363_div" class=""></div>
                <div id="u363_text" class="text ">
                  <p><span>04</span></p>
                </div>
              </div>

              
              <div id="u364" class="ax_default label1" selectiongroup="My Dates">
                <div id="u364_div" class=""></div>
                <div id="u364_text" class="text ">
                  <p><span>05</span></p>
                </div>
              </div>

              
              <div id="u365" class="ax_default label1" selectiongroup="My Dates">
                <div id="u365_div" class=""></div>
                <div id="u365_text" class="text ">
                  <p><span>06</span></p>
                </div>
              </div>

              
              <div id="u366" class="ax_default label1" selectiongroup="My Dates">
                <div id="u366_div" class=""></div>
                <div id="u366_text" class="text ">
                  <p><span>07</span></p>
                </div>
              </div>

              
              <div id="u367" class="ax_default label1" selectiongroup="My Dates">
                <div id="u367_div" class=""></div>
                <div id="u367_text" class="text ">
                  <p><span>08</span></p>
                </div>
              </div>

              
              <div id="u368" class="ax_default label1" selectiongroup="My Dates">
                <div id="u368_div" class=""></div>
                <div id="u368_text" class="text ">
                  <p><span>09</span></p>
                </div>
              </div>

              
              <div id="u369" class="ax_default label1" selectiongroup="My Dates">
                <div id="u369_div" class=""></div>
                <div id="u369_text" class="text ">
                  <p><span>10</span></p>
                </div>
              </div>

              
              <div id="u370" class="ax_default label1" selectiongroup="My Dates">
                <div id="u370_div" class=""></div>
                <div id="u370_text" class="text ">
                  <p><span>11</span></p>
                </div>
              </div>

              
              <div id="u371" class="ax_default label1" selectiongroup="My Dates">
                <div id="u371_div" class=""></div>
                <div id="u371_text" class="text ">
                  <p><span>12</span></p>
                </div>
              </div>

              
              <div id="u372" class="ax_default label1" selectiongroup="My Dates">
                <div id="u372_div" class=""></div>
                <div id="u372_text" class="text ">
                  <p><span>13</span></p>
                </div>
              </div>

              
              <div id="u373" class="ax_default label1" selectiongroup="My Dates">
                <div id="u373_div" class=""></div>
                <div id="u373_text" class="text ">
                  <p><span>14</span></p>
                </div>
              </div>

              
              <div id="u374" class="ax_default label1" selectiongroup="My Dates">
                <div id="u374_div" class=""></div>
                <div id="u374_text" class="text ">
                  <p><span>15</span></p>
                </div>
              </div>

              
              <div id="u375" class="ax_default label1" selectiongroup="My Dates">
                <div id="u375_div" class=""></div>
                <div id="u375_text" class="text ">
                  <p><span>16</span></p>
                </div>
              </div>

              
              <div id="u376" class="ax_default label1" selectiongroup="My Dates">
                <div id="u376_div" class=""></div>
                <div id="u376_text" class="text ">
                  <p><span>17</span></p>
                </div>
              </div>

              
              <div id="u377" class="ax_default label1" selectiongroup="My Dates">
                <div id="u377_div" class=""></div>
                <div id="u377_text" class="text ">
                  <p><span>18</span></p>
                </div>
              </div>

              
              <div id="u378" class="ax_default label1" selectiongroup="My Dates">
                <div id="u378_div" class=""></div>
                <div id="u378_text" class="text ">
                  <p><span>19</span></p>
                </div>
              </div>

              
              <div id="u379" class="ax_default label1" selectiongroup="My Dates">
                <div id="u379_div" class=""></div>
                <div id="u379_text" class="text ">
                  <p><span>20</span></p>
                </div>
              </div>

              
              <div id="u380" class="ax_default label1" selectiongroup="My Dates">
                <div id="u380_div" class=""></div>
                <div id="u380_text" class="text ">
                  <p><span>21</span></p>
                </div>
              </div>

              
              <div id="u381" class="ax_default label1" selectiongroup="My Dates">
                <div id="u381_div" class=""></div>
                <div id="u381_text" class="text ">
                  <p><span>22</span></p>
                </div>
              </div>

              
              <div id="u382" class="ax_default label1" selectiongroup="My Dates">
                <div id="u382_div" class=""></div>
                <div id="u382_text" class="text ">
                  <p><span>23</span></p>
                </div>
              </div>

              
              <div id="u383" class="ax_default label1" selectiongroup="My Dates">
                <div id="u383_div" class=""></div>
                <div id="u383_text" class="text ">
                  <p><span>24</span></p>
                </div>
              </div>

              
              <div id="u384" class="ax_default label1" selectiongroup="My Dates">
                <div id="u384_div" class=""></div>
                <div id="u384_text" class="text ">
                  <p><span>25</span></p>
                </div>
              </div>

              
              <div id="u385" class="ax_default label1" selectiongroup="My Dates">
                <div id="u385_div" class=""></div>
                <div id="u385_text" class="text ">
                  <p><span>26</span></p>
                </div>
              </div>

              
              <div id="u386" class="ax_default label1" selectiongroup="My Dates">
                <div id="u386_div" class=""></div>
                <div id="u386_text" class="text ">
                  <p><span>27</span></p>
                </div>
              </div>

              
              <div id="u387" class="ax_default label1" selectiongroup="My Dates">
                <div id="u387_div" class=""></div>
                <div id="u387_text" class="text ">
                  <p><span>28</span></p>
                </div>
              </div>

              
              <div id="u388" class="ax_default label1" selectiongroup="My Dates">
                <div id="u388_div" class=""></div>
                <div id="u388_text" class="text ">
                  <p><span>29</span></p>
                </div>
              </div>

              
              <div id="u389" class="ax_default label1" selectiongroup="My Dates">
                <div id="u389_div" class=""></div>
                <div id="u389_text" class="text ">
                  <p><span>30</span></p>
                </div>
              </div>

              
              <div id="u390" class="ax_default label1" selectiongroup="My Dates">
                <div id="u390_div" class=""></div>
                <div id="u390_text" class="text ">
                  <p><span>31</span></p>
                </div>
              </div>

              
              <div id="u391" class="ax_default icon" data-label="Next">
                <img id="u391_img" class="img " src="../../Images/entry_page/next_u220.svg"/>
                <div id="u391_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u392" class="ax_default icon" data-label="Previous">
                <img id="u392_img" class="img " src="../../Images/entry_page/previous_u221.svg"/>
                <div id="u392_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div id="u310_state2" class="panel_state" data-label="June" style={{visiblity: 'hidden'}}>
            <div id="u310_state2_content" class="panel_state_content">

              
              <div id="u393" class="ax_default heading_3" data-label="Month">
                <div id="u393_div" class=""></div>
                <div id="u393_text" class="text ">
                  <p><span>June</span></p>
                </div>
              </div>

              
              <div id="u394" class="ax_default label1">
                <div id="u394_div" class=""></div>
                <div id="u394_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u395" class="ax_default label1">
                <div id="u395_div" class=""></div>
                <div id="u395_text" class="text ">
                  <p><span>M</span></p>
                </div>
              </div>

              
              <div id="u396" class="ax_default label1">
                <div id="u396_div" class=""></div>
                <div id="u396_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u397" class="ax_default label1">
                <div id="u397_div" class=""></div>
                <div id="u397_text" class="text ">
                  <p><span>W</span></p>
                </div>
              </div>

              
              <div id="u398" class="ax_default label1">
                <div id="u398_div" class=""></div>
                <div id="u398_text" class="text ">
                  <p><span>T</span></p>
                </div>
              </div>

              
              <div id="u399" class="ax_default label1">
                <div id="u399_div" class=""></div>
                <div id="u399_text" class="text ">
                  <p><span>F</span></p>
                </div>
              </div>

              
              <div id="u400" class="ax_default label1">
                <div id="u400_div" class=""></div>
                <div id="u400_text" class="text ">
                  <p><span>S</span></p>
                </div>
              </div>

              
              <div id="u401" class="ax_default label1" selectiongroup="My Dates">
                <div id="u401_div" class=""></div>
                <div id="u401_text" class="text ">
                  <p><span>01</span></p>
                </div>
              </div>

              
              <div id="u402" class="ax_default label1" selectiongroup="My Dates">
                <div id="u402_div" class=""></div>
                <div id="u402_text" class="text ">
                  <p><span>02</span></p>
                </div>
              </div>

              
              <div id="u403" class="ax_default label1" selectiongroup="My Dates">
                <div id="u403_div" class=""></div>
                <div id="u403_text" class="text ">
                  <p><span>03</span></p>
                </div>
              </div>

              
              <div id="u404" class="ax_default label1" selectiongroup="My Dates">
                <div id="u404_div" class=""></div>
                <div id="u404_text" class="text ">
                  <p><span>04</span></p>
                </div>
              </div>

              
              <div id="u405" class="ax_default label1" selectiongroup="My Dates">
                <div id="u405_div" class=""></div>
                <div id="u405_text" class="text ">
                  <p><span>05</span></p>
                </div>
              </div>

              
              <div id="u406" class="ax_default label1" selectiongroup="My Dates">
                <div id="u406_div" class=""></div>
                <div id="u406_text" class="text ">
                  <p><span>06</span></p>
                </div>
              </div>

              
              <div id="u407" class="ax_default label1" selectiongroup="My Dates">
                <div id="u407_div" class=""></div>
                <div id="u407_text" class="text ">
                  <p><span>07</span></p>
                </div>
              </div>

              
              <div id="u408" class="ax_default label1" selectiongroup="My Dates">
                <div id="u408_div" class=""></div>
                <div id="u408_text" class="text ">
                  <p><span>08</span></p>
                </div>
              </div>

              
              <div id="u409" class="ax_default label1" selectiongroup="My Dates">
                <div id="u409_div" class=""></div>
                <div id="u409_text" class="text ">
                  <p><span>09</span></p>
                </div>
              </div>

              
              <div id="u410" class="ax_default label1" selectiongroup="My Dates">
                <div id="u410_div" class=""></div>
                <div id="u410_text" class="text ">
                  <p><span>10</span></p>
                </div>
              </div>

              
              <div id="u411" class="ax_default label1" selectiongroup="My Dates">
                <div id="u411_div" class=""></div>
                <div id="u411_text" class="text ">
                  <p><span>11</span></p>
                </div>
              </div>

              
              <div id="u412" class="ax_default label1" selectiongroup="My Dates">
                <div id="u412_div" class=""></div>
                <div id="u412_text" class="text ">
                  <p><span>12</span></p>
                </div>
              </div>

              
              <div id="u413" class="ax_default label1" selectiongroup="My Dates">
                <div id="u413_div" class=""></div>
                <div id="u413_text" class="text ">
                  <p><span>13</span></p>
                </div>
              </div>

              
              <div id="u414" class="ax_default label1" selectiongroup="My Dates">
                <div id="u414_div" class=""></div>
                <div id="u414_text" class="text ">
                  <p><span>14</span></p>
                </div>
              </div>

              
              <div id="u415" class="ax_default label1" selectiongroup="My Dates">
                <div id="u415_div" class=""></div>
                <div id="u415_text" class="text ">
                  <p><span>15</span></p>
                </div>
              </div>

              
              <div id="u416" class="ax_default label1" selectiongroup="My Dates">
                <div id="u416_div" class=""></div>
                <div id="u416_text" class="text ">
                  <p><span>16</span></p>
                </div>
              </div>

              
              <div id="u417" class="ax_default label1" selectiongroup="My Dates">
                <div id="u417_div" class=""></div>
                <div id="u417_text" class="text ">
                  <p><span>17</span></p>
                </div>
              </div>

              
              <div id="u418" class="ax_default label1" selectiongroup="My Dates">
                <div id="u418_div" class=""></div>
                <div id="u418_text" class="text ">
                  <p><span>18</span></p>
                </div>
              </div>

              
              <div id="u419" class="ax_default label1" selectiongroup="My Dates">
                <div id="u419_div" class=""></div>
                <div id="u419_text" class="text ">
                  <p><span>19</span></p>
                </div>
              </div>

              
              <div id="u420" class="ax_default label1" selectiongroup="My Dates">
                <div id="u420_div" class=""></div>
                <div id="u420_text" class="text ">
                  <p><span>20</span></p>
                </div>
              </div>

              
              <div id="u421" class="ax_default label1" selectiongroup="My Dates">
                <div id="u421_div" class=""></div>
                <div id="u421_text" class="text ">
                  <p><span>21</span></p>
                </div>
              </div>

              
              <div id="u422" class="ax_default label1" selectiongroup="My Dates">
                <div id="u422_div" class=""></div>
                <div id="u422_text" class="text ">
                  <p><span>22</span></p>
                </div>
              </div>

              
              <div id="u423" class="ax_default label1" selectiongroup="My Dates">
                <div id="u423_div" class=""></div>
                <div id="u423_text" class="text ">
                  <p><span>23</span></p>
                </div>
              </div>

              
              <div id="u424" class="ax_default label1" selectiongroup="My Dates">
                <div id="u424_div" class=""></div>
                <div id="u424_text" class="text ">
                  <p><span>24</span></p>
                </div>
              </div>

              
              <div id="u425" class="ax_default label1" selectiongroup="My Dates">
                <div id="u425_div" class=""></div>
                <div id="u425_text" class="text ">
                  <p><span>25</span></p>
                </div>
              </div>

              
              <div id="u426" class="ax_default label1" selectiongroup="My Dates">
                <div id="u426_div" class=""></div>
                <div id="u426_text" class="text ">
                  <p><span>26</span></p>
                </div>
              </div>

              
              <div id="u427" class="ax_default label1" selectiongroup="My Dates">
                <div id="u427_div" class=""></div>
                <div id="u427_text" class="text ">
                  <p><span>27</span></p>
                </div>
              </div>

              
              <div id="u428" class="ax_default label1" selectiongroup="My Dates">
                <div id="u428_div" class=""></div>
                <div id="u428_text" class="text ">
                  <p><span>28</span></p>
                </div>
              </div>

              
              <div id="u429" class="ax_default label1" selectiongroup="My Dates">
                <div id="u429_div" class=""></div>
                <div id="u429_text" class="text ">
                  <p><span>29</span></p>
                </div>
              </div>

              
              <div id="u430" class="ax_default label1" selectiongroup="My Dates">
                <div id="u430_div" class=""></div>
                <div id="u430_text" class="text ">
                  <p><span>30</span></p>
                </div>
              </div>

              
              <div id="u431" class="ax_default icon" data-label="Next">
                <img id="u431_img" class="img " src="../../Images/entry_page/next_u220.svg"/>
                <div id="u431_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u432" class="ax_default icon disabled" data-label="Previous">
                <img id="u432_img" class="img " src="../../Images/entry_page/previous_u302_disabled.svg"/>
                <div id="u432_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>

              
              <div id="u433" class="ax_default icon" data-label="Next">
                <img id="u433_img" class="img " src="../../Images/entry_page/next_u220.svg"/>
                <div id="u433_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div id="u434" class="ax_default paragraph" data-label="Pick a date Label">
          <div id="u434_div" class=""></div>
          <div id="u434_text" class="text ">
            <p><span>Change Window Stop Date</span></p>
          </div>
        </div>

        
        <div id="u435" class="ax_default paragraph ax_default_hidden" data-label="Change Window Stop Date Required" style={{display: 'none', visibility: 'hidden'}}>
          <div id="u435_div" class=""></div>
          <div id="u435_text" class="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>
      </div>

      
      <div id="u436" class="ax_default paragraph ax_default_hidden" data-label="MSGSTOPDATEOCCURSBEFORESTARTDATE" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u436_div" class=""></div>
        <div id="u436_text" class="text ">
          <p><span style={{color: '#D9001B'}}>Stop Date Occurs Before Start Date</span></p><p><span><br></br></span></p>
        </div>
      </div>

      
      <div id="u437" class="ax_default primary_button" data-label="Submit Button">
        <div id="u437_div" class=""></div>
        <div id="u437_text" class="text ">
          <p><span>Submit Change Request</span></p>
        </div>
      </div>

      
      <div id="u438" class="ax_default paragraph ax_default_hidden" data-label="Description (Too many characters) " style={{display: 'none', visibility: 'hidden'}}>
        <div id="u438_div" class=""></div>
        <input id="u438_input" type="text" value="Too many characters!!" class="u438_input"/>
      </div>

      
      <div id="u439" class="ax_default paragraph ax_default_hidden" data-label="Application ID Invalid " style={{display: 'none', visibility: 'hidden'}}>
        <div id="u439_div" class=""></div>
        <div id="u439_text" class="text ">
          <p><span>Invalid ID</span></p>
        </div>
      </div>
    </div>
    <script src="resources/scripts/axure/ios.js"></script>
  </body>
  );
};

export default Entry;
