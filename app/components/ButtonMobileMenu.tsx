import Link from 'next/link';
export default function ButtonMobileMenu({ planet }: { planet: string; mode: string }) {
  const menu = '/menu';
  return (
    <Link className={`${!planet ? 'pointer-events-none' : ''} md:hidden`} href={menu}>
      <button
        title="Menu"
        type="button"
        className={`relative flex h-[17px] w-[24px] items-center justify-center ${planet ? 'fill-white' : 'fill-[#979797]'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="inherit" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </button>
    </Link>
  );
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg> */
}
