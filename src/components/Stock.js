import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateListStock } from "../redux/todoSlice";
import "./Stock.css";

function Stock({ item, data = {} }) {
  const dispatch = useDispatch();

  const [state, setState] = useState([]);
  const [activeStyle, setActiveStyle] = useState([]);

  const [isShowAdd, setIsShowAdd] = useState(false);

  useEffect(() => {
    if (data.itemName) onItemUpdate(data);
  }, [data]);

  const [isCheckIcon] = useState(false);

  const onItemUpdate = (obj) => {
    var nextStyle = {};
    var nextState = {};
    nextState = {};
    obj.forEachField(function (name, pos, val) {
      nextState[name] = val;
    });
    if (nextState != null) {
      if (nextState["BPRICE3"] === nextState["BASIC_PRICE"]) {
        nextStyle["BPRICE3"] = "rgb(253, 255, 18)";
        nextStyle["BQTTY3"] = "rgb(253, 255, 18)";
      } else if (nextState["BPRICE3"] === nextState["CEILING_PRICE"]) {
        nextStyle["BPRICE3"] = "rgb(253, 2, 253)";
        nextStyle["BQTTY3"] = "rgb(253, 2, 253)";
      } else if (nextState["BPRICE3"] === nextState["FLOOR_PRICE"]) {
        nextStyle["BPRICE3"] = "rgb(82, 211, 249)";
        nextStyle["BQTTY3"] = "rgb(82, 211, 249)";
      } else if (nextState["BPRICE3"] > nextState["BASIC_PRICE"]) {
        nextStyle["BPRICE3"] = "rgb(11, 223, 57)";
        nextStyle["BQTTY3"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["BPRICE3"] = "rgb(255, 0, 23)";
        nextStyle["BQTTY3"] = "rgb(255, 0, 23)";
      }

      if (nextState["BPRICE2"] === nextState["BASIC_PRICE"]) {
        nextStyle["BPRICE2"] = "rgb(253, 255, 18)";
        nextStyle["BQTTY2"] = "rgb(253, 255, 18)";
      } else if (nextState["BPRICE2"] === nextState["CEILING_PRICE"]) {
        nextStyle["BPRICE2"] = "rgb(253, 2, 253)";
        nextStyle["BQTTY2"] = "rgb(253, 2, 253)";
      } else if (nextState["BPRICE2"] === nextState["FLOOR_PRICE"]) {
        nextStyle["BPRICE2"] = "rgb(82, 211, 249)";
        nextStyle["BQTTY2"] = "rgb(82, 211, 249)";
      } else if (nextState["BPRICE2"] > nextState["BASIC_PRICE"]) {
        nextStyle["BPRICE2"] = "rgb(11, 223, 57)";
        nextStyle["BQTTY2"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["BPRICE2"] = "rgb(255, 0, 23)";
        nextStyle["BQTTY2"] = "rgb(255, 0, 23)";
      }

      if (nextState["BPRICE1"] === nextState["BASIC_PRICE"]) {
        nextStyle["BPRICE1"] = "rgb(253, 255, 18)";
        nextStyle["BQTTY1"] = "rgb(253, 255, 18)";
      } else if (nextState["BPRICE1"] === nextState["CEILING_PRICE"]) {
        nextStyle["BPRICE1"] = "rgb(253, 2, 253)";
        nextStyle["BQTTY1"] = "rgb(253, 2, 253)";
      } else if (nextState["BPRICE1"] === nextState["FLOOR_PRICE"]) {
        nextStyle["BPRICE1"] = "rgb(82, 211, 249)";
        nextStyle["BQTTY1"] = "rgb(82, 211, 249)";
      } else if (nextState["BPRICE1"] > nextState["BASIC_PRICE"]) {
        nextStyle["BPRICE1"] = "rgb(11, 223, 57)";
        nextStyle["BQTTY1"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["BPRICE1"] = "rgb(255, 0, 23)";
        nextStyle["BQTTY1"] = "rgb(255, 0, 23)";
      }

      if (nextState["SPRICE1"] === nextState["BASIC_PRICE"]) {
        nextStyle["SPRICE1"] = "rgb(253, 255, 18)";
        nextStyle["SQTTY1"] = "rgb(253, 255, 18)";
      } else if (nextState["SPRICE1"] === nextState["CEILING_PRICE"]) {
        nextStyle["SPRICE1"] = "rgb(253, 2, 253)";
        nextStyle["SQTTY1"] = "rgb(253, 2, 253)";
      } else if (nextState["SPRICE1"] === nextState["FLOOR_PRICE"]) {
        nextStyle["SPRICE1"] = "rgb(82, 211, 249)";
        nextStyle["SQTTY1"] = "rgb(82, 211, 249)";
      } else if (nextState["SPRICE1"] > nextState["BASIC_PRICE"]) {
        nextStyle["SPRICE1"] = "rgb(11, 223, 57)";
        nextStyle["SQTTY1"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["SPRICE1"] = "rgb(255, 0, 23)";
        nextStyle["SQTTY1"] = "rgb(255, 0, 23)";
      }

      if (nextState["SPRICE2"] === nextState["BASIC_PRICE"]) {
        nextStyle["SPRICE2"] = "rgb(253, 255, 18)";
        nextStyle["SQTTY2"] = "rgb(253, 255, 18)";
      } else if (nextState["SPRICE2"] === nextState["CEILING_PRICE"]) {
        nextStyle["SPRICE2"] = "rgb(253, 2, 253)";
        nextStyle["SQTTY2"] = "rgb(253, 2, 253)";
      } else if (nextState["SPRICE2"] === nextState["FLOOR_PRICE"]) {
        nextStyle["SPRICE2"] = "rgb(82, 211, 249)";
        nextStyle["SQTTY2"] = "rgb(82, 211, 249)";
      } else if (nextState["SPRICE2"] > nextState["BASIC_PRICE"]) {
        nextStyle["SPRICE2"] = "rgb(11, 223, 57)";
        nextStyle["SQTTY2"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["SPRICE2"] = "rgb(255, 0, 23)";
        nextStyle["SQTTY2"] = "rgb(255, 0, 23)";
      }

      if (nextState["SPRICE3"] === nextState["BASIC_PRICE"]) {
        nextStyle["SPRICE3"] = "rgb(253, 255, 18)";
        nextStyle["SQTTY3"] = "rgb(253, 255, 18)";
      } else if (nextState["SPRICE3"] === nextState["CEILING_PRICE"]) {
        nextStyle["SPRICE3"] = "rgb(253, 2, 253)";
        nextStyle["SQTTY3"] = "rgb(253, 2, 253)";
      } else if (nextState["SPRICE3"] === nextState["FLOOR_PRICE"]) {
        nextStyle["SPRICE3"] = "rgb(82, 211, 249)";
        nextStyle["SQTTY3"] = "rgb(82, 211, 249)";
      } else if (nextState["SPRICE3"] > nextState["BASIC_PRICE"]) {
        nextStyle["SPRICE3"] = "rgb(11, 223, 57)";
        nextStyle["SQTTY3"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["SPRICE3"] = "rgb(255, 0, 23)";
        nextStyle["SQTTY3"] = "rgb(255, 0, 23)";
      }

      if (nextState["AVERAGE_PRICE"] === nextState["BASIC_PRICE"]) {
        nextStyle["AVERAGE_PRICE"] = "rgb(253, 255, 18)";
      } else if (nextState["AVERAGE_PRICE"] === nextState["CEILING_PRICE"]) {
        nextStyle["AVERAGE_PRICE"] = "rgb(253, 2, 253)";
      } else if (nextState["AVERAGE_PRICE"] === nextState["FLOOR_PRICE"]) {
        nextStyle["AVERAGE_PRICE"] = "rgb(82, 211, 249)";
      } else if (nextState["AVERAGE_PRICE"] > nextState["BASIC_PRICE"]) {
        nextStyle["AVERAGE_PRICE"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["AVERAGE_PRICE"] = "rgb(255, 0, 23)";
      }

      if (nextState["HIGHEST_PRICE"] === nextState["BASIC_PRICE"]) {
        nextStyle["HIGHEST_PRICE"] = "rgb(253, 255, 18)";
      } else if (nextState["HIGHEST_PRICE"] === nextState["CEILING_PRICE"]) {
        nextStyle["HIGHEST_PRICE"] = "rgb(253, 2, 253)";
      } else if (nextState["HIGHEST_PRICE"] === nextState["FLOOR_PRICE"]) {
        nextStyle["HIGHEST_PRICE"] = "rgb(82, 211, 249)";
      } else if (nextState["HIGHEST_PRICE"] > nextState["BASIC_PRICE"]) {
        nextStyle["HIGHEST_PRICE"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["HIGHEST_PRICE"] = "rgb(255, 0, 23)";
      }

      if (nextState["LOWEST_PRICE"] === nextState["BASIC_PRICE"]) {
        nextStyle["LOWEST_PRICE"] = "rgb(253, 255, 18)";
      } else if (nextState["LOWEST_PRICE"] === nextState["CEILING_PRICE"]) {
        nextStyle["LOWEST_PRICE"] = "rgb(253, 2, 253)";
      } else if (nextState["LOWEST_PRICE"] === nextState["FLOOR_PRICE"]) {
        nextStyle["LOWEST_PRICE"] = "rgb(82, 211, 249)";
      } else if (nextState["LOWEST_PRICE"] > nextState["BASIC_PRICE"]) {
        nextStyle["LOWEST_PRICE"] = "rgb(11, 223, 57)";
      } else {
        nextStyle["LOWEST_PRICE"] = "rgb(255, 0, 23)";
      }
      if (nextState["MATCH_PRICE"].length !== 0) {
        if (nextState["MATCH_PRICE"] === nextState["BASIC_PRICE"]) {
          nextStyle["MATCH_PRICE"] = "rgb(253, 255, 18)";
          nextStyle["MATCH_QTTY"] = "rgb(253, 255, 18)";
          nextStyle["CHANGE"] = "rgb(253, 255, 18)";
          nextStyle["CODE"] = "rgb(253, 255, 18)";
        } else if (nextState["MATCH_PRICE"] === nextState["CEILING_PRICE"]) {
          nextStyle["MATCH_PRICE"] = "rgb(253, 2, 253)";
          nextStyle["MATCH_QTTY"] = "rgb(253, 2, 253)";
          nextStyle["CHANGE"] = "rgb(253, 2, 253)";
          nextStyle["CODE"] = "rgb(253, 2, 253)";
        } else if (nextState["MATCH_PRICE"] === nextState["FLOOR_PRICE"]) {
          nextStyle["MATCH_PRICE"] = "rgb(82, 211, 249)";
          nextStyle["MATCH_QTTY"] = "rgb(82, 211, 249)";
          nextStyle["CHANGE"] = "rgb(82, 211, 249)";
          nextStyle["CODE"] = "rgb(82, 211, 249)";
        } else if (nextState["MATCH_PRICE"] > nextState["BASIC_PRICE"]) {
          nextStyle["MATCH_PRICE"] = "rgb(11, 223, 57)";
          nextStyle["MATCH_QTTY"] = "rgb(11, 223, 57)";
          nextStyle["CHANGE"] = "rgb(11, 223, 57)";
          nextStyle["CODE"] = "rgb(11, 223, 57)";
        } else {
          nextStyle["MATCH_PRICE"] = "rgb(255, 0, 23)";
          nextStyle["MATCH_QTTY"] = "rgb(255, 0, 23)";
          nextStyle["CHANGE"] = "rgb(255, 0, 23)";
          nextStyle["CODE"] = "rgb(255, 0, 23)";
        }
      } else {
        nextStyle["CODE"] = "rgb(214, 214, 214)";
      }
    }

    setState(nextState);
    setActiveStyle(nextStyle);
    dispatch(UpdateListStock(nextState));
  };

  const getStockName = (item) => {
    console.log(item);
  };
  const showStockChart = (item) => {
    console.log(item);
  };

  return (
    <tr
      className={`icon-chart${isCheckIcon ? "" : "show"}`}
      id={item}
      data-source="lightstreamer"
      onMouseEnter={() => {
        if (!isShowAdd) setIsShowAdd(true);
      }}
      onMouseLeave={() => {
        if (isShowAdd) setIsShowAdd(false);
      }}
    >
      <td id="onhoverck">
        <div className="code-name">
          <span
            data-source="lightstreamer"
            data-field="CODE"
            className="bghovertext tootipck ff fB fl"
            style={{ cursor: "pointer", color: activeStyle["CODE"] }}
            title=""
          >
            {item.CODE}
          </span>
          {isShowAdd && (
            <span className="bghovertext tootipck ff fB fl plus-icon">
              <i className="fa fa-plus text--green" aria-hidden="true"></i>
            </span>
          )}
        </div>
      </td>
      <td
        data-source="lightstreamer"
        data-field="CEILING_PRICE"
        style={{
          backgroundColor: "linear-gradient(to right, red 50%, blue 50%)",
          color: activeStyle["CEILING_PRICE"],
        }}
        className="Bgline dln800 c"
      >
        {state["CEILING_PRICE"]}
      </td>
      <td
        data-source="lightstreamer"
        data-field="FLOOR_PRICE"
        style={{ color: activeStyle["FLOOR_PRICE"] }}
        className="Bgline bg-bdl dln800 f"
      >
        {state["FLOOR_PRICE"]}
      </td>
      <td
        data-source="lightstreamer"
        data-field="BASIC_PRICE"
        style={{ color: activeStyle["BASIC_PRICE"] }}
        className="Bgline bg-bdl dln800 n"
      >
        {state["BASIC_PRICE"]}
      </td>
      <td
        className="dln640"
        data-source="lightstreamer"
        style={{ color: activeStyle["BPRICE3"] }}
        data-field="BPRICE3"
      >
        {state["BPRICE3"]}
      </td>
      <td
        className="dln640"
        data-source="lightstreamer"
        style={{ color: activeStyle["BQTTY3"] }}
        data-field="BQTTY3"
      >
        {state["BQTTY3"]}
      </td>
      <td
        className="dln500"
        data-source="lightstreamer"
        style={{ color: activeStyle["BPRICE2"] }}
        data-field="BPRICE2"
      >
        {state["BPRICE2"]}
      </td>
      <td
        className="dln500"
        data-source="lightstreamer"
        style={{ color: activeStyle["BQTTY2"] }}
        data-field="BQTTY2"
      >
        {state["BQTTY2"]}
      </td>
      <td
        data-source="lightstreamer"
        data-field="BPRICE1"
        style={{ color: activeStyle["BPRICE1"] }}
      >
        {state["BPRICE1"]}
      </td>
      <td
        data-source="lightstreamer"
        data-field="BQTTY1"
        style={{ color: activeStyle["BQTTY1"] }}
      >
        {state["BQTTY1"]}
      </td>
      <td className="Bgline showrownameck dlnshowrownameck">
        <span
          onMouseOver={() => getStockName({ item })}
          data-source="lightstreamer"
          data-field={item}
          className="tootipck ff fB fl"
          onClick={() => showStockChart({ item })}
          style={{ cursor: "pointer" }}
          title=""
        ></span>
      </td>
      <td
        className="Bgline"
        data-source="lightstreamer"
        data-field="MATCH_PRICE"
        style={{ color: activeStyle["MATCH_PRICE"] }}
      >
        {state["MATCH_PRICE"]}
      </td>
      <td
        className={"Bgline"}
        data-source="lightstreamer"
        data-field="MATCH_QTTY"
        style={{ color: activeStyle["MATCH_PRICE"] }}
      >
        {state["MATCH_QTTY"]}
      </td>
      <td className="Bgline">
        <span
          data-source="lightstreamer"
          data-field="CHANGE"
          className="match"
          style={{ color: activeStyle["CHANGE"] }}
        >
          {state["CHANGE"]}
        </span>
        <span
          data-source="lightstreamer"
          data-field="p"
          className="present"
          style={{ display: "none" }}
        ></span>
      </td>
      <td
        className=""
        data-source="lightstreamer"
        data-field="SPRICE1"
        style={{ color: activeStyle["SPRICE1"] }}
      >
        {state["SPRICE1"]}
      </td>
      <td
        className=""
        data-source="lightstreamer"
        data-field="SQTTY1"
        style={{ color: activeStyle["SQTTY1"] }}
      >
        {state["SQTTY1"]}
      </td>
      <td
        className="dln500"
        data-source="lightstreamer"
        data-field="SPRICE2"
        style={{ color: activeStyle["SPRICE2"] }}
      >
        {state["SPRICE2"]}
      </td>
      <td
        className="dln500"
        data-source="lightstreamer"
        data-field="SQTTY2"
        style={{ color: activeStyle["SQTTY2"] }}
      >
        {state["SQTTY2"]}
      </td>
      <td
        className="dln640"
        data-source="lightstreamer"
        data-field="SPRICE3"
        style={{ color: activeStyle["SPRICE3"] }}
      >
        {state["SPRICE3"]}
      </td>
      <td
        className="dln640"
        data-source="lightstreamer"
        data-field="SQTTY3"
        style={{ color: activeStyle["SQTTY3"] }}
      >
        {state["SQTTY3"]}
      </td>
      <td className="dln800">
        <span
          className="tbodytotalkl"
          data-source="lightstreamer"
          data-field="TOTAL_TRADED_QTTY"
          style={{ color: activeStyle["TOTAL_TRADED_QTTY"] }}
        >
          {state["TOTAL_TRADED_QTTY"]}
        </span>
        <span
          className="tbodytotalgt"
          data-source="lightstreamer"
          data-field="TOTAL_TRADED_VALUE"
          style={{ color: activeStyle["TOTAL_TRADED_VALUE"] }}
        >
          {state["TOTAL_TRADED_VALUE"]}
        </span>
      </td>
      <td
        className="Bgline dln900"
        data-source="lightstreamer"
        data-field="AVERAGE_PRICE"
        style={{ color: activeStyle["AVERAGE_PRICE"] }}
      >
        {state["AVERAGE_PRICE"]}
      </td>
      <td
        className="Bgline dln900"
        data-source="lightstreamer"
        data-field="HIGHEST_PRICE"
        style={{ color: activeStyle["HIGHEST_PRICE"] }}
      >
        {state["HIGHEST_PRICE"]}
      </td>
      <td
        className="Bgline dln900"
        data-source="lightstreamer"
        data-field="LOWEST_PRICE"
        style={{ color: activeStyle["LOWEST_PRICE"] }}
      >
        {state["LOWEST_PRICE"]}
      </td>
      <td
        className="changerow dln970"
        data-source="lightstreamer"
        data-field="BUY_FOREIGN_QTTY"
        style={{ color: activeStyle["BUY_FOREIGN_QTTY"] }}
      >
        {state["BUY_FOREIGN_QTTY"]}
      </td>
      <td
        className="changerow dln970"
        data-source="lightstreamer"
        data-field="SELL_FOREIGN_QTTY"
        style={{ color: activeStyle["SELL_FOREIGN_QTTY"] }}
      >
        {state["SELL_FOREIGN_QTTY"]}
      </td>
      <td
        className="changerow1"
        data-source="lightstreamer"
        data-field="CURRENT_ROOM"
        style={{ color: activeStyle["CURRENT_ROOM"] }}
      >
        {state["CURRENT_ROOM"]}
      </td>
    </tr>
  );
}
export default memo(Stock);
