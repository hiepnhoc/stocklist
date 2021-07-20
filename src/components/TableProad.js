import React from "react";
import { useDispatch } from "react-redux";
import ListStock from "./ListStock";
import { SortbyName } from "../redux/todoSlice";
function TableProad() {
  const dispatch = useDispatch();

  const changeSort = (value) => {
    dispatch(SortbyName(value));
  };

  return (
    <div
      className="div-table-main table-proad1 test changekl"
      style={{ display: "block" }}
    >
      <div className="div-table-head">
        <table
          className="priceboard trh"
          cellPadding="1"
          cellSpacing="0"
          border="1"
        >
          <colgroup span="1">
            <col width="48" />
          </colgroup>
          <colgroup className="dln800 Bgline" span="3">
            <col width="32" />
            <col width="32" />
            <col width="32" />
          </colgroup>
          <colgroup className="" span="6">
            <col className="dln640" width="32" />
            <col className="dln640" width="45" />
            <col className="dln500" width="32" />
            <col className="dln500" width="45" />
            <col width="32" />
            <col width="45" />
          </colgroup>
          <colgroup className="showrownameck Bgline">
            <col width="32" />
          </colgroup>
          <colgroup span="3" className="Bgline">
            <col width="32" />
            <col width="45" />
            <col width="32" />
          </colgroup>
          <colgroup className="" span="6">
            <col width="32" />
            <col width="45" />
            <col className="dln500" width="32" />
            <col className="dln500" width="45" />
            <col className="dln640" width="32" />
            <col className="dln640" width="45" />
          </colgroup>
          <colgroup className="dln800" span="1">
            <col width="51" />
          </colgroup>
          <colgroup className="dln900 Bgline" span="1">
            <col width="36" />
          </colgroup>
          <colgroup className="dln900 Bgline" span="1">
            <col width="32" />
          </colgroup>
          <colgroup className="dln900 Bgline" span="1">
            <col width="32" />
          </colgroup>
          <colgroup className="changerow dln970" span="1">
            <col width="44" />
          </colgroup>
          <colgroup className="changerow dln970" span="1">
            <col width="44" />
          </colgroup>
          <colgroup className="changerow1 dln970" span="2">
            <col width="88" />
          </colgroup>
          <thead>
            <tr>
              <th data-id="1" className="sortable namecktable1" rowSpan="2">
                <span className="fixedmobilde trn">Mã CK</span>
                <span
                  onClick={() => changeSort("CODE")}
                  className="sortablebg first-sort"
                ></span>
                <span className="showallclose"></span>
              </th>
              <th
                data-id="2"
                className="sortable dln800"
                rowSpan="2"
                onClick={() => changeSort("CEILING_PRICE")}
              >
                <span className="trn">Trần</span>
              </th>
              <th
                data-id="3"
                className="sortable bg-bdl dln800"
                rowSpan="2"
                onClick={() => changeSort("FLOOR_PRICE")}
              >
                <span className="trn">Sàn</span>
              </th>
              <th
                data-id="4"
                className="sortable bg-bdl dln800"
                rowSpan="2"
                onClick={() => changeSort("BASIC_PRICE")}
              >
                <span className="trn">TC</span>
              </th>
              <th id="col4970buy" colSpan="6">
                <span className="trn">Bên mua</span>
              </th>
              <th rowSpan="2" className="showrownameck">
                <span className="trn">Mã CK</span>
              </th>
              <th colSpan="3" className="titleiconshownameck">
                <p className="iconshownameck" id="clickshowcolnameck">
                  <i className="fa fa-angle-double-left"></i>
                </p>
                <span className="trn">Khớp lệnh</span>
              </th>
              <th id="col4970sale" colSpan="6">
                <span className="trn">Bên bán</span>
              </th>
              <th
                data-id="5"
                className="sortable dln800 iconexplain"
                rowSpan="2"
              >
                <p className="iconquestion" title="Đơn vị tỷ VND">
                  <i className="fa fa-question-circle"></i>
                </p>
                <p className="dlntotalkl">
                  <span></span>
                  <span className="trn">Tổng</span>
                  <br />
                  <span className="trn">KL</span>
                </p>
                <p
                  className="dlntotalgt"
                  onClick={() => changeSort("TOTAL_TRADED_VALUE")}
                >
                  <span className="trn">Tổng</span>
                  <br />
                  <span className="trn">GT</span>
                </p>
                <p
                  className="bgsortt"
                  onClick={() => changeSort("TOTAL_TRADED_QTTY")}
                ></p>
                <p className="iconconvert-total">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </p>
              </th>
              <th
                data-id="6"
                className="sortable dln900"
                rowSpan="2"
                onClick={() => changeSort("AVERAGE_PRICE")}
              >
                <span className="trn">Bình</span>
                <br />
                <span className="trn">quân</span>
              </th>
              <th
                data-id="7"
                className="sortable dln900"
                rowSpan="2"
                onClick={() => changeSort("HIGHEST_PRICE")}
              >
                <span className="trn">Cao</span>
                <br />
                <span className="trn">nhất</span>
              </th>
              <th
                data-id="8"
                className="sortable dln900"
                rowSpan="2"
                onClick={() => changeSort("LOWEST_PRICE")}
              >
                <span className="trn">Thấp</span>
                <br />
                <span className="trn">nhất</span>
              </th>
              <th
                data-id="9"
                className="changerow sortable dln970"
                rowSpan="2"
                onClick={() => changeSort("BUY_FOREIGN_QTTY")}
              >
                <span className="trn">NN</span>
                <br />
                <span className="trn">mua</span>
              </th>

              <th
                data-id="10"
                className="changerow sortable dln970"
                rowSpan="2"
              >
                <p className="text-buy">
                  <span className="trn">NN</span>
                  <br />
                  <span className="trn">bán</span>
                </p>
                <p
                  className="bg-sort"
                  onClick={() => changeSort("SELL_FOREIGN_QTTY")}
                ></p>
                <div className="icon-change-row">
                  <p className="iconconvertchange-row">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </p>
                </div>
              </th>

              <th
                data-id="10"
                className="changerow1 sortable dln970"
                rowSpan="2"
              >
                <p className="text-buy trn">Room NN</p>
                <p
                  className="bg-sort"
                  onClick={() => changeSort("CURRENT_ROOM")}
                ></p>
                <div className="icon-change-row">
                  <p className="iconconvertchange-row">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                  </p>
                </div>
              </th>
            </tr>
            <tr>
              <th
                data-id="11"
                className="sortable dln640"
                onClick={() => changeSort("BPRICE3")}
              >
                <span className="trn">Giá</span>3
              </th>
              <th
                data-id="12"
                className="sortable dln640"
                onClick={() => changeSort("BQTTY3")}
              >
                <span className="trn">KL</span>3
              </th>
              <th
                data-id="13"
                className="sortable dln500"
                onClick={() => changeSort("BPRICE2")}
              >
                <span className="trn">Giá</span>2
              </th>
              <th
                data-id="14"
                className="sortable dln500"
                onClick={() => changeSort("BQTTY2")}
              >
                <span className="trn">KL</span>2
              </th>
              <th
                data-id="15"
                className="sortable"
                onClick={() => changeSort("BPRICE1")}
              >
                <span className="trn">Giá</span>1
              </th>
              <th
                data-id="16"
                className="sortable"
                onClick={() => changeSort("BQTTY1")}
              >
                <span className="trn">KL</span>1
              </th>
              <th
                data-id="17"
                className="sortable"
                onClick={() => changeSort("MATCH_PRICE")}
              >
                <span className="trn">Giá</span>
              </th>
              <th
                data-id="18"
                className="sortable"
                onClick={() => changeSort("MATCH_QTTY")}
              >
                <span className="trn">KL</span>
              </th>
              <th data-id="19" className="sortable">
                <p
                  className="iconconvertchange"
                  onClick={() => changeSort("CHANGE")}
                >
                  +/-
                </p>
                <p className="iconconvertchange1">
                  <i className="fa fa-percent" aria-hidden="true"></i>
                </p>
                <p className="iconconvertchange-icchane">
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                </p>
                <div className="clear"></div>
              </th>
              <th
                data-id="20"
                className="sortable"
                onClick={() => changeSort("SPRICE1")}
              >
                <span className="trn">Giá</span>1
              </th>
              <th
                data-id="21"
                className="sortable"
                onClick={() => changeSort("SQTTY1")}
              >
                <span className="trn">KL</span>1
              </th>
              <th
                data-id="22"
                className="sortable dln500"
                onClick={() => changeSort("SPRICE2")}
              >
                <span className="trn">Giá</span>2
              </th>
              <th
                data-id="23"
                className="sortable dln500"
                onClick={() => changeSort("SQTTY2")}
              >
                <span className="trn">KL</span>2
              </th>
              <th
                data-id="24"
                className="sortable dln640"
                onClick={() => changeSort("SPRICE3")}
              >
                <span className="trn">Giá</span>3
              </th>
              <th
                data-id="25"
                className="sortable dln640"
                onClick={() => changeSort("SQTTY3")}
              >
                <span className="trn">KL</span>3
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <ListStock />
    </div>
  );
}
export default TableProad;
