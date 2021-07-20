import React from "react";

function ChartsWrapper() {
  return (
    <div className="charts-wrapper slider" id="slider-chart">
      <div className="item-chart-img">
        <div className="chart-img show-nav" id="MNHOSE">
          HOSE
        </div>
        <div className="chart-info show-nav">
          <p>
            <span className="b">VN-INDEX</span>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="INDEX"
            ></span>
            <i id="index_arrow_i_v" className="" aria-hidden="true"></i>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="CHG_INDEX"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="PCT_CHG_INDEX"
            ></span>
            )<span className="dsplb"></span>
            <span className="trn b">KL: </span>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="TOTAL_SHARES"
            ></span>
            <span className="trn b">GT: </span>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="TOTAL_VALUES"
            ></span>{" "}
            <span className="trn b">tỷ</span>
            <span className="dsplb"></span>
            <i className="u fa fa-arrow-up" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="u"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="ADVANCES"
            ></span>
            (
            <span
              className="c"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="CELLING_ADVANCES"
            ></span>
            )<span className="n">■&nbsp;</span>
            <span
              className="n"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="NOCHANGE"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="NO_NOCHANGE"
            ></span>
            )
            <i className="d fa fa-arrow-down" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="d"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="DECLINES"
            ></span>
            (
            <span
              className="f"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_v"
              data-field="FLOOR_DECLINES"
            ></span>
            )
          </p>
        </div>
      </div>
      <div className="item-chart-img">
        <div className="chart-img show-nav" id="VMNN30">
          VN30
        </div>
        <div className="chart-info show-nav">
          <p>
            <span className="b">VN30</span>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="INDEX"
            ></span>
            <i id="index_arrow_i_3" className="" aria-hidden="true"></i>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="CHG_INDEX"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="PCT_CHG_INDEX"
            ></span>
            )<span className="dsplb"></span>
            <span className="trn b">KL: </span>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="TOTAL_SHARES"
            ></span>
            <span className="trn b">GT: </span>
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="TOTAL_VALUES"
            ></span>{" "}
            <span className="trn b">tỷ</span>
            <span className="dsplb"></span>
            <i className="u fa fa-arrow-up" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="u"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="ADVANCES"
            ></span>
            (
            <span
              className="c"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="CELLING_ADVANCES"
            ></span>
            )<span className="n">■&nbsp;</span>
            <span
              className="n"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="NOCHANGE"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="NO_NOCHANGE"
            ></span>
            )
            <i className="d fa fa-arrow-down" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="d"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="DECLINES"
            ></span>
            (
            <span
              className="f"
              data-source="lightstreamer"
              data-grid="hsxindex"
              data-item="i_3"
              data-field="FLOOR_DECLINES"
            ></span>
            )
          </p>
        </div>
      </div>
      <div className="item-chart-img">
        <div className="chart-img show-nav" id="MNHNX"></div>
        <div className="chart-info show-nav">
          <p>
            <span className="b">HNX</span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="INDEX"
            ></span>
            <i id="index_arrow_i_h" className="" aria-hidden="true"></i>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="CHG_INDEX"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="PCT_CHG_INDEX"
            ></span>
            )<span className="dsplb"></span>
            <span className="trn b">KL: </span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="TOTAL_SHARES"
            ></span>
            <span className="trn b">GT: </span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="TOTAL_VALUES"
            ></span>{" "}
            <span className="trn b">tỷ</span>
            <span className="dsplb"></span>
            <i className="u fa fa-arrow-up" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="u"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="ADVANCES"
            ></span>
            (
            <span
              className="c"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="CELLING_ADVANCES"
            ></span>
            )<span className="n">■&nbsp;</span>
            <span
              className="n"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="NOCHANGE"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="NO_NOCHANGE"
            ></span>
            )
            <i className="d fa fa-arrow-down" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="d"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="DECLINES"
            ></span>
            (
            <span
              className="f"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h"
              data-field="FLOOR_DECLINES"
            ></span>
            )
          </p>
        </div>
      </div>
      <div className="item-chart-img">
        <div className="chart-img show-nav" id="MNHNX30"></div>
        <div className="chart-info show-nav">
          <p>
            <span className="b">HNX30</span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="INDEX"
            ></span>
            <i id="index_arrow_i_h3" className="" aria-hidden="true"></i>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="CHG_INDEX"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="PCT_CHG_INDEX"
            ></span>
            )<span className="dsplb"></span>
            <span className="trn b">KL: </span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="TOTAL_SHARES"
            ></span>
            <span className="trn b">GT: </span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="TOTAL_VALUES"
            ></span>{" "}
            <span className="trn b">tỷ</span>
            <span className="dsplb"></span>
            <i className="u fa fa-arrow-up" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="u"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="ADVANCES"
            ></span>
            (
            <span
              className="c"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="CELLING_ADVANCES"
            ></span>
            )<span className="n">■&nbsp;</span>
            <span
              className="n"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="NOCHANGE"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="NO_NOCHANGE"
            ></span>
            )
            <i className="d fa fa-arrow-down" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="d"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="DECLINES"
            ></span>
            (
            <span
              className="f"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_h3"
              data-field="FLOOR_DECLINES"
            ></span>
            )
          </p>
        </div>
      </div>
      <div className="item-chart-img">
        <div className="chart-img show-nav" id="MNUPCOM">
          UP
        </div>
        <div className="chart-info show-nav">
          <p>
            <span className="b">UPCoM</span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="INDEX"
            ></span>
            <i id="index_arrow_i_u" className="" aria-hidden="true"></i>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="CHG_INDEX"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="PCT_CHG_INDEX"
            ></span>
            )<span className="dsplb"></span>
            <span className="trn b">KL: </span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="TOTAL_SHARES"
            ></span>
            <span className="trn b">GT: </span>
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="TOTAL_VALUES"
            ></span>{" "}
            <span className="trn b">tỷ</span>
            <span className="dsplb"></span>
            <i className="u fa fa-arrow-up" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="u"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="ADVANCES"
            ></span>
            (
            <span
              className="c"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="CELLING_ADVANCES"
            ></span>
            )<span className="n">■&nbsp;</span>
            <span
              className="n"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="NOCHANGE"
            ></span>
            (
            <span
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="NO_NOCHANGE"
            ></span>
            )
            <i className="d fa fa-arrow-down" aria-hidden="true">
              &nbsp;
            </i>
            <span
              className="d"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="DECLINES"
            ></span>
            (
            <span
              className="f"
              data-source="lightstreamer"
              data-grid="hnxindex"
              data-item="i_u"
              data-field="FLOOR_DECLINES"
            ></span>
            )
          </p>
        </div>
      </div>
    </div>
  );
}
export default ChartsWrapper;
