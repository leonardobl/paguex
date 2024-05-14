import React from "react";
import * as S from "./styles";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";

interface InputDateProps extends ReactDatePickerProps {
  label?: string;
  isLoading?: boolean;
}

export const InputDate = (props: InputDateProps) => {
  registerLocale("ptBR", ptBR);

  return (
    <S.Container $showIcon={props.showIcon}>
      {props.label && (
        <S.Label>
          {props.label}
          <S.Required $isRequired={!!props.required}>*</S.Required>
        </S.Label>
      )}
      {props.isLoading && (
        <S.ImgLoad src="/assets/svgs/dots-load.svg" alt="svg load" />
      )}
      <DatePicker
        {...props}
        disabled={props.isLoading ? true : props.disabled}
        placeholderText={props.isLoading ? "" : props.placeholderText}
        // selected={value ? value : props.selected}
        onChange={(e, v) => {
          props.onChange(e, v);
        }}
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <div className="react-datepicker__navigation_wrapper">
            <button
              type="button"
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("pt-BR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              type="button"
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
        dateFormat={"dd/MM/yyyy"}
        locale={"ptBR"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
          >
            <path
              d="M14.4496 3.8552C14.3096 3.8552 14.1896 3.74039 14.1896 3.60647V0.344403C14.1896 0.210477 14.3096 0.0957031 14.4496 0.0957031C14.5896 0.0957031 14.7095 0.210477 14.7095 0.344403V3.60647C14.7095 3.74039 14.5996 3.8552 14.4496 3.8552Z"
              fill="#BBC2D1"
            />
            <path
              d="M14.45 3.95083C14.25 3.95083 14.09 3.79776 14.09 3.60643V0.344368C14.09 0.153045 14.25 0 14.45 0C14.65 0 14.81 0.153045 14.81 0.344368V3.60643C14.81 3.79776 14.65 3.95083 14.45 3.95083ZM14.45 0.191306C14.36 0.191306 14.29 0.258272 14.29 0.344368V3.60643C14.29 3.69253 14.36 3.75949 14.45 3.75949C14.54 3.75949 14.61 3.69253 14.61 3.60643V0.344368C14.62 0.258272 14.54 0.191306 14.45 0.191306Z"
              fill="#BBC2D1"
            />
            <path
              d="M4.84003 3.8552C4.70003 3.8552 4.58008 3.74039 4.58008 3.60647V0.344403C4.58008 0.210477 4.70003 0.0957031 4.84003 0.0957031C4.98003 0.0957031 5.10004 0.210477 5.10004 0.344403V3.60647C5.10004 3.74039 4.99003 3.8552 4.84003 3.8552Z"
              fill="#BBC2D1"
            />
            <path
              d="M4.84045 3.95083C4.64045 3.95083 4.48047 3.79776 4.48047 3.60643V0.344368C4.48047 0.153045 4.64045 0 4.84045 0C5.04045 0 5.2005 0.153045 5.2005 0.344368V3.60643C5.2005 3.79776 5.04045 3.95083 4.84045 3.95083ZM4.84045 0.191306C4.75045 0.191306 4.68048 0.258272 4.68048 0.344368V3.60643C4.68048 3.69253 4.75045 3.75949 4.84045 3.75949C4.93045 3.75949 5.00049 3.69253 5.00049 3.60643V0.344368C5.01049 0.258272 4.93045 0.191306 4.84045 0.191306Z"
              fill="#BBC2D1"
            />
            <path
              d="M19.0691 4.984H0.549072C0.409072 4.984 0.289062 4.8692 0.289062 4.73527C0.289062 4.60135 0.409072 4.48657 0.549072 4.48657H19.0691C19.2091 4.48657 19.3291 4.60135 19.3291 4.73527C19.3291 4.8692 19.2091 4.984 19.0691 4.984Z"
              fill="#BBC2D1"
            />
            <path
              d="M19.0695 5.07963H0.549438C0.349438 5.07963 0.189453 4.92656 0.189453 4.73524C0.189453 4.54391 0.349438 4.39087 0.549438 4.39087H19.0695C19.2695 4.39087 19.4294 4.54391 19.4294 4.73524C19.4294 4.92656 19.2695 5.07963 19.0695 5.07963ZM0.549438 4.57263C0.459438 4.57263 0.389465 4.6396 0.389465 4.72569C0.389465 4.81179 0.459438 4.87875 0.549438 4.87875H19.0695C19.1595 4.87875 19.2294 4.81179 19.2294 4.72569C19.2294 4.6396 19.1595 4.57263 19.0695 4.57263H0.549438Z"
              fill="#BBC2D1"
            />
            <path
              d="M19.0696 18.2715H0.359619C0.219619 18.2715 0.0996094 18.1567 0.0996094 18.0228V2.25773C0.0996094 2.12381 0.219619 2.00903 0.359619 2.00903H19.0696C19.2096 2.00903 19.3297 2.12381 19.3297 2.25773V18.0228C19.3297 18.1567 19.2096 18.2715 19.0696 18.2715ZM0.619629 17.7645H18.7996V2.50646H0.619629V17.7645Z"
              fill="#BBC2D1"
            />
            <path
              d="M19.07 18.3671H0.359985C0.159985 18.3671 0 18.2141 0 18.0227V2.2577C0 2.06637 0.159985 1.91333 0.359985 1.91333H19.07C19.27 1.91333 19.43 2.06637 19.43 2.2577V18.0227C19.43 18.2141 19.27 18.3671 19.07 18.3671ZM0.359985 2.10464C0.269985 2.10464 0.200012 2.1716 0.200012 2.2577V18.0227C0.200012 18.1088 0.269985 18.1758 0.359985 18.1758H19.07C19.16 18.1758 19.23 18.1088 19.23 18.0227V2.2577C19.23 2.1716 19.16 2.10464 19.07 2.10464H0.359985ZM18.81 17.8601H0.630005C0.580005 17.8601 0.529968 17.8219 0.529968 17.7645V2.50643C0.529968 2.4586 0.570005 2.41076 0.630005 2.41076H18.81C18.86 2.41076 18.91 2.44903 18.91 2.50643V17.7645C18.9 17.8219 18.86 17.8601 18.81 17.8601ZM0.719971 17.6784H18.71V2.60209H0.719971V17.6784Z"
              fill="#BBC2D1"
            />
            <rect x="5" y="8" width="2" height="2" fill="#BBC2D1" />
            <rect x="9" y="8" width="2" height="2" fill="#BBC2D1" />
            <rect x="13" y="8" width="2" height="2" fill="#BBC2D1" />
            <rect x="13" y="13" width="2" height="2" fill="#BBC2D1" />
            <rect x="9" y="13" width="2" height="2" fill="#BBC2D1" />
            <rect x="5" y="13" width="2" height="2" fill="#BBC2D1" />
          </svg>
        }
      />
    </S.Container>
  );
};
