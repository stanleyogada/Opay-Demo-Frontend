import styled from "styled-components";
import { COLORS } from "../../constants";

const SigninWrapper = styled.div`
  .page-title {
    padding: 27px 46px 81px;
    font-size: 15px;
    font-weight: 400;
  }

  main.content {
    .sub-title {
      padding-bottom: 27px;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
    }

    .form {
      padding: 0 13px;

      &__input {
        &-wrapper {
          display: flex;
          flex-direction: column;
          gap: 27px;
          padding-bottom: 87px;
        }

        border: none;
        border-radius: 9px;
        background: ${COLORS.gray};
        padding: 11px;
        font-size: 15px;
      }

      &__actions {
        &-top {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          padding-bottom: 32px;

          .form__checkbox {
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .form__link {
            color: ${COLORS.blue};
            text-decoration: none;
          }
        }

        &-bottom {
          background: ${COLORS.blue};
          color: ${COLORS.white};
          padding: 16px;
          border-radius: 9px;
          width: 100%;

          font-size: 15px;
          font-weight: 700;

          * {
            margin: 0;
          }
        }
      }
    }
  }
`;

export default SigninWrapper;
