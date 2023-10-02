import styled from "styled-components";

import { COLORS, DEFAULT_BANK_LOGO } from "@constants/index";
import { TBank } from "@services/banks/types";
import PageNavHeader from "@components/PageNavHeader";
import Beneficiaries from "@components/SendMoney/Beneficiaries";
import ListItem from "@components/SendMoney/ListItem";
import vector from "@constants/images/vector";
import AmountRemarkForm from "@components/SendMoney/AmountRemarkForm";

import useSendMoneyBank from "./hooks/useSendMoneyBank";

import type { UseMutationResult } from "react-query";
import Input from "@components/SendMoney/Input";

const SendMoneyBank = () => {
  const {
    showBeneficiaries,
    beneficiaries,
    verifyAccount,
    banks,
    currentBank,
    recipientAccountNumberInputIsDisabled,
    isRecipientFound,
    isSendMoneyButtonDisabled,
    sendMoneyMutation,
    handleCurrentBankCodeChange,
    register,
    handleSendMoney,
    handleBeneficiaryClick,
  } = useSendMoneyBank();

  return (
    <SendMoneyBankWrapper>
      <PageNavHeader heading="Transfer to Bank Account" />

      <Input
        title="Recipient Account"
        type="text"
        placeholder="Recipient account number"
        maxLength={10}
        disabled={recipientAccountNumberInputIsDisabled}
        rest={{
          ...register("recipientAccountNumber"),
        }}
      />

      <div className="banner-wrapper">
        <div className="banner">Instant, Zero issues,Free</div>
      </div>

      <div className="bank-container">
        {currentBank && (
          <div data-testid="current-bank" className="current-bank">
            <Bank bankName={currentBank.name} bankLogo={currentBank.logo} />

            <button data-testid="remove" onClick={() => handleCurrentBankCodeChange(null)}>
              remove
            </button>
          </div>
        )}

        {!currentBank && (
          <div className="banks">
            <h3 className="banks__title">Select a bank</h3>

            {banks.isLoading && <div data-testid="get-all-banks-loading">Loading banks...</div>}
            <div className="allbanks">
              {banks.data?.map((bank) => (
                <Bank
                  key={bank.code}
                  bankLogo={bank.logo}
                  bankName={bank.name}
                  onClick={() => handleCurrentBankCodeChange(bank.code)}
                  dataTestid="bank"
                />
              ))}
            </div>
          </div>
        )}

        <div className="sendData">
          {isRecipientFound && (
            <div className="user-found">
              <p>{verifyAccount.data?.accountName}</p>
              {vector.checkIcon()}
            </div>
          )}

          <AmountRemarkForm
            isRecipientFound={isRecipientFound}
            onSubmit={handleSendMoney}
            isDisabled={isSendMoneyButtonDisabled}
            sendMoneyMutation={sendMoneyMutation as UseMutationResult}
            register={register}
          />

          {verifyAccount.isLoading && <div data-testid="verify-account-loading">Verifying account...</div>}
          {verifyAccount.isError && <div data-testid="verify-account-error">Error verifying account</div>}

          <Beneficiaries
            showBeneficiaries={showBeneficiaries}
            beneficiaries={beneficiaries}
            onBeneficiaryClick={handleBeneficiaryClick}
          />
        </div>
      </div>
    </SendMoneyBankWrapper>
  );
};

const Bank = ({
  dataTestid,
  bankName,
  bankLogo,
  onClick,
}: {
  bankName: TBank["name"];
  bankLogo: TBank["logo"];
  onClick?: () => void;
  dataTestid?: string;
}) => {
  const bank = {
    name: bankName,
    logo: bankLogo,
  };

  return (
    <ListItem imgSrc={bank.logo || DEFAULT_BANK_LOGO} text={bank.name} dataTestid={dataTestid} onClick={onClick} />
  );
};

export default SendMoneyBank;

const SendMoneyBankWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.lightGray2};

  .banks {
    padding-bottom: 30px;

    &__title {
      padding: 12px;
      font-weight: bold;
    }
  }

  .banner-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .banner {
      width: 90%;
      padding: 12px;
      background: ${COLORS.lightBlue};
      border-radius: 12px;
      color: ${COLORS.blue};
      font-weight: 400;
    }
  }

  .bank-container {
    width: 100%;

    .sendData {
      .user-found {
        display: flex;
        justify-content: space-between;
        padding: 0 20px 20px;

        img {
          width: 20px;
        }
      }
    }

    .current-bank {
      display: flex;
      padding: 12px;

      .bank {
        display: flex;
        margin-top: 10px;
        padding: 5px;
        width: 95%;
        margin: 0 auto;

        img {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          border: 0.3px solid ${COLORS.lightGray};
        }

        p {
          margin: 10px;
        }
      }

      button {
        border: none;
        padding: 12px;
        font-weight: bold;
        color: ${COLORS.pink};
      }
    }
  }
`;
