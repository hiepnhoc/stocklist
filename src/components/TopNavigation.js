import React from "react";

function TopNavigation() {
  return (
    <div id="top-navigation">
      <header className="topbar header ">
        <div className="button-menu fl">
          <a title="" className="logo fl" href="#palo">
            <img src="images/logo.png" alt="" title="" id="logo-stroke" />
          </a>
          <div className="clear"></div>
        </div>
        <div className="vnds-clock linehight fl">
          <span title="test" className="jclock fl">
            15:09:56
          </span>
          <span className="date fl" id="jclock5">
            16/09/2017
          </span>
          <div className="clear"></div>
        </div>
        <div className="helper-topbar">
          <div className="buttons">
            <ul className="secondary showsetcolor changecolormb fl">
              <a className="ColorDefaule" id="changecolormb" href="#palo">
                <i className="fa fa-paint-brush" aria-hidden="true"></i>
              </a>
            </ul>
            <ul className="secondary mbdlb fl">
              <a
                className="theme-switcher hidechart_mb"
                id="hidechartmb"
                href="palo"
              >
                <i className="fa fa-bar-chart" aria-hidden="true"></i>
              </a>
              <a className="theme-switcher hideinforchart_mb" href="palo">
                <i className="fa fa-info" aria-hidden="true"></i>
              </a>
              <div className="clear"></div>
            </ul>
            <div className="lang-bg fl">
              <a
                className="lang-btn lang-vi fl active"
                data-value="vi"
                href="palo"
              >
                <img src="images/flagvi.png" alt="" />
              </a>
              <a className="lang-btn lang-en fl" data-value="en" href="palo">
                <img src="images/flagen.png" alt="" />
              </a>

              <div className="clear"></div>
            </div>
            <span className="lang-switch fl">
              <a
                className="navbarright fl"
                target="_blank"
                rel="noreferrer"
                href="https://trade.acbs.com.vn"
                data-trn-key="step1"
              >
                <i
                  className="fa fa-exchange"
                  style={{ paddingRight: "5px" }}
                ></i>
                <span className="trn">Giao dịch</span>
              </a>
              <a
                className="navbarright fl"
                target="_blank"
                rel="noreferrer"
                href="http://acbs.com.vn/huong-dan/3382-n-a"
              >
                <span className="trn" style={{ paddingRight: "5px" }}>
                  Hướng dẫn
                </span>
                <i className="fa fa-question"></i>
              </a>

              <div className="clear"></div>
            </span>
            <div className="clear"></div>
          </div>
        </div>
        <div className="clear"></div>
      </header>
    </div>
  );
}
export default TopNavigation;
