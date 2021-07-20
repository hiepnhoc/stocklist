import { LightstreamerClient, StatusWidget } from "lightstreamer-client-web";
import { Constants } from "./Constants";

export const lsClient = () => {
  //prepare the LightstreamerClient we'll use to connect to the server
  const constants = Constants();
  const lsClient = new LightstreamerClient(constants.SERVER, constants.ADAPTER);
  lsClient.addListener(new StatusWidget("left", "5px", !0));
  lsClient.connectionSharing.enableSharing(
    "AcbsInfoConnection",
    "ATTACH",
    "CREATE"
  );
  lsClient.connect();

  return lsClient;
};
