const Rules = () => {
  return (
    <section className="self-stretch bg-gray-white flex flex-row items-center justify-between py-20 px-[300px] box-border max-w-full gap-[20px] text-left text-21xl text-gray-900 font-body-medium-400 mq1800:flex-wrap mq925:py-[52px] mq925:px-[75px] mq925:box-border mq1350:pl-[150px] mq1350:pr-[150px] mq1350:box-border mq450:py-[34px] mq450:px-5 mq450:box-border">
      <div className="w-[536px] flex flex-col items-start justify-start gap-[24px] min-w-[536px] max-w-full mq1800:flex-1 mq1350:min-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq925:text-13xl mq925:leading-[38px] mq450:text-5xl mq450:leading-[29px]">{`Instructor rules & regulations`}</h1>
        <div className="self-stretch relative text-lg tracking-[-0.01em] leading-[24px] text-gray-600">{`Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem. `}</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base">
          <div className="self-stretch relative leading-[24px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
            </ul>
          </div>
          <div className="self-stretch relative leading-[24px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>Nam leo tortor, tempus et felis non.</li>
            </ul>
          </div>
          <div className="self-stretch relative leading-[24px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>
                Porttitor faucibus erat. Integer eget purus non massa ultricies
                pretium ac sed eros.
              </li>
            </ul>
          </div>
          <div className="self-stretch relative leading-[24px]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li>
                Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet
                turpi.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="h-[648px] w-[648px] relative max-w-full mq1800:flex-1"
        loading="lazy"
        alt=""
        src="/union.svg"
      />
    </section>
  );
};

export default Rules;
