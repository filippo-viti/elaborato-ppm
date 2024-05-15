import styled from "styled-components";

const LiveButtonWrapper = styled.div`
  padding: 0 0 0 0.9rem;
  display: flex;
  font-size: 10px;
  font-weight: bold;
  line-height: 20px;
  text-transform: uppercase;
  align-items: center;
`;
const LiveButtonBadge = styled.svg`
  width: 20px;
  margin-right: 0.2rem;
`;
const A = styled.a`
  color: #d61116;

  &:hover {
    text-decoration: underline;
  }
`;

export function LiveButton() {
  return (
    <A href={"#"}>
      <LiveButtonWrapper>
        <LiveButtonBadge
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <g clipPath="url(#clip0_832_5029)">
            <path
              opacity="0.9"
              d="M10 -0.00244141C4.477 -0.00244141 0 4.47506 0 9.99756C0 15.5201 4.477 19.9976 10 19.9976C15.523 19.9976 20 15.5206 20 9.99756C20 4.47456 15.523 -0.00244141 10 -0.00244141ZM10 17.5081C5.852 17.5081 2.4895 14.1456 2.4895 9.99756C2.4895 5.84956 5.852 2.48706 10 2.48706C14.148 2.48706 17.5105 5.84956 17.5105 9.99756C17.5105 14.1456 14.148 17.5081 10 17.5081Z"
              fill="#D61116"
            ></path>
            <path
              opacity="0.5"
              d="M10 2.48706C5.852 2.48706 2.4895 5.84956 2.4895 9.99756C2.4895 14.1456 5.852 17.5081 10 17.5081C14.148 17.5081 17.5105 14.1456 17.5105 9.99756C17.5105 5.84956 14.148 2.48706 10 2.48706ZM10 14.7611C7.369 14.7611 5.2365 12.6286 5.2365 9.99756C5.2365 7.36656 7.369 5.23406 10 5.23406C12.631 5.23406 14.7635 7.36656 14.7635 9.99756C14.7635 12.6286 12.631 14.7611 10 14.7611Z"
              fill="#D61116"
            ></path>
            <path
              opacity="0.25"
              d="M10 14.7611C12.6308 14.7611 14.7635 12.6284 14.7635 9.99763C14.7635 7.36682 12.6308 5.23413 10 5.23413C7.3692 5.23413 5.23651 7.36682 5.23651 9.99763C5.23651 12.6284 7.3692 14.7611 10 14.7611Z"
              fill="#D61116"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_832_5029">
              <rect width="20" height="20" fill="white"></rect>
            </clipPath>
          </defs>
        </LiveButtonBadge>
        <span>Live</span>
      </LiveButtonWrapper>
    </A>
  );
}
