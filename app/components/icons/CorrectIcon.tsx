import React from "react";

interface CorrectIconProps {
className?: string
}

const CorrectIcon = ({className}: CorrectIconProps) => {
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
        d="M15.5459 7.95406C15.6508 8.05858 15.734 8.18277 15.7908 8.31952C15.8476 8.45626 15.8768 8.60287 15.8768 8.75094C15.8768 8.899 15.8476 9.04561 15.7908 9.18236C15.734 9.3191 15.6508 9.4433 15.5459 9.54781L10.2959 14.7978C10.1914 14.9027 10.0672 14.9859 9.93049 15.0427C9.79374 15.0995 9.64713 15.1287 9.49907 15.1287C9.351 15.1287 9.20439 15.0995 9.06765 15.0427C8.9309 14.9859 8.80671 14.9027 8.70219 14.7978L6.45219 12.5478C6.34754 12.4432 6.26453 12.3189 6.2079 12.1822C6.15127 12.0455 6.12212 11.8989 6.12212 11.7509C6.12212 11.6029 6.15127 11.4564 6.2079 11.3197C6.26453 11.1829 6.34754 11.0587 6.45219 10.9541C6.55684 10.8494 6.68107 10.7664 6.8178 10.7098C6.95453 10.6531 7.10107 10.624 7.24907 10.624C7.39706 10.624 7.5436 10.6531 7.68033 10.7098C7.81706 10.7664 7.94129 10.8494 8.04594 10.9541L9.5 12.4062L13.9541 7.95125C14.0587 7.84684 14.183 7.76408 14.3196 7.7077C14.4563 7.65133 14.6027 7.62245 14.7506 7.62271C14.8984 7.62297 15.0448 7.65237 15.1812 7.70922C15.3177 7.76608 15.4416 7.84928 15.5459 7.95406ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11Z"
        fill="#0C9409"
      />
    </svg>
  );
};

export default CorrectIcon;
