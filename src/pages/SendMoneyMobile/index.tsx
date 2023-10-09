import Tabs from "@components/Tabs/Tabs";
import PageNavHeader from "@components/PageNavHeader";

import SendMoneyMobileData from "./SendMoneyMobileData";
import SendMoneyMobileAirtime from "./SendMoneyMobileAirtime";
import useSendMoneyMobile from "./hooks/useSendMoneyMobile";

const SendMoneyMobile = () => {
  const { currentNetwork, isDropRestNetworks, restNetworks, handleCurrentNetworkClick, handleCurrentNetworkChange } =
    useSendMoneyMobile();

  return (
    <>
      <PageNavHeader heading="Transfer to Bank Account" />

      <Tabs
        data={[
          {
            id: "airtime",
            heading: "Airtime",
          },
          {
            id: "data",
            heading: "Data",
          },
        ]}
      >
        <SendMoneyMobileAirtime
          currentNetwork={currentNetwork}
          isDropRestNetworks={isDropRestNetworks}
          restNetworks={restNetworks}
          handleCurrentNetworkClick={handleCurrentNetworkClick}
          handleCurrentNetworkChange={handleCurrentNetworkChange}
        />

        <SendMoneyMobileData
          currentNetwork={currentNetwork}
          isDropRestNetworks={isDropRestNetworks}
          restNetworks={restNetworks}
          handleCurrentNetworkClick={handleCurrentNetworkClick}
          handleCurrentNetworkChange={handleCurrentNetworkChange}
        />
      </Tabs>
    </>
  );
};

export default SendMoneyMobile;
