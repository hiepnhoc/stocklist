import React, { useEffect, useState } from "react";
import { Subscription } from "lightstreamer-client-web";

import { lsClient } from "./lsClient";
import { useDispatch, useSelector } from "react-redux";
import { getTodoAsync } from "../redux/todoSlice";

import Footter from "./Footter";
import Stock from "./Stock";

const client = lsClient();

function ListStock() {
  const dispatch = useDispatch();
  const { LIST_STOCK, FIELD_DEF } = useSelector((state) => state.todos);

  const [stockListData, setStockListData] = useState({});

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  useEffect(() => {
    let subscriptions = LIST_STOCK.map((item) => {
      const subscription = new Subscription("MERGE", item.CODE, FIELD_DEF);
      subscription.setDataAdapter("HOSE");
      subscription.setRequestedSnapshot("yes");
      subscription.addListener({
        onItemUpdate: (obj) => {
          // console.log("obj", obj);
          const newStocklist = { ...stockListData };
          setStockListData({
            ...newStocklist,
            [item.CODE]: obj,
          });

          // console.log("item:" + JSON.stringify(item));
          // console.log("code:" + JSON.stringify(stockListData[item.CODE]));
        },
      });
      client.subscribe(subscription);
      return subscription;
    });

    return () => {
      subscriptions.forEach((item) => {
        client.unsubscribe(item);
      });
    };
  }, [LIST_STOCK, FIELD_DEF]);

  return (
    <div className="div-table-body">
      <table
        className="priceboard-info tb_a"
        cellPadding="1"
        cellSpacing="0"
        border="0"
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
          <col className="" width="32" />
          <col className="" width="45" />
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

        <tbody id="ScrollHiglhigt">
          {LIST_STOCK.map((item, index) => (
            
            <Stock key={index} item={item} data={stockListData[item.CODE]} />
          ))}
        </tbody>
      </table>

      <Footter />
    </div>
  );
}
export default ListStock;
