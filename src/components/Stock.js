import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateListStock } from "../redux/todoSlice";
import "./Stock.css";

function Stock({ item, data = {} }) {
  const dispatch = useDispatch();

  const [state, setState] = useState([]);
  const [preState, setpreState] = useState([]);
  const [activeStyle, setActiveStyle] = useState([]);

  const [isShowAdd, setIsShowAdd] = useState(false);

  useEffect(() => {
    if (data.itemName) onItemUpdate(data);
  }, [data]);

  const [isCheckIcon] = useState(false);

  const onItemUpdate = (obj) => {
    var nextStyle = {};
    var nextState = {};
    var currentState = null;
    obj.forEachField(function (name, pos, val) {
      nextState[name] = val;
      if (!preState[name]) {
        currentState[name] = val;
      }
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
    if (currentState) {
      setpreState(currentState);
    }
    dispatch(UpdateListStock(nextState));
  };

  const getStockName = (item) => {
    console.log(item);
  };
  const showStockChart = (item) => {
    console.log(item);
  };

  const Cell = memo(({ style, className = "", data, key }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
      if (preState[key] && preState[key] !== state[key]) {
        console.log("udpate field", key);
        setpreState({ ...preState, [key]: state[key] });
        setIsUpdate(true);
        setTimeout(() => {
          setIsUpdate(false);
        }, 2000);
      }
    });
    return (
      <td
        data-source="lightstreamer"
        data-field="CEILING_PRICE"
        style={style}
        className={`${className} ${isUpdate ? "bg--blue" : ""}`}
      >
        {data}
      </td>
    );
  });

  return (
    <tr
      className={`icon-chart${isCheckIcon ? "" : "show"}`}
      id={item}
      data-source="lightstreamer"
      // onMouseEnter={() => {
      //   if (!isShowAdd) setIsShowAdd(true);
      // }}
      // onMouseLeave={() => {
      //   if (isShowAdd) setIsShowAdd(false);
      // }}
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
      <Cell
        style={{
          backgroundColor: "linear-gradient(to right, red 50%, blue 50%)",
          color: activeStyle["CEILING_PRICE"],
        }}
        className="Bgline dln800 c"
        data={state["CEILING_PRICE"]}
        key="CEILING_PRICE"
      />
      <Cell
        style={{ color: activeStyle["FLOOR_PRICE"] }}
        className="Bgline bg-bdl dln800 f"
        data={state["FLOOR_PRICE"]}
      />
      <Cell
        style={{ color: activeStyle["BASIC_PRICE"] }}
        className="Bgline bg-bdl dln800 n"
        data={state["BASIC_PRICE"]}
        key="BASIC_PRICE"
      />
      <Cell
        style={{ color: activeStyle["BPRICE3"] }}
        className="dln640"
        data={state["BPRICE3"]}
        key="BPRICE3"
      />
      <Cell
        style={{ color: activeStyle["BQTTY3"] }}
        className="dln640"
        data={state["BQTTY3"]}
        key="BQTTY3"
      />
      <Cell
        style={{ color: activeStyle["BPRICE2"] }}
        className="dln500"
        data={state["BPRICE2"]}
        key="BPRICE2"
      />
      <Cell
        style={{ color: activeStyle["BQTTY2"] }}
        className="dln500"
        data={state["BQTTY2"]}
        key="BQTTY2"
      />
      <Cell
        style={{ color: activeStyle["BPRICE1"] }}
        data={state["BPRICE1"]}
        key="BPRICE1"
      />
      <Cell
        style={{ color: activeStyle["BQTTY1"] }}
        data={state["BQTTY1"]}
        key="BQTTY1"
      />
      <td className="Bgline showrownameck dlnshowrownameck">
        <span
          onMouseOver={() => getStockName({ item })}
          data-source="lightstreamer"
          data-field={item}
          className="tootipck ff fB fl"
          onClick={() => showStockChart({ item })}
          style={{ cursor: "pointer" }}
          title=""
        >
          {item.CODE}
        </span>
      </td>
      <Cell
        style={{ color: activeStyle["MATCH_PRICE"] }}
        className="Bgline"
        data={state["MATCH_PRICE"]}
        key="MATCH_PRICE"
      />
      <Cell
        style={{ color: activeStyle["MATCH_PRICE"] }}
        className={"Bgline"}
        data={state["MATCH_QTTY"]}
        key="MATCH_QTTY"
      />
      <Cell
        style={{ color: activeStyle["CHANGE"] }}
        className="match"
        data={state["CHANGE"]}
        key="CHANGE"
      />
      <Cell
        style={{ color: activeStyle["SPRICE1"] }}
        data={state["SPRICE1"]}
        key="SPRICE1"
      />
      <Cell
        style={{ color: activeStyle["SQTTY1"] }}
        data={state["SQTTY1"]}
        key="SQTTY1"
      />
      <Cell
        style={{ color: activeStyle["SPRICE2"] }}
        className="dln500"
        data={state["SPRICE2"]}
        key="SPRICE2"
      />
      <Cell
        style={{ color: activeStyle["SQTTY2"] }}
        className="dln500"
        data={state["SQTTY2"]}
        key="SQTTY2"
      />
      <Cell
        style={{ color: activeStyle["SPRICE3"] }}
        className="dln640"
        data={state["SPRICE3"]}
        key="SPRICE3"
      />
      <Cell
        style={{ color: activeStyle["SQTTY3"] }}
        className="dln640"
        data={state["SQTTY3"]}
        key="SQTTY3"
      />
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
      <Cell
        style={{ color: activeStyle["AVERAGE_PRICE"] }}
        className="Bgline dln900"
        data={state["AVERAGE_PRICE"]}
        key="AVERAGE_PRICE"
      />
      <Cell
        style={{ color: activeStyle["HIGHEST_PRICE"] }}
        className="Bgline dln900"
        data={state["HIGHEST_PRICE"]}
        key="HIGHEST_PRICE"
      />
      <Cell
        style={{ color: activeStyle["LOWEST_PRICE"] }}
        className="Bgline dln900"
        data={state["LOWEST_PRICE"]}
        key="LOWEST_PRICE"
      />
      <Cell
        style={{ color: activeStyle["BUY_FOREIGN_QTTY"] }}
        className="changerow dln970"
        data={state["BUY_FOREIGN_QTTY"]}
        key="BUY_FOREIGN_QTTY"
      />
      <Cell
        style={{ color: activeStyle["SELL_FOREIGN_QTTY"] }}
        className="changerow dln970"
        data={state["SELL_FOREIGN_QTTY"]}
        key="SELL_FOREIGN_QTTY"
      />
      <Cell
        style={{ color: activeStyle["CURRENT_ROOM"] }}
        className="changerow1"
        data={state["CURRENT_ROOM"]}
        key="CURRENT_ROOM"
      />
    </tr>
  );
}
export default memo(Stock);
