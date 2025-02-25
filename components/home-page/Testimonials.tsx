import avatar from '@/assets/media/person-3.png';
const HomepageTestimonials = ({ data }: { data: any }) => {
  return (
    <section className="pb-10 lg:pb-14">
      <div className="relative container">
        <div className="relative z-10 mb-8 md:flex md:items-start md:justify-between md:gap-16 lg:gap-20 lg:mb-10">
          <div className="flex items-center mb-[14px] md:mt-4">
            <div className="w-1.5 h-1.5 bg-appText rounded-full mr-2 lg:w-2.5 lg:h-2.5 lg:mr-4 lg:mt-1" />
            <h2 className="text-lg leading-none tracking-[-0.41px] font-Helvetica lg:text-[32px] text-alphaYellowlg:leading-none">
              {data.title}
            </h2>
          </div>
          <div className="md:max-w-[761px]">
            <p className="homeTestimonials--description text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 pb-6 border-b border-appGray-100 mb-6 lg:text-base lg:leading-[1.4] lg:pb-8 lg:mb-8">
              {data.description}
            </p>
            <div className="grid grid-cols-1 gap-6 lg:gap-8">
              {data.items &&
                data.items.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="pb-6 border-b border-appGray-100 lg:pb-8"
                  >
                    <div className="flex items-center mb-[14px] lg:mb-6">
                      <img
                        src={avatar as any}
                        width={100}
                        height={100}
                        className="w-8 h-8 rounded-full overflow-hidden cover mr-2.5 lg:w-12 lg:h-12 lg:mr-4"
                      />
                      <div className="text-sm leading-none tracking-[-0.41px] font-Helvetica lg:text-lg lg:leading-none">
                        {item.author.executiveRole} At {item.author.companyName}
                      </div>
                    </div>
                    <p className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-400 lg:text-[15px] lg:leading-[1.4]">
                      {item.testimony}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="absolute top-[50%] -left-[10%] w-[296px] h-[296px] rounded-full opacity-20 blur-[120px] bg-blend-overlay bg-[#FFBF4B] pointer-events-none max-md:hidden" />
        <div className="absolute top-[30%] left-0 w-[296px] h-[296px] rounded-full opacity-20 blur-[120px] bg-blend-overlay bg-[#3A437E] pointer-events-none max-md:hidden" />
      </div>
    </section>
  );
};

export default HomepageTestimonials;
