import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateListStock } from "../redux/todoSlice";
import "./Stock.css";

function Stock({ item, data = {} }) {
  const dispatch = useDispatch();

  const [state, setState] = useState([]);
  const [preState, setpreState] = useState({});
  const [currentState, setCurrentState] = useState({});
  const [activeStyle, setActiveStyle] = useState([]);

  const [isShowAdd, setIsShowAdd] = useState(false);

  useEffect(() => {
    if (data.itemName) onItemUpdate(data);
  }, [data]);

  const [isCheckIcon] = useState(false);

  const onItemUpdate = (obj) => {
    var nextStyle = {};
    var nextState = {};
    //var currentState = null;
    //console.log("item: " + JSON.stringify(item));
    //console.log("obj: " + JSON.stringify(obj));
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
    setpreState(item);

    //console.log("item: " + JSON.stringify(item));
    //console.log("nextState: " + JSON.stringify(nextState));
    dispatch(UpdateListStock(nextState));
  };

  const getStockName = (item) => {
    console.log(item);
  };
  const showStockChart = (item) => {
    console.log(item);
  };
  

  const Cell = ({ style, className = "", data, field, isChild = false }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    useEffect(() => {
      if (preState[field] && preState[field]!=null && preState[field]!=="" && preState[field] !== state[field]) {
        console.log("update:" + preState["CODE"] + "-" +  field + "-" + preState[field] + ":" + state[field]);
        setIsUpdate(true);
        setTimeout(() => {
          setIsUpdate(false);
        }, 2000);
      }
    },[]);
    return isChild ? (
      <>
        <span
          className={`${className} ${isUpdate ? "bg--blue" : ""}`}
          data-source="lightstreamer"
          style={style}
          data-field={field}
        >
          {data}
        </span>
      </>
    ) : (
      <td
        data-source="lightstreamer"
        style={style}
        className={`${className} ${isUpdate ? "bg--blue" : ""}`}
        data-field={field}
      >
        {data}
      </td>
    );
  };

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
        field="CEILING_PRICE"
      />
      <Cell
        style={{ color: activeStyle["FLOOR_PRICE"] }}
        className="Bgline bg-bdl dln800 f"
        data={state["FLOOR_PRICE"]}
        field="FLOOR_PRICE"
      />
      <Cell
        style={{ color: activeStyle["BASIC_PRICE"] }}
        className="Bgline bg-bdl dln800 n"
        data={state["BASIC_PRICE"]}
        field="BASIC_PRICE"
      />
      <Cell
        style={{ color: activeStyle["BPRICE3"] }}
        className="dln640"
        data={state["BPRICE3"]}
        field="BPRICE3"
      />
      <Cell
        style={{ color: activeStyle["BQTTY3"] }}
        className="dln640"
        data={state["BQTTY3"]}
        field="BQTTY3"
      />
      <Cell
        style={{ color: activeStyle["BPRICE2"] }}
        className="dln500"
        data={state["BPRICE2"]}
        field="BPRICE2"
      />
      <Cell
        style={{ color: activeStyle["BQTTY2"] }}
        className="dln500"
        data={state["BQTTY2"]}
        field="BQTTY2"
      />
      <Cell
        style={{ color: activeStyle["BPRICE1"] }}
        data={state["BPRICE1"]}
        field="BPRICE1"
      />
      <Cell
        style={{ color: activeStyle["BQTTY1"] }}
        data={state["BQTTY1"]}
        field="BQTTY1"
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
        field="MATCH_PRICE"
      />
      <Cell
        style={{ color: activeStyle["MATCH_PRICE"] }}
        className={"Bgline"}
        data={state["MATCH_QTTY"]}
        field="MATCH_QTTY"
      />
      <Cell
        style={{ color: activeStyle["CHANGE"] }}
        className="match"
        data={state["CHANGE"]}
        field="CHANGE"
      />
      <Cell
        style={{ color: activeStyle["SPRICE1"] }}
        data={state["SPRICE1"]}
        field="SPRICE1"
      />
      <Cell
        style={{ color: activeStyle["SQTTY1"] }}
        data={state["SQTTY1"]}
        field="SQTTY1"
      />
      <Cell
        style={{ color: activeStyle["SPRICE2"] }}
        className="dln500"
        data={state["SPRICE2"]}
        field="SPRICE2"
      />
      <Cell
        style={{ color: activeStyle["SQTTY2"] }}
        className="dln500"
        data={state["SQTTY2"]}
        field="SQTTY2"
      />
      <Cell
        style={{ color: activeStyle["SPRICE3"] }}
        className="dln640"
        data={state["SPRICE3"]}
        field="SPRICE3"
      />
      <Cell
        style={{ color: activeStyle["SQTTY3"] }}
        className="dln640"
        data={state["SQTTY3"]}
        field="SQTTY3"
      />
      <td className="dln800">
        <Cell
          isChild={true}
          className="tbodytotalkl"
          data={state["TOTAL_TRADED_QTTY"]}
          style={{ color: activeStyle["TOTAL_TRADED_QTTY"] }}
        />
        <Cell
          isChild={true}
          className="tbodytotalgt"
          data={state["TOTAL_TRADED_VALUE"]}
          style={{ color: activeStyle["TOTAL_TRADED_VALUE"] }}
        />
      </td>
      <Cell
        style={{ color: activeStyle["AVERAGE_PRICE"] }}
        className="Bgline dln900"
        data={state["AVERAGE_PRICE"]}
        field="AVERAGE_PRICE"
      />
      <Cell
        style={{ color: activeStyle["HIGHEST_PRICE"] }}
        className="Bgline dln900"
        data={state["HIGHEST_PRICE"]}
        field="HIGHEST_PRICE"
      />
      <Cell
        style={{ color: activeStyle["LOWEST_PRICE"] }}
        className="Bgline dln900"
        data={state["LOWEST_PRICE"]}
        field="LOWEST_PRICE"
      />
      <Cell
        style={{ color: activeStyle["BUY_FOREIGN_QTTY"] }}
        className="changerow dln970"
        data={state["BUY_FOREIGN_QTTY"]}
        field="BUY_FOREIGN_QTTY"
      />
      <Cell
        style={{ color: activeStyle["SELL_FOREIGN_QTTY"] }}
        className="changerow dln970"
        data={state["SELL_FOREIGN_QTTY"]}
        field="SELL_FOREIGN_QTTY"
      />
      <Cell
        style={{ color: activeStyle["CURRENT_ROOM"] }}
        className="changerow1"
        data={state["CURRENT_ROOM"]}
        field="CURRENT_ROOM"
      />
    </tr>
  );
}
export default memo(Stock);
