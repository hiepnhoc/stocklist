import React from "react";
import { Link } from "react-router-dom";

function NavTitleStock() {
  return (
    <div className="nav-title-stock">
      <div className="button-menu fl">
        {" "}
        <i className="fa fa-bars" aria-hidden="true"></i>
        <div className="clear"></div>
      </div>
      <div className="search-box search-box1 search-box3 dlnsearchmb fl">
        <div className="search-box-main fl">
          <input
            type="text"
            className="showplace"
            id="search-stoke"
            placeholder="Nhập mã CK..."
          />
        </div>
        <button className="button fl">
          <i className="fa fa-plus"></i>{" "}
        </button>
        <div className="clear"></div>
      </div>
      <div className="show_search-mobile fl">
        <i className="fa fa-search"></i>
      </div>
      <ul className="primary menunavstoke cssmobilestoke fl">
        <li className="active showcatelogyPor">
          <Link className="primary catelogyPofolio" to="./catelogyPofolio">
            <i
              className="fa fa-file-text-o dlnicon"
              style={{ paddingRight: "5px" }}
            ></i>
            <span className="trn" id="listskoke">
              Danh mục
            </span>
            <i className="fa fa-caret-down iconshowmypor"></i>
            <ul className="child-Pofolio">
              <li className="savestorage1">
                <p className="namecat" id="myPortfolio">
                  Danh Mục 1
                </p>
                <i className="fa fa-pencil clickrename"></i>
                <i className="fa fa-save savenamePor savenamePor1"></i>
                <input
                  maxLength="10"
                  type="text"
                  name="myPortfolio1"
                  className="editcatporfolio1"
                  id="test"
                />
              </li>
              <li className="savestorage2">
                <p className="namecat" id="myPortfolio1">
                  Danh Mục 2
                </p>
                <i className="fa fa-pencil clickrename"></i>
                <i className="fa fa-save savenamePor savenamePor2"></i>
                <input
                  maxLength="10"
                  type="text"
                  name="myPortfolio2"
                  className="editcatporfolio2"
                  id="test2"
                />
              </li>
              <button className="load" style={{ display: "none" }}></button>
            </ul>
          </Link>
        </li>
        <li className="mgrmb">
          <Link id="VN30" to="./VN30">
            VN30
          </Link>
        </li>
        <li className="mgrmb">
          <Link id="HOSE" to="./HOSE">
            HOSE
          </Link>
        </li>
        <li className="mgrmb">
          <Link id="HNX30" to="./HNX30">
            HNX30
          </Link>
        </li>
        <li className="mgrmb">
          <Link id="HNX" to="./HNX">
            HNX
          </Link>
        </li>
        <li className="mgrmb">
          <Link id="UPCoM" to="./UPCoM">
            UPCoM
          </Link>
        </li>
        <li>
          <Link id="concurrent" className="trn" to="./Concurrent">
            Thỏa thuận
          </Link>
        </li>
        <li className="mgrmb hovercatelogybranch">
          <Link className="catelogybranch" to="./VN30">
            <span className="trn">Ngành</span>
            <i className="fa fa-caret-down iconbranch"></i>
            <ul className="child-branch child-industry1" id="industry_catalog">
              {" "}
            </ul>
          </Link>
        </li>
        <li>
          <Link id="Derivatives" className="trn" to="./Derivatives">
            Phái sinh
          </Link>
        </li>
        <li>
          <Link id="cw_stocks" className="trn" to="./CW_Stock">
            Chứng quyền
          </Link>
        </li>
      </ul>
      <ul className="secondary bmdln fl">
        <Link className="theme-switcher hidechart" to="./VN30">
          <i className="fa fa-bar-chart" aria-hidden="true"></i>
        </Link>
        <Link className="theme-switcher hideinforchart" to="./VN30">
          <i className="fa fa-info" aria-hidden="true"></i>
        </Link>
        <div className="clear"></div>
      </ul>
      <div className="clear"></div>
    </div>
  );
}
export default NavTitleStock;
