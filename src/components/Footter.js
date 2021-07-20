import React from "react";

function Footter() {
  return (
    <table className="dln750" style={{ width: "100%", textAlign: "center" }}>
      <tbody>
        <tr>
          <td>
            <span className="trn">Đơn vị giá</span>: 1000 VND -{" "}
            <span className="trn">Đơn vị KL</span>: 10{" "}
            <span className="trn">Cổ phiếu.</span> Copyright © 2018 ACBS.
            Website:{" "}
            <a
              href="http://www.acbs.com.vn"
              className="alink b"
              target="_blank"
              rel="noreferrer"
            >
              www.acbs.com.vn
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Footter;
