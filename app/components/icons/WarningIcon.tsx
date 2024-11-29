import React from "react";

interface WarningIconProps {
  className?: string;
}

const WarningIcon = ({ className }: WarningIconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 0.875C8.99747 0.875 7.0399 1.46882 5.37486 2.58137C3.70981 3.69392 2.41206 5.27523 1.64572 7.12533C0.879387 8.97543 0.678878 11.0112 1.06955 12.9753C1.46023 14.9393 2.42454 16.7435 3.84055 18.1595C5.25656 19.5755 7.06066 20.5398 9.02471 20.9305C10.9888 21.3211 13.0246 21.1206 14.8747 20.3543C16.7248 19.5879 18.3061 18.2902 19.4186 16.6251C20.5312 14.9601 21.125 13.0025 21.125 11C21.122 8.3156 20.0543 5.74199 18.1562 3.84383C16.258 1.94567 13.6844 0.877978 11 0.875ZM11 18.875C9.44248 18.875 7.91993 18.4131 6.62489 17.5478C5.32985 16.6825 4.32049 15.4526 3.72445 14.0136C3.12841 12.5747 2.97246 10.9913 3.27632 9.46366C3.58018 7.93606 4.3302 6.53287 5.43154 5.43153C6.53288 4.3302 7.93607 3.58017 9.46367 3.27632C10.9913 2.97246 12.5747 3.12841 14.0136 3.72445C15.4526 4.32049 16.6825 5.32985 17.5478 6.62488C18.4131 7.91992 18.875 9.44247 18.875 11C18.8728 13.0879 18.0424 15.0896 16.566 16.566C15.0896 18.0424 13.0879 18.8728 11 18.875ZM9.875 11.375V6.5C9.875 6.20163 9.99353 5.91548 10.2045 5.7045C10.4155 5.49353 10.7016 5.375 11 5.375C11.2984 5.375 11.5845 5.49353 11.7955 5.7045C12.0065 5.91548 12.125 6.20163 12.125 6.5V11.375C12.125 11.6734 12.0065 11.9595 11.7955 12.1705C11.5845 12.3815 11.2984 12.5 11 12.5C10.7016 12.5 10.4155 12.3815 10.2045 12.1705C9.99353 11.9595 9.875 11.6734 9.875 11.375ZM12.5 15.125C12.5 15.4217 12.412 15.7117 12.2472 15.9584C12.0824 16.205 11.8481 16.3973 11.574 16.5108C11.2999 16.6244 10.9983 16.6541 10.7074 16.5962C10.4164 16.5383 10.1491 16.3954 9.93934 16.1857C9.72957 15.9759 9.5867 15.7086 9.52883 15.4176C9.47095 15.1267 9.50065 14.8251 9.61419 14.551C9.72772 14.2769 9.91998 14.0426 10.1666 13.8778C10.4133 13.713 10.7033 13.625 11 13.625C11.3978 13.625 11.7794 13.783 12.0607 14.0643C12.342 14.3456 12.5 14.7272 12.5 15.125Z"
        fill="#ED1010"
      />
    </svg>
  );
};

export default WarningIcon;
