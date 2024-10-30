interface HomeIconProps {
  fill?: string;
}

export const HomeIcon: React.FC<HomeIconProps> = ({fill = '#B2B2B2'}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
      <path
        d="M15.1667 11V4H24.5V11H15.1667ZM3.5 15.6667V4H12.8333V15.6667H3.5ZM15.1667 25V13.3333H24.5V25H15.1667ZM3.5 25V18H12.8333V25H3.5ZM5.83333 13.3333H10.5V6.33333H5.83333V13.3333ZM17.5 22.6667H22.1667V15.6667H17.5V22.6667ZM17.5 8.66667H22.1667V6.33333H17.5V8.66667ZM5.83333 22.6667H10.5V20.3333H5.83333V22.6667Z"
        fill={fill}/>
    </svg>
  );
};